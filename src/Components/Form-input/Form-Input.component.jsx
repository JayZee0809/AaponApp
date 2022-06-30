import { FormInputLabel, Group, Input } from './form-input.styles';


export const FormInput = ({label, ...others}) => {
    return (
        <Group>
            <Input {...others}/>
            {{label} && (
                <FormInputLabel shrink={others.value.length}>
                    {label}
                </FormInputLabel>
                )
            }
        </Group>
    )
}