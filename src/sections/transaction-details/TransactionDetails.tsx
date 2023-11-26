import React, { useEffect, useState } from "react";
import useApiClient from "@/utils/api/api";
import useTransactionEndpoints from "@/utils/api/endpoints/transactions";
import { isSuccessfulApiResponse } from "@/utils/api/error";
import useTranslation from "next-translate/useTranslation";
import IconHeading from "@/components/icon-heading/icon-heading";
import TransactIcon from "@/components/icon/TransactIcon";
import { LatestTransactionData } from "@/utils/api/types/transactions";
import LoadingIndicator from "@/components/loading-indicator/loading-indicator";
import TransactionItem from "./transaction-item";
import CardWrapper from "@/components/card-wrapper/card-wrapper";
import useQueryTransactionEndpoints from "@/utils/api/endpoints/querytransactions";
import { useQuery } from "react-query";

function TransactionDetails() {
  const { t } = useTranslation("home");
  const transactionEndpoints = useQueryTransactionEndpoints();

  const {
    data: latestTransactionsData,
    error: latestTransactionsError,
    isLoading: isLatestTransactionsLoading,
  } = useQuery(
    "latestTransactions",
    transactionEndpoints.fetchLatestTransactions
  );
  if (isLatestTransactionsLoading) {
    return <LoadingIndicator />;
  }

  if (latestTransactionsError) {
    return <div>An error occurred:</div>;
  }

  return (
    <CardWrapper className="p-5">
      <div className="items-center gap-5 rounded-[12px]">
        <IconHeading text={t("transaction_details")} icon={<TransactIcon />} />
        <div className="flex flex-col gap-5 mt-5">
          {latestTransactionsData?.data.map((item, index) => (
            <TransactionItem key={index} item={item} />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}

export default TransactionDetails;
