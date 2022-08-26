import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Max",
      age: 31,
    },
    {
      name: "Max",
      age: 31,
    },
  ]);

  return (
    <div>
      <UserForm></UserForm>
      {users.length > 0 && <UserList users={users}></UserList>}
    </div>
  );
}

export default App;
