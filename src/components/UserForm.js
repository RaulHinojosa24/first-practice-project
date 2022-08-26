import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onNewUser({
      name: inputName,
      age: inputAge,
    });

    setInputName("");
    setInputAge("");
  };

  return (
    <Card className={styles["user-form"]}>
      <form onSubmit={submitHandler}>
        <label className={styles["user-form__input-text"]}>
          Username
          <input
            className={styles["user-form__input"]}
            type="text"
            value={inputName}
            onChange={nameChangeHandler}
          />
        </label>
        <label className={styles["user-form__input-text"]}>
          Age (Years)
          <input
            className={styles["user-form__input"]}
            type="number"
            value={inputAge}
            onChange={ageChangeHandler}
          />
        </label>
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
