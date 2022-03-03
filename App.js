import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import Login from './Views/Login';
import Home from './Views/Home';

export default function App() {
  return (
    <NativeRouter>
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Login />} />
    </Routes>
  </NativeRouter>
  );
}
