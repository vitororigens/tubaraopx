import { TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Octicons } from '@expo/vector-icons';

export const Container = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
justify-content: center;
min-height: 80px;
max-height: 80px;
border-radius: 30px;
padding: 16px;
border: 2px solid ${({theme}) => theme.COLORS.GRAY_600};
margin-bottom: 10px;
`

export const InputContainer = styled(TextInput).attrs(({theme}) => ({
    placeholderTextColor: theme.COLORS.GRAY_400
}))`
flex: 1;

min-height: 80px;
max-height: 80px;


color: ${({theme}) => theme.COLORS.WHITE};
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
font-size: ${({theme}) => theme.FONTE_SIZE.LG}px;
`;

export const Button = styled(TouchableOpacity)``;


export const Icon = styled(Octicons).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_400,
    size: 32,
}))``;