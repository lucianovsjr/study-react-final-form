import { Form, Field, FormRenderProps, FieldRenderProps } from 'react-final-form'
import { TextField } from '@mui/material'

import './api.css'

const MyForm = ({ handleSubmit }: FormRenderProps) => (
    <form onSubmit={handleSubmit}>
        <Field name="firstName" component="input" initialValue="jr" />
        <Field name="lastName">
            {({ input }: FieldRenderProps<string>) => (
                <div>
                    <input {...input} />
                </div>
            )}
        </Field>
        <Field name="myField">
            {({ input }: FieldRenderProps<string>) => (
                <div>
                    <TextField {...input} />
                </div>
            )}
        </Field>
    </form>
)

const Api = () => {
    const initialValues = { firstName: 'Jr' }

    const onSubmit = () => {
        console.log('onSubmit')
    }

    return (
        <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            render={MyForm}
        />
    )
}

export default Api
