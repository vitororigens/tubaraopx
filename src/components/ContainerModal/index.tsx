// ContainerModal.tsx
import { Button, CloseIcon, Container, Content, IconPlay, ImagePlayer, PlayerContent } from "./style";
import imagepadrao from "../../assets/adaptive-icon.png"
import React, { ReactNode } from "react";


type ContainerModalProps = {
    children?: ReactNode;
    isVisible?: boolean;
    onRequestClose?: () => void;
    onPlay?: () => void;
    onBackward?: () => void;
    onForward?: () => void;
    isPlaying?: boolean; 
}

export function ContainerModal({ children, isVisible, onRequestClose, onBackward, onForward, onPlay, isPlaying }: ContainerModalProps) {
    return (
        <>
            {isVisible && (
                <Container>
                    <Button onPress={onRequestClose}>
                        <CloseIcon name="chevron-down" />
                    </Button>
                    <Content>
                        <ImagePlayer source={imagepadrao} />
                        {children}
                        <PlayerContent>
                            <Button onPress={onBackward}>
                                <IconPlay name="backward" />
                            </Button>
                            <Button onPress={onPlay}>
                                <IconPlay name={isPlaying ? 'pause' : 'play'} />
                            </Button>
                            <Button onPress={onForward}>
                                <IconPlay name="forward" />
                            </Button>
                        </PlayerContent>
                    </Content>
                </Container>
            )}
        </>
    );
}
