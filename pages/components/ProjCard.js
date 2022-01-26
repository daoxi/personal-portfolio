/* individual project cards */
import classes from "./ProjCard.module.css";
import Link from "next/link";

function ProjCard(props) {
  return (
    <div className={classes.card}>
      <img className={classes.card_img} src={props.img} />
      <h2 className={classes.card_title}>{props.title}</h2>

      <ul className={classes.tags}>
        {/* Render each tag in the array as an li item */}
        {props.tags.map((tag, i) => {
          return (
            <li key={i} className={classes.tag}>
              {tag}
            </li>
          );
        })}
      </ul>

      <p className={classes.card_description}>{props.description}</p>
      <Link href={props.buttonlink}>
          <button className={classes.card_btn}>{props.buttontext}</button>
      </Link>

    </div>
  );
}

export default ProjCard;
