//MODULE IMPORT
import { createContext, useState } from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';
import { Context } from "./Context/BlogContext";

//VIEWS IMPORT
import Login from './Views/Login';
import Home from './Views/Home';

export default function App() {

  const [isLogged, setIsLogged] = useState(false)

  const value = {
    isLogged: isLogged,
    setIsLogged: setIsLogged,
  }

  return (
    <Context.Provider value={value}>

      <NativeRouter>

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
        </Routes>

      </NativeRouter>

    </Context.Provider>
  );
}
