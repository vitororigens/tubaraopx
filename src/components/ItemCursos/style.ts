import styled from "styled-components/native";
import { TouchableOpacity, Image } from "react-native";

export const Container = styled.View`
height: 150px;
width: 100px;
justify-content: start;
margin: 5px;

`;

export const ImagePlayer = styled(Image)`
    height: 100px;
    width: 100px;
    border-width: 3px;
    border-color: ${({theme}) => theme.COLORS.GRAY_800};
    border-radius: 8px;

`;

export const Button = styled(TouchableOpacity)``;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONTE_SIZE.SM}px;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin: 10px 0;
`;
