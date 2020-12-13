import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default Home = ()=>{
    const [darkmode, setDarkmode] = useState(false);
    const [city, setCity] = useState("Los Angeles");
    const clickHandler = ()=>{
        setDarkmode(!darkmode);
    }

    return (
        <View style={(darkmode) ? styles.containerLight :styles.containerDark}>
            <Text>Press on the button below to change to darkmode</Text>
                <Button onPress = {clickHandler} title = "Dark Mode"/>
            <Text>{String(darkmode)}</Text>
            <View>
                <Text>Find Your City: </Text>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 , backgroundColor: '#FFF'}} value ={city} onChangeText ={text => setCity(text)}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerLight: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        margin: 0,
        padding: 0
    },
    containerDark: {
        flex: 1,
        backgroundColor: '#779BE7',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0
    },
});
