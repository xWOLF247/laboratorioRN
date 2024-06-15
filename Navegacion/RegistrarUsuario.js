import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export default function RegistrarCuenta() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require("../Navegacion/img_fondo.jpg")}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.txtTitulo}>Crear una cuenta nueva</Text>
                <TextInput placeholder='Nombre completo' style={styles.txtInput}></TextInput>
                <TextInput placeholder='Correo electronico' style={styles.txtInput}></TextInput>
                <TextInput placeholder='Contraseña' secureTextEntry={true} style={styles.txtInput}></TextInput>
                <TextInput placeholder='Comprobar contraseña' secureTextEntry={true} style={styles.txtInput}></TextInput>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}>
                    <LinearGradient
                        colors={['#00C1BB', '#005B58']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.btnLogin}
                    >
                        <Text style={styles.txtLogin} >Registrarse</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    txtTitulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#34434D',
        textAlign: 'left',
        marginRight: 130,
        marginBottom: 0,
        width: "auto",
    },
    txtSubtitulo: {
        fontSize: 20,
        fontWeight: 'light',
        color: 'gray',
        textAlign: 'left',
        marginTop: 20,
        marginRight: 130,
        width: "auto",
    },
    txtInput: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 30,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        borderColor: 'gray',
        color: '#000000',
        backgroundColor: '#F5F5F5',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowRadius: 10,
        elevation: 10,
        alignItems: "center",
    },
    txtPass: {
        textAlign: 'right',
        paddingTop: 20,
        marginLeft: 300,
        color: '#00C1BB',
        fontSize: 15,
    },
    btnLogin: {
        borderRadius: 30,
        width: 219,
        height: 53,
        marginTop: 35,
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
    },
    txtLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 15,
    },
    txtCuenta: {
        textAlign: 'center',
        paddingTop: 10,
        color: '#00C1BB',
        fontSize: 15,
        alignItems: 'center',
    },
    txtRegistrarse: {
        textAlign: 'center',
        color: '#00C1BB',
        fontSize: 15,
        alignItems: 'center',
        fontWeight: 'bold',
        marginBottom: 50,
    },
    img: {
        width: "100%",
        marginBottom: 20,
    }
});
