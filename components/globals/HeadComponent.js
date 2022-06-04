import React from "react";

function HeadComponent({ title }) {
  return (
    <div>
      <meta charset="UTF-8" />
      <title>{title}</title>
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
      <meta name="viewport" content="width=device-width,initial-scale=1" />{" "}
      <meta property="og:type" content="website" />{" "}
      <meta property="og:url" content="https://apix.pushkaryadav.in" />{" "}
      <meta property="og:title" content="APIX" />{" "}
      <meta
        property="og:description"
        content="APIX provides a list and docs to some free apis, so that you can build your dream projects sooner"
      />{" "}
      <meta
        property="og:image"
        content="https://apix.pushkaryadav.in/apix_banner.png"
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
        content="https://apix.pushkaryadav.in/apix_banner.png"
      />
    </div>
  );
}

export default HeadComponent;
