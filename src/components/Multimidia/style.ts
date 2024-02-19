import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
flex: 1;
min-height: 80px;
max-height: 80px;
flex-direction: row;
border: solid 2px ${({theme}) => theme.COLORS.GRAY_400}; 

border-radius: 8px;
align-items: center;
justify-content: space-around;
`;

export const Icon = styled(AntDesign).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_200,
    size: 18,
}))``;

export const ButtonIcon = styled(TouchableOpacity)``

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: ${({theme}) => theme.FONTE_SIZE.GG}px;
    
`; 

export const Duraction = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: ${({theme}) => theme.FONTE_SIZE.GG}px;
    
`; 