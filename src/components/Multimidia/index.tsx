import { ButtonIcon, Container, Duraction, Icon, Title } from "./style";

type props ={
    title?: string,
    duraction?: string,
    playButton?: () => void
}

export function Multimidia({title, duraction, playButton}: props){
    return(
        <Container>
            <ButtonIcon onPress={playButton} ><Icon name="play"/></ButtonIcon>
            <Title>{title}</Title>
            <Duraction>{duraction}</Duraction>
        </Container>
    )
}