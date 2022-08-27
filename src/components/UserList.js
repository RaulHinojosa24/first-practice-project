import Card from "../UI/Card";
import User from "./User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles["user-list"]}>
      {props.users.map((user, index) => {
        return (
          <User key={user.id}>
            {user.name} ({user.age} years old)
          </User>
        );
      })}
    </Card>
  );
};

export default UserList;
