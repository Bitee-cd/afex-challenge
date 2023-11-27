import { Poppins } from "next/font/google";
import { ThemeProvider } from "../theme-provider";
import Head from "next/head";
import DashboardLayout from "./dashboard-layout";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme !== "light" && theme !== "dark") {
      setTheme("light");
    }
  }, [theme]);
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
          <DashboardLayout>{children}</DashboardLayout>
        </ThemeProvider>
      </div>
    </>
  );
}
