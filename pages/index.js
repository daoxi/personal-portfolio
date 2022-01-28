/* the homepage */
import MainNavigation from "./components/MainNavigation";
import Introduction from "./components/Introduction";
import Head from "next/head";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Learn more about me." />
      </Head>
      <MainNavigation></MainNavigation>
      <Introduction></Introduction>
    </div>
  );
}
export default HomePage;
