import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={styles["error-modal"]}>
      <Card className={styles["error-modal__card"]}>
        <div className={styles["error-modal__card-title"]}>Invalid input</div>
        <div className={styles["error-modal__card-content"]}>
          <p>{props.children}</p>
          <Button className={styles["error-modal__card-button"]}>Okay</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
