import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { Button, Container, Icon, InputContainer } from "./style";

type InputProps = TextInputProps & {
    placeholder: string;
    onChangeText?: (text: string) => void;
    required?: boolean;
    passwordType?: boolean;
    showSearch?: boolean;
}

export function Input({ placeholder, onChangeText, showSearch = false, passwordType = false, }: InputProps) {
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
               {showSearch && (
                <Button onPress={togglePasswordVisibility}>
                    <Icon name="search" />
                </Button>
            )}
        </Container>
    );
}
