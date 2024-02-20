import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
flex: 1;
min-height: 60px;
max-height: 60px;
background-color: ${({theme}) => theme.COLORS.BLUE_400};

border-radius: 20px;
align-items: center;
justify-content: center;
`;

export const Title = styled.Text`
font-size: ${({theme}) => theme.FONTE_SIZE.XL}px;
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
color: ${({theme}) => theme.COLORS.WHITE};


`;