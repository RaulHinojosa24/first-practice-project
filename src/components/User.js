import styles from "./User.module.css";

const User = (props) => {
  return <div className={styles.user}>{props.children}</div>;
};

export default User;
