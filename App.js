//MODULE IMPORT
import { createContext, useState } from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';

//VIEWS IMPORT
import Login from './Views/Login';
import Home from './Views/Home';

//Create global context

export const Context = createContext()

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
