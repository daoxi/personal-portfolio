/* navigation bar component */
import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/legacy/image"; /* use next/image instead of regular img element, to avoid problem in Next.js imported component's image routing */
import { useRouter } from "next/router"; /* used for checking current route to style navigation links accordingly*/

import githubIcon from "../../public/assets/nav-icons/github_icon.png";
import linkedinIcon from "../../public/assets/nav-icons/linkedin_icon.png";

function MainNavigation() {
  //The following function is used to output a string to be used as css class if the input link route matches the current route
  const CheckLink = (linkRoute) => {
    const router = useRouter();
    let currentRoute = router.pathname;
    let setClass = "";
    const classesPropertyName = "currentpage";
    //first, deal with the special situation where the route to be check is the homepage route
    if (linkRoute === "/") {
      setClass = currentRoute === linkRoute ? classesPropertyName : "";
    } else {
      //compare the current route only up to the length of the link route, so that the following conditional operator holds true for both the parent route and its child route
      setClass =
        currentRoute.substring(0, linkRoute.length) === linkRoute
          ? classesPropertyName
          : "";
    }
    return setClass;
  };

  return (
    (<header className={classes.navbar}>
      <div className={classes.navleftintro}>
        <Link href="/" passHref legacyBehavior>
          <div>
            <div className={classes.text1}>
              Daoxi Sun<br></br>
            </div>
            <div className={classes.text2}>Personal Portfolio Website</div>
          </div>
        </Link>
      </div>
      <ul className={classes.navleftlist}>
        <li className={classes.navleftlink}>
          <Link href="/" passHref className={classes[CheckLink("/")]}>
            Home
            {/* call the function to check the route, and style the element conditionally */}
          </Link>
        </li>
        <li className={classes.navleftlink}>
          <Link href="/projects" passHref className={classes[CheckLink("/projects")]}>
            Projects
          </Link>
        </li>
        <li className={classes.navleftlink}>
          <Link href="/more" passHref className={classes[CheckLink("/more")]}>
            More
          </Link>
        </li>
      </ul>
      <ul className={classes.navrightlist}>
        <li>
          <a
            href="https://github.com/daoxi"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* wrap the next/image Image element because it's absolutely positioned (hence doesn't support margin/padding/etc.) */}
            <div className={classes.iconwrapper}>
              <Image
                className={classes.navrighticon}
                src={githubIcon}
                alt="github_icon"
                width="200"
                height="200"
              />
            </div>
          </a>
				</li>
				<li>
					<a
            href="https://LinkedIn.com/in/Daoxi"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* wrap the next/image Image element because it's absolutely positioned (hence doesn't support margin/padding/etc.) */}
            <div className={classes.iconwrapper}>
              <Image
                className={classes.navrighticon}
                src={linkedinIcon}
                alt="linkedin_icon"
                width="200"
                height="200"
              />
            </div>
          </a>
        </li>
      </ul>
    </header>)
  );
}

export default MainNavigation;
