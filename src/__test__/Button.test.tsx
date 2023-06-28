import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "../Component/Button";

describe("Button component", () => {
  test("renders button correctly with provided props", () => {
    const onClickMock = jest.fn();
    const buttonText = "Click Me";
    render(
      <Button onClick={onClickMock} color disabled className="custom-class">
        {buttonText}
      </Button>
    );

    const button = screen.getByText(buttonText);

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("rounded-3xl");
    expect(button).toHaveClass("px-7");
    expect(button).toHaveClass("py-3");
    expect(button).toHaveClass("bg-primary");
    expect(button).toHaveClass("text-white");
    expect(button).toHaveClass("custom-class");
    expect(button).toBeDisabled();

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  test("renders button correctly without optional props", () => {
    const buttonText = "Click Me";
    render(<Button>{buttonText}</Button>);

    const button = screen.getByText(buttonText);

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("rounded-3xl");
    expect(button).toHaveClass("px-7");
    expect(button).toHaveClass("py-3");
    expect(button).toHaveClass("bg-white");
    expect(button).toHaveClass("border");
    expect(button).toHaveClass("border-primary");
    expect(button).toHaveClass("text-primary");
    expect(button).not.toBeDisabled();
  });
});
