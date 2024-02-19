import { DefaultContainer } from "../../components/DefaultContainer";
import { Multimidia } from "../../components/Multimidia";
import { Container, Title } from "./style";
import { firebase } from "../../../config";
import { useEffect, useState } from "react";
import { Text } from "react-native";

type ItemData ={
    cursoName: string;
    cursoUrl: string
}

export function Home() {
    const reference = firebase.storage()
    const [cursos, setCursos] = useState<Array<ItemData>>([])

    useEffect(() => {
        reference
        .ref('Cursos')
        .listAll()
        .then(async res => {
            const cursosArray: ItemData[] = [];
            for (const ref of res.items) {
                const cursoPath = ref.fullPath;
                const url = await reference.ref(cursoPath).getDownloadURL();
                const itemData: ItemData = {
                    cursoName: cursoPath,
                    cursoUrl: url,
                };
                cursosArray.push(itemData);
            }
            setCursos(cursosArray);
        });
    },[])

    return (
        <DefaultContainer>
            <Container>
                <Title>Playlist</Title>
                {cursos.map((curso, index) => (
                  
                        <Text>{curso.cursoName}</Text>
                 
                ))}
            </Container>
        </DefaultContainer>
    );
}
