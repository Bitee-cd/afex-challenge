import React from "react";
import { render, screen } from "@testing-library/react";
import CardWrapper from "@/components/card-wrapper/card-wrapper";

describe("CardWrapper", () => {
  it("renders children correctly", () => {
    const { container } = render(
      <CardWrapper>
        <div>Test Child</div>
      </CardWrapper>
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("applies custom className correctly", () => {
    const { container } = render(
      <CardWrapper className="custom-class">
        <div>Test Child</div>
      </CardWrapper>
    );

    expect(container.getElementsByClassName("custom-class").length).toBe(1);
  });
});
