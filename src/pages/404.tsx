import RootLayout from "@/components/layout/layout";

export default function Error() {
  return (
    <RootLayout title="Home">
      <main className=" items-center justify-center flex h-full">
        <div className="">
          <p className="text-center h2_text">404</p>
          <div className="h4_text">Page not found</div>
        </div>
      </main>
    </RootLayout>
  );
}
