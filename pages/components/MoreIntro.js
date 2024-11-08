/* intro component for the More page */
import classes from "./ContentTemplate.module.css";

function MoreIntro() {
	return (
		<div className={classes["content-container"]}>
			<h1 className={classes.title}>More about me</h1>
			<div className={classes.body}>
				<p>
					You can visit my{" "}
					<a
						href="https://daoxisun.weebly.com/university-class-projects.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						legacy portfolio website
					</a>{" "}
					to learn more about some of my other non-web-dev university
					engineering projects (some of which involve programming in various
					languages).
				</p>
				<p>
					You can also email me at{" "}
					<a href="mailto:daoxisun@gmail.com">daoxisun@gmail.com</a> for any
					questions you may have.
				</p>
			</div>
		</div>
	);
}

export default MoreIntro;
