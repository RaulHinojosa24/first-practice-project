import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const closeHandler = (event) => {
    console.log(event);
    event.stopPropagation();
    props.onCloseErrorModal();
  };

  const stopPropagation = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className={styles["error-modal"]} onClick={closeHandler}>
      <Card className={styles["error-modal__card"]} onClick={stopPropagation}>
        <div className={styles["error-modal__card-title"]}>Invalid input</div>
        <div className={styles["error-modal__card-content"]}>
          <p>{props.children}</p>
          <Button
            className={styles["error-modal__card-button"]}
            onClick={closeHandler}
          >
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
