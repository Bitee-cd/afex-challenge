import CardWrapper from "@/components/card-wrapper/card-wrapper";
import BarDataChart from "@/components/charts/bar-chart/bar-chart";
import IconHeading from "@/components/icon-heading/icon-heading";
import CoinIcon from "@/components/icon/CoinIcon";
import useTranslation from "next-translate/useTranslation";
import React from "react";

function ActivityCharts() {
  const { t } = useTranslation("home");
  const series_weekly = [
    {
      name: "Salary",
      data: [52, 86, 68, 115, 78, 110, 136],
    },
  ];
  const series_monthly = [
    {
      name: "Salary",
      data: [52, 86, 68, 115, 78, 110, 136, 52, 86, 68, 115, 78],
    },
  ];
  function generateArray(number: number) {
    const newArray = Array.from(
      { length: number },
      (_, index) => `{index + 1}`
    );
    return newArray;
  }

  return (
    <CardWrapper className="p-5">
      <IconHeading text={t("activity_charts")} icon={<CoinIcon />} />
      <BarDataChart
        series={series_weekly}
        categories={generateArray(7)}
        title="Per week"
      />
      <BarDataChart
        series={series_monthly}
        categories={generateArray(11)}
        title="Per month"
      />
      <BarDataChart title="View Per Quartely" />
      <BarDataChart title="View Per Yearly" />
    </CardWrapper>
  );
}

export default ActivityCharts;
