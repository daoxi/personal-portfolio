/* the image slides generator intro page */
import MainNavigation from "../components/MainNavigation";
import classes from "../components/IntroTemplate.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

/* Import the images to be inserted into the page */
import slidesScreenshot from "../../public/assets/image-slides-generator-page/image-slides-generator-screenshot.png";
import slidesScreenshot2 from "../../public/assets/image-slides-generator-page/image-slides-generator-screenshot2.png";

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
          A webpage that allows the users to interact with slides generated
          using random room images (sourced using certain keywords) fetched from{" "}
          <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash API
          </a>
          , some features were implemented by utilizing{" "}
          <a
            href="https://jquery.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            jQuery
          </a>{" "}
          and{" "}
          <a
            href="https://swiperjs.com/swiper-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            Swiper API
          </a>
          .<br />
          <br />
          Some of the details include:
        </p>
        <ul className={classes.list}>
          <li>
            Switch slide by either dragging any slide, or clicking on either
            left/right (blurred) slide, or pressing &quot;←&quot;/&quot;→&quot;
            on keyboard{" "}
          </li>
          <li>
            Slide info updates dynamically after switching slide, message
            appears when adding/removing a slide.
          </li>
          <li>
            The &quot;+&quot; sign used to add a new slide only appears when
            reaching the last slide
          </li>
          <li>
            Transitions for cursor hovering/clicking on slides/buttons, for
            entering/exiting fullscreen slide, etc.
          </li>
          <li>and more...</li>
        </ul>
        <p className={classes.intro}>
          <a
            href="https://github.com/daoxi/image-slides-generator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>{" "}
          to access the source code in the repository.
          <br />
          <a
            href="https://daoxisun.com/resources/image-slides-generator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>{" "}
          for a live demo (the free{" "}
          <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash API
          </a>{" "}
          could be unstable occasionally), or view some screenshots below.
        </p>
        <Link href={slidesScreenshot.src} passHref>
          <a
            className={classes.insert_img_wrapper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={classes.insert_img}
              src={slidesScreenshot}
              alt="slidesScreenshot"
              width="1498"
              height="892"
              title="Slides Screenshot"
            />
          </a>
        </Link>
        <Link href={slidesScreenshot2.src} passHref>
          <a
            className={classes.insert_img_wrapper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={classes.insert_img}
              src={slidesScreenshot2}
              alt="slidesScreenshot2"
              width="1498"
              height="892"
              title="Slides Screenshot Fullscreen"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ImageSlidesGenerator;
