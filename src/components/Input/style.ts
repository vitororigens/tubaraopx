import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput).attrs(({theme}) => ({
    placeholderTextColor: theme.COLORS.GRAY_400
}))`
flex: 1;

min-height: 80px;
max-height: 80px;

border: 2px solid ${({theme}) => theme.COLORS.GRAY_600};
color: ${({theme}) => theme.COLORS.WHITE};
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
font-size: ${({theme}) => theme.FONTE_SIZE.LG}px;

border-radius: 30px;
padding: 16px;

`;