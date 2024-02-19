import { ButtonIcon, Container, Content, Divider, Icon, Text, Title } from "./style";
//
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";
//
import { DefaultContainer } from "../../components/DefaultContainer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Alert } from "react-native";
import { useState } from "react";



export function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmePassword, setConfirmePassword] = useState("")
    const navigation = useNavigation();
    
    function handleRegister(){
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            Alert.alert("Conta", "Conta cadastrada com sucesso!");
            navigation.navigate('singup')
        })
        .catch(() => Alert.alert("Error", "Não foi possivel cadastrar sua conta") );
    }
    

    function handleSignUp(){
        navigation.navigate('singup');
    }
  
    return (
        <DefaultContainer backButton>
            <Container>
                <Title>Cadastrar</Title>
                <Input placeholder="Nome Completo" onChangeText={setName} value={name}/>
                <Input placeholder="E-mail" onChangeText={setEmail} value={email} />
                <Input showIcon placeholder="Cadastre sua senha" onChangeText={setPassword} value={password} />
                <Input showIcon placeholder="Cadastre sua senha novamente" onChangeText={setConfirmePassword} value={confirmePassword} />
                <Button title="Cadastrar"  onPress={handleRegister} />
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
                        <Text style={{ color:'#0078d4' }}>Entre aqui.</Text>
                    </ButtonIcon>
                </Content>
            </Container>
        </DefaultContainer>
    );
}
