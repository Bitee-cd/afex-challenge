"use client";
import React, { useEffect, useState } from "react";

import { CircularProgress } from "@mui/material";
import {
  LatestTransactionData,
  LatestTransactionsDto,
} from "@/utils/api/types/transactions";
import useApiClient from "@/utils/api/api";
import useTransactionEndpoints from "@/utils/api/endpoints/transactions";
import { isSuccessfulApiResponse } from "@/utils/api/error";
import Image from "next/image";
import { formatDateString } from "@/utils/strings";
import useTranslation from "next-translate/useTranslation";

function TransactionDetails() {
  const { t } = useTranslation("home");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [latestTransactions, setLatestTransactions] =
    useState<LatestTransactionsDto>();

  const apiClient = useApiClient();
  const transactionEndpoint = useTransactionEndpoints(apiClient);

  const getTransactionsOverview = async () => {
    setIsLoading(true);

    try {
      const response = await transactionEndpoint.fetchLatestTransactions();

      if (isSuccessfulApiResponse(response)) {
        setIsLoading(false);
        //ts-ignore
        setLatestTransactions(response);
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
    <section className="bg_sec p-5">
      <div className=" items-center gap-5 rounded-[12px]">
        <p className="h4-text pb-4 border-b w-full border-b-border_gray">
          {t("transaction_details")}
        </p>
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex items-center justify-center">
            {isLoading && <CircularProgress size={10} />}
            {latestTransactions === undefined && !isLoading && <p>No data </p>}
          </div>
          {latestTransactions?.data.map((item, index) => (
            <div key={index} className="flex justify-between mb-5 items-center">
              <div className="flex gap-3 items-center">
                <Image
                  width={28}
                  height={28}
                  alt={item.charged_by.company}
                  src={item.charged_by.logo}
                  className="object-contain"
                />
                <div className="">
                  <p className="p_text">{item.charged_by.company}</p>
                  <p className="text-gray-500 text-xs">
                    {formatDateString(item.created_at)}
                  </p>
                </div>
              </div>
              <div
                className={`p ${
                  item.charge.type === "debit" ? "text-debit" : "text-credit"
                }`}
              >
                {item.charge.type === "debit" ? "- " : "+ "}{" "}
                {item.charge.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TransactionDetails;
