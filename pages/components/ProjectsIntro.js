/* projects intro component */
import classes from "./ContentTemplate.module.css";
import Link from "next/link";
import ProjCardsContainer from "./ProjCardsContainer";

function ProjectsIntro() {
	return (
		<div
			className={classes["content-container"]}
			style={
				{
					/*
				"--content-max-width":
					"1800px"
					*/
					/* customize special content width as needed */
				}
			}
		>
			<h1 className={classes.title}>Web Development Projects</h1>
			<div className={classes.body}>
				<p>
					Welcome to the projects page, I worked on various web design and
					development tasks, below you can find some of my past work.
				</p>
			</div>
			<ProjCardsContainer></ProjCardsContainer>
		</div>
	);
}

export default ProjectsIntro;
