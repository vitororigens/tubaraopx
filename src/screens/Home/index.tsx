import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Text, Modal } from "react-native";
import { DefaultContainer } from "../../components/DefaultContainer";
import { Multimidia } from "../../components/Multimidia";
import { Container, Title } from "./style";
import { firebase } from "../../../config";
import { Audio } from 'expo-av';
import { ContainerModal } from "../../components/ContainerModal";
import { ButtonModal } from "../../components/ButtonModal";
import { Categories } from "../../components/Categories";
import { ItemCursos } from "../../components/ItemCursos";

export type ItemData = {
    cursoName: string;
    cursoUrl: string;
}

export function Home() {
    const reference = firebase.storage();
    const [foldersAndCursos, setFoldersAndCursos] = useState<{ title: string, cursos: ItemData[] }[]>([]);
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [selectedCurso, setSelectedCurso] = useState<ItemData | null>(null);
    const [selectedCursoIndex, setSelectedCursoIndex] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const fetchFoldersAndCursos = async () => {
            try {
                const foldersRes = await reference.ref().listAll();
                const foldersAndCursosArray: { title: string, cursos: ItemData[] }[] = [];

                for (const folder of foldersRes.prefixes) {
                    const folderName = folder.name;
                    const cursosRes = await reference.ref(folderName).listAll();
                    const cursosArray: ItemData[] = [];

                    for (const cursoRef of cursosRes.items) {
                        const CursoName = cursoRef.name;
                        const cursoPath = cursoRef.fullPath;
                        const url = await reference.ref(cursoPath).getDownloadURL();
                        const itemData: ItemData = {
                            cursoName: CursoName,
                            cursoUrl: url,
                        };
                        cursosArray.push(itemData);
                    }

                    foldersAndCursosArray.push({ title: folderName, cursos: cursosArray });
                }

                setFoldersAndCursos(foldersAndCursosArray);
            } catch (error) {
                console.error("Erro ao buscar pastas e cursos:", error);
            }
        };

        fetchFoldersAndCursos();
    }, []);

    const openBottomSheet = async (curso: ItemData, index: number, ) => {
        setSelectedCurso(curso);
        setSelectedCursoIndex(index);
        setBottomSheetVisible(true);
        if (sound) {
            await sound.stopAsync();
            await sound.unloadAsync();
        }

        const { sound: audioSound } = await Audio.Sound.createAsync({ uri: curso.cursoUrl });
        setSound(audioSound);
        await audioSound.playAsync();
        setIsPlaying(true);
    };

    const handlePlayAudio = async (audioUrl: string) => {
        if (sound) {
            await sound.stopAsync();
            await sound.unloadAsync();
        }

        const { sound: audioSound } = await Audio.Sound.createAsync({ uri: audioUrl });
        setSound(audioSound);
        await audioSound.playAsync();
        setIsPlaying(true);
    };

    const handlePauseAudio = async () => {
        if (sound) {
            await sound.pauseAsync();
            setIsPlaying(false);
        }
    };

    const handleForward = async () => {
        if (selectedCursoIndex !== null && selectedCursoIndex ) {
            const nextIndex = selectedCursoIndex + 1;
            const nextCurso = foldersAndCursos[selectedCursoIndex].cursos[nextIndex];
            console.log(nextIndex)
            setSelectedCurso(nextCurso);
            setSelectedCursoIndex(nextIndex);
            await handlePlayAudio(nextCurso.cursoUrl);
        }
    };
    
    const handleBackward = async () => {
        if (selectedCursoIndex !== null && selectedCursoIndex > 0) {
            const prevIndex = selectedCursoIndex - 1;
            const prevCurso = foldersAndCursos[selectedCursoIndex].cursos[prevIndex];
            setSelectedCurso(prevCurso);
            setSelectedCursoIndex(prevIndex);
            await handlePlayAudio(prevCurso.cursoUrl);
        }
    };
    


    const closeBottomSheet = () => {
        setBottomSheetVisible(false);
    };

    return (
        <DefaultContainer>
            <Container>
                {foldersAndCursos.map((folder, folderIndex) => (
                    <View key={folderIndex}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Title>
                                {folder.title}
                            </Title>
                            <Categories title="Mais" />
                        </View>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={folder.cursos}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity onPress={() => openBottomSheet(item, index)}>
                                    <ItemCursos title={item.cursoName} />
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item.cursoName}
                        />
                    </View>
                ))}
            </Container>
            {selectedCurso && (
                <ButtonModal
                    showBottomSheet={() => openBottomSheet(selectedCurso, selectedCursoIndex || 0)}
                    title={selectedCurso.cursoName}
                    onPlay={() => isPlaying ? handlePauseAudio() : handlePlayAudio(selectedCurso.cursoUrl)}
                    isPlaying={isPlaying}
                    item={selectedCurso}
                    index={selectedCursoIndex || 0}
                />
            )}
            <Modal
                animationType="slide"
                transparent={true}
                visible={bottomSheetVisible}
                onRequestClose={closeBottomSheet}
            >
                <ContainerModal
                    onBackward={handleBackward}
                    onForward={handleForward}
                    onPlay={() => isPlaying ? handlePauseAudio() : handlePlayAudio(selectedCurso?.cursoUrl || '')}
                    isVisible={bottomSheetVisible} onRequestClose={closeBottomSheet}
                    isPlaying={isPlaying}
                >
                    {selectedCurso && (
                        <View>
                            <Title>{selectedCurso.cursoName}</Title>
                        </View>
                    )}
                </ContainerModal>
            </Modal>
        </DefaultContainer>
    );
}
