import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";
import "react-image-lightbox/style.css";
import Layout from "@/components/Layout";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://austinbspencer.com",
          site_name: "Austin's Portfolio",
        }}
        twitter={{
          handle: "@austinbspencer",
          cardType: "summary_large_image",
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
