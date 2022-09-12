/* the image slides generator intro page */
import MainNavigation from "../components/MainNavigation";
import classes from "../components/IntroTemplate.module.css";
import Link from "next/link";
import Head from "next/head";

function ImageSlidesGenerator() {
  return (
    <div>
      <Head>
        <title>Image Slides Generator</title>
        <meta
          name="description"
          content="Learn more about this project here."
        />
      </Head>
      <MainNavigation></MainNavigation>
      <div className={classes.introcontainer}>
        <Link href="/projects" passHref>
          <button className={classes.btnback}>Go back to Projects</button>
        </Link>
        <h1 className={classes.title}>Image Slides Generator</h1>

        <p className={classes.intro}>
		Test
        </p>
      </div>
    </div>
  );
}

export default ImageSlidesGenerator;
