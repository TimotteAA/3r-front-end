import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@arco-design/web-react/dist/css/arco.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
