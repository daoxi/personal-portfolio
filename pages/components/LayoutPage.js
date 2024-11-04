import classes from "./LayoutPage.module.css";
import MainNavigation from "./MainNavigation";

function LayoutPage(props) {
	return (
		<>
			<MainNavigation />
			<div className={classes["page-container"]}>
				{props.children}
			</div>
		</>
	);
}

export default LayoutPage;
