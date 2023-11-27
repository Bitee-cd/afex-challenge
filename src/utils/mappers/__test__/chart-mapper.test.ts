import { PayoutLogsData } from "@/utils/api/types/transactions";
import useChartMappers from "@/utils/mappers/chart-mappers";
import { render } from "@testing-library/react";

describe("useChartMappers", () => {
  const mockData: PayoutLogsData[] = [
    {
      date: "2023-11-01",
      salary_paid: 5000,
      cash_bond_bought: 1000,
    },
    {
      date: "2023-11-02",
      salary_paid: 5500,
      cash_bond_bought: 1200,
    },
  ];

  it("should map data to categories with transformed dates", () => {
    const { mapDataToCategories } = useChartMappers();
    const result = mapDataToCategories(mockData);

    expect(result).toEqual(["Nov 1", "Nov 2"]);
  });

  it("should map data to series with correct structure", () => {
    const { mapDataToSeries } = useChartMappers();
    const result = mapDataToSeries(mockData);

    expect(result).toEqual([
      {
        name: "Salary",
        data: [5000, 5500],
      },
      {
        name: "Cash Bond",
        data: [1000, 1200],
      },
    ]);
  });
});
