/* intro component for the homepage */
import classes from "./IntroTemplate.module.css";
import Link from "next/link";

function Introduction() {
	return (
		<div className={classes.introcontainer}>
			<h1 className={classes.title}>Welcome to my website!</h1>
			<p className={classes.intro}>
				My name is Daoxi Sun and welcome to my project portfolio website.
				<br />
				<br />I graduated from{" "}
				<a
					href="https://www.iastate.edu/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Iowa State University
				</a>{" "}
				(U.S.) with a Bachelor’s degree in Electrical Engineering, and{" "}
				<a href="https://www.uwo.ca/" target="_blank" rel="noopener noreferrer">
					Western University
				</a>{" "}
				(Canada) with a Master’s degree in Software Engineering.
				<br />
				<br />
				This website lists some of my projects over the years.
			</p>
			<Link href="/projects" passHref legacyBehavior>
				<button className={classes.btn1}>Learn More</button>
			</Link>
		</div>
	);
}

export default Introduction;
