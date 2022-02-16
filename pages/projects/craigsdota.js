/* the CraigsDota page */
import MainNavigation from "../components/MainNavigation";
import classes from "../components/IntroTemplate.module.css";
import Link from "next/link";
import Head from "next/head";

function CraigsDota() {
  return (
    <div>
      <Head>
        <title>M.Eng. Project: CraigsDota</title>
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
        <h1 className={classes.title}>M.Eng. Project: CraigsDota</h1>

        <p className={classes.intro}>
          This is a project that's completed when I was pursuing my M.Eng.
          degree, it's built with{" "}
          <a
            href="https://angular.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angular
          </a>{" "}
          which is based on{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </a>
          , the CSS framework{" "}
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap
          </a>{" "}
          was used to facilitate styling, and{" "}
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase
          </a>{" "}
          was used to help with user registration/authentication and database
          management.
          <br />
          Users can access profiles by login with{" "}
          <a
            href="https://developers.google.com/identity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
          /
          <a
            href="https://developers.facebook.com/docs/facebook-login/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          account, or register their own email-verified account; they can then
          post custom game requests, or find suitable friends to play the video
          game{" "}
          <a
            href="https://www.dota2.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DotA
          </a>{" "}
          together.
          <br />
          <a
            href="https://github.com/daoxi/craigsdota"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>{" "}
          to view the source code in its repository, or{" "}
          <a
            href="https://daoxisun.com/resources/CraigsDota_project_report.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>{" "}
          for the project report.
        </p>
      </div>
    </div>
  );
}

export default CraigsDota;
