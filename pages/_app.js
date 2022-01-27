import "../styles/globals.css";

// import the Head component for appending elements to the head of the page
import Head from "next/head";
// import favIcon as local image so that it will be accessed during "next build"
import favIcon from "../public/favicon/favicon.ico";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Add the favicon in Head*/}
      <Head>
        {/* Use the "src" property of the imported favIcon as the route */}
        <link rel="icon shortcut" href={favIcon.src} type="image/x-icon" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
