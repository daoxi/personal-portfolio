/* the portfolio website project page */
import classes from "../components/IntroTemplate.module.css";
import Link from "next/link";
import Head from "next/head";

function PortfolioWebsite() {
  return (
    (<div>
      <Head>
        <title>Portfolio Website Project</title>
        <meta
          name="description"
          content="Learn more about this project here."
        />
      </Head>
      <div className={classes.introcontainer}>
        <Link href="/projects" passHref legacyBehavior>
          <button className={classes.btnback}>Go back to Projects</button>
        </Link>
        <h1 className={classes.title}>Portfolio Website Project</h1>

        <p className={classes.intro}>
          This website itself is built with the{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          framework{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          (for server-side rendering, routing, etc.) as a
          single-page application (SPA), it is deployed on a{" "}
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Node.js
          </a>{" "}
          custom server.
          <br /><br />
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
    </div>)
  );
}

export default PortfolioWebsite;
