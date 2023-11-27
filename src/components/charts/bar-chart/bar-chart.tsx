import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ApexOptions } from "apexcharts";
import { colors } from "@/utils/colors";
import dynamic from "next/dynamic";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// chart options
const areaChartOptions: ApexOptions = {
  chart: {
    height: 100,
    type: "bar",
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
    show: false,
    strokeDashArray: 0,
  },
  legend: {
    show: false,
  },
};
export interface ChartSeries {
  name: string;
  data: number[];
}

interface BarChartDataProps {
  series?: ChartSeries[];
  categories?: string[];
  title: string;
}

const BarDataChart = ({ series, categories, title }: BarChartDataProps) => {
  const [options, setOptions] = useState(areaChartOptions);
  const { theme } = useTheme();

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [
        colors.sec,
        colors.pri,
        colors.ter,
        colors.sec,
        colors.pri,
        colors.ter,
        colors.sec,
        colors.pri,
        colors.ter,
        colors.sec,
        colors.pri,
        colors.ter,
      ],
      xaxis: {
        categories: categories,
        labels: {
          show: false,
          style: {
            colors: [
              colors.sec,
              colors.pri,
              colors.ter,
              colors.sec,
              colors.pri,
              colors.ter,
              colors.sec,
              colors.pri,
              colors.ter,
              colors.sec,
              colors.pri,
              colors.ter,
            ],
          },
        },
        axisBorder: {
          show: false,
          color: colors.border,
        },
        tickAmount: 3,
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: [colors.icon_dark],
          },
        },
      },
      grid: {
        show: false,
        strokeDashArray: 0,
        borderColor: colors.border,
      },
      tooltip: {
        theme: theme === "dark" ? "dark" : "light",
      },
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 6,
        },
      },
    }));
  }, [theme]);

  return (
    <>
      {series && categories && (
        <div className="w-full border-b border-b-border_gray">
          <p className="p_text font-medium text-black/40 dark:text-border_gray">
            {title}
          </p>

          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={100}
          />
        </div>
      )}
      {!series && !categories && (
        <div className="items-center flex justify-between my-3">
          <p className="p_text font-medium text-black/40 dark:text-border_gray">
            {title}
          </p>
          <KeyboardArrowDownIcon color={"inherit"} />
        </div>
      )}
    </>
  );
};

export default BarDataChart;
