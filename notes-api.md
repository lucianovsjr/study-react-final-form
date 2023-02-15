# API
## <Form \/>
Component que envolve todo o formulário.
Gerencia o estado do formulário.
Injeta o estado do formulário e funcionalidades. Ex: Função handleSubmit para passar ao <form> via renderProps.

Na montagem, <Form /> cria uma instância de "Final Form form", assina as alterações nesse formulário
e coloca no React Context para que os components <Field /> e <FormSpy /> possam vê-lo.

Sempre que o estado do formulário inscrito mudar o <Form /> será "rerender".
Padrão é "subscribes" em todos os estados do formulário.
Pode ser utilizado a subscription prop para controlar a "rerender".

### Provide a way to render the form
component: React.ComponentType
render: Function
children: Function

Se for renderizar passando um "component", ele será renderizado com React.createElement().

O uso do "component" parece mais fácil, mas se estiver vindo do redux-form a melhor prática é usar "render".

### Do something with handleSubmit
handleSubmit chama event.preventDefault() para interroper o processo de envio do navegador padrão.


## <Field \/>
Registra o campo com o form que o contém.
Inscreve-se no estado do campo e injeta funções de estado e retornos de chamada, onBlur, onChange e onFocus
por meio de uma render prop.

Sempre que o estado do campo for alterado, será "rerender".
Por padrão faz "subscribes to all field state".
É possível controlar em qual estado de campo ele irá "subscribe".

### Props
Aceita as props de FieldProps e irá chamar a função de renderização com FieldRenderProps.

Required props: name and one of component, render or children.

### Basic Usage

Necessário 3 coisas para usar:
1. name prop. e.g. 'clients[0].address.street'
2. Way to render:
    2.1 component: 'input' or 'select' or 'textarea'
    2.2 component: React.ComponentType
    2.3 render: Function
    2.3 children: Function

Se for renderizar passando um "component", ele será renderizado com React.createElement().

3. Connect the callbacks to your input

Usando component="input" por exemplo, <Field /> fará isso.

But if you are using a custom component or a render prop, you will need to do this yourself.
Irá precisar: name, onBlur, onChange, onFocus e value.

## <FormSpy \/>
Component que se inscreve no "form state" e injeta o "form state" e a instância do form "via a render prop".

Sempre que ocorrer uma alteração no "form state", irá "rerender".
By default it subscribes to all form state.
You can control which form state it subscribes to with the subscription prop.

onChange prop, can used to execute code when a particular part of form state changes.

### Props
Call the render function with FormSpyRenderProps.

The only required prop is one of onChange, component, render or children.

### Basic Usage
For very advanced use cases.

Utilizado quando precisa restringir o "form state" através da "subscription prop".

### provide a way to render the form state
1. component: React.ComponentType
2. render: Function
3. children: Function

Se for renderizar passando um "component", ele será renderizado com React.createElement().
