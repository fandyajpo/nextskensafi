import "nprogress/nprogress.css";
// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import "dayjs/locale/ko";
// import "dayjs/locale/en";
import "../styles/globals.css";
import Router from "next/router";
import NProgress from "nprogress";
import { GlobalProvider } from "lib/ctx";
import Head from "next/head";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <GlobalProvider>{getLayout(<Component {...pageProps} />)}</GlobalProvider>
    </>
  );
}

export default MyApp;
