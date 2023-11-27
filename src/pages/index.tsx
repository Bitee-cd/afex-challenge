import WidgetSummary from "@/sections/widget-summary/widget-summary";

import TransactionDetails from "@/sections/transaction-details/TransactionDetails";
import QuickTransfer from "@/sections/quick-transfer/quick-transfer";
import RootLayout from "@/components/layout/layout";
import PayOutLogsChart from "@/sections/payout-logs-chart/payout-logs-chart";
import TotalPoints from "@/sections/total-points/total-points";
import ActivityCharts from "@/sections/activity-charts/activity-charts";

export default function Home() {
  return (
    <RootLayout title="Home">
      <main className=" min-h-screen screen-center">
        <section className="lg:grid lg:grid-cols-4 gap-10 my-10">
          <div className="lg:col-span-3">
            <WidgetSummary />
            <PayOutLogsChart />
          </div>

          <div className="flex flex-col justify-between gap-10">
            <TransactionDetails />
            <QuickTransfer />
          </div>
        </section>
        <section className="lg:grid  lg:grid-cols-4 gap-10 my-10">
          <div className="">{<ActivityCharts />}</div>
          <div className="lg:col-span-3 mt-10">
            <TotalPoints />
          </div>
        </section>
      </main>
    </RootLayout>
  );
}
