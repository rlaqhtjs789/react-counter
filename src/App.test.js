import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("the counter starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

test("when the + button is clicked, the counter increments", async () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  await userEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("on/off button has blue color", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("Prevent the -,+ button from being pressed when the on/off button is clicked", async () => {
  render(<App />);
  const onOffButton = screen.getByTestId("on/off-button");
  await userEvent.click(onOffButton);

  const plusButton = screen.getByTestId("plus-button");
  const minusButton = screen.getByTestId("minus-button");
  expect(plusButton).toBeDisabled();
  expect(minusButton).toBeDisabled();
});