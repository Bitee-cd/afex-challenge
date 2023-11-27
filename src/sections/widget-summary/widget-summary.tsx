"use client";
import React, { useEffect, useState } from "react";
import { Button, CircularProgress, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import WidgetSummaryCard from "./WidgetSummaryCard";
import { TransactionOverViewData } from "@/utils/api/types/transactions";
import useApiClient from "@/utils/api/api";
import useTransactionEndpoints from "@/utils/api/endpoints/transactions";
import { calculatePercentageChange, formatNumber } from "@/utils/percentage";

import UsersIcon from "@/components/icon/UsersIcon";
import TransactionIcon from "@/components/icon/TransactionIcon";
import CardIcon from "@/components/icon/CardIcon";
import useTranslation from "next-translate/useTranslation";
import { colorMap } from "@/utils/text-color";
import useStringFormatter from "@/utils/strings-formatter";
import useQueryTransactionEndpoints from "@/utils/api/endpoints/querytransactions";
import { useQuery } from "react-query";
import LoadingIndicator from "@/components/loading-indicator/loading-indicator";

function WidgetSummary() {
  const { t } = useTranslation("home");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const convertSnakeCaseToTitleCase =
    useStringFormatter().convertSnakeCaseToTitleCase;

  const transactionEndpoints = useQueryTransactionEndpoints();
  const {
    data: overviewData,
    error: overviewError,
    isLoading: isOverviewLoading,
  } = useQuery(
    "transactionOverview",
    transactionEndpoints.fetchTransactionOverview
  );

  const iconMap = {
    active_users: <UsersIcon />,
    transactions: <TransactionIcon />,
    cards_issued: <CardIcon />,
  };

  if (isOverviewLoading) {
    return <LoadingIndicator />;
  }

  if (overviewError) {
    return <div>An error occurred:</div>;
  }
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 lg:gap-10">
        {overviewData?.data.map((item, index) => (
          <WidgetSummaryCard
            key={index}
            amount={formatNumber(item.current)}
            percentage={calculatePercentageChange(item).percentage}
            title={t(item.name)}
            transaction_type={calculatePercentageChange(item).changeType}
            icon={iconMap[item.name]}
            text_color={colorMap[item.name]}
          />
        ))}
      </div>
    </div>
  );
}

export default WidgetSummary;
