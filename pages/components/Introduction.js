/* intro component */
import classes from "./Introduction.module.css";
import Link from "next/link";

function Introduction() {
  return (
    <div>
      <h1 className={classes.title}>Welcome to my website!</h1>
      <p className={classes.intro}>
        My name is Daoxi Sun and welcome to my project portfolio website. ​This
        website lists some of my projects over the years, click on other tabs to
        browse them.
        <br/>
        I graduated from Iowa State University (U.S.) with a Bachelor’s degree in Electrical Engineering, and Western University (Canada) with a Master’s degree in Software Engineering.
      </p>
    </div>
  );
}

export default Introduction;
