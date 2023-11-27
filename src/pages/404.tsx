import RootLayout from "@/components/layout/layout";

export default function Error() {
  return (
    <RootLayout title="Error">
      <main className="item-center justify-center flex bg_pri h-screen">
        <div className="items-center">
          <p className="h2_text">404</p>
          <div className="h4_text">Page not found</div>
        </div>
      </main>
    </RootLayout>
  );
}
