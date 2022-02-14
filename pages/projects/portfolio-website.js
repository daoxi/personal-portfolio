/* the portfolio website project page */
import MainNavigation from "../components/MainNavigation";
import classes from "../components/IntroTemplate.module.css";
import Link from "next/link";
import Head from "next/head";

function PortfolioWebsite() {
  return (
    <div>
      <Head>
        <title>Portfolio Website Project</title>
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
        <h1 className={classes.title}>Portfolio Website Project</h1>

        <p className={classes.intro}>
          This website itself is built with{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          and{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          (a framework used for server-side rendering, routing, etc.) as a single-page application (SPA), it is
          deployed on a{" "}
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Node.js
          </a>{" "}
          custom server.
          <br />
          To learn more and view the source code, please{" "}
          <a
            href="https://github.com/daoxi/personal-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>{" "}
          to visit its repository.
        </p>
      </div>
    </div>
  );
}

export default PortfolioWebsite;
