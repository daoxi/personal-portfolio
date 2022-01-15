/* navigation bar component */
import classes from "./MainNavigation.module.css";
import Link from "next/link";

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
            <img
              className={classes.navrighticon}
              src="assets/nav-icons/github_icon.png"
              alt="github_icon"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
