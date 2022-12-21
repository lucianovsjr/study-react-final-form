import { Field, FieldProps, FieldRenderProps } from 'react-final-form'

interface InputProps {
    label: string;
    field: FieldProps<string, FieldRenderProps<string, HTMLElement>>;
}

const Input = ({ label, field }: InputProps) => (
    <div>
        <label>{label}</label>
        <Field {...field} />
    </div>
)

export default Input
