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
    const [cursos, setCursos] = useState<Array<ItemData>>([]);
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [selectedCurso, setSelectedCurso] = useState<ItemData | null>(null);
    const [selectedCursoIndex, setSelectedCursoIndex] = useState<number | null>(null)
    const [isPlaying, setIsPlaying] = useState(false);

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
        if (selectedCursoIndex !== null && selectedCursoIndex < cursos.length - 1) {
            const nextIndex = selectedCursoIndex + 1;
            const nextCurso = cursos[nextIndex];
            setSelectedCurso(nextCurso);
            setSelectedCursoIndex(nextIndex);
            await handlePlayAudio(nextCurso.cursoUrl);
        }
    };

    const handleBackward = async () => {
        if (selectedCursoIndex !== null && selectedCursoIndex > 0) {
            const prevIndex = selectedCursoIndex - 1;
            const prevCurso = cursos[prevIndex];
            setSelectedCurso(prevCurso);
            setSelectedCursoIndex(prevIndex);
            await handlePlayAudio(prevCurso.cursoUrl);
        }
    };

    const openBottomModal = async (curso: ItemData, index: number) => {
        setSelectedCurso(curso);
        setSelectedCursoIndex(index);
        setBottomSheetVisible(true);
    };

    const openBottomSheet = async (curso: ItemData, index: number) => {
        if (sound) {
            await sound.stopAsync();
            await sound.unloadAsync();
        }

        const { sound: audioSound } = await Audio.Sound.createAsync({ uri: curso.cursoUrl });
        setSound(audioSound);
        await audioSound.playAsync();
        setIsPlaying(true);

        setSelectedCurso(curso);
        setSelectedCursoIndex(index);
        setBottomSheetVisible(true);
    };

    const closeBottomSheet = () => {
        setBottomSheetVisible(false);
    };
    const data = [
        { title: "Novos" },
        { title: "Matemática" },
        { title: "História" },
        { title: "Ciências" },
        { title: "Artes" },
        { title: "Línguas" }
    ];


    return (
        <DefaultContainer>
            <Container>
                <View style={{
                    height: 60
                }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <Categories title={item.title} />
                        )}
                    />
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Title>
                            Novos
                        </Title>
                        <Categories title="Mais" />
                    </View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={cursos}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => openBottomSheet(item, index)}>
                                <ItemCursos title={item.cursoName} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.cursoName}
                    />
                </View>
                <Title>Playlist</Title>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <FlatList
                        style={{
                            marginBottom: 50,
                            paddingBottom: 200
                        }}
                        showsVerticalScrollIndicator={false}
                        data={cursos}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => openBottomSheet(item, index)}>
                                <Multimidia title={item.cursoName} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.cursoName}
                    />
                </View>
            </Container>
            {selectedCurso && (
                <ButtonModal
                    showBottomSheet={() => openBottomModal(selectedCurso, selectedCursoIndex || 0)}
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
