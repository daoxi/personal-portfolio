/* the component for containing/wrapping the project cards in a grid container */
import classes from "./ProjCardsContainer.module.css";
import ProjCard from "./ProjCard";

/* import all the local images here so that they can be accessed when running "next build" */
import projThumbPersonalPortfolioWebsite from "../../public/assets/proj-thumbnails/Personal-Portfolio-Website-thumb.png";
import projThumbLocationMapTimeAssignment from "../../public/assets/proj-thumbnails/Location-Map-Time-Assignment-thumb.png";
import projThumbLexusLandingPage from "../../public/assets/proj-thumbnails/Lexus-Landing-Page-thumb.jpg";
import projThumbTest from "../../public/assets/test.png";

function ProjCardsContainer() {
  return (
    <div className={classes.card_grid}>
      <ProjCard
        tags={["React","Next.js","JavaScript/JSX","CSS"]}
        img={projThumbPersonalPortfolioWebsite}
        title="Personal Portfolio Website"
        description="This website itself is developed with React and Next.js, and then deployed on a Node.js custom server."
        buttontext="Learn More"
        buttonlink="/projects/portfolio-website"
      />
      <ProjCard
        tags={["HTML", "CSS", "JavaScript", "Ajax", "JSON"]}
        img={projThumbLocationMapTimeAssignment}
        title="Location-Map-Time Assignment"
        description="A tech interview assignment that utilizes multiple Google Maps APIs and various web development techniques."
        buttontext="Learn More"
        buttonlink="/projects/location-assignment"
      />
      <ProjCard
        tags={["tag4", "tag5"]}
        img={projThumbTest}
        title="The Title 3"
        description="The Description 3"
        buttontext="Learn More"
        buttonlink="/"
      />
      <ProjCard
        tags={["WordPress", "PHP", "SEO", "Photoshop"]}
        img={projThumbLexusLandingPage}
        title="Lexus Landing Page"
        description="A web design interview assignment that involves building a car's landing page for Weins Canada Inc."
        buttontext="Learn More"
        buttonlink="/projects/lexus-landing-page"
      />
    </div>
  );
}

export default ProjCardsContainer;
