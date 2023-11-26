import { SuppliesForecastData } from "@/utils/api/types/supplies";

interface TotalPointsTableProps {
  data: SuppliesForecastData[];
}

const TotalPointsTable: React.FC<TotalPointsTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table cellPadding={12} className="w-full">
        <thead>
          <tr className="h4_text border-b border-b-text_black">
            <th className="text-start" colSpan={2}>
              Actual
            </th>
            <th className="text-start">Actual Value</th>
            <th className="text-start">Forecast</th>
            <th className="text-start">Variance</th>
            <th className="text-start">Variance</th>
            <th className="text-start">Variance</th>
            <th className="text-start">Variance</th>
          </tr>
        </thead>
        <tbody className="py-5">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="p_text text-text_gray border-b border-b-text_gray"
            >
              <td colSpan={2}>{row.name}</td>
              <td>{row.actual_value}</td>
              <td>{row.forecasted_value}</td>
              <td>{row.q1_variance}</td>
              <td>{row.q2_variance}</td>
              <td>{row.q3_variance}</td>
              <td>{row.q4_variance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TotalPointsTable;
