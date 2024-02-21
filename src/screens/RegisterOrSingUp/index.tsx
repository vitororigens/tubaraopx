import { Container, Content, Logo, SignIn, SubTitle, TextButton, Title } from "./style";
import logo from "../../assets/logo.png"
import { Button } from "../../components/Button";
import { DefaultContainer } from "../../components/DefaultContainer";
import { useNavigation } from "@react-navigation/native";


export function RegisterOrsignUp() {
  const navigation = useNavigation()

  function handlewRegister() {
    navigation.navigate('register')
  }

  function handlewsignUp() {
    navigation.navigate('signup')
  }
  return (
    <DefaultContainer backButton>
      <Container>
        <Logo source={logo} />
        <Title>
          Entre para escutar seu curso
        </Title>
        <SubTitle>
          Cursos completos e atualizados. Mesma didática e conteúdo dos livros e PDF para que você possa ouvir sempre que quiser.
        </SubTitle>
        <Content>
          <Button onPress={handlewRegister} title="Registrar" />
          <SignIn>
            <TextButton onPress={handlewsignUp}>
              Entrar
            </TextButton>
          </SignIn>
        </Content>
      </Container>
    </DefaultContainer>
  );
}


