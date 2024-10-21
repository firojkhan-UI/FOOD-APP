import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "./components/layouts/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
