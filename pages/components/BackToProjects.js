//button used in individual project pages for returning back to projects page
import classes from "./BackToProjects.module.css";
import Link from "next/link";

function BackToProjects() {
	return (
		<Link href="/projects" passHref legacyBehavior>
			<button className={classes["btn-back"]}>◄ Go back to Projects</button>
		</Link>
	);
}

export default BackToProjects;
