import { Form, Field, FormRenderProps } from 'react-final-form'

import Input from './Input'

import './styles.css'

const SimpleForm = ({ handleSubmit, submitting, pristine, form, values }: FormRenderProps) => {
    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="First Name"
                field={{
                    name: 'firstName',
                    component: 'input',
                    type: 'text',
                    placeholder: 'First Name'
                }}
            />
            <Input
                label="Last Name"
                field={{
                    name: 'lastName',
                    component: 'input',
                    type: 'text',
                    placeholder: 'Last Name'
                }}
            />
            <Input
                label="Employed"
                field={{
                    name: 'employed',
                    component: 'input',
                    type: 'checkbox',
                }}
            />
            <Input
                label="Favorite Color"
                field={{
                    name: 'favoriteColor',
                    component: 'select',
                    children: (
                        <>
                            <option />
                            <option value="#ff0000">❤️ Red</option>
                            <option value="#00ff00">💚 Green</option>
                            <option value="#0000ff">💙 Blue</option>
                        </>
                    )
                }}
            />
            <Input
                label="Toppings"
                field={{
                    name: 'toppings',
                    component: 'select',
                    multiple: true,
                    children: (
                        <>
                            <option value="chicken">🐓 Chicken</option>
                            <option value="ham">🐷 Ham</option>
                            <option value="mushrooms">🍄 Mushrooms</option>
                            <option value="cheese">🧀 Cheese</option>
                            <option value="tuna">🐟 Tuna</option>
                            <option value="pineapple">🍍 Pineapple</option>
                        </>
                    )
                }}
            />
            <div>
                <label>Sauces</label>
                <div>
                    <label>
                        <Field
                            name="sauces"
                            component="input"
                            type="checkbox"
                            value="ketchup"
                        />{' '}
                        Ketchup
                    </label>
                    <label>
                        <Field
                            name="sauces"
                            component="input"
                            type="checkbox"
                            value="mustard"
                        />{' '}
                        Mustard
                    </label>
                    <label>
                        <Field
                            name="sauces"
                            component="input"
                            type="checkbox"
                            value="mayonnaise"
                        />{' '}
                        Mayonnaise
                    </label>
                    <label>
                        <Field
                            name="sauces"
                            component="input"
                            type="checkbox"
                            value="guacamole"
                        />{' '}
                        Guacamole 🥑
                    </label>
                </div>
            </div>
            <div>
                <label>Best Stooge</label>
                <div>
                    <label>
                        <Field
                            name="stooge"
                            component="input"
                            type="radio"
                            value="larry"
                        />{' '}
                        Larry
                    </label>
                    <label>
                        <Field
                            name="stooge"
                            component="input"
                            type="radio"
                            value="moe"
                        />{' '}
                        Moe
                    </label>
                    <label>
                        <Field
                            name="stooge"
                            component="input"
                            type="radio"
                            value="curly"
                        />{' '}
                        Curly
                    </label>
                </div>
            </div>
            <Input
                label="Notes"
                field={{
                    name: 'notes',
                    component: 'textarea',
                    placeholder: 'Notes',
                }}
            />
            <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                    Submit
                </button>
                <button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                >
                    Reset
                </button>
            </div>
            <pre>{JSON.stringify(values)}</pre>
        </form>
    )
}

const Simple = () => {
    const initialValues = { firstName: 'Jr' }

    const onSubmit = (values: object) => {
        window.alert(JSON.stringify(values))
    }

    return (
        <>
            <h1>React Final Form - Simple Example</h1>
            <Form
                onSubmit={onSubmit}
                initialValues={initialValues}
                render={SimpleForm}
            />
        </>
    )
}

export default Simple
