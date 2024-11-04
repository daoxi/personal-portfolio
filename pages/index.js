/* the homepage */
import Introduction from "./components/Introduction";
import Head from "next/head";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Learn more about me." />
      </Head>
      <Introduction></Introduction>
    </div>
  );
}
export default HomePage;
