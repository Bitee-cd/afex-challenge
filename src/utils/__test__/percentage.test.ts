import { calculatePercentageChange, formatNumber } from "@/utils/percentage";
import { render } from "@testing-library/react";

describe("calculatePercentageChange", () => {
  it("should correctly calculate credit percentage change", () => {
    const stats = {
      name: "Test User",
      current: 2000,
      last_month: 1000,
    };

    const result = calculatePercentageChange(stats);

    expect(result.name).toEqual("Test User");
    expect(result.percentage).toEqual(100);
    expect(result.changeType).toEqual("credit");
  });

  it("should correctly calculate debit percentage change", () => {
    const stats = {
      name: "Test User",
      current: 800,
      last_month: 1000,
    };

    const result = calculatePercentageChange(stats);

    expect(result.name).toEqual("Test User");
    expect(result.percentage).toEqual(-20);
    expect(result.changeType).toEqual("debit");
  });
});

describe("formatNumber", () => {
  it("should format large positive numbers in millions", () => {
    const formattedNumber = formatNumber(1500000);
    expect(formattedNumber).toEqual("1.5 M");
  });

  it("should format large negative numbers in millions", () => {
    const formattedNumber = formatNumber(-2500000);
    expect(formattedNumber).toEqual("-2.5 M");
  });

  it("should format large positive numbers in thousands", () => {
    const formattedNumber = formatNumber(7500);
    expect(formattedNumber).toEqual("7 K");
  });

  it("should leave small numbers unchanged", () => {
    const formattedNumber = formatNumber(42);
    expect(formattedNumber).toEqual("42");
  });
});
