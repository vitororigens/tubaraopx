import React from "react";
import { TextInputProps } from "react-native";
import { Button, Container, Icon, InputContainer } from "./style";

type InputProps = TextInputProps & {
    placeholder: string;
    showIcon?: boolean
}

export function Input({ placeholder, showIcon = false, ...rest }: InputProps) {
    return (

        <Container  {...rest} >
            <InputContainer placeholder={placeholder} />
            {showIcon &&
                <Button>
                    <Icon name="eye" />
                </Button>
            }
        </Container>
    );
}
