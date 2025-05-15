import { render, screen, fireEvent } from "@testing-library/react";
import Answer from "./answer";
import { QuestionContext } from "../QuestionContext";

describe("Answer Component", () => {
  const mockHandleScore = jest.fn();
  const mockContextValue = {
    question: { id: 1, country: "France", capital: "Paris" },
    loading: false,
    error: null,
    fetchNewQuestion: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders input field and submit button", () => {
    render(
      <QuestionContext.Provider value={mockContextValue}>
        <Answer handleScore={mockHandleScore} />
      </QuestionContext.Provider>
    );
    expect(screen.getByPlaceholderText("Enter capital")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("handles correct answer submission", () => {
    render(
      <QuestionContext.Provider value={mockContextValue}>
        <Answer handleScore={mockHandleScore} />
      </QuestionContext.Provider>
    );

    const input = screen.getByPlaceholderText("Enter capital");
    fireEvent.change(input, { target: { value: "Paris" } });
    fireEvent.submit(screen.getByRole("button"));

    expect(screen.getByText("Correct!")).toBeInTheDocument();
    expect(mockHandleScore).toHaveBeenCalledWith(true);
  });

  it("handles incorrect answer submission", () => {
    render(
      <QuestionContext.Provider value={mockContextValue}>
        <Answer handleScore={mockHandleScore} />
      </QuestionContext.Provider>
    );

    const input = screen.getByPlaceholderText("Enter capital");
    fireEvent.change(input, { target: { value: "London" } });
    fireEvent.submit(screen.getByRole("button"));

    expect(screen.getByText("Incorrect")).toBeInTheDocument();
    expect(screen.getByText("The capital is: Paris")).toBeInTheDocument();
    expect(mockHandleScore).toHaveBeenCalledWith(false);
  });

  it("handles case-insensitive answer checking", () => {
    render(
      <QuestionContext.Provider value={mockContextValue}>
        <Answer handleScore={mockHandleScore} />
      </QuestionContext.Provider>
    );

    const input = screen.getByPlaceholderText("Enter capital");
    fireEvent.change(input, { target: { value: "paris" } });
    fireEvent.submit(screen.getByRole("button"));

    expect(screen.getByText("Correct!")).toBeInTheDocument();
    expect(mockHandleScore).toHaveBeenCalledWith(true);
  });

  it("disables input and button after submission", () => {
    render(
      <QuestionContext.Provider value={mockContextValue}>
        <Answer handleScore={mockHandleScore} />
      </QuestionContext.Provider>
    );

    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(inputElement).toHaveValue("new value");

    fireEvent.submit(screen.getByRole("button"));

    expect(screen.getByPlaceholderText("Enter capital")).toBeDisabled();
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
