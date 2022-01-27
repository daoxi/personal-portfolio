/* projects intro component */
import classes from "./IntroTemplate.module.css";
import Link from "next/link";
import ProjCardsContainer from "./ProjCardsContainer";

function ProjectsIntro() {
  return (
    <div className={classes.introcontainer}>
      <h1 className={classes.title}>Web Development Projects</h1>
      <p className={classes.intro}>
        Welcome to the projects page.
        <br />I worked on various web design and development tasks, below you
        can find some of my past work. Click on individual card to learn more
        (the cards will collapse into fewer column(s) on narrow screens).
      </p>
      <ProjCardsContainer></ProjCardsContainer>
    </div>
  );
}

export default ProjectsIntro;
