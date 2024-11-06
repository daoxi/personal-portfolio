/* This component is used for embedding a Youtube video, syntax is <YoutubeEmbed embedId="xxxxxxxxxxx"/> when being used in other components */
import PropTypes from "prop-types";
import classes from "./YoutubeEmbed.module.css";

const YoutubeEmbed = ({ embedId }) => (
	<>
		<div className={classes.videoresponsive}>
			<iframe
				credentialless="true" //making TrustedHTML assignment no longer required (both TrustedHTML assignment and credentialless attribute are only supported on Chromium-based browsers as of 2024Nov5)
				width="1920"
				height="1080"
				src={`https://www.youtube.com/embed/${embedId}`}
				//frameBorder="0" //deprecated
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="embedded Youtube video"
			/>
		</div>
	</>
);

YoutubeEmbed.propTypes = {
	embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
