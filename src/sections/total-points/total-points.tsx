"use client";
import React, { useEffect, useState } from "react";

import { CircularProgress, TableContainer } from "@mui/material";
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
import IconHeading from "@/components/icon-heading/icon-heading";
import TransactIcon from "@/components/icon/TransactIcon";
import CoinIcon from "@/components/icon/CoinIcon";
import useSuppliesEndpoints from "@/utils/api/endpoints/supplies";
import {
  SuppliesForecastData,
  SuppliesForecastDto,
} from "@/utils/api/types/supplies";
import TotalPointsTable from "./total-points-table";
import CardWrapper from "@/components/card-wrapper/card-wrapper";

function TotalPoints() {
  const { t } = useTranslation("home");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [suppliesForecast, setSuppliesForecast] = useState<
    SuppliesForecastData[] | null
  >(null);
  const apiClient = useApiClient();
  const suppliesEndpoint = useSuppliesEndpoints(apiClient);

  const getSuppliesForecast = async () => {
    setIsLoading(true);

    try {
      const response = await suppliesEndpoint.fetchSuppliesForecast();

      if (response) {
        setIsLoading(false);
        setSuppliesForecast(response.data);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching transaction overview:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSuppliesForecast();
  }, []);

  return (
    <CardWrapper className="p-5">
      <div className="items-center gap-5 rounded-[12px]">
        <IconHeading text={t("total_points")} icon={<CoinIcon />} />
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center">
            {isLoading && <CircularProgress size={10} />}
            {!suppliesForecast && !isLoading && <p>No data </p>}
          </div>
          {suppliesForecast && <TotalPointsTable data={suppliesForecast} />}
        </div>
      </div>
    </CardWrapper>
  );
}

export default TotalPoints;
