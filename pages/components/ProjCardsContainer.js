/* the component for containing/wrapping the project cards in a grid container */
import classes from "./ProjCardsContainer.module.css";
import ProjCard from "./ProjCard";

/* import all the local images here so that they can be accessed when running "next build" */
import projThumbPersonalPortfolioWebsite from "../../public/assets/proj-thumbnails/Personal-Portfolio-Website-thumb.png";
import projThumbCustomWpPlugins from "../../public/assets/proj-thumbnails/Custom-WP-Plugins-thumb.png";
import projThumbLocationMapTimeAssignment from "../../public/assets/proj-thumbnails/Location-Map-Time-Assignment-thumb.png";
import projThumbCraigsDota from "../../public/assets/proj-thumbnails/CraigsDota-thumb.png";
import projThumbLexusLandingPage from "../../public/assets/proj-thumbnails/Lexus-Landing-Page-thumb.jpg";
import projThumbImageSlidesGenerator from "../../public/assets/proj-thumbnails/Image-Slides-Generator-thumb.png";
import projThumbGetem from "../../public/assets/proj-thumbnails/Getem-thumb.png";
import projThumbTest from "../../public/assets/test.png";

function ProjCardsContainer() {
	return (
		<div className={classes.card_grid}>
			<ProjCard
				tags={["React", "TypeScript", "Bootstrap", "SCSS"]}
				img={projThumbGetem}
				title="Getem (Markdown Note App)"
				description={
					<span>
						<strong>
							This is my most recent and currently maintained project
						</strong>
						, it's a Markdown note taking app that also allows you to search and
						manage different notes with their tags and much more.
					</span>
				}
				buttontext="Check It Out!"
				buttonlink="/projects/pending"
				customColor="#00BFFF"
			/>

			<ProjCard
				tags={["Next.js", "React", "JavaScript", "CSS"]}
				img={projThumbPersonalPortfolioWebsite}
				title="Personal Portfolio Website"
				description="This portfolio website itself is developed with the React framework Next.js, and then deployed on a Node.js custom server."
				buttontext="Learn More"
				buttonlink="/projects/portfolio-website"
			/>

			<ProjCard
				tags={["PHP", "jQuery", "MySQL", "WordPress"]}
				img={projThumbCustomWpPlugins}
				title="Custom WordPress Plugins (for Auto Trader)"
				description="These plugins are programmed from scratch to add various new customized features to the WordPress content management system."
				buttontext="Learn More"
				buttonlink="/projects/custom-wordpress-plugins"
			/>

			<ProjCard
				tags={["Angular", "TypeScript", "Bootstrap", "Firebase"]}
				img={projThumbCraigsDota}
				title="CraigsDota (Platform for DotA Gamers)"
				description="A posting-based (similar to Craigslist) project for gamers to find playmates, users can login (third-party auth / register accounts) to share game-related info, and more."
				buttontext="Learn More"
				buttonlink="/projects/craigsdota"
			/>

			<ProjCard
				tags={["HTML", "CSS", "JavaScript", "jQuery"]}
				img={projThumbImageSlidesGenerator}
				title="Image Slides Generator"
				description="This webpage enables various interactions with image slides that are generated by the Unsplash API"
				buttontext="Learn More"
				buttonlink="/projects/image-slides-generator"
			/>

			<ProjCard
				tags={["WordPress", "PHP", "SEO", "UI Design"]}
				img={projThumbLexusLandingPage}
				title="Lexus Landing Page"
				description="A web design interview assignment that involves building a car's landing page for Weins Canada Inc."
				buttontext="Learn More"
				buttonlink="/projects/lexus-landing-page"
			/>

			<ProjCard
				tags={["HTML", "JavaScript", "jQuery"]}
				img={projThumbLocationMapTimeAssignment}
				title="Location-Map-Time Assignment"
				description="A quick simple interview assignment that utilizes multiple Google Maps APIs and various web development techniques."
				buttontext="Learn More"
				buttonlink="/projects/location-assignment"
			/>
		</div>
	);
}

export default ProjCardsContainer;
