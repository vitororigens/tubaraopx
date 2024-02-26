import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
`;

export const Title = styled.Text`
font-size: ${({theme}) => theme.FONTE_SIZE.GG}px;
color: ${({theme}) => theme.COLORS.WHITE};
margin-bottom: 20px;
margin-top: 20px;

`;

