import { Container, Content, Logo, SubTitle, Title } from "./style";
import logo from "../../assets/logo.png"
import { Button } from "../../components/Button";
import { DefaultContainer } from "../../components/DefaultContainer";
import { useNavigation } from "@react-navigation/native";


export function Start() {

  const navigation = useNavigation()

  function handleRegisterOrsignUp() {
    navigation.navigate('registerorsignUp')
  }

  return (
    <DefaultContainer>
      <Container>
        <Logo source={logo} />
        <Title>
          Entre para escutar seu curso
        </Title>
        <SubTitle>
          Cursos completos e atualizados. Mesma didática e conteúdo dos livros e PDF para que você possa ouvir sempre que quiser.
        </SubTitle>
        <Content>
          <Button onPress={handleRegisterOrsignUp} title="Vamos Começar" />
        </Content>
      </Container>
    </DefaultContainer>
  );
}


