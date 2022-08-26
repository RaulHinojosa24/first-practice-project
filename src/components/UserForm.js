import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const closeErrorModalHandler = () => {
    setErrorMessage("");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (inputName.trim() === "" && inputAge === "") {
      setErrorMessage('Please enter valid values for "Username" and "Age"');
      return;
    } else if (inputName.trim() === "") {
      setErrorMessage('Please enter valid "Username"');
      return;
    } else if (inputAge.trim() === "") {
      setErrorMessage('Please enter valid "Age" (> 0)');
      return;
    }

    props.onNewUser({
      name: inputName.trim(),
      age: inputAge,
    });

    setInputName("");
    setInputAge("");
  };

  return (
    <Card className={styles["user-form"]}>
      {errorMessage.length > 0 && (
        <ErrorModal onCloseErrorModal={closeErrorModalHandler}>
          {errorMessage}
        </ErrorModal>
      )}

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
