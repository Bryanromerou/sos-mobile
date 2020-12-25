import React  from 'react';
import { StyleSheet, Text , View, Dimensions } from 'react-native';
import styled from 'styled-components';
import CovidPieChart from '../components/PiePvS';
import LineChart from '../components/Statistics/LineChart';

export default Statistics = ({ navigation, route}) => {
    const { stateAbbrev } = route.params;
    return (
        <View style={styles.container}>

            <Header>
                <Title>
                    Statistics {stateAbbrev}
                </Title>
            </Header>
            <CovidPieChart stateAbbrev = {stateAbbrev}/>
            <Header>
                <Text>Bezier Line Chart</Text>
                <LineChart/>
            </Header>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "100%",
        margin: 0,
        padding: 0
    },
});

const Header = styled.View`
    padding: 24px
`
const Title = styled.Text`
    font-size: 24px
`
