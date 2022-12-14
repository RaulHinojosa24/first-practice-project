import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${props.className} ${styles.card}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Card;
