import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    height: 60px;
    align-items: center;
`;

export const Button = styled(TouchableOpacity)`
    max-height: 40px;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    margin: 0 5px;
`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONTE_SIZE.SM}px;
    color: ${({theme}) => theme.COLORS.WHITE};
`;
