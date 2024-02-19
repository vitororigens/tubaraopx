import styled from "styled-components/native";

export const Logo = styled.Image`
width: 100%;
height: 400px;
margin-top: 30px;
margin-bottom: 40px;
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