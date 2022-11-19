import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UserList from './component/UserList'
import UsersForm from './component/UsersForm'

function App() {
  const[ users, setUsers ] = useState([]);
  const [ userSelected, setUserSelected ] = useState(null);

  useEffect(()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
        .then((res) => setUsers(res.data));
  },[]);

  const getUser = ()=> {
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then((res) => setUsers(res.data));
  }

  const addUser = (newUser)=> {
    axios.post("https://users-crud1.herokuapp.com/users/", newUser)
        .then(() => getUser())
        .catch((error)= console.log(error.response));
  }

  const deleteUser = (id)=> {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
    .then(() => getUser());
  }

  const selectUser = (user)=> {
    setUserSelected(user);
  } 

  const deselectUser = ()=> setUserSelected(null);

  const updateUser = (newUser)=> {
    axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}`, newUser)
    .then(() => setUsers())
    .catch((error) => console.log(error.response));
  }

  return (
    <div className="App">

      <div className="App__div App__div-c3">
        <UserList
          users={users}
          deleteUser={deleteUser}
          selectUser={selectUser}
        />
      </div>

      <div className="App__div App__div-c1">
        <UsersForm
          addUser={addUser}
          userSelected={userSelected}
          updateUser={updateUser}
          deselectUser={deselectUser}
        />
      </div>
    </div>
  )
}

export default App
