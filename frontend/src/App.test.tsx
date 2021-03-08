import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders", () => {
  render(<App />);
  const titleElement = screen.getByText(/GoodGym Developer Exercise/i);
  expect(titleElement).toBeInTheDocument();
});
