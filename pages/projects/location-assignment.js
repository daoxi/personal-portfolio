/* the Location-Map-Time assignment page */
import classes from "../components/IntroTemplate.module.css";
import Link from "next/link";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Head from "next/head";

function LocationAssignment() {
	return (
        (<div>
            <Head>
				<title>Location-Map-Time Assignment</title>
				<meta
					name="description"
					content="Learn more about this project here."
				/>
			</Head>
            <div className={classes.introcontainer}>
				<Link href="/projects" passHref legacyBehavior>
					<button className={classes.btnback}>Go back to Projects</button>
				</Link>
				<h1 className={classes.title}>Location-Map-Time Assignment</h1>

				<p className={classes.intro}>
					A quick simple web assignment for{" "}
					<a
						href="https://www.accuenergy.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Accuenergy (Canada) Inc
					</a>
					, it utilises Google Maps JavaScript API, Google Places API (for
					Autocomplete), and Google Time Zone API.
					<br />
					<br />
					User can get location by browser/client, or input at search box
					(Autocomplete enabled), or simply click on any point (including any
					city/country/continent) on the map. The outputs are UTC timestamp (in
					seconds), local time (updated every second), time zone, latitude and
					longitude, these values are updated dynamically when user choose a new
					location in any way.
					<br />
					<br />
					<a
						href="https://github.com/daoxi/location-map-time-assignment"
						target="_blank"
						rel="noopener noreferrer"
					>
						Click here
					</a>{" "}
					to view the source code in its repository, and{" "}
					<a
						href="https://daoxisun.com/resources/location-map-time-assignment-demo/"
						target="_blank"
						rel="noopener noreferrer"
					>
						click here
					</a>
					{/* the link directs to where the demo is currently hosted, which is a seperate place from where this app itself (personal portfolio website) is deployed*/}{" "}
					for the live demo, or watch the Youtube video below.
				</p>
				<div className={classes.youtubevideo}>
					<YoutubeEmbed embedId="wiBBD6WVMKM" />
				</div>
			</div>
        </div>)
    );
}

export default LocationAssignment;
