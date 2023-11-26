import { SuppliesForecastData } from "@/utils/api/types/supplies";
import useTranslation from "next-translate/useTranslation";

interface TotalPointsTableProps {
  data: SuppliesForecastData[];
}

const TotalPointsTable: React.FC<TotalPointsTableProps> = ({ data }) => {
  const { t } = useTranslation("home");
  return (
    <div className="overflow-x-auto">
      <table cellPadding={12} className="w-full">
        <thead>
          <tr className="h4_text border-b border-b-text_black">
            <th className="text-start" colSpan={2}>
              {t("actual")}
            </th>
            <th className="text-start">{t("actual_value")}</th>
            <th className="text-start">{t("forecast")}</th>
            <th className="text-start">{t("variance")}</th>
            <th className="text-start">{t("variance")}</th>
            <th className="text-start">{t("variance")}</th>
            <th className="text-start">{t("variance")}</th>
          </tr>
        </thead>
        <tbody className="py-5">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="p_text text-text_gray border-b border-b-text_gray"
            >
              <td data-cell={t("actual")} colSpan={2}>
                {row.name}
              </td>
              <td data-cell={t("actual_value")}>{row.actual_value}</td>
              <td data-cell={t("forecast")}>{row.forecasted_value}</td>
              <td data-cell={t("variance")}>{row.q1_variance}</td>
              <td data-cell={t("variance")}>{row.q2_variance}</td>
              <td data-cell={t("variance")}>{row.q3_variance}</td>
              <td data-cell={t("variance")}>{row.q4_variance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TotalPointsTable;
