import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { Button, Container, Icon, InputContainer } from "./style";

type InputProps = TextInputProps & {
    placeholder: string;
    showIcon?: boolean;
    onChangeText?: (text: string) => void;
    required?: boolean;
    passwordType?: boolean;
}

export function Input({ placeholder, onChangeText, showIcon = false, passwordType = false, }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container>
            <InputContainer
                placeholder={placeholder}
                onChangeText={onChangeText}
                 secureTextEntry={!showPassword && passwordType}
            />
            {passwordType && (
                <Button onPress={togglePasswordVisibility}>
                    <Icon name={showPassword ? 'eye' : 'eye-closed'} />
                </Button>
            )}
        </Container>
    );
}
