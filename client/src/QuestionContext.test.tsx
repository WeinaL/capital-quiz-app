import { renderHook, act } from "@testing-library/react";
import { QuestionContext, QuestionProvider } from "./QuestionContext";
import { useContext } from "react";

// Mock fetch
global.fetch = jest.fn();

describe("QuestionContext", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({ id: 1, country: "France", capital: "Paris" }),
      })
    );
  });

  it("provides initial state", () => {
    const { result } = renderHook(() => useContext(QuestionContext), {
      wrapper: QuestionProvider,
    });

    expect(result.current).toMatchObject({
      question: null,
      loading: true,
      error: null,
      fetchNewQuestion: expect.any(Function),
    });
  });

  it("calls fetch on mount", async () => {
    await act(async () => {
      renderHook(() => useContext(QuestionContext), {
        wrapper: QuestionProvider,
      });
      // Wait for all state updates
      await Promise.resolve();
    });

    expect(global.fetch).toHaveBeenCalledTimes(3);

    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";
    expect(global.fetch).toHaveBeenCalledWith(`${API_URL}/getQuestion`, {
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  });

  it("updates state correctly after fetch", async () => {
    let result: any;

    await act(async () => {
      const rendered = renderHook(() => useContext(QuestionContext), {
        wrapper: QuestionProvider,
      });
      result = rendered.result;
      // Wait for all state updates
      await Promise.resolve();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.question).toEqual({
      id: 1,
      country: "France",
      capital: "Paris",
    });
    expect(result.current.error).toBe(null);
  });

  it("handles fetch error", async () => {
    const error = new Error("API Error");
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(error)
    );

    const { result } = renderHook(() => useContext(QuestionContext), {
      wrapper: QuestionProvider,
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current?.loading).toBe(false);
    expect(result.current?.error).toBe(error);
  });
  it("can fetch new question", async () => {
    const { result } = renderHook(() => useContext(QuestionContext), {
      wrapper: QuestionProvider,
    });

    // Wait for initial fetch
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    // Trigger new question fetch
    await act(async () => {
      result.current?.fetchNewQuestion();
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    expect(result.current?.loading).toBe(false);
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });
});
