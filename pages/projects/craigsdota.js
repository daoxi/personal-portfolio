/* the CraigsDota page */
import MainNavigation from "../components/MainNavigation";
import classes from "../components/IntroTemplate.module.css";
import Link from "next/link";
import Head from "next/head";
import PdfEmbed from "../components/PdfEmbed";

function CraigsDota() {
	return (
		<div>
			<Head>
				<title>M.Eng. Project: CraigsDota</title>
				<meta
					name="description"
					content="Learn more about this project here."
				/>
			</Head>
			<MainNavigation></MainNavigation>
			<div className={classes.introcontainer}>
				<Link href="/projects" passHref>
					<button className={classes.btnback}>Go back to Projects</button>
				</Link>
				<h1 className={classes.title}>CraigsDota</h1>

				<p className={classes.intro}>
					This was a posting-based (similar to{" "}
					<a
						href="https://en.wikipedia.org/wiki/Craigslist"
						target="_blank"
						rel="noopener noreferrer"
					>
						Craigslist
					</a>
					, from which the project&apos;s name was inspired) project that&#39;s
					completed when I was pursuing my M.Eng. degree (it&apos;s no longer
					maintained/deployed now), built with{" "}
					<a
						href="https://angular.io/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Angular
					</a>{" "}
					and{" "}
					<a
						href="https://getbootstrap.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Bootstrap
					</a>{" "}, also{" "}
					<a
						href="https://firebase.google.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Firebase
					</a>{" "}
					was used to help with user registration/authentication and database
					management.
					<br />
					<br />
					Users can access profiles by login with{" "}
					<a
						href="https://developers.google.com/identity"
						target="_blank"
						rel="noopener noreferrer"
					>
						Google
					</a>
					/
					<a
						href="https://developers.facebook.com/docs/facebook-login/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Facebook
					</a>{" "}
					account, or register their own email-verified account; they can then
					post custom game requests, or find suitable friends to play the video
					game{" "}
					<a
						href="https://www.dota2.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						DotA 2
					</a>{" "}
					together.
					<br />
					<br />
					<a
						href="https://github.com/daoxi/craigsdota"
						target="_blank"
						rel="noopener noreferrer"
					>
						Click here
					</a>{" "}
					to view the source code in its repository, or view the{" "}
					<a
						href="https://daoxisun.com/resources/CraigsDota_project_report.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						project report
					</a>{" "}
					below (uses the browser&#39;s PDF viewer).
				</p>
				<div className={classes.pdfviewer}>
					<PdfEmbed embedPath="https://daoxisun.com/resources/CraigsDota_project_report.pdf" />
				</div>
			</div>
		</div>
	);
}

export default CraigsDota;
