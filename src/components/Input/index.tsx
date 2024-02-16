import React from "react";
import { TextInputProps } from "react-native";
import { Button, Container, Icon, InputContainer } from "./style";

type InputProps = TextInputProps & {
    placeholder: string;
}

export function Input({ placeholder, ...rest }: InputProps) {
    return (

        <Container  {...rest} >
            <InputContainer placeholder={placeholder} />
            <Button>
                <Icon name="eye" />
            </Button>
        </Container>
    );
}
