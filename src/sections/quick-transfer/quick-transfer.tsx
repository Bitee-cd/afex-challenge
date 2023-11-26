import React, { useEffect, useState } from "react";
import QuickTransferCard from "./quick-transfer-card";
import { quickTransferCards } from "@/_mock/transfer-cards";
import useTranslation from "next-translate/useTranslation";
import IconHeading from "@/components/icon-heading/icon-heading";
import TransactIcon from "@/components/icon/TransactIcon";
import WalletIcon from "@/components/icon/WalletIcon";

function QuickTransfer() {
  const { t } = useTranslation("home");

  return (
    <section className="bg_sec overflow-hidden">
      <div className="gap-5 rounded-[12px] p-5">
        <IconHeading text={t("quick_transfer")} icon={<WalletIcon />} />
        <div className="flex  flex-row pl-5 gap-3 my-5 overflow-x-auto hide_scrollbar rounded-xl">
          {quickTransferCards.map((item, index) => (
            <QuickTransferCard
              key={index}
              card_number={item.card_number}
              card_type={item.card_type}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickTransfer;
