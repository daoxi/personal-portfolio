/* This component is used for embedding a PDF file, 
it takes advantage of the browsers' built-in PDF viewers and thus the UI would be different in different browsers, 
it works for all modern browsers (Chrome, Safari, Firefox, Edge, etc., except for Internet Explorer (native without add-ons)) and for both desktop and mobile versions */

import PropTypes from "prop-types";
import classes from "./PdfEmbed.module.css";

const PdfEmbed = ({ embedPath }) => (
	<div className={classes["pdf-embed"]}>
		<object data={embedPath} type="application/pdf" width="100%" height="100%">
			{/* Handle the situation when the browser does not have a built-in PDF viewer (i.e. fallback), 
				note that using <iframe>...</iframe> instead might cause issue when refreshing the page (in Next.js) because iframe technically can't contain any child element */}
			{/*
				<iframe src={embedPath} width="100%" height="100%">
				*/}
			<div className={classes["fallback-msg"]}>
				<p>
					(Your browser does not support viewing PDF, but you can still use{" "}
					<a href={embedPath} target="_blank" rel="noopener noreferrer">
						this link
					</a>{" "}
					to access the PDF file.)
				</p>
			</div>

			{/*
			</iframe>
			*/}
		</object>
	</div>
);

PdfEmbed.propTypes = {
	embedPath: PropTypes.string.isRequired,
};

export default PdfEmbed;
