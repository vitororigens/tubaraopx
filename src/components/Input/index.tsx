import React from "react";
import { TextInputProps } from "react-native";
import { Button, Container, Icon, InputContainer } from "./style";

type InputProps = TextInputProps & {
    placeholder: string;
    showIcon?: boolean;
    onChangeText?: (text: string) => void;
}

export function Input({ placeholder, onChangeText, showIcon = false, ...rest }: InputProps) {
    return (

        <Container  {...rest} >
            <InputContainer placeholder={placeholder}  onChangeText={onChangeText} />
            {showIcon &&
                <Button>
                    <Icon name="eye" />
                </Button>
            }
        </Container>
    );
}
