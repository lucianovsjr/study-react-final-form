import { Form, Field, FormRenderProps, FieldRenderProps } from 'react-final-form'

const MyForm = ({ handleSubmit }: FormRenderProps) => (
    <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>
        <div>
            <label>First Name</label>
            <Field name="firstname" component="input" placeholder="First Name" />
        </div>

        <h2>An Arbitrary Reusable Input Component</h2>
        <div>
            <label>Interests</label>
            <Field name="interests" component="select">
                <option value="1">teste</option>
                <option value="2">teste 2</option>
            </Field>
        </div>

        <h2>Render Function</h2>
        <Field
            name="bio"
            render={({ input, meta }) => (
                <div>
                    <label>Bio</label>
                    <textarea {...input} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
            )}
        />

        <h2>Render Function as Children</h2>
        <Field name="phone">
            {({ input, meta }: FieldRenderProps<number>) => (
                <div>
                    <label>Phone</label>
                    <input type="text" {...input} placeholder="Phone" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
            )}
        </Field>

        <button type="submit">Submit</button>
    </form>
)

const GettingStated = () => {
    const onSubmit = () => {
        console.log('onSubmit')
    }
    const validate = (): undefined => {
        console.log('validate')
        return undefined
    }
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={MyForm}
        />
    )
}

export default GettingStated