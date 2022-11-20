import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ArcElement, CategoryScale, Chart, LinearScale, LineElement, PointElement } from "chart.js";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);
Chart.register(ArcElement);
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
