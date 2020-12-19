import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';

const AppHeader = () => {
    return (
        <Header>
            <CustomText>
                SOS
            </CustomText>
            <Text>
                Sign up
            </Text>
        </Header>
    );
}

const Header = styled.View`
    margin: 1% 6%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`

const CustomText = styled.Text`
    font-size: 30px;
    font-family: Georgia;
    color: beige;
    font-weight: 700;
    /* background-color: rebeccapurple; */
`
export default AppHeader;