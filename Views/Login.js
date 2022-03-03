import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-native";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { Context } from "../Context/BlogContext";
// import { Context } from "../App";

export default function Login() {

    const stateContext = useContext(Context)
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [correctLength, setCorrectLength] = useState(true);

    const submitForm = () => {

        if (username.length <= 10 && username.length >= 1) {
            setCorrectLength(true);
            stateContext.setIsLogged(true)
            navigate("/home");

        } else if (username.length > 10 || username.length < 1) {
            setCorrectLength(false)
        }

    }

    // useEffect(() => {
    //     console.log(username);
    // }, [username])

    if (stateContext.isLogged !== false) {
        return (
            <SafeAreaView>
                <View>
                    <Text>Vous êtes déjà connecter</Text>
                    <Text>Voulez vous déconnecter votre compte ? </Text>
                    <TouchableOpacity><Text>Déconnexion</Text></TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <View >

                <Text style={styles.text}>Se Connecter</Text>

                <View style={styles.loginContent}>
                    <Text>Entrez votre nom d'utilisateur{"\n"} pour acceder a votre compte</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="username / Pseudo"
                        onChangeText={setUsername}
                    />
                    {!correctLength && <Text>Votre username doit contenir entre 1 et 10 caractères</Text>}

                    <TouchableOpacity style={styles.submit} onPress={submitForm}>
                        <Text>Connexion</Text>
                    </TouchableOpacity>

                </View>


            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginContent:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
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
        alignItems: 'center',
        maxWidth: 100,
    },

    text: {
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
        marginBottom:30,
    }
})