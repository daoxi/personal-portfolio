/* the More page */
import MainNavigation from "./components/MainNavigation";
import Head from "next/head";

function More() {
  return (
    <div>
      <Head>
        <title>More</title>
        <meta name="description" content="Get more information here." />
      </Head>
      <MainNavigation></MainNavigation>
      <h1>This is the more page.</h1>
    </div>
  );
}
export default More;
