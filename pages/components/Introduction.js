/* intro component for the homepage */
import classes from "./ContentTemplate.module.css";
import Link from "next/link";

function Introduction() {
	return (
		<div className={classes["content-container"]}>
			<h1 className={classes.title}>Welcome to my website!</h1>
			<div className={classes.body}>
				<p>My name is Daoxi Sun and welcome to my project portfolio website.</p>
				<p>
					I graduated from{" "}
					<a
						href="https://www.iastate.edu/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Iowa State University
					</a>{" "}
					(U.S.) with a Bachelor’s degree in Electrical Engineering, and{" "}
					<a
						href="https://www.uwo.ca/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Western University
					</a>{" "}
					(Canada) with a Master’s degree in Software Engineering.
				</p>
				<p>This website lists some of my projects over the years.</p>
				<Link href="/projects" passHref legacyBehavior>
					<button className={classes.btn1}>Learn More</button>
				</Link>
			</div>
		</div>
	);
}

export default Introduction;
