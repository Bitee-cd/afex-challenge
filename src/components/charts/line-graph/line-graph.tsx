import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ApexOptions } from "apexcharts";
import { colors } from "@/utils/colors";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
// chart options
const areaChartOptions: ApexOptions = {
  chart: {
    height: 450,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  grid: {
    strokeDashArray: 0,
  },
};

// ==============================|| INCOME AREA CHART ||============================== //

const IncomeAreaChart: React.FC = () => {
  const [options, setOptions] = useState(areaChartOptions);
  const { theme } = useTheme();

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [colors.ter, colors.sec],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            colors: [
              colors.sec,
              colors.sec,
              colors.sec,
              colors.sec,
              colors.sec,
              colors.sec,
              colors.sec,
              colors.sec,
              colors.sec,
              colors.sec,
              colors.sec,
              colors.sec,
            ],
          },
        },
        axisBorder: {
          show: true,
          color: colors.border,
        },
        tickAmount: 3,
      },
      yaxis: {
        labels: {
          style: {
            colors: [colors.icon_dark],
          },
        },
      },
      grid: {
        strokeDashArray: 0,
        borderColor: colors.border,
      },
      tooltip: {
        theme: theme === "dark" ? "dark" : "light",
      },
    }));
  }, [theme]);

  const [series, setSeries] = useState([
    {
      name: "Salary",
      data: [32, 86, 28, 115, 48, 210, 136],
    },
    {
      name: "Cash Bond",
      data: [48, 43, 14, 56, 24, 105, 68],
    },
  ]);

  return (
    <div className="w-full">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={450}
      />
    </div>
  );
};

export default IncomeAreaChart;
