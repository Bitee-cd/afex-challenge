// QuickTransferCard.jsx
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";

export interface QuickTransferCardProps {
  image: string;
  card_number: number;
  card_type: "credit" | "debit";
}

function QuickTransferCard(props: QuickTransferCardProps) {
  const { t } = useTranslation("home");
  const getCardType = (card: "credit" | "debit") => {
    return card === "credit" ? t("credit_card") : t("debit_card");
  };

  return (
    <div className="border p-1 border-border_gray dark:border-gray-700 rounded-md min-w-[150px]">
      <div className="flex items-center gap-2 ">
        <Image
          src={props.image}
          alt={props.card_type}
          width={50}
          height={40}
          className="rounded-[4px]"
        />
        <p className="text-[12px]">
          {props.card_number}{" "}
          <span className="text-[12px]">{getCardType(props.card_type)}</span>
        </p>
      </div>
    </div>
  );
}

export default QuickTransferCard;
