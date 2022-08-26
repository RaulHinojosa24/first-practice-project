import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  return (
    <Card className={styles["user-form"]}>
      <form>
        <label className={styles["user-form__input-text"]}>
          Username
          <input className={styles["user-form__input"]} type="text" />
        </label>
        <label className={styles["user-form__input-text"]}>
          Age (Years)
          <input className={styles["user-form__input"]} type="text" />
        </label>
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
