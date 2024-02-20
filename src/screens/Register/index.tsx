import { ButtonIcon, Container, Content, Divider, Icon, Text, Title } from "./style";
//
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth'
import { Alert, ScrollView } from "react-native";
import { useState } from "react";
//
import { DefaultContainer } from "../../components/DefaultContainer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useTheme } from "styled-components/native";
import { FormValidator } from "../../utils/ValidateForm";



export function Register() {
    const { COLORS } = useTheme()
    const navigation = useNavigation();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })


    const { errors, validateForm, handleChange } = FormValidator({
        name: {
            value: '',
            validator: value => value.trim().includes(' '),
            errorMessage: 'O nome completo deve conter pelo menos um sobrenome.'
        },
        email: {
            value: '',
            validator: value => /\S+@\S+\.\S+/.test(value),
            errorMessage: 'O email deve ser válido.'
        },
        password: {
            value: '',
            validator: value => value.length >= 6,
            errorMessage: 'A senha deve conter pelo menos 6 caracteres.'
        },
        confirmPassword: {
            value: '',
            validator: value => value === user.password,
            errorMessage: 'As senhas não coincidem.'
        }
    });

    function handleRegister() {
        if (validateForm()) {
            auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then(() => {
                    Alert.alert("Conta", "Conta cadastrada com sucesso!");
                    navigation.navigate('singup')
                })
                .catch(() => Alert.alert("Error", "Não foi possivel cadastrar sua conta"));
        }
    }


    function handleSignUp() {
        navigation.navigate('singup');
    }

    return (
        <DefaultContainer backButton>
            <Container>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center'
                    }}>
                    <Title>Cadastrar</Title>
                    <Input
                        placeholder="Nome Completo"
                        onChangeText={text => handleChange('name', text)}
                        value={user.name}
                    />
                    {errors.name && <Text style={{ color: COLORS.RED_700, marginBottom: 10, marginLeft: 10 }}>{errors.name}</Text>}
                    <Input
                        placeholder="E-mail"
                        onChangeText={text => handleChange('email', text)}
                        value={user.email}
                    />
                    {errors.email && <Text style={{ color: COLORS.RED_700, marginBottom: 10, marginLeft: 10 }}>{errors.email}</Text>}
                    <Input
                        showIcon
                        placeholder="Cadastre sua senha"
                        onChangeText={text => handleChange('password', text)}
                        value={user.password}
                    />
                    {errors.password && <Text style={{ color: COLORS.RED_700, marginBottom: 10, marginLeft: 10 }}>{errors.password}</Text>}
                    <Input
                        showIcon
                        placeholder="Cadastre sua senha novamente"
                        onChangeText={text => handleChange('confirmPassword', text)}
                        value={user.confirmPassword}
                    />
                    {errors.confirmPassword && <Text style={{ color: COLORS.RED_700, marginBottom: 10, marginLeft: 10 }}>{errors.confirmPassword}</Text>}
                    <Button title="Cadastrar" onPress={handleRegister} />
                    <Content>
                        <Divider />
                        <Text>Ou</Text>
                        <Divider />
                    </Content>
                    <Content>
                        <ButtonIcon>
                            <Icon color="#0078D4" name="microsoft" />
                        </ButtonIcon>
                        <ButtonIcon>
                            <Icon color="#FFFFFF" name="apple" />
                        </ButtonIcon>
                        <ButtonIcon>
                            <Icon color="#FBBC05" name="google" />
                        </ButtonIcon>
                    </Content>

                    <Content>
                        <Text>Já possui uma conta? </Text>
                        <ButtonIcon onPress={handleSignUp}>
                            <Text style={{ color: '#0078d4' }}>Entre aqui.</Text>
                        </ButtonIcon>
                    </Content>
                </ScrollView>
            </Container>
        </DefaultContainer>
    );
}
