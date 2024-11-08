export function getFormValues(array: HTMLFormElement): { [key: string]: string } {
    const formValues: { [key: string]: string } = {};
    
    Array.from(array.elements).forEach((input) => {
        console.log('Input', input)
        if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
            if (input.id && input.value) {
                formValues[input.id] = input.value;
            }
        }
    });

    return formValues;
}

export function isNumeric(value: string) {
    return /^\d+$/.test(value);
}