import React, { ReactNode } from "react";
import { BackButton, Button, Container } from "./style";

type DefaultContainerProps = {
    children: ReactNode;
    backButton?: boolean;
}

export function DefaultContainer({ children, backButton = false }: DefaultContainerProps) {
    return (
        <Container>
            {backButton &&
                <Button>
                    <BackButton name="chevron-back-outline" />
                </Button>
            }
            {children}
        </Container>
    );
}
