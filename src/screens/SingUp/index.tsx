import { ButtonIcon, Container, Content, Divider, Icon, Text, Title } from "./style";
//
import { DefaultContainer } from "../../components/DefaultContainer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
//
import { useNavigation } from "@react-navigation/native";
import { Toast } from "react-native-toast-notifications";
import auth from "@react-native-firebase/auth";
import { useState } from "react";
import { ScrollView } from "react-native";

export function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation()

    function handleRegister() {
        navigation.navigate('register')
    }
    function handleSingIn() {
        if (!email || !password) {
            Toast.show('Por favor, preencha todos os campos.', { type: 'danger' });
            return;
        }

        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                Toast.show('Login realizado com sucesso!', { type: 'success' })
                setEmail("")
                setPassword("")
                navigation.navigate('tabroutes')
            })
            .catch(() => Toast.show('Verifique se seu e-mail ou senha estão corretos.', { type: 'danger' }))
    }


    return (
        <DefaultContainer backButton>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Container>
                    <Title>Entrar</Title>
                    <Input onChangeText={setEmail} value={email} placeholder="E-mail" />
                    <Input passwordType onChangeText={setPassword} value={password} placeholder="Senha" secureTextEntry />
                    <Button onPress={handleSingIn} title="Entrar" />

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
                        <Text>Ainda não possui uma conta? </Text>
                        <ButtonIcon onPress={handleRegister} >
                            <Text style={{ color: '#0078d4' }}>Entre aqui.</Text>
                        </ButtonIcon>
                    </Content>
                </Container>
            </ScrollView>
        </DefaultContainer>
    );
}