"use client";
import React, { useEffect, useState } from "react";
import { Button, CircularProgress, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import WidgetSummaryCard from "./WidgetSummaryCard";
import { TransactionOverViewData } from "@/utils/api/types/transactions";
import useApiClient from "@/utils/api/api";
import useTransactionEndpoints from "@/utils/api/endpoints/transactions";
import { calculatePercentageChange, formatNumber } from "@/utils/percentage";
import { convertSnakeCaseToTitleCase } from "@/utils/strings";
import UsersIcon from "@/components/icon/UsersIcon";
import TransactionIcon from "@/components/icon/TransactionIcon";
import CardIcon from "@/components/icon/CardIcon";
import useTranslation from "next-translate/useTranslation";

function WidgetSummary() {
  const { t } = useTranslation("home");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [transactionData, setTransactionData] =
    useState<TransactionOverViewData[]>();

  const apiClient = useApiClient();
  const transactionEndpoint = useTransactionEndpoints(apiClient);

  const getTransactionsOverview = async () => {
    setIsLoading(true);

    try {
      const response = await transactionEndpoint.fetchTransactionOverview();
      if (response) {
        setIsLoading(false);
        setTransactionData(response.data);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching transaction overview:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getTransactionsOverview();
  }, []);
  return (
    <section className="">
      <div className="flex items-center justify-center">
        {isLoading && <CircularProgress size={10} />}
        {!isLoading && transactionData === undefined && <p>No data</p>}
      </div>

      <div className="grid grid-cols-3 justify-between gap-10">
        {transactionData?.map((item, index) => (
          <WidgetSummaryCard
            key={index}
            amount={formatNumber(item.current)}
            percentage={calculatePercentageChange(item).percentage}
            title={t(item.name)}
            transaction_type={calculatePercentageChange(item).changeType}
            icon={
              item.name === "active_users" ? (
                <UsersIcon />
              ) : item.name === "transactions" ? (
                <TransactionIcon />
              ) : (
                <CardIcon />
              )
            }
            text_color={
              item.name === "active_users"
                ? "text-pri"
                : item.name === "transactions"
                ? "text-sec"
                : "text-ter"
            }
          />
        ))}
      </div>
    </section>
  );
}

export default WidgetSummary;
