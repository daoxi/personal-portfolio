/* the Getem project page */
import classes from "../components/ContentTemplate.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import BackToProjects from "../components/BackToProjects";

/* Import the images to be inserted into the page */

function ModernPokedex() {
	return (
		<div>
			<Head>
				<title>Modern Pokédex</title>
				<meta
					name="description"
					content="Learn more about this project here."
				/>
			</Head>
			<div className={classes["content-container"]}>
				<BackToProjects />
				<h1 className={classes.title}>Modern Pokédex</h1>

				<div className={classes.body}>
					<p>
						This is a Pokédex web app used to quickly explore and discover{" "}
						<a
							href="https://www.pokemon.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Pokémon
						</a>{" "}
						with their abilities, stats, and other detailed information. It's
						written in{" "}
						<a
							href="https://www.typescriptlang.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							TypeScript
						</a>{" "}
						and built using the{" "}
						<a
							href="https://react.dev/"
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
						</a>
						, and styled with{" "}
						<a
							href="https://tailwindcss.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tailwind CSS
						</a>
						. This app pulls data from the{" "}
						<a
							href="https://pokeapi.co/"
							target="_blank"
							rel="noopener noreferrer"
						>
							PokéAPI
						</a>{" "}
						(a RESTful API for Pokémon info).
					</p>
					<p>
						The user can search and pick a Pokémon they'd like to view from the
						homepage:
					</p>
				</div>
			</div>
		</div>
	);
}

export default ModernPokedex;
