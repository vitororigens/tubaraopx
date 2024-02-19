import { Content, Logo, SignIn, SubTitle, TextButton, Title } from "./style";
import logo from "../../assets/logo.png"
import { Button } from "../../components/Button";
import { DefaultContainer } from "../../components/DefaultContainer";
import { useNavigation } from "@react-navigation/native";


export function RegisterOrSingUp() {
  const navigation = useNavigation()

  function handlewRegister(){
    navigation.navigate('register')
  }

  function handlewSingUp(){
    navigation.navigate('singup')
  }
  return (
    <DefaultContainer backButton>
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
          <TextButton onPress={handlewSingUp}>
            Entrar
          </TextButton>
        </SignIn>
      </Content>
    </DefaultContainer>
  );
}


