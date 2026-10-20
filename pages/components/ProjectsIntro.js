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
					Welcome to the projects page, below you can find some of my past work
					(from <span style={{ color: "#00BFFF" }}>newer</span> to{" "}
					<span style={{ color: "#00cc66" }}>older</span>).
				</p>
				<p>
					Please note that not all projects are always included here, so feel
					free to also check out{" "}
					<a
						href="https://github.com/daoxi"
						target="_blank"
						rel="noopener noreferrer"
					>
						my GitHub page
					</a>
					.
				</p>
			</div>
			<ProjCardsContainer></ProjCardsContainer>
		</div>
	);
}

export default ProjectsIntro;
