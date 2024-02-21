import { ButtonIcon, Container, Content, Divider, Icon, Text, Title } from "./style";
//
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth'
import { useState } from "react";
//
import { DefaultContainer } from "../../components/DefaultContainer";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components/native";
import { Toast } from "react-native-toast-notifications";
import { Input } from "../../components/Input";
import { ScrollView } from "react-native";



export function Register() {
    const { COLORS } = useTheme()
    const navigation = useNavigation();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({
        nameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: ''
    });

    function validateForm() {
        let isValid = true;

        if (!user.name.trim().includes(' ')) {
            setErrors(prevState => ({
                ...prevState,
                nameError: 'O nome completo deve conter pelo menos um sobrenome.'
            }));
            isValid = false;
        } else {
            setErrors(prevState => ({ ...prevState, nameError: '' }));
        }

        if (!/\S+@\S+\.\S+/.test(user.email)) {
            setErrors(prevState => ({
                ...prevState,
                emailError: 'O email deve ser válido.'
            }));
            isValid = false;
        } else {
            setErrors(prevState => ({ ...prevState, emailError: '' }));
        }

        if (user.password.length < 6) {
            setErrors(prevState => ({
                ...prevState,
                passwordError: 'A senha deve conter pelo menos 6 caracteres.'
            }));
            isValid = false;
        } else {
            setErrors(prevState => ({ ...prevState, passwordError: '' }));
        }

        if (user.password !== user.confirmPassword) {
            setErrors(prevState => ({
                ...prevState,
                confirmPasswordError: 'As senhas não coincidem.'
            }));
            isValid = false;
        } else {
            setErrors(prevState => ({ ...prevState, confirmPasswordError: '' }));
        }

        return isValid;
    }

    function handleRegister() {
        if (validateForm()) {
            auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then(() => {
                    setUser({
                        ...user,
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    });
                    Toast.show("Conta cadastrada com sucesso!", { type: 'success' });
                    navigation.navigate('signup');
                })
                .catch(() => Toast.show("Não foi possível cadastrar sua conta, verifique", { type: 'danger' }));
        }
    }



    function handleSignUp() {
        navigation.navigate('signup');
    }

    return (
        <DefaultContainer backButton>
           <ScrollView 
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}  
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
                <Container>
                    <Title>Cadastrar</Title>
                    <Input
                        placeholder="Nome Completo"
                        onChangeText={(text) => setUser({ ...user, name: text })}
                        value={user.name}
                    />
                    {errors.nameError && <Text style={{ color: COLORS.RED_700, marginBottom: 10, marginLeft: 10 }}>{errors.nameError}</Text>}
                    <Input
                        placeholder="E-mail"
                        onChangeText={(text) => setUser({ ...user, email: text })}
                        value={user.email}
                    />
                    {errors.nameError && <Text style={{ color: COLORS.RED_700, marginBottom: 10, marginLeft: 10 }}>{errors.emailError}</Text>}
                    <Input
                        passwordType
                        onChangeText={(text) => setUser({ ...user, password: text })}
                        value={user.password} showIcon placeholder="Cadastre sua senha"
                        secureTextEntry
                    />
                    {errors.nameError && <Text style={{ color: COLORS.RED_700, marginBottom: 10, marginLeft: 10 }}>{errors.passwordError}</Text>}
                    <Input
                        value={user.confirmPassword}
                        passwordType
                        onChangeText={(text) => setUser({ ...user, confirmPassword: text })}
                        showIcon placeholder="Cadastre sua senha"
                        secureTextEntry
                    />
                    {errors.nameError && <Text style={{ color: COLORS.RED_700, marginBottom: 10, marginLeft: 10 }}>{errors.confirmPasswordError}</Text>}
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
                </Container>
            </ScrollView>
        </DefaultContainer>
    );
}
