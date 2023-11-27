import { PayoutLogsData } from "../api/types/transactions";

const transformDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};
const useChartMappers = () => {
  const mapDataToCategories = (data: PayoutLogsData[]): string[] => {
    return data.map((item) => transformDate(item.date));
  };

  const mapDataToSeries = (data: PayoutLogsData[]) => {
    const series = [
      {
        name: "Salary",
        data: data.map((item) => item.salary_paid),
      },
      {
        name: "Cash Bond",
        data: data.map((item) => item.cash_bond_bought),
      },
    ];

    return series;
  };
  return { mapDataToCategories, mapDataToSeries };
};
export default useChartMappers;
