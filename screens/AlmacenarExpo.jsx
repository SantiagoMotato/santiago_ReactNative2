import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const AlmacenarExpo = ()=> {
const [nombre, setNombre] = useState('');
const [apellido, setApellido] = useState('');
const [direccion, setDireccion] = useState('');
const [telefono, setTelefono] = useState('');

const [storedNombre, setStoredNombre] = useState('');
const [storedApellido, setStoredApellido] = useState('');
const [storedDireccion, setStoredDireccion] = useState('');
const [storedTelefono, setStoredTelefono] = useState('');


useEffect(() => {
// Recuperar datos almacenados al cargar la aplicación
    recuperarDatos();
    }, []);
    const guardarDatos = async () => {
        try {
            await SecureStore.setItemAsync('nombre', nombre);
            await SecureStore.setItemAsync('apellido', apellido);
            await SecureStore.setItemAsync('direccion', direccion);
            await SecureStore.setItemAsync('telefono', telefono);
            alert('Datos guardados correctamente.');
        } catch (error) {
            console.error('Error al guardar datos:', error);
        }
    };
    const recuperarDatos = async () => {
        try {
            const storedNombre = await SecureStore.getItemAsync('nombre');
            const storedApellido = await SecureStore.getItemAsync('apellido');
            const storedDireccion = await SecureStore.getItemAsync('direccion');
            const storedTelefono = await SecureStore.getItemAsync('telefono');
            if (storedNombre !== null) {
                setStoredNombre(storedNombre);
            }
            if(storedApellido !== null){
                setStoredApellido(storedApellido);
            }
            if(storedDireccion !== null){
                setStoredDireccion(storedDireccion);
            }
            if(storedTelefono !== null){
                setStoredTelefono(storedTelefono);
            }
        } catch (error) {
        console.error('Error al recuperar datos:', error);
        }
    };
    return (
    <View>
        <Text style={{fontSize: 25, textAlign:"center", marginBottom:20, fontWeight:"bold"}}>Almacenamiento Local - Santiago Motato</Text>
        <TextInput style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
        />
        <TextInput style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={(text) => setApellido(text)}
        />
        <TextInput style={styles.input}
        placeholder="Telefono"
        value={telefono}
        onChangeText={(text) => setTelefono(text)}
        keyboardType='numeric'
        />
        <TextInput style={styles.input}
        placeholder="Direccion"
        value={direccion}
        onChangeText={(text) => setDireccion(text)}
        />
        <View style={styles.vista1}>
            <Button title="Guardar Datos" onPress={guardarDatos} />
        </View>
        <View style={styles.vista}>
            <Button title="Mostrar Datos" onPress={recuperarDatos} />
        </View>
        <Text style={styles.nombre}>NOMBRE: {storedNombre}</Text>
        <Text style={styles.apellido}>APELLIDO: {storedApellido}</Text>
        <Text style={styles.telefono}>TELEFONO: {storedTelefono}</Text>
        <Text style={styles.direccion}>DIRECCIÓN: {storedDireccion}</Text>
    </View>
    );
}


const styles = StyleSheet.create({
input:{
height: 40,
margin: 12,
padding: 10,
borderWidth: 1,
borderRadius:10,
},
vista1:{
padding:10,
marginHorizontal:100,
marginTop:20
},
vista:{
padding:10,
marginHorizontal:100
},
nombre:{
    textAlign:"center",
    marginTop:20, 
    fontSize:20,
    fontWeight:"bold"
},
apellido:{
    textAlign:"center",
    marginTop:10, 
    fontSize:20,
    fontWeight:"bold"
},
telefono:{
    textAlign:"center",
    marginTop:10, 
    fontSize:20,
    fontWeight:"bold"
},
direccion:{
    textAlign:"center",
    marginTop:10, 
    fontSize:20,
    fontWeight:"bold"
}
});
export default AlmacenarExpo;