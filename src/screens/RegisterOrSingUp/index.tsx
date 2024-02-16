import { Content, Logo, SignIn, SubTitle, TextButton, Title } from "./style";
import logo from "../../assets/logo.png"
import { Button } from "../../components/Button";
import { DefaultContainer } from "../../components/DefaultContainer";


export function RegisterOrSingUp() {
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
        <Button title="Registrar" />
        <SignIn>
          <TextButton>
            Entrar
          </TextButton>
        </SignIn>
      </Content>
    </DefaultContainer>
  );
}


