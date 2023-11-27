import useStringFormatter from "@/utils/strings-formatter";

describe("useStringFormatter", () => {
  const {
    convertSnakeCaseToTitleCase,
    formatChartLabelNumber,
    formatDateString,
  } = useStringFormatter();

  it("should convert snake_case to title case", () => {
    const result = convertSnakeCaseToTitleCase("sample_snake_case");

    expect(result).toEqual("Sample Snake Case");
  });

  it("should format chart label number", () => {
    const result1 = formatChartLabelNumber(1500000);
    const result2 = formatChartLabelNumber(500);

    expect(result1).toEqual("2M");
    expect(result2).toEqual("500");
  });

  it("should format date string", () => {
    const result = formatDateString("2023-11-01T14:30:00");

    expect(result).toEqual("November 1, 2023 at 14:30");
  });
});
