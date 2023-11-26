import React, { useEffect, useState } from "react";
import QuickTransferCard from "./quick-transfer-card";
import { quickTransferCards } from "@/_mock/transfer-cards";
import useTranslation from "next-translate/useTranslation";

function QuickTransfer() {
  const { t } = useTranslation("home");

  return (
    <section className="bg_sec overflow-hidden">
      <div className="gap-5 rounded-[12px] p-5">
        <p className="h4_text border-b border-b-border_gray w-full">
          {t("quick_transfer")}
        </p>
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
