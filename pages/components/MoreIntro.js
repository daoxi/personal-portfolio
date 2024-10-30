/* intro component for the More page */
import classes from "./IntroTemplate.module.css";

function MoreIntro() {
  return (
    <div className={classes.introcontainer}>
      <h1 className={classes.title}>More about me</h1>
      <p className={classes.intro}>
        You can visit my{" "}
        <a
          href="https://daoxisun.weebly.com/university-class-projects.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          legacy portfolio website
        </a>{" "}
        to learn more about some of my other non-web-dev university engineering
        projects (some of which involve programming in various languages).
        <br />
				<br />
        You can also email me at{" "}
        <a href="mailto:daoxisun@gmail.com">daoxisun@gmail.com</a> for any
        questions you may have.
      </p>
    </div>
  );
}

export default MoreIntro;
