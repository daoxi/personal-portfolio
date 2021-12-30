/* the Projects page */
import MainNavigation from "./components/MainNavigation";
import ProjCardsContainer from "./components/ProjCardsContainer";

function Projects() {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <h1>This is the projects page.</h1>
      <ProjCardsContainer />
    </div>
  );
}
export default Projects;
