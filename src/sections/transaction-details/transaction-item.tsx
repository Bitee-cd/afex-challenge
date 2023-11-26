import React from "react";
import Image from "next/image";
import { formatDateString } from "@/utils/strings";
import { LatestTransactionData } from "@/utils/api/types/transactions";
import { currency } from "@/utils/currency";

interface TransactionItemProps {
  item: LatestTransactionData;
}
function TransactionItem(props: TransactionItemProps) {
  const { charged_by, created_at, charge } = props.item;
  return (
    <div className="flex justify-between mb-5 items-center">
      <div className="flex gap-3 items-center">
        <Image
          width={28}
          height={28}
          alt={charged_by.company}
          src={charged_by.logo}
          className="object-contain"
        />
        <div className="">
          <p className="p_text">{charged_by.company}</p>
          <p className="text-gray-500 text-[9px]">
            {formatDateString(created_at)}
          </p>
        </div>
      </div>
      <div
        className={`text-[10px] ${
          charge.type === "debit" ? "text-debit" : "text-credit"
        }`}
      >
        {charge.type === "debit" ? "-" : "+"} {currency} {charge.amount}
      </div>
    </div>
  );
}

export default TransactionItem;
