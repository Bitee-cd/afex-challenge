import WidgetSummary from "@/sections/widget-summary/widget-summary";
import IncomeAreaChart from "@/components/line-graph/LineGraph";
import TransactionDetails from "@/sections/transaction-details/TransactionDetails";
import QuickTransfer from "@/sections/quick-transfer/quick-transfer";
import RootLayout from "@/components/layout/layout";

export default function Home() {
  return (
    <RootLayout title="Home">
      <main className=" min-h-screen screen-center my-10">
        <section className="lg:grid  lg:grid-cols-4 gap-10 ">
          <div className="lg:col-span-3">
            <WidgetSummary />
            <IncomeAreaChart />
          </div>

          <div className=" flex flex-col justify-between gap-10">
            <TransactionDetails />
            <QuickTransfer />
          </div>
        </section>
      </main>
    </RootLayout>
  );
}
