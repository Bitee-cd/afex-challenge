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

function TransactionDetails() {
  const { t } = useTranslation("home");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [latestTransactions, setLatestTransactions] =
    useState<LatestTransactionData[]>();

  const apiClient = useApiClient();
  const transactionEndpoint = useTransactionEndpoints(apiClient);

  const getTransactionsOverview = async () => {
    setIsLoading(true);

    try {
      const response = await transactionEndpoint.fetchLatestTransactions();
      if (isSuccessfulApiResponse(response)) {
        setLatestTransactions(response.data);
      }
    } catch (error) {
      console.error("Error fetching transaction overview:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTransactionsOverview();
  }, []);

  return (
    <CardWrapper className="p-5">
      <div className="items-center gap-5 rounded-[12px]">
        <IconHeading text={t("transaction_details")} icon={<TransactIcon />} />
        <div className="flex flex-col gap-5 mt-5">
          {isLoading && <LoadingIndicator />}
          {!isLoading && !latestTransactions && <p>No data </p>}
          {latestTransactions &&
            latestTransactions.map((item, index) => (
              <TransactionItem key={index} item={item} />
            ))}
        </div>
      </div>
    </CardWrapper>
  );
}

export default TransactionDetails;
