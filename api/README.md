# API

O pacote API é responsável pelo backend do compras-com-node. Um backend nada mais é que
quem realiza operações, funções, modificações em uma base de dados de forma sistêmica.

## Configuração

São disponíveis algumas variáveis de sistemas que podem ser alteradas para modificar o
comportamento da API. Aqui estão todas as variáveis, sua função e valor padrão

Here is a markdown table with the columns "Name", "Description", and "Default Value":

| Nome        | Descrição                                       | Valor padrão  |
|-------------|-------------------------------------------------|---------------|
| `DB_HOST`   | O host do banco de dados mongo.                 | `"mongo"`     |
| `DB_USER`   | O usuário administrador do banco de dados.      | `"comno"`     |
| `DB_PASS`   | A senha do usuário administrador.               | `"inseguro"`  |
| `DB_NAME`   | O nome do banco de dados.                       | `"comno"`     |
| `DB_AUTH`   | O banco de dados de autenticação.               | `"admin"`     |


Para exportar qualquer variável de ambiente, basta escrever o seguinte comando:
```bash
export <ENV_VAR>=<VALOR>
```

Onde `<ENV_VAR>` é o nome da variável e `<VALOR>` é o valor que você quer que ela tenha. Para definir um host do banco de dados, por exemplo:
```bash
export DB_HOST=cluster0.dominio.com.br
```

