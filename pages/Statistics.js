import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CovidModel from '../apis/covid-api1';

export default Statistics = () => {
    useEffect(()=>{
        console.log("hellooo")
        CovidModel.all().then((res)=>{
            console.log(res)
        })
    },[]);
    return (
        <View style={styles.container}>
            <Text>
                Statistics
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        margin: 0,
        padding: 0
    },
});