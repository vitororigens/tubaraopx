import { Button, Container, Title } from "./style";
import React from 'react';

type CategoriesProps ={
    title?: string;
    handleCateorie?: () => void;
}

export function Categories({title, handleCateorie}: CategoriesProps){
    return(
        <Container>
            <Button onPress={handleCateorie}>
                <Title>{title}</Title>
            </Button>
        </Container>
    )
}
