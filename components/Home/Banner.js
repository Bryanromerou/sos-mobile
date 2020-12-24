import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';

const Banner = () => {
    return (
        <BannerComponent>
            <H1>
                Sharing Our Stress
            </H1>
            <P>
                With the global newsfeed dominated by fear and negativity, it’s important to focus on what really matters to your community. Let us sift through the negativity, trimming the excess and giving you only the relevant facts.
            </P>
        </BannerComponent>
    );
}

const BannerComponent = styled.View`
    width: 100%;
    height: 150px;
    color: beige;
    background-color: #363636;
    display: flex;
    align-items: center;
    padding: 10px;
`
const H1 = styled.Text`
    font-size: 22px;
    font-weight: 700;
    color: #F5EDCD;
    font-family: Georgia;
`

const P = styled.Text`
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    color: #F5EDCD;
`

export default Banner;

