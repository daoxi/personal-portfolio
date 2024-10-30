/* the Getem project page */
import MainNavigation from "../components/MainNavigation";
import classes from "../components/IntroTemplate.module.css";
import Link from "next/link";
import Head from "next/head";

function GetemProject() {
  return (
    <div>
      <Head>
        <title>GetEm Project (Markdown Note App)</title>
        <meta
          name="description"
          content="Learn more about this project here."
        />
      </Head>
      <MainNavigation></MainNavigation>
      <div className={classes.introcontainer}>
        <Link href="/projects" passHref>
          <button className={classes.btnback}>Go back to Projects</button>
        </Link>
        <h1 className={classes.title}>GetEm Project - Markdown Note App</h1>

        <p className={classes.intro}>
         body here
        </p>
      </div>
    </div>
  );
}

export default GetemProject;
