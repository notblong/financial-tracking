import { ArcElement, CategoryScale, Chart, LinearScale, LineElement, PointElement } from "chart.js";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "../styles/globals.css";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
