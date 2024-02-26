// ContainerModal.tsx
import React from "react";
import { Button, Container, IconPlay, ImagePlayer, PlayerContent, Title } from "./style";
import imagepadrao from "../../assets/adaptive-icon.png";
import { ItemData } from "../../screens/Home";

type ContainerModalProps = {
    onPlay?: () => void;
    isPlaying?: boolean;
    title: string;
    showBottomSheet?: (item: ItemData, index: number) => void; 
    item: ItemData;
    index: number;
};

export function ButtonModal({ onPlay, isPlaying, title, showBottomSheet, item, index }: ContainerModalProps) {
    const truncatedTitle = title.length > 10 ? title.slice(0, 20) + "..." : title;

    const handleShowBottomSheet = () => {
        if (showBottomSheet) {
            showBottomSheet(item, index);
        }
    };

    return (
        <Container onPress={handleShowBottomSheet}>
            <PlayerContent>
                <ImagePlayer source={imagepadrao} />
                <Title>{truncatedTitle}</Title>
                <Button onPress={onPlay}>
                    <IconPlay name={isPlaying ? 'pause' : 'play'} />
                </Button>
            </PlayerContent>
        </Container>
    );
}
