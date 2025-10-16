import type { AppProps } from "next/app";
import Head from "next/head";
import { DashboardLayout } from "@/components/dashboardLayout/DashboardLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HR Management</title>
        <meta name="description" content="HR Talent Management System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </>
  );
}
