/* the Projects page */
import MainNavigation from "./components/MainNavigation";
import ProjectsIntro from "./components/ProjectsIntro";
import Head from "next/head";

function Projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Check out my previous and ongoing projects." />
      </Head>
      <MainNavigation></MainNavigation>
      <ProjectsIntro></ProjectsIntro>
    </div>
  );
}
export default Projects;
