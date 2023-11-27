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
  legend: {
    show: true,
    position: "top", // Change legend position (options: top, right, bottom, left)
    horizontalAlign: "left", // Change horizontal alignment (options: left, center, right)
    floating: false, // Make the legend floating
    offsetY: 10, // Adjust the vertical offset
    offsetX: 0, // Adjust the horizontal offset
    itemMargin: {
      horizontal: 10, // Adjust the horizontal margin between legend items
      vertical: 5, // Adjust the vertical margin between legend items
    },
    fontSize: "16px", // Set the font size
    // Set the font family
    fontWeight: 400, // Set the font weight
    // labels: {
    //   colors: [colors.text_primary], // Set the color of legend labels
    // },
    markers: {
      width: 15, // Set the width of legend markers
      height: 15, // Set the height of legend markers
      strokeWidth: 0, // Set the stroke width of legend markers
      strokeColor: "#fff", // Set the stroke color of legend markers
      radius: 6, // Set the radius of legend markers
      customHTML: undefined, // Provide custom HTML for legend markers
    },
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
      colors: [colors.sec, colors.ter],
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
      legend: {
        ...prevState.legend,
        itemOrder: "reverse", // Set to "reverse" to reverse the order
        // markers: {
        //   ...prevState.legend.markers,
        //   position: "right", // Set to "right" to place markers on the right side
        // },
      },
    }));
  }, [theme]);

  return (
    <>
      <div className="w-full">
        <Duration categories={categories} />
        <>
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={450}
          />
        </>
      </div>
    </>
  );
};

export default AreaChart;
interface DurationProps {
  categories: string[];
}

const Duration = ({ categories }: DurationProps) => {
  return (
    <div>
      <div className="flex-end flex items-center gap-5 mr-5">
        <div className="ml-auto p_text text-text_gray text-xs">
          From
          <span className="text-black dark:text-white ml-2">
            {categories[0]}
          </span>
        </div>
        <div className=" p_text text-text_gray text-xs">
          To
          <span className="text-black dark:text-white ml-2">
            {categories[categories.length - 1]}
          </span>
        </div>
      </div>
    </div>
  );
};
