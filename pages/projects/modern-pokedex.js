/* the Modern Pokedex project page */
import classes from "../components/ContentTemplate.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import BackToProjects from "../components/BackToProjects";

/* Import the images to be inserted into the page */
import pokedexHomepage from "../../public/assets/modern-pokedex-page/pokedex-homepage.png";
import pokedexInfo from "../../public/assets/modern-pokedex-page/pokedex-info.png";
import pokedexChart from "../../public/assets/modern-pokedex-page/pokedex-chart.png";
import pokedexType from "../../public/assets/modern-pokedex-page/pokedex-type.png";
import pokedexSkeletons from "../../public/assets/modern-pokedex-page/pokedex-skeletons.png";
import pokedexErrors from "../../public/assets/modern-pokedex-page/pokedex-errors.png";

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
						This app has been deployed to{" "}
						<a
							href="https://vercel.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vercel
						</a>{" "}
						and you can access{" "}
						<a
							href="https://modern-pokedex-smoky.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							its <strong>live demo</strong> here
						</a>
						, or{" "}
						<a
							href="https://github.com/daoxi/modern-pokedex"
							target="_blank"
							rel="noopener noreferrer"
						>
							its repository here
						</a>
						.
					</p>
					<p>The user can search and choose a Pokémon from the homepage:</p>
					<Link
						href={pokedexHomepage.src}
						passHref
						className={classes.insert_img_wrapper}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={classes.insert_img}
							src={pokedexHomepage}
							alt="Pokedex homepage"
							width="1580"
							height="1180"
							title="Pokedex homepage"
						/>
					</Link>
					<div className={classes.spacer1}></div>
					<p>
						On the Pokémon info page, the user can view various details and use
						the <strong>left/right arrows</strong> to navigate to the
						previous/next Pokémon:
					</p>
					<Link
						href={pokedexInfo.src}
						passHref
						className={classes.insert_img_wrapper}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={classes.insert_img}
							src={pokedexInfo}
							alt="Pokedex info"
							width="1580"
							height="1460"
							title="Pokedex info"
						/>
					</Link>
					<div className={classes.spacer1}></div>
					<p>
						The Stats Chart tab contains an interactive bar chart that
						dynamically updates based on the Pokémon ability that the user
						selects:
					</p>
					<Link
						href={pokedexChart.src}
						passHref
						className={classes.insert_img_wrapper}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={classes.insert_img}
							src={pokedexChart}
							alt="Pokedex chart"
							width="1017"
							height="987"
							title="Pokedex chart"
						/>
					</Link>
					<div className={classes.spacer1}></div>
					<p>
						There're also other extra features, such as when the user hovers on
						a Pokémon type on the info page, it will display its strengths and
						weaknesses:
					</p>
					<Link
						href={pokedexType.src}
						passHref
						className={classes.insert_img_wrapper}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={classes.insert_img}
							src={pokedexType}
							alt="Pokedex type"
							width="514"
							height="370"
							title="Pokedex type"
						/>
					</Link>
					<div className={classes.spacer1}></div>
					<p>
						The app is optimized with lazy loading and has fallback skeletons
						for anything that needs to be loaded from the API, for example:
					</p>
					<Link
						href={pokedexSkeletons.src}
						passHref
						className={classes.insert_img_wrapper}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={classes.insert_img}
							src={pokedexSkeletons}
							alt="Pokedex skeletons"
							width="1580"
							height="1156"
							title="Pokedex skeletons"
						/>
					</Link>
					<div className={classes.spacer1}></div>
					<p>And it also handles errors in case the API fails:</p>
					<Link
						href={pokedexErrors.src}
						passHref
						className={classes.insert_img_wrapper}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={classes.insert_img}
							src={pokedexErrors}
							alt="Pokedex errors"
							width="1580"
							height="480"
							title="Pokedex errors"
						/>
					</Link>
					<div className={classes.spacer1}></div>
					<p>
						Again, feel free to check out the{" "}
						<a
							href="https://modern-pokedex-smoky.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<strong>live demo</strong>
						</a>
						.
					</p>
					<div className={classes.spacer1}></div>
				</div>
			</div>
		</div>
	);
}

export default ModernPokedex;
