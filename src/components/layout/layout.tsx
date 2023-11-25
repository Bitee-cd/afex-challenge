import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import { ThemeProvider } from "../theme-provider";
import Head from "next/head";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "AFEX FE",
//   description: "AFEX Frontend Technical Challenge",
// };

export default function RootLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <title>{title ? title + " - AFEX" : "AFEX"}</title>
        <meta name="description" content="AFEX Frontend Technical Challenge" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <div className={`min-h-screen bg_pri  ${poppins.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex">
            <div className="hidden lg:block lg:w-[20%] lg:sticky min-h-screen top-0 left-0 max-w-[300px]">
              <Sidebar />
            </div>
            <main className="flex-1">
              <Header />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}
