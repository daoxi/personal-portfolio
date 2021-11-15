import classes from "./ProjCard.module.css";

function ProjCard(props) {
  return (
    <div className={classes.card}>
      <img className={classes.card_img} src={props.img} />
      <h2 className={classes.card_title}>{props.title}</h2>
      <p className={classes.card_description}>{props.description}</p>
      <button className={classes.card_btn}>{props.buttontext}</button>
    </div>
  );
}

export default ProjCard;
