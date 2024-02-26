import { DefaultContainer } from "../../components/DefaultContainer";
import { Button, Container, ContainerOut, Icon, Label, Text, Title } from "./style";

export function Perfil() {
    return (
        <DefaultContainer>
            <Title>
                Bem Vindo!
            </Title>
            <Container>
                <Label>
                    Nome:
                </Label>
                <Text>
                    Testenildo Silva
                </Text>
            </Container>
            <Container>
                <Label>
                    E-mail:
                </Label>
                <Text>
                    teste@teste.com
                </Text>
            </Container>
            <Container>
                <Label>
                    Conta:
                </Label>
                <Text>
                    premium
                </Text>
            </Container>
            <ContainerOut>
                <Text>Versão 1.0.0</Text>
                <Button>
                    <Text>Sair</Text>
                    <Icon name="log-out"/>
                </Button>
            </ContainerOut>
        </DefaultContainer>
    )
}