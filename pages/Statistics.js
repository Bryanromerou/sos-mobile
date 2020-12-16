import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View,Button, TextInput, Dimensions } from 'react-native';
import styled from 'styled-components';
import CovidPieChart from '../components/PiePvS';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import CovidModel from '../apis/covid-api1';

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
                <LineChart
                    data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                        }
                    ]
                    }}
                    width={(Dimensions.get("window").width)*.9} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                    }}
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                />
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
