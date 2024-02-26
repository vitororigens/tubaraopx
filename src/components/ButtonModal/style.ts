import styled from "styled-components/native";
//
import { TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
    height: 80px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    margin-bottom: 61px;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.GRAY_800} ;
    border-radius: 20px;
    position: absolute;
    bottom: 10px;
    left: 20px;

`;

export const Button = styled(TouchableOpacity)``


export const CloseIcon = styled(Ionicons).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_300,
    size: theme.FONTE_SIZE.XL,
}))``;


export const ImagePlayer = styled(Image)`
    height: 50px;
    width: 50px;
    border-width: 3px;
    border-color: ${({theme}) => theme.COLORS.GRAY_800};
    border-radius: 8px;

`;


export const PlayerContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    padding: 0 20px; 
    width: 100%; 
`;

export const IconPlay = styled(FontAwesome5).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_300,
    size: theme.FONTE_SIZE.XL,
}))`

`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONTE_SIZE.GG}px;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin: 10px;
`;
