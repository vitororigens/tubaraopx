import { ButtonIcon, Container, Duraction, FavoriteIcon, Icon, Title } from "./style";

type props ={
    title: string,
    duraction?: string,
    playButton?: () => void
}

export function Multimidia({title, duraction, playButton}: props){
    const truncatedTitle = title.length > 10 ? title.slice(0, 25) + "..." : title;
    return(
        <Container>
            <ButtonIcon onPress={playButton} ><Icon name="play"/></ButtonIcon>
            <Title>{truncatedTitle}</Title>
            <Duraction>{duraction}</Duraction>
            <ButtonIcon onPress={playButton} ><FavoriteIcon name="favorite"/></ButtonIcon>
        </Container>
    )
}