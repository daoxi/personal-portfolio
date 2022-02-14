/* the component for containing/wrapping the project cards in a grid container */
import classes from "./ProjCardsContainer.module.css";
import ProjCard from "./ProjCard";

/* import all the local images here so that they can be accessed when running "next build" */
import projThumbPersonalPortfolioWebsite from "../../public/assets/proj-thumbnails/Personal-Portfolio-Website-thumb.png";
import projThumbLocationMapTimeAssignment from "../../public/assets/proj-thumbnails/Location-Map-Time-Assignment-thumb.png";
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
        description="An interview assignment that utilizes multiple Google Maps APIs and various web development techniques."
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
        tags={["tag44", "tag55", "tag66"]}
        img={projThumbTest}
        title="The Title 4"
        description="The Description 4"
        buttontext="Learn More"
        buttonlink="/"
      />
    </div>
  );
}

export default ProjCardsContainer;
