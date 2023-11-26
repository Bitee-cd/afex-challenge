import React from "react";
import { useQuery } from "react-query";
import useTranslation from "next-translate/useTranslation";
import { useTable, Column } from "react-table";

import { SuppliesForecastData } from "@/utils/api/types/supplies";
import CoinIcon from "@/components/icon/CoinIcon";
import IconHeading from "@/components/icon-heading/icon-heading";
import CardWrapper from "@/components/card-wrapper/card-wrapper";
import useQuerySuppliesEndpoints from "@/utils/api/endpoints/querysupplies";

interface TotalPointsTableProps {
  data: SuppliesForecastData[];
}

const TotalPointsTable: React.FC<TotalPointsTableProps> = ({ data }) => {
  const { t } = useTranslation("home");

  const columns: Column<SuppliesForecastData>[] = React.useMemo(
    () => [
      { Header: t("actual"), accessor: "name" },
      { Header: t("actual_value"), accessor: "actual_value" },
      { Header: t("forecast"), accessor: "forecasted_value" },
      { Header: t("variance"), accessor: "q1_variance" },
      { Header: t("variance"), accessor: "q2_variance" },
      { Header: t("variance"), accessor: "q3_variance" },
      { Header: t("variance"), accessor: "q4_variance" },
    ],
    [t]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} cellPadding={12} className="w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="h4_text border-b border-b-text_black"
            >
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="text-start">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="py-5">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                key={row.id}
                className="p_text text-text_gray border-b border-b-text_gray"
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} data-cell={cell.column.Header}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TotalPointsTable;
