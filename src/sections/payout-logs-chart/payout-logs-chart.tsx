"use client";
import React, { useEffect, useState } from "react";
import { Button, CircularProgress, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { PayoutLogsData } from "@/utils/api/types/transactions";
import useApiClient from "@/utils/api/api";
import useTransactionEndpoints from "@/utils/api/endpoints/transactions";

import useTranslation from "next-translate/useTranslation";
import AreaChart, {
  ChartSeries,
} from "@/components/charts/area-chart/area-chart";
import useChartMappers from "@/utils/mappers/chart-mappers";
import useStringFormatter from "@/utils/strings";
import useQueryTransactionEndpoints from "@/utils/api/endpoints/querytransactions";
import { useQuery } from "react-query";
import LoadingIndicator from "@/components/loading-indicator/loading-indicator";

function PayOutLogsChart() {
  const { t } = useTranslation("home");
  const [chartSeries, setChartSeries] = useState<ChartSeries[]>();
  const [chartCategories, setChartCategories] = useState<string[]>();

  const { mapDataToCategories, mapDataToSeries } = useChartMappers();
  const formatChartLabelNumber = useStringFormatter().formatChartLabelNumber;

  const transactionEndpoints = useQueryTransactionEndpoints();

  const {
    data: payoutLogsData,
    error: payoutLogsError,
    isLoading: isPayoutLogsLoading,
  } = useQuery("payoutLogs", transactionEndpoints.fetchPayOutLogs);

  useEffect(() => {
    if (payoutLogsData) {
      setChartCategories(mapDataToCategories(payoutLogsData?.data));
      setChartSeries(mapDataToSeries(payoutLogsData.data));
    }
  }, [payoutLogsData]);

  if (isPayoutLogsLoading) {
    return <LoadingIndicator />;
  }

  if (payoutLogsError) {
    return <div>An error occurred:</div>;
  }

  return (
    <div className="my-10">
      <div className="flex items-center justify-center">
        {payoutLogsData && chartCategories && chartSeries && (
          <AreaChart
            categories={chartCategories}
            series={chartSeries}
            formatter={formatChartLabelNumber}
          />
        )}
      </div>
    </div>
  );
}

export default PayOutLogsChart;
