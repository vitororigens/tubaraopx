import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./style";

type InputProps = TextInputProps & {
    placeholder: string;
}

export function Input({ placeholder, ...rest }: InputProps) {
    return (
        <Container placeholder={placeholder} {...rest} />
    );
}
