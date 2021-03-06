import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { Provider } from "react-redux";
import {
  detectColorScheme,
  loadPortfolio,
} from "../../data/controllers/actions";
import reportWebVitals from "../reportWebVitals";
import { useStore } from "../../data/viewModel/store";

import HeaderMeta from "../components/templates/HeaderMeta";
import SiteFooter from "../components/organisms/SiteFooter";
import SiteHeader from "../components/organisms/SiteHeader";
import "../../public/styles/global.scss";

function Portfolio({ Component, pageProps }: AppProps): React.ReactElement {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();

  useEffect(() => {
    /**
     * Initalize the right portfolio state.
     */
    store.dispatch(loadPortfolio);

    /**
     * Make pages scroll to the top on route change.
     */
    const scrollToTop = () => {
      document.body.scrollTo(0, 0);
    };
    router.events.on("routeChangeComplete", scrollToTop);

    /**
     * Initalize and watch for viewport height changes.
     */
    const vh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("load", vh);
    window.addEventListener("resize", vh);

    /**
     * Initalize and watch for color scheme changes.
     */
    const portfolio = window.matchMedia("(prefers-color-scheme: dark)");
    const theme = () => {
      store.dispatch(detectColorScheme());
    };
    store.dispatch(detectColorScheme());
    portfolio.addEventListener("change", theme);

    return () => {
      router.events.off("routeChangeComplete", scrollToTop);

      window.removeEventListener("load", vh);
      window.removeEventListener("resize", vh);

      portfolio.removeEventListener("change", theme);
    };
  }, [router.events, store]);

  return (
    <Provider store={store}>
      <HeaderMeta />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <SiteHeader />
      <Component {...pageProps} className={"main"} />
      <SiteFooter />
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');`,
        }}
      />
      <Script
        src="https://kit.fontawesome.com/07e616e69d.js"
        strategy="beforeInteractive"
        crossOrigin="anonymous"
      />
      <Script
        id="gh-pages"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function (l) {
        if (l.search[1] === '/') {
          var decoded = l.search
            .slice(1)
            .split('&')
            .map(function (s) {
              return s.replace(/~and~/g, '&');
            })
            .join('?');
          window.history.replaceState(
            null,
            null,
            l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      })(window.location);`,
        }}
      />
    </Provider>
  );
}

reportWebVitals();

export default Portfolio;
