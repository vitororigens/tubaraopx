import styled from "styled-components/native";

export const Title = styled.Text`
font-size: ${({theme}) => theme.FONTE_SIZE.XL }px;
color: ${({theme}) => theme.COLORS.WHITE};
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;