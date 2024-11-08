/* navigation bar component */
import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image"; /* use next/image instead of regular img element, to avoid problem in Next.js imported component's image routing */
import { useRouter } from "next/router"; /* used for checking current route to style navigation links accordingly*/

import githubIcon from "../../public/assets/nav-icons/github_icon.png";
import linkedinIcon from "../../public/assets/nav-icons/linkedin_icon.png";

function MainNavigation() {
	//The following function is used to output a string to be used as css class if the input link route matches the current route
	const CheckLink = (linkRoute) => {
		const router = useRouter();
		let currentRoute = router.pathname;
		let setClass = "";
		const classesPropertyName = "current-page";
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
		<header className={classes.navbar}>
			<div className={classes["nav-left-intro"]}>
				<Link href="/" passHref>
					<div>
						<div className={classes.text1}>
							Daoxi Sun<br></br>
						</div>
						<div className={classes.text2}>Personal Portfolio Website</div>
					</div>
				</Link>
			</div>
			<ul className={classes["nav-left-list"]}>
				<li className={classes["nav-left-link"]}>
					<Link href="/" passHref className={classes[CheckLink("/")]}>
						Home
						{/* call the function to check the route, and style the element conditionally */}
					</Link>
				</li>
				<li className={classes["nav-left-link"]}>
					<Link
						href="/projects"
						passHref
						className={classes[CheckLink("/projects")]}
					>
						Projects
					</Link>
				</li>
				<li className={classes["nav-left-link"]}>
					<Link href="/more" passHref className={classes[CheckLink("/more")]}>
						More
					</Link>
				</li>
			</ul>
			<ul className={classes["nav-right-list"]}>
				<li>
					<a
						href="https://github.com/daoxi"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={classes["nav-right-icon"]}
							src={githubIcon}
							alt="github_icon"
							width="200"
							height="200"
						/>
					</a>
				</li>
				<li>
					<a
						href="https://LinkedIn.com/in/Daoxi"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={classes["nav-right-icon"]}
							src={linkedinIcon}
							alt="linkedin_icon"
							width="200"
							height="200"
						/>
					</a>
				</li>
			</ul>
		</header>
	);
}

export default MainNavigation;
