import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.navbar}>
      <nav>
        <ul>
          <li className={classes.navleftintro}>
            <Link href="/">
              <div>
                <div className={classes.text1}>
                  Daoxi Sun<br></br>
                </div>
                <div className={classes.text2}>Personal Portfolio Website</div>
              </div>
            </Link>
          </li>
          <li className={classes.navleft}>
            <Link href="/">Home</Link>
          </li>
          <li className={classes.navleft}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={classes.navleft}>
            <Link href="/more">More</Link>
          </li>

          <li>
            <Link href="https://github.com/daoxi">
              <img
                src="assets/nav-icons/github_icon.png"
                alt="github_icon"
                className={classes.navright}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
