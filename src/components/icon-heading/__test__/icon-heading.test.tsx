import React from "react";
import { render, screen } from "@testing-library/react";
import IconHeading from "@/components/icon-heading/icon-heading";

describe("IconHeading", () => {
  it("renders text and icon correctly", () => {
    const text = "Test Heading";
    const icon = <span data-testid="test-icon">Icon</span>;

    render(<IconHeading text={text} icon={icon} />);

    // Check if text is rendered
    expect(screen.getByText(text)).toBeInTheDocument();

    // Check if icon is rendered
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("renders only text when no icon is provided", () => {
    const text = "Test Heading";

    render(<IconHeading text={text} />);

    // Check if text is rendered
    expect(screen.getByText(text)).toBeInTheDocument();

    // Check if no icon is rendered
    expect(screen.queryByTestId("test-icon")).toBeNull();
  });
});
