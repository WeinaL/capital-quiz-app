import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome message", () => {
  render(<App />);
  const headerElement = screen.getByText(/Welcome to Capital Quiz!/i);
  expect(headerElement).toBeInTheDocument();
});
