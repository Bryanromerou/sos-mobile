import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView} from 'react-native';
import styled from 'styled-components';

export default Home = ({ navigation })=>{
    const [darkmode, setDarkmode] = useState(false);
    const [state, setState] = useState("ca");
    const clickHandler = ()=>{
        setDarkmode(!darkmode);
    }

    return (
        <SafeAreaView style={(darkmode) ? styles.containerLight :styles.containerDark}>
            <Header>
                <Text>
                    Hello
                </Text>
            </Header>
            <Text>Press on the button below to change to darkmode</Text>
                <Button onPress = {clickHandler} title = "Dark Mode"/>
            <Text>{String(darkmode)}</Text>
                <Button onPress = {()=>navigation.push("Statistics",{stateAbbrev:state})} title = "Statistics"/>
            <View>
                <Text>Find Your City: </Text>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 , backgroundColor: '#FFF'}} value ={state} onChangeText ={text => setState(text)}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerLight: {
        flex: 1,
        backgroundColor: '#FFF',
        width: "100%",
        margin: 0,
        padding: 0
    },
    containerDark: {
        flex: 1,
        backgroundColor: '#87AB7F',
        width: "100%",
        margin: 0,
        padding: 0
    },
    header:{
        padding: 0,
        margin: 0,
        height: 100,
        width: "100%",
        backgroundColor: "red"
    },
});

const Header = styled.View`
    padding: 0;
    margin: 0;
    height: 100px;
    width: 100%;
    background-color: #87AB7F;
`