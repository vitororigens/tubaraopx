import React, { ReactNode } from "react";
import { BackButton, Button, Container } from "./style";
import { useNavigation } from "@react-navigation/native";

type DefaultContainerProps = {
    children: ReactNode;
    backButton?: boolean;
}

export function DefaultContainer({ children, backButton = false }: DefaultContainerProps) {
    const navigation = useNavigation()

    function handleGoBack(){
        navigation.goBack()
    }
    return (
        <Container>
            {backButton &&
                <Button onPress={handleGoBack}>
                    <BackButton name="chevron-back-outline" />
                </Button>
            }
            {children}
        </Container>
    );
}
