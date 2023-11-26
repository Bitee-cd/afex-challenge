import WidgetSummary from "@/sections/widget-summary/widget-summary";

import TransactionDetails from "@/sections/transaction-details/TransactionDetails";
import QuickTransfer from "@/sections/quick-transfer/quick-transfer";
import RootLayout from "@/components/layout/layout";
import TotalPoints from "@/sections/total-points/total-points";
import ActivityCharts from "@/components/charts/activity-chart/activity-chart";
import IncomeAreaChart from "@/components/charts/line-graph/line-graph";

export default function Home() {
  return (
    <RootLayout title="Home">
      <main className=" min-h-screen screen-center">
        <section className="lg:grid  lg:grid-cols-4 gap-10 my-10">
          <div className="lg:col-span-3">
            <WidgetSummary />
            <IncomeAreaChart />
          </div>

          <div className="flex flex-col justify-between gap-10">
            <TransactionDetails />
            <QuickTransfer />
          </div>
        </section>
        <section className="lg:grid  lg:grid-cols-4 gap-10 my-10">
          <div className="">{<ActivityCharts />}</div>
          <div className="lg:col-span-3">
            <TotalPoints />
          </div>
        </section>
      </main>
    </RootLayout>
  );
}
