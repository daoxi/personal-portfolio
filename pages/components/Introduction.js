/* intro component */
import classes from "./IntroTemplate.module.css";
import Link from "next/link";

function Introduction() {
  return (
    <div className={classes.introcontainer}>
        <h1 className={classes.title}>Welcome to my website!</h1>

        <p className={classes.intro}>
          My name is Daoxi Sun and welcome to my project portfolio website.
          <br />I graduated from{" "}
          <a href="https://www.iastate.edu/">Iowa State University</a> with a
          Bachelor’s degree in Electrical Engineering, and{" "}
          <a href="https://www.uwo.ca/">Western University</a> (Canada) with a
          Master’s degree in Software Engineering.
          <br />
          This website lists some of my projects over the years. Please click on
          other tabs or the button below to browse and learn more.
        </p>

        <Link href="/projects" passHref>
          <button className={classes.btn1}>Learn More</button>
        </Link>
    </div>
  );
}

export default Introduction;
