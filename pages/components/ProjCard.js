/* individual project cards */
import classes from "./ProjCard.module.css";
import Link from "next/link";
import Image from "next/image";

function ProjCard(props) {
  return (
    <div className={classes.card} style={props.customColor /* custom color is optional */ && {"--main-card-color": props.customColor}}>
      <Image
        className={classes.card_img}
        src={props.img}
        alt="proj_thumb"
        width="1000"
        height="500"
      />
      <h2 className={classes.card_title}>{props.title}</h2>

      <ul className={classes.tags}>
        {/* The following function converts each tag in the array as an li item */}
        {/* React renders asynchronously, so props.tag is still undefined when React first renders the JSX, consequently the map method can cause error (happens when building with "next build").
        Therefore, the short-circuit evaluation is included so that the function only runs if props.tags is true (i.e. not undefined) */}
        {props.tags &&
          props.tags.map((tag, i) => {
            return (
              <li key={i} className={classes.tag}>
                {tag}
              </li>
            );
          })}
      </ul>

      <p className={classes.card_description}>{props.description}</p>

      {/* React renders asynchronously, so props.buttonlink is still undefined when React first renders the JSX, and href in Link elements can't be undefined or error can occur (happens when building with "next build").
      Therefore, the conditional operator returns an empty string when props.buttonlink is undefined */}
      <Link href={props.buttonlink ? props.buttonlink : ""} passHref>
        <button className={classes.card_btn}>{props.buttontext}</button>
      </Link>
    </div>
  );
}

export default ProjCard;
