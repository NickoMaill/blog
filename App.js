//MODULE IMPORT
import { useState } from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';
import { Context } from "./Context/BlogContext";

//VIEWS IMPORT
import Login from './Views/Login';
import Home from './Views/Home';
import NewPost from './Views/NewPost';
import User from './Views/User';

export default function App() {

  const [isLogged, setIsLogged] = useState(false)
  const [userId, setUserId] = useState(null)
  const [userPost, setUserPost] = useState([])

  const value = {
    isLogged: isLogged,
    setIsLogged: setIsLogged,

    userId: userId,
    setUserId: setUserId,

    userPost: userPost,
    setUserPost: setUserPost,
  }

  return (
    <Context.Provider value={value}>

      <NativeRouter>

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/newpost" element={<NewPost />} />
          <Route exact path="/user" element={<User />} />
        </Routes>

      </NativeRouter>

    </Context.Provider>
  );
}
