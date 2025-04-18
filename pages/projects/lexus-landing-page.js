/* the lexus landing page's intro page */
import classes from "../components/ContentTemplate.module.css";
import Link from "next/link";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Head from "next/head";

import BackToProjects from "../components/BackToProjects";

function LexusLandingPage() {
	return (
		<div>
			<Head>
				<title>Lexus Landing Page</title>
				<meta
					name="description"
					content="Learn more about this project here."
				/>
			</Head>
			<div className={classes["content-container"]}>
				<BackToProjects />
				<h1 className={classes.title}>Lexus Landing Page</h1>

				<div className={classes.body}>
					<p>
						A web design interview assignment for{" "}
						<a
							href="https://www.weinscanada.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Weins Canada Inc
						</a>{" "}
						(
						<a
							href="https://www.donvalleynorthlexus.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Don Valley North Lexus
						</a>
						), it aims at building a landing page with good SEO and high
						conversion rate, which is achieved by designing the webpage layout
						from scratch, customizing the details with PHP and deciding on the
						content (e.g. icons/images editing, copywriting, etc.).
					</p>
					<p>
						<a
							href="https://sundaoxi.com/lexus-rx-350-don-valley-north-lexus/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Click here
						</a>
						{/* the link directs to where the demo is currently hosted, which is a seperate place from where this app itself (personal portfolio website) is deployed*/}{" "}
						for a live demo, or{" "}
						<a
							href="https://daoxisun.com/resources/lexus-landing-page-full-screenshot.png"
							target="_blank"
							rel="noopener noreferrer"
						>
							click here
						</a>{" "}
						to view a screenshot of the full webpage, or watch the Youtube video
						below.
					</p>

					<div className={classes["youtube-video"]}>
						<YoutubeEmbed embedId="joLsnVVhvfU" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default LexusLandingPage;
