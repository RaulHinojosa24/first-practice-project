import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const newUserHandler = (user) => {
    setUsers((prevValue) => {
      return [user, ...prevValue];
    });
  };

  return (
    <div>
      <UserForm onNewUser={newUserHandler}></UserForm>
      {users.length > 0 && <UserList users={users}></UserList>}
    </div>
  );
}

export default App;
