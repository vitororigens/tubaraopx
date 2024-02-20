import { useState } from 'react';

type FieldValidator = (value: string) => boolean;

interface Field {
    value: string;
    validator: FieldValidator;
    errorMessage: string;
}

interface Fields {
    [key: string]: Field;
}

interface Errors {
    [key: string]: string;
}

interface FormValidatorReturn {
    errors: Errors;
    validateForm: () => boolean;
    handleChange: (field: string, value: string) => void;
}

export function FormValidator(initialState: Fields): FormValidatorReturn {
    const [fields, setFields] = useState<Fields>(initialState);
    const [errors, setErrors] = useState<Errors>({});

    function validateForm(): boolean {
        let isValid = true;
        const newErrors: Errors = {};

        for (const field in fields) {
            if (!fields[field].validator(fields[field].value)) {
                newErrors[field] = fields[field].errorMessage;
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    }

    function handleChange(field: string, value: string): void {
        setFields(prevState => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value: value
            }
        }));
    }

    return { errors, validateForm, handleChange };
}