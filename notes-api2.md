# useField()
Hook takes two parameters.
```js
(name: string, config: UseFieldConfig) => FieldRenderProps
```
"name" is required. Name of the field.
"config" is optional. An object that looks just like FieldProps, except without the name.

useField() returns FieldRenderProps.
It will manage the rerendering of any component you use it in.
The component will only rerender if the field state subscribed to via useField() changes.

useField() is used internally inside <Field/>.

# useForm()

```js
() => formApi
```

The useForm() hook plucks the FormApi out of the React context for you.
It will throw an exception if you try to use it outside of a <Form/> component.

useForm() is used internally inside useField(), <Field/>, and <FormSpy/>.

# useFormState()
The useFormState() hook takes one optional parameter,
which matches the exact shape of FormSpyProps (except without the render props).
It returns a FormState.

useFormState() is used internally inside <FormSpy/>.
