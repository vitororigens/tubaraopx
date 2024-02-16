import styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
flex: 1;
justify-content: center;

`;

export const Title = styled.Text`
font-size: ${({theme}) => theme.FONTE_SIZE.XL }px;
color: ${({theme}) => theme.COLORS.WHITE};
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
text-align: center;
margin-bottom: 40px;
`;

export const Content = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
margin: 10px;

`;

export const Text = styled.Text`
font-size: ${({theme}) => theme.FONTE_SIZE.SM}px;
color: ${({theme}) => theme.COLORS.GRAY_400};
`

export const Divider = styled.View`
min-height: 1px;
max-height: 1px;
background-color: ${({theme}) => theme.COLORS.GRAY_400};
border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};
flex: 1;
margin: 5px;
`

export const Icon = styled(FontAwesome5).attrs(({theme}) => ({
    size: 32,
}))`
margin: 10px;
`;

export const ButtonIcon = styled(TouchableOpacity)``;