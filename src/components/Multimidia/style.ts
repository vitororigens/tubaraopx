import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
height: 60px;
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const Icon = styled(AntDesign).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_200,
    size: 18,
}))``;

export const FavoriteIcon = styled(MaterialIcons).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_200,
    size: 18,
}))``;

export const ButtonIcon = styled(TouchableOpacity)`
`

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: ${({theme}) => theme.FONTE_SIZE.GG}px;
    
`; 

export const Duraction = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_200};
    font-size: ${({theme}) => theme.FONTE_SIZE.GG}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    margin: 20px;
    
`; 