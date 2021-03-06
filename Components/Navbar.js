import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse, faFileLines, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { TouchableOpacity, View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useNavigate } from "react-router-native";
import { Context } from "../Context/BlogContext";


export default function Navbar() {
    const stateContext = useContext(Context)
    const navigate = useNavigate()

    return (

            <View style={styles.container}>

                <View style={styles.linkContainer}>
                    <TouchableOpacity onPress={() => navigate("/home")} style={styles.btnNav}>
                        <FontAwesomeIcon style={{ color: 'white' }} icon={faHouse} />
                        <Text style={{ color: 'white' }}>Accueil</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.linkContainer}>
                    <TouchableOpacity onPress={() => navigate("/newpost")} style={styles.btnNav}>
                        <FontAwesomeIcon style={{ color: 'white' }} icon={faFileLines} />
                        <Text style={{ color: 'white' }}>Écrire un Post</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.linkContainer}>
                    <TouchableOpacity onPress={() => navigate("/user")} style={styles.btnNav}>
                        <FontAwesomeIcon style={{ color: 'white' }} icon={faUser} />
                        <Text style={{ color: 'white' }}>Profile</Text>
                    </TouchableOpacity>

                </View>

            </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2484FF',
        flexDirection: 'row',
        padding: 10,
    },

    linkContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    btnNav: {
        alignItems: 'center',
        color: 'white'
    }
})