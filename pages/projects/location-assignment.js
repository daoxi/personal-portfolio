/* the Location-Map-Time assignment page */
import MainNavigation from "../components/MainNavigation";
import classes from "../components/IntroTemplate.module.css";
import Link from "next/link";
import YoutubeEmbed from "../components/YoutubeEmbed";

function LocationAssignment() {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <div className={classes.introcontainer}>
        <Link href="/projects">
          <button className={classes.btnback}>Go back to Projects</button>
        </Link>
        <h1 className={classes.title}>Location-Map-Time Assignment</h1>

        <p className={classes.intro}>
          An interview assignment for the web developer position at{" "}
          <a href="https://www.accuenergy.com/">Accuenergy (Canada) Inc</a>, it
          utilises Google Maps JavaScript API, Google Places API (for
          Autocomplete), and Google Time Zone API.
          <br />
          User can get location by browser/client, or input at search box
          (Autocomplete enabled), or simply click on any point (including any
          city/country/continent) on the map.
          <br />
          The outputs are UTC timestamp (in seconds), local time (updated every
          second), time zone, latitude and longitude, these values are updated
          dynamically when user choose a new location in any way.
          <br />
          <a
            href="https://github.com/daoxi/location-map-time-assignment"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* the link directs to where the demo is currently hosted, which is a seperate place from where this project is hosted*/}
            Click here
          </a>{" "}
          for the source code, and{" "}
          <a
            href="https://daoxisun.com/resources/location-map-time-assignment-demo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>{" "}
          for the live demo, or watch the Youtube video below.
        </p>
        <div className={classes.youtubevideo}>
          <YoutubeEmbed embedId="wiBBD6WVMKM" />
        </div>
      </div>
    </div>
  );
}

export default LocationAssignment;
