import { DefaultContainer } from "../../components/DefaultContainer";
import { Input } from "../../components/Input";

export function Search() {
    return (
        <DefaultContainer>
                <Input placeholder="Pesquisar" showSearch />
        </DefaultContainer>
    )
}