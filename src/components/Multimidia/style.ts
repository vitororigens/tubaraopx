import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
min-height: 60px;
max-height: 60px;
flex-direction: row;

border-radius: 8px;
align-items: center;
justify-content: flex-start;
`;

export const Icon = styled(AntDesign).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_200,
    size: 18,
}))``;

export const ButtonIcon = styled(TouchableOpacity)`
margin-right: 50px;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: ${({theme}) => theme.FONTE_SIZE.GG}px;
    
`; 

export const Duraction = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: ${({theme}) => theme.FONTE_SIZE.GG}px;
    
`; 