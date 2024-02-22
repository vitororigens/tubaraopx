import { DefaultContainer } from "../../components/DefaultContainer";
import { Multimidia } from "../../components/Multimidia";
import { Container, Title } from "./style";
import { firebase } from "../../../config";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Audio } from 'expo-av';

type ItemData = {
    cursoName: string;
    cursoUrl: string;
}

export function Home() {
    const reference = firebase.storage();
    const [cursos, setCursos] = useState<Array<ItemData>>([]);
    const [sound, setSound] = useState<Audio.Sound | null>(null);

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
    }, []);


    const handlePlayAudio = async (audioUrl: string) => {
        if (sound) {
            await sound.unloadAsync();
        }
        const { sound: audioSound } = await Audio.Sound.createAsync(
            { uri: audioUrl }
        );
        setSound(audioSound);
        await audioSound.playAsync();
    };

    return (
        <DefaultContainer backButton>
            <Container>
                <Title>Playlist</Title>
                <FlatList
                    data={cursos}
                    renderItem={({ item }) => (
                        <Multimidia title={item.cursoName} playButton={() => handlePlayAudio(item.cursoUrl)} />
                    )}
                    keyExtractor={(index) => index.toString()}
                />
            </Container>
        </DefaultContainer>
    );
}
