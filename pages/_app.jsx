import Layout from "../components/Layout/Layout";
import "../styles/Globals.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
   return (
      <Layout>
         <Head>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <Component {...pageProps} />
      </Layout>
   );
};

export default MyApp;
