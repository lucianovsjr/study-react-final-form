import React from 'react'
import { Form, Field, useForm, useField } from 'react-final-form'

const Teste = () => {
    const onSubmit = (values) => {
        window.alert(JSON.stringify(values))
    }

    return (
        <Form onSubmit={onSubmit} >
            {({ handleSubmit, submitting, pristine, form, values }) => (
                <form>
                    <Field
                        name="teste1"
                        component="input"
                        type="text"
                        // onBlur={() => console.log('aaa')}
                    />
                    <Field
                        name="teste2"
                        component="input"
                        type="text"
                    />
                    <Field
                        name="teste3"
                        component="input"
                        type="text"
                        onBlur={() => console.log('aaa')}
                    />
                    <Abc />
                </form>
            )}
        </Form>
    )
}

const Abc = () => {
    const teste1 = useField('teste1')
    const teste3 = useField('teste3')
    const form = useForm()
    React.useEffect(() => {
        teste3.input.onBlur(() => console.log('abc'))
    }, [])
    React.useEffect(() => {
        form.batch(() => {
            form.change('teste2', teste1.input.value)
            // form.getFieldState('teste3').focus()
            // form.getFieldState('teste3').blur()
            // form.blur()
        })
    }, [form, teste1.input.value])

    // if (form.getFieldState('teste1').value !== '') {
    //     form.getFieldState('teste1').blur()
    // }
    return <button onClick={() => form.blur('teste3')} type="button">teste</button>
}

export default Teste
