import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.COLORS.GRAY_800};
align-items: center;
justify-content: center;

`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.COLORS.BLUE_400
}))``;