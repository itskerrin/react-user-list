import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (username, age) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: username, age: age, id: Math.random().toString() },
      ]; // returns new arr, copies elements from prev list and adds to new arr, adds new obj (params)
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
