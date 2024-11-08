/* the portfolio website project page */
import classes from "../components/ContentTemplate.module.css";
import Link from "next/link";
import Head from "next/head";

import BackToProjects from "../components/BackToProjects";

function PortfolioWebsite() {
	return (
		<div>
			<Head>
				<title>Portfolio Website Project</title>
				<meta
					name="description"
					content="Learn more about this project here."
				/>
			</Head>
			<div className={classes["content-container"]}>
				<BackToProjects />
				<h1 className={classes.title}>Portfolio Website Project</h1>

				<div className={classes.body}>
					<p>
						This website itself is built with the{" "}
						<a
							href="https://reactjs.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							React
						</a>{" "}
						framework{" "}
						<a
							href="https://nextjs.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Next.js
						</a>{" "}
						(for server-side rendering, routing, etc.) as a single-page
						application (SPA), it is deployed on a{" "}
						<a
							href="https://nodejs.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Node.js
						</a>{" "}
						custom server.
					</p>
					<p>
						To learn more and view the source code, please{" "}
						<a
							href="https://github.com/daoxi/personal-portfolio"
							target="_blank"
							rel="noopener noreferrer"
						>
							click here
						</a>{" "}
						to visit its repository.
					</p>
				</div>
			</div>
		</div>
	);
}

export default PortfolioWebsite;
