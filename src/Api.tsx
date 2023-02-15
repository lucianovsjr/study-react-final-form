import { Form, Field, FormRenderProps, FieldRenderProps, FormSpy, FormSpyRenderProps, useField, useForm, useFormState } from 'react-final-form'
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
            subscription={{ values: true }}
            onChange={(props) => {
                console.log('FormSpy', props.values)
            }}
        />
        <FormState />
    </form>
)

const MyFormSpy = ({ pristine, form, modified }: FormSpyRenderProps) => {
    const firstNameChanged: boolean = !!modified && !!modified['firstName']
    const firstName = useField('firstName')
    const formApi = useForm()
    console.log('useField', firstName) // input and meta
    console.log('useForm', formApi)
    console.log('useForm', formApi.getFieldState('firstName')) // meta
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

const FormState = () => {
    const formState = useFormState({ subscription: { modified: true, values: true } })
    console.log('useFormState', formState) // modified and values fields will be filled, others undefined
    return null
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
