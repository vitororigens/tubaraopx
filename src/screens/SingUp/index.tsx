import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { DefaultContainer } from "../../components/DefaultContainer";
import { Input } from "../../components/Input";
import { ButtonIcon, Container, Content, Divider, Icon, Text, Title } from "./style";
import auth from "@react-native-firebase/auth";
import { useState } from "react";
import { Alert } from "react-native";

export function SingUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation()

    function handleRegister(){
      navigation.navigate('register')
    }
    function handleSingIn(){
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            navigation.navigate('home')
        })
        .catch(() => Alert.alert('Error', 'verifique se sua senha ou email estão corretos.'))
    }
  
    return (
        <DefaultContainer backButton>
            <Container>
                <Title>Entrar</Title>
                <Input onChangeText={setEmail} value={email} placeholder="E-mail" />
                <Input onChangeText={setPassword} value={password} showIcon placeholder="Senha" />
                <Button onPress={handleSingIn} title="Entrar"/>

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

                <Content><Text>Ainda não possui uma conta? </Text><ButtonIcon onPress={handleRegister} ><Text style={{
                   color:'#0078d4'
                }}>Entre aqui.</Text></ButtonIcon></Content>
            </Container>
        </DefaultContainer>
    )
}