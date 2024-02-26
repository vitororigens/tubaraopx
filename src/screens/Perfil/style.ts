import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';

export const Container = styled.View`
height: 40px;
width: 100%;
flex-direction: row;
align-items: center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: ${({theme}) => theme.FONTE_SIZE.XL}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    margin-right: 10px;
`; 

export const Label = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: ${({theme}) => theme.FONTE_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    margin-right: 10px;
`; 

export const Text = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: ${({theme}) => theme.FONTE_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`; 

export const ContainerOut = styled.View`
position: absolute;
width: 100%;
flex-direction: row;
bottom: 80px;
justify-content: space-between;
left: 20px;
`;

export const Button = styled(TouchableOpacity)`
flex-direction: row;
`


export const Icon = styled(Entypo).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_200,
    size: 18,
}))`
margin-left: 10px;
`;