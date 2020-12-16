import React, { useEffect, useState } from 'react';
import {
    PieChart,
} from "react-native-chart-kit";
import {View, Text} from 'react-native';
import styled from 'styled-components';
import CovidModel from '../apis/covid-api1';
import { Dimensions } from "react-native";


export default PiePvS = (props) =>{
    const [state, setState] = useState(props.stateAbbrev);
    const [piecomponent, setPiecomponent] = useState(null);
    const [chartData, setChartData] = useState({});

    useEffect(()=>{
        const screenWidth = Dimensions.get("window").width;
        const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
          };
        console.log("hellooo")
        CovidModel.byStateAbr(state).then((res)=>{
            console.log("We made it !")
            console.log(res.data.positive)
            const data = [
                {
                    name: "Positive",
                    population: res.data.positive,
                    color: "blue",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                },
                {
                    name: "Negative",
                    population: res.data.negative,
                    color: "red",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15
                }
            ]
            setPiecomponent(<PieChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[10, 50]}
                absolute/>)
        })
    },[]);

    return(
        <View>
            <Text>
                Current state {state}
            </Text>
            {
                piecomponent
            }
            <Text>
                PieChart
            </Text>
        </View>
    )
}
