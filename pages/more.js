/* the More page */
import MainNavigation from "./components/MainNavigation";
import MoreIntro from "./components/MoreIntro";
import Head from "next/head";

function More() {
  return (
    <div>
      <Head>
        <title>More</title>
        <meta name="description" content="Get more information here." />
      </Head>
      <MainNavigation></MainNavigation>
      <MoreIntro></MoreIntro>
    </div>
  );
}
export default More;
