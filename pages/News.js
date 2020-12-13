import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default News = () => {
    return (
        <View style={styles.container}>
            <Text>
                News
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