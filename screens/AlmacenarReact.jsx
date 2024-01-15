import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AlmacenarReact = () => {
const [inputNombre, setNombreValue] = useState('');
const [inputApellido, setApellidoValue] = useState('');
const [inputTelefono, setTelefonoValue] = useState('');
const [inputDireccion, setDireccionValue] = useState('');

const [storedNombre, setStoredNombre] = useState('');
const [storedApellido, setStoredApellido] = useState('');
const [storedTelefono, setStoredTelefono] = useState('');
const [storedDireccion, setStoredDireccion] = useState('');

useEffect(() => {
// Recuperar el valor almacenado al cargar la aplicación
retrieveData();
}, []);

const storeData = async () => {
    try {
    // Almacenar datos en AsyncStorage
    await AsyncStorage.setItem('nombre', inputNombre);
    await AsyncStorage.setItem('apellido', inputApellido);
    await AsyncStorage.setItem('telefono', inputTelefono);
    await AsyncStorage.setItem('direccion', inputDireccion);
        alert('Datos almacenados con éxito');
    } catch (error) {
        console.error('Error al almacenar datos:', error);
    }
};

const retrieveData = async () => {
    try {
        // Recuperar datos de AsyncStorage
        const nombre = await AsyncStorage.getItem('nombre');
        const apellido = await AsyncStorage.getItem('apellido');
        const telefono = await AsyncStorage.getItem('telefono');
        const direccion = await AsyncStorage.getItem('direccion');
        if (nombre !== null) {
            setStoredNombre(nombre);
        }
        if (apellido !== null) {
            setStoredApellido(apellido);
        }
        if (telefono !== null) {
            setStoredTelefono(telefono);
        }
        if (direccion !== null) {
            setStoredDireccion(direccion);
        }
    } catch (error) {
        console.error('Error al recuperar datos:', error);
    }
};

    return (
        <View style={{ padding: 20}}>
            <Text style={{fontSize: 25, textAlign:"center", marginBottom:50, fontWeight:"bold"}}>Almacenamiento Local - Santiago Motato</Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingLeft:20, textAlign:"center"}}
            placeholder="Ingrese su nombre..."
            value={inputNombre}
            onChangeText={(text) => setNombreValue(text)}
            />
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingLeft:20, textAlign:"center"}}
            placeholder="Ingrese su apellido..."
            value={inputApellido}
            onChangeText={(text) => setApellidoValue(text)}
            />
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingLeft:20, textAlign:"center"}}
            placeholder="Ingrese su telefono..."
            value={inputTelefono}
            onChangeText={(text) => setTelefonoValue(text)}
            keyboardType='numeric'
            />
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingLeft:20, textAlign:"center"}}
            placeholder="Ingrese su dirección..."
            value={inputDireccion}
            onChangeText={(text) => setDireccionValue(text)}
            />

            <View style={{ marginTop: 15, marginHorizontal:100}}>
                <Button title="Guardar Datos" onPress={storeData} />
            </View>
            <View style={{ marginTop: 10, marginBottom:20, marginHorizontal:100}}>
                <Button title="Mostrar Datos" onPress={retrieveData} />
            </View>


            <Text style={{ marginTop: 20, textAlign:"center", fontWeight:"bold",}}>NOMBRE ALMACENADO: {storedNombre}</Text>
            <Text style={{ marginTop: 20, textAlign:"center", fontWeight:"bold"}}>APELLIDO ALMACENADO: {storedApellido}</Text>
            <Text style={{ marginTop: 20, textAlign:"center", fontWeight:"bold"}}>TELEFONO ALMACENADO: {storedTelefono}</Text>
            <Text style={{ marginTop: 20, textAlign:"center", fontWeight:"bold"}}>DIRECCIÓN ALMACENADO: {storedDireccion}</Text>
        </View>
    );
};
export default AlmacenarReact;
