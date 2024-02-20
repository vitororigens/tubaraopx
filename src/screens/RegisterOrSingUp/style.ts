import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;

`; 

export const Logo = styled.Image`
width: 100%;
height: 300px;

`;

export const Title = styled.Text`
text-align: center;
color:${({theme}) => theme.COLORS.GRAY_100};
font-size: ${({theme}) => theme.FONTE_SIZE.XL}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
padding-bottom: 10px;

`;


export const SubTitle = styled.Text`
text-align: center;
color:${({theme}) => theme.COLORS.GRAY_200};
font-size: ${({theme}) => theme.FONTE_SIZE.LG}px;
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
padding-bottom: 20px;


`;

export const Content = styled.View`
flex-direction: row;
align-items: center;


`

export const SignIn = styled(TouchableOpacity)`
padding: 50px;

`

export const TextButton = styled.Text`
text-align: center;
color:${({theme}) => theme.COLORS.GRAY_200};
font-size: ${({theme}) => theme.FONTE_SIZE.XL}px;
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;