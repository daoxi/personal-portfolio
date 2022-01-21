/* navigation bar component */
import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image"; /* use next/image instead of regular img element, to avoid problem in Next.js imported component's image routing */

function MainNavigation() {
  return (
    <header className={classes.navbar}>
      <div className={classes.navleftintro}>
        <Link href="/">
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
          <Link href="/">Home</Link>
        </li>
        <li className={classes.navleftlink}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={classes.navleftlink}>
          <Link href="/more">More</Link>
        </li>
      </ul>

      <ul className={classes.navrightlist}>
        <li>
          <Link href="https://github.com/daoxi">
            {/* wrap the next/image Image element because it's absolutely positioned (hence doesn't support margin/padding/etc.) */}
            <div className={classes.iconwrapper}>
              <Image
                className={classes.navrighticon}
                src="/assets/nav-icons/github_icon.png"
                alt="github_icon"
                width="50"
                height="50"
              />
            </div>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
