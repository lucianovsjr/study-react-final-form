import { Form, Field, FormRenderProps, FieldRenderProps, FormSpy, FormSpyRenderProps } from 'react-final-form'
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
        <FormSpy
            render={MyFormSpy}
            subscription={{ pristine: true, modified: true }}
        />
        <FormSpy
            render={MyFormSpy}
            subscription={{ values: true }}
            onChange={(props) => {
                console.log('FormSpy', props.values)
            }}
        />
    </form>
)

const MyFormSpy = ({ pristine, form, modified }: FormSpyRenderProps) => {
    const firstNameChanged: boolean = !!modified && !!modified['firstName']
    return (
        <button
            type="button"
            // disabled={pristine}
            disabled={!firstNameChanged}
            onClick={() => form.reset()}
        >
            Reset
        </button>
    )
}

const Api = () => {
    const initialValues = { firstName: 'Jr' }

    const onSubmit = () => {
        console.log('onSubmit')
    }

    return (
        <>
            <Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                render={MyForm}
            />
        </>
    )
}

export default Api
