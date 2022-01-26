/* the component for containing/wrapping the project cards in a grid container */
import classes from "./ProjCardsContainer.module.css";
import ProjCard from "./ProjCard";

function ProjCardsContainer() {
  return (
    <div className={classes.card_grid}>
      <ProjCard
        tags={["tag1", "tag2", "tag3"]}
        img="assets/test.png"
        title="The Title"
        description="The Description"
        buttontext="Learn More"
        buttonlink="/projects/location-assignment"
      />
      <ProjCard
        tags={["tag1"]}
        img="assets/test.png"
        title="The Title 2"
        description="The Description 2"
        buttontext="Learn More"
        buttonlink="/more"
      />
      <ProjCard
        tags={["tag4", "tag5"]}
        img="assets/test.png"
        title="The Title 3"
        description="The Description 3"
        buttontext="Learn More"
        buttonlink="/"
      />
      <ProjCard
        tags={["tag44", "tag55", "tag66"]}
        img="assets/test.png"
        title="The Title 4"
        description="The Description 4"
        buttontext="Learn More"
        buttonlink="/"
      />
    </div>
  );
}

export default ProjCardsContainer;
