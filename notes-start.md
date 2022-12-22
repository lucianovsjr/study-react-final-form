# Philosophy

É o mesmo criador do redux-form.
Essa lib contém aprendizados do ecosistema do redux-form.

## Goals
### Strongly Typed
Fornece tipagem através do Flow e TS

### Modularity
Em simple forms o usuário não irá baixar o código todo.
As funcionalidades complexas estão em pacotes separados.

### Minimal Bundle Size
É um wrapper mínimo em torno do núcleo de dependência zero do Final Form.
Tudo o que React Final Form faz é saber como obter valores de formulário de SyntheticEvent
e gerenciar assinaturas de campo para o formulário.

### High Performance
Não será necessário realizar ajustes caso o formulário comece a crescer e ficar lento.
Cada pedaço de formulário e estado de campo pode ser escolhido à la carte para acionar
uma nova renderização no React.

Se você estiver familiarizado com o Redux no React, é um pouco como você pode usar selectors para
especificar exatamente sobre qual "slice" de estado você deseja que seu componente seja notificado.

O resultado é que você pode simplificar seu formulário para desempenho máximo.
