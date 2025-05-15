import { render, screen, fireEvent } from "@testing-library/react";
import Question from "./question";
import { QuestionContext } from "../QuestionContext";

describe("Question Component", () => {
  const mockFetchNewQuestion = jest.fn();
  const mockContextValue = {
    question: { id: 1, country: "France", capital: "Paris" },
    loading: false,
    error: null,
    fetchNewQuestion: mockFetchNewQuestion,
  };

  it("renders country name", () => {
    render(
      <QuestionContext.Provider value={mockContextValue}>
        <Question />
      </QuestionContext.Provider>
    );
    expect(screen.getByText("France")).toBeInTheDocument();
  });

  it("shows loading state", () => {
    render(
      <QuestionContext.Provider value={{ ...mockContextValue, loading: true }}>
        <Question />
      </QuestionContext.Provider>
    );
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("shows error message", () => {
    render(
      <QuestionContext.Provider
        value={{
          ...mockContextValue,
          error: new Error("Test error"),
        }}
      >
        <Question />
      </QuestionContext.Provider>
    );
    expect(screen.getByText(/Getting question failed!/i)).toBeInTheDocument();
  });

  it("calls fetchNewQuestion when next button is clicked", () => {
    render(
      <QuestionContext.Provider value={mockContextValue}>
        <Question />
      </QuestionContext.Provider>
    );
    const nextButton = screen.getByTestId("next-question-button");
    fireEvent.click(nextButton);
    expect(mockFetchNewQuestion).toHaveBeenCalledTimes(1);
  });
});
