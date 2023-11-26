import React from "react";
import ArrowIcon from "../../../src/components/icon/ArrowIcon";
import { currency } from "@/utils/currency";
interface WidgetSummaryProps {
  icon: React.ReactNode;
  title: string;
  transaction_type: "credit" | "debit";
  percentage: number;
  amount: number | string;
  text_color: string;
}
function WidgetSummaryCard(props: WidgetSummaryProps) {
  const { icon, title, transaction_type, percentage, amount, text_color } =
    props;
  return (
    <div className="rounded-xl bg_sec p-5">
      <div className="flex space-x-3 items-center mb-5">
        {icon}
        <p className={`h4_text ${text_color}`}>{title}</p>
      </div>
      <div className="md:flex items-center gap-2">
        <p className="h2_text">
          {title === "transactions" ? currency : null}
          {amount}
        </p>
        <div className="flex gap-2 items-center">
          <ArrowIcon type={transaction_type} />
          <p
            className={`p_text ${
              transaction_type === "credit" ? "text-credit" : "text-debit"
            }`}
          >
            {percentage}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WidgetSummaryCard;
