/* the portfolio website project page */
import MainNavigation from "../components/MainNavigation";
import classes from "../components/IntroTemplate.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

/* Import the images to be inserted into the page */
import developerWpAdminMetabox from "../../public/assets/custom-wordpress-plugins-page/developer-wp-admin-metabox.png";
import developerWpFrontend from "../../public/assets/custom-wordpress-plugins-page/developer-wp-frontend.png";
import slideshowWpAdmin from "../../public/assets/custom-wordpress-plugins-page/slideshow-wp-admin.png";
import slideshowWpFrontend from "../../public/assets/custom-wordpress-plugins-page/slideshow-wp-frontend.png";

function CustomWordPressPlugins() {
  return (
    <div>
      <Head>
        <title>Custom WordPress Plugins</title>
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
        <h1 className={classes.title}>Custom WordPress Plugins</h1>

        <div className={classes.intro}>
          These plugins are built from scratch using{" "}
          <a
            href="https://www.php.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PHP
          </a>{" "}
          and{" "}
          <a
            href="https://jquery.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            jQuery
          </a>{" "}
          (passes the{" "}
          <a
            href="https://github.com/WordPress/WordPress-Coding-Standards"
            target="_blank"
            rel="noopener noreferrer"
          >
            WordPress Coding Standards
          </a>{" "}
          with{" "}
          <a
            href="https://github.com/squizlabs/PHP_CodeSniffer"
            target="_blank"
            rel="noopener noreferrer"
          >
            PHP_CodeSniffer
          </a>
          ), data are saved in the{" "}
          <a
            href="https://www.mysql.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MySQL
          </a>{" "}
          database, you can access{" "}
          <a
            href="https://github.com/daoxi/custom-wordpress-plugins"
            target="_blank"
            rel="noopener noreferrer"
          >
            its repository here
          </a>{" "}
          to view the source code (see the details below about the{" "}
          <a
            href="https://daoxisun.com/custom-wordpress-demo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            demo
          </a>
          ). There are currently 2 plugins (both built for{" "}
          <a
            href="https://go.trader.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trader Corporation
          </a>
          {"'"}
          s coding challenge):
          <br />
          <h2>Trader Developer Plugin</h2>A plugin that allows the admin to add
          multiple authors (developers) to each post separately and display them
          to the front-end.
          <h4>Admin Side</h4>A{" "}
          <a
            href="https://developer.wordpress.org/plugins/metadata/custom-meta-boxes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            meta box
          </a>{" "}
          is added to every post-editor page to display all users whose roles
          are "author", the admin can then select which author(s)/developer(s)
          to be included for that specific post, the selection will be saved to
          the database when the post is saved.
          <br />
          (To access the admin side's demo, please kindly contact me to request
          the login credentials.)
          <br />
          <br />
          <Link href={developerWpAdminMetabox.src} passHref>
            <a
              className={classes.insert_img_wrapper}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={classes.insert_img}
                src={developerWpAdminMetabox}
                alt="developerWpAdminMetabox"
                width="496"
                height="187"
                title="Plugin Screenshot"
              />
            </a>
          </Link>
          <h4>Front End</h4>A box will be displayed at the end of each post, it
          will display a list of users that were selected for that specific
          post, with their{" "}
          <a
            href="https://gravatar.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gravatars
          </a>{" "}
          as avatars, and clickable names that link to the webpages set in their
          profiles.
          <br />
          (You can find various posts on the{" "}
          <a
            href="https://daoxisun.com/custom-wordpress-demo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            website for demoing custom plugins
          </a>{" "}
          to view some example boxes under each post)
          <br />
          <br />
          <Link href={developerWpFrontend.src} passHref>
            <a
              className={classes.insert_img_wrapper}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={classes.insert_img}
                src={developerWpFrontend}
                alt="developerWpFrontend"
                width="674"
                height="406"
                title="Plugin Screenshot"
              />
            </a>
          </Link>
          <h2>Trader Slideshow Plugin</h2>A plugin that allows the admin to add,
          remove, reorder images to create a slideshow that can be added to any
          post/page.
          <h4>Admin Side</h4>A submenu page is available under Settings for the
          admin to either upload an image or select an existing image,
          alternatively online images can also be added by simply copying the
          URL into the field. Once the Add button is clicked, the image will be
          added to the slideshow list, then the admin can drag-and-drop each
          item to rearrange their orders of display in the slideshow. These
          settings will be saved to the database once the save button is
          clicked.
          <br />
          (To access the admin side's demo, please kindly contact me to request
          the login credentials.)
          <br />
          <br />
          <Link href={slideshowWpAdmin.src} passHref>
            <a
              className={classes.insert_img_wrapper}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={classes.insert_img}
                src={slideshowWpAdmin}
                alt="slideshowWpAdmin"
                width="1097"
                height="780"
                title="Plugin Screenshot"
              />
            </a>
          </Link>
          <h4>Front End</h4>A simple slideshow will be added whenever the user
          adds the defined{" "}
          <a
            href="https://codex.wordpress.org/shortcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            shortcode
          </a>{" "}
          to any post/page, both the arrows on the sides and the dots in the
          center can be used to navigate the slideshow. You can find an example
          at{" "}
          <a
            href="https://daoxisun.com/custom-wordpress-demo/shortcode-slideshow-on-a-page/"
            target="_blank"
            rel="noopener noreferrer"
          >
            this page
          </a>
          .<br />
          <br />
          <Link href={slideshowWpFrontend.src} passHref>
            <a
              className={classes.insert_img_wrapper}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={classes.insert_img}
                src={slideshowWpFrontend}
                alt="slideshowWpFrontend"
                width="763"
                height="436"
                title="Plugin Screenshot"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomWordPressPlugins;
