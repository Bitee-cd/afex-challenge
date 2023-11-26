import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ApexOptions } from "apexcharts";
import { colors } from "@/utils/colors";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const areaChartOptions: ApexOptions = {
  chart: {
    height: 450,
    type: "area",
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

export interface ChartSeries {
  name: string;
  data: number[];
}

export interface AreaChartProps {
  series: ChartSeries[];
  categories: string[];
  formatter: (value: number) => string;
}

const AreaChart = ({ series, categories, formatter }: AreaChartProps) => {
  const [options, setOptions] = useState(areaChartOptions);
  const { theme } = useTheme();

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [colors.ter, colors.sec],
      xaxis: {
        categories: categories,
        labels: {
          style: {
            colors: colors.sec,
          },
        },
        axisBorder: {
          show: true,
          color: colors.border,
        },
        tickAmount: 11,
      },
      yaxis: {
        labels: {
          formatter,
          style: {
            colors: [theme === "dark" ? colors.sec : colors.icon_light],
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

  return (
    <div className="w-full">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={450}
      />
    </div>
  );
};

export default AreaChart;
