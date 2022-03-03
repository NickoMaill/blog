import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { useNavigate } from "react-router-native";
// import { Context } from "../App";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [correctLength, setCorrectLength] = useState(true);

  const submitForm = () => {

    if (username.length <= 10 && username.length >= 1 ) {
      stateContext.setIsLogged(true);
      setCorrectLength(true);
      navigate("/");

    } else if (username.length > 10 || username.length < 1) {
      setCorrectLength(false)

    }

  }

  return (
    <SafeAreaView>

      <View>

        <Text style={styles.text}>ACCUEIL</Text>

        <Text>Entrez votre nom d'utilisateur pour acceder a votre compte</Text>

        <TextInput
          style={styles.input}
          placeholder="username / Pseudo"
          onChange={(e) => setUsername(e.target.value)}
        />
        {!correctLength && <Text>Votre username doit contenir 6 caractères minimum</Text>}

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