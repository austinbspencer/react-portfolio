import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";
import "react-image-lightbox/style.css";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
