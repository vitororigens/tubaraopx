import styled from "styled-components/native";
//
import { TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 20px 20px 0 0;
    padding: 16px;

`;

export const Button = styled(TouchableOpacity)``


export const CloseIcon = styled(Ionicons).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_300,
    size: theme.FONTE_SIZE.XL,
}))``;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`; 

export const ImagePlayer = styled(Image)`
    height: 300px;
    width: 70%;
    border-width: 3px;
    border-color: ${({theme}) => theme.COLORS.GRAY_800};
    border-radius: 20px;
    margin-bottom: 20px;
`;


export const PlayerContent = styled.View`
    flex-direction: row;
`;

export const IconPlay = styled(FontAwesome5).attrs(({theme}) => ({
     color: theme.COLORS.GRAY_300,
    size: theme.FONTE_SIZE.XL,
}))`
padding: 20px;

`;