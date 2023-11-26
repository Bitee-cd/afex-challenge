import React from "react";
import useTranslation from "next-translate/useTranslation";
import CardWrapper from "@/components/card-wrapper/card-wrapper";
import IconHeading from "@/components/icon-heading/icon-heading";
import CoinIcon from "@/components/icon/CoinIcon";
import TotalPointsTable from "./total-points-table";
import { useQuery } from "react-query";
import useQuerySuppliesEndpoints from "@/utils/api/endpoints/querysupplies";
import LoadingIndicator from "@/components/loading-indicator/loading-indicator";

const TotalPoints: React.FC = () => {
  const { t } = useTranslation("home");
  const suppliesEndpoint = useQuerySuppliesEndpoints();
  const {
    data: suppliesForecast,
    error: suppliesForecastError,
    isLoading: isSuppliesTransactionsLoading,
  } = useQuery("suppliesForecast", suppliesEndpoint.fetchSuppliesForecast);

  if (isSuppliesTransactionsLoading) {
    return <LoadingIndicator />;
  }

  if (suppliesForecastError) {
    return <div>An error occurred:</div>;
  }
  console.log(suppliesForecast?.data);
  return (
    <CardWrapper className="p-5">
      <div className="items-center gap-5 rounded-[12px]">
        <IconHeading text={t("total_points")} icon={<CoinIcon />} />
        <div className="flex flex-col gap-5">
          {suppliesForecast && (
            <TotalPointsTable data={suppliesForecast.data} />
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

export default TotalPoints;
