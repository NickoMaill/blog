import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { useNavigate } from "react-router-native";
// import { Context } from "../App";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [correctLength, setCorrectLength] = useState(true);

  const submitForm = () => {

    if (username.length <= 10 && username.length >= 1 ) {
      setCorrectLength(true);
      navigate("/home");

    } else if (username.length > 10 || username.length < 1) {
      setCorrectLength(false)
    }

  }

 useEffect(() => {
     console.log(username);
 }, [username])

  return (
    <SafeAreaView>

      <View>

        <Text style={styles.text}>Login</Text>

        <Text>Entrez votre nom d'utilisateur pour acceder a votre compte</Text>

        <TextInput
          style={styles.input}
          placeholder="username / Pseudo"
          onChangeText={setUsername}
        />
        {!correctLength && <Text>Votre username doit contenir entre 1 et 10 caractères</Text>}

        <TouchableOpacity style={styles.submit} onPress={submitForm}>
          <Text>Se Connecter</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    width: 200,
    padding: 5,
    borderRadius: 5,
    borderColor: "lightgrey",
    marginTop: 10,
  },

  submit: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: 20,
  },

  text: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  }
})