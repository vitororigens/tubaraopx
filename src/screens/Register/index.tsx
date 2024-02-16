import { DefaultContainer } from "../../components/DefaultContainer";
import { Input } from "../../components/Input";
import { Title } from "./style";

export function Register(){
    return(
        <DefaultContainer backButton>
           <Title>Cadastrar</Title>
           <Input placeholder="Nome Completo"/>
        </DefaultContainer>
    )
}