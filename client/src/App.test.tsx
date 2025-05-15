import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// Mock the child components
jest.mock("./components/question", () => {
  return function MockQuestion() {
    return <div data-testid="question-component">Question Component</div>;
  };
});

jest.mock("./components/answer", () => {
  return function MockAnswer({ handleScore }: { handleScore: (isCorrect: boolean) => void }) {
    return (
      <div data-testid="answer-component">
        <button onClick={() => handleScore(true)}>Submit Correct</button>
        <button onClick={() => handleScore(false)}>Submit Wrong</button>
      </div>
    );
  };
});

jest.mock("./components/score", () => {
  return function MockScore({ correct, total }: { correct: number; total: number }) {
    return (
      <div data-testid="score-component">
        Score: {correct}/{total}
      </div>
    );
  };
});

describe("App Component", () => {
  it("renders header text", () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Capital Quiz!/i)).toBeInTheDocument();
  });

  it("initially renders without Score component", () => {
    render(<App />);
    expect(screen.getByTestId("question-component")).toBeInTheDocument();
    expect(screen.getByTestId("answer-component")).toBeInTheDocument();
    expect(screen.queryByTestId("score-component")).not.toBeInTheDocument();
  });

  it("renders Score component only after answering a question", () => {
    render(<App />);
    // Submit an answer
    fireEvent.click(screen.getByText("Submit Correct"));
    
    // Now score component should be present
    expect(screen.getByTestId("score-component")).toBeInTheDocument();
  });
});
