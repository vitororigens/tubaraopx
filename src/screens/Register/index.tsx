import { Button } from "../../components/Button";
import { DefaultContainer } from "../../components/DefaultContainer";
import { Input } from "../../components/Input";
import { ButtonIcon, Container, Content, Divider, Icon, Text, Title } from "./style";

export function Register() {
    return (
        <DefaultContainer backButton>
            <Container>
                <Title>Cadastrar</Title>
                <Input placeholder="Nome Completo" />
                <Input placeholder="E-mail" />
                <Input showIcon placeholder="Cadastre sua senha" />
                <Input showIcon placeholder="Cadastre sua senha novamente" />
                <Button title="Cadastrar" />
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

                <Content><Text>Já possui uma conta? </Text><ButtonIcon ><Text style={{
                   color:'#0078d4'
                }}>Entre aqui.</Text></ButtonIcon></Content>
            </Container>
        </DefaultContainer>
    )
}