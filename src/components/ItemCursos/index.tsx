import { ItemData } from "../../screens/Home";
import { Container, ImagePlayer, Title } from "./style";
import imagepadrao from "../../assets/adaptive-icon.png";

type ItemCursosProps = {
    onPlay?: () => void;
    isPlaying?: boolean;
    title: string;
    showBottomSheet?: (item: ItemData, index: number) => void;
    item?: ItemData;
    index?: number;
};

export function ItemCursos({ onPlay, isPlaying, title, showBottomSheet, item, index }: ItemCursosProps) {
    const truncatedTitle = title.length > 10 ? title.slice(0, 15) + "..." : title;
    return (
        <Container>
            <ImagePlayer source={imagepadrao}/>
            <Title>{truncatedTitle}</Title>
        </Container>
    )
}
