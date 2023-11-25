import React from "react";
import ArrowIcon from "../../../src/components/icon/ArrowIcon";
interface WidgetSummaryProps {
  icon: React.ReactNode;
  title: string;
  transaction_type: "credit" | "debit";
  percentage: number;
  amount: number | string;
  text_color: string;
}
function WidgetSummaryCard(props: WidgetSummaryProps) {
  return (
    <div className="rounded-xl bg_sec p-5  ">
      <div className="flex space-x-3 items-center mb-5">
        {props.icon}
        <p className={`h4_text ${props.text_color}`}>{props.title}</p>
      </div>
      <div className="md:flex items-center gap-2">
        <p className="h2_text">{props.amount}</p>
        <div className="flex gap-2 items-center">
          <ArrowIcon type={props.transaction_type} />
          <p
            className={`p_text ${
              props.transaction_type === "credit" ? "text-credit" : "text-debit"
            }`}
          >
            {props.percentage}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WidgetSummaryCard;
