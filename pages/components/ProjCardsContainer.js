/* the component for containing/wrapping the project cards in a grid container */
import classes from "./ProjCardsContainer.module.css";
import ProjCard from "./ProjCard";

/* import all the local images here so that they can be accessed when running "next build" */
import projThumbPersonalPortfolioWebsite from "../../public/assets/proj-thumbnails/Personal-Portfolio-Website-thumb.png";
import projThumbCustomWpPlugins from "../../public/assets/proj-thumbnails/Custom-WP-Plugins-thumb.png";
import projThumbLocationMapTimeAssignment from "../../public/assets/proj-thumbnails/Location-Map-Time-Assignment-thumb.png";
import projThumbCraigsDota from "../../public/assets/proj-thumbnails/CraigsDota-thumb.png";
import projThumbLexusLandingPage from "../../public/assets/proj-thumbnails/Lexus-Landing-Page-thumb.jpg";
import projThumbTest from "../../public/assets/test.png";

function ProjCardsContainer() {
  return (
    <div className={classes.card_grid}>
      <ProjCard
        tags={["React", "Next.js", "JavaScript/JSX", "CSS"]}
        img={projThumbPersonalPortfolioWebsite}
        title="Personal Portfolio Website"
        description="This website itself is developed with React and Next.js, and then deployed on a Node.js custom server."
        buttontext="Learn More"
        buttonlink="/projects/portfolio-website"
      />
      <ProjCard
        tags={["PHP", "jQuery", "MySQL", "WordPress"]}
        img={projThumbCustomWpPlugins}
        title="Custom WordPress Plugins"
        description="These plugins are programmed from scratch to add various new customized features to the content management system."
        buttontext="Learn More"
        buttonlink="/projects/custom-wordpress-plugins"
      />
      <ProjCard
        tags={["HTML", "JavaScript", "Ajax", "JSON"]}
        img={projThumbLocationMapTimeAssignment}
        title="Location-Map-Time Assignment"
        description="A tech interview assignment that utilizes multiple Google Maps APIs and various web development techniques."
        buttontext="Learn More"
        buttonlink="/projects/location-assignment"
      />
      <ProjCard
        tags={["Angular", "TypeScript", "Bootstrap", "Firebase"]}
        img={projThumbCraigsDota}
        title="M.Eng. Project: CraigsDota"
        description="A full-stack Angular project that implements a website for video gamers to find suitable playmates, users can use third-party login or register their own accounts."
        buttontext="Learn More"
        buttonlink="/projects/craigsdota"
      />
      <ProjCard
        tags={["WordPress", "PHP", "SEO", "UI Design"]}
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
