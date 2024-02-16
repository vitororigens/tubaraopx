import {SafeAreaView} from 'react-native-safe-area-context'
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import theme from "../../theme";
import { TouchableOpacity } from 'react-native';

export const Container = styled(SafeAreaView)`
flex: 1;
background-color: ${({ theme }) => theme.COLORS.GRAY_800};
padding: 0 20px;
`;

export const Header = styled.View`
flex: 1;
flex-direction: row;
` ;

export const Button = styled(TouchableOpacity)``;

export const BackButton = styled(Ionicons).attrs(({theme}) => ({
    color: theme.COLORS.GRAY_300,
    size: 32,
}))``;