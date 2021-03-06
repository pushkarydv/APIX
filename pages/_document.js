import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="APIX" />
        <meta
          name="description"
          content="APIX provides a list and docs to some free api's, so that you can build your dream projects sooner"
        />
        <meta
          name="keywords"
          content="api, apix, code, json, list , docs, application programming interface"
        />{" "}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />{" "}
        <meta name="language" content="English" />{" "}
        <meta name="author" content="Pushkar Yadav" />{" "}
        <meta property="og:type" content="website" />{" "}
        <meta property="og:url" content="https://apix.pushkaryadav.in" />{" "}
        <meta property="og:title" content="APIX" />{" "}
        <meta
          property="og:description"
          content="APIX provides a list and docs to some free apis, so that you can build your dream projects sooner"
        />{" "}
        <meta
          property="og:image"
          content="https://apix.pushkaryadav.in/banner.png"
        />{" "}
        <meta property="twitter:card" content="summary_large_image" />{" "}
        <meta property="twitter:url" content="https://apix.pushkaryadav.in" />
        <meta property="twitter:title" content="APIX" />
        <meta
          property="twitter:description"
          content="APIX provides a list and docs to some free apis, so that you can build your dream projects sooner"
        />
        <meta
          property="twitter:image"
          content="https://apix.pushkaryadav.in/banner.png"
        />
        <link rel="icon" href="/logo.png" />
        {/* Google analitics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7NHHPDZLXM"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7NHHPDZLXM',{ page_path: window.location.pathname });`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
