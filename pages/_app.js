import "../styles/globals.css";

// import the Head component for appending elements to the head of the page
import Head from "next/head";
// import favIcon as local image so that it will be accessed during "next build"
import favIcon from "../public/favicon/favicon.ico";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />

        {/* The following title and description will be used if it's not specified on individual pages */}
        <title>Daoxi Sun</title>
        <meta name="description" content="Welcome to my website." />

        {/* Add the favicon in Head, use the "src" property of the imported favIcon as the route */}
        <link rel="icon shortcut" href={favIcon.src} type="image/x-icon" />

        {/* For scaling and layout on mobile devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Optional metadata */}
        <meta name="author" content="Daoxi Sun" />
        <meta name="keywords" content="Daoxi Sun, portfolio, projects" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
