/* the Getem project page */
import classes from "../components/ContentTemplate.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

/* Import the images to be inserted into the page */
import getemHomeManage from "../../public/assets/getem-project-page/getem-home-manage.png";
import getemViewNote from "../../public/assets/getem-project-page/getem-view-note.png";
import getemEditNote from "../../public/assets/getem-project-page/getem-edit-note.png";
import getemEditNoteEditTags from "../../public/assets/getem-project-page/getem-edit-note-edit-tags.png";

import BackToProjects from "../components/BackToProjects";

function GetemProject() {
	return (
		<div>
			<Head>
				<title>GetEm Project (Markdown Note App)</title>
				<meta
					name="description"
					content="Learn more about this project here."
				/>
			</Head>
			<div className={classes["content-container"]}>
				<BackToProjects />
				<h1 className={classes.title}>GetEm Project - Markdown Note App</h1>

				<div className={classes.body}>
					<p>
						This is my{" "}
						<strong>most recent and currently maintained project</strong>, you
						can check out the{" "}
						<a
							href="https://getem.daoxisun.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							live demo here
						</a>{" "}
						(mobile/touch friendly), or{" "}
						<a
							href="https://github.com/daoxi/GetEm"
							target="_blank"
							rel="noopener noreferrer"
						>
							its repository here
						</a>
						.
					</p>
					<p>
						Below are a few screenshots (it&apos;s still recommended to check out
						the{" "}
						<a
							href="https://getem.daoxisun.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							live demo
						</a>{" "}
						instead because it&apos;s more comprehensive and up-to-date):
					</p>
					<Link
						href={getemHomeManage.src}
						passHref
						className={classes.insert_img_wrapper}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={classes.insert_img}
							src={getemHomeManage}
							alt="GetEm homepage manage mode"
							width="1170"
							height="632"
							title="GetEm homepage manage mode"
						/>
					</Link>
					<div className={classes.spacer1}></div>
					<Link
						href={getemViewNote.src}
						passHref
						className={classes.insert_img_wrapper}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={classes.insert_img}
							src={getemViewNote}
							alt="GetEm view note"
							width="1170"
							height="900"
							title="GetEm view note"
						/>
					</Link>
					<div className={classes.spacer1}></div>
					<Link
						href={getemEditNote.src}
						passHref
						className={classes.insert_img_wrapper}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={classes.insert_img}
							src={getemEditNote}
							alt="GetEm edit note"
							width="750"
							height="800"
							title="GetEm edit note"
						/>
					</Link>
					<div className={classes.spacer1}></div>
					<Link
						href={getemEditNoteEditTags.src}
						passHref
						className={classes.insert_img_wrapper}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={classes.insert_img}
							src={getemEditNoteEditTags}
							alt="GetEm edit tags on edit note page"
							width="750"
							height="800"
							title="GetEm edit tags on edit note page"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default GetemProject;
