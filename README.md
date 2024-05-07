# compras-com-node
Exemplo de como um site de vendas de produtos pode utilizar o Node e todas as suas ferramentas.


## Instalação

### Instalação dos serviços

```bash
cd api/
yarn install
cd ../website
yarn install
```

### Ambiente de desenvolvimento

Para iniciar cada serviço individualmente vá para sua respectiva pasta e
apenas execute `yarn start`. Por exemplo, iniciando ambos os serviços e os
deixando em background:
```bash
cd api/
yarn start &
cd ../website
yarn start &
```

#### Depuração

O serviço api utiliza de um pacote chamado [debug](https://www.npmjs.com/package/debug) para mostrar mensagens relevantes durante o desenvolvimento. Para utilizar ele é necessário apenas escrever uma variável de ambiente `DEBUG` com o escopo do que é para
ser depurado (`DEBUG=*` mostrará tudo que chamou `debug()`).
```bash
cd api/
DEBUG=* yarn start
```

#### Docker

Para facilitar o processo de desenvolvimento e garantir reproducibilidade e facilidade de configurações, usaremos o Docker para configurar e expor os serviços.

Para iniciar todos os serviços (__web__, __api__ e __db__) basta escrever:
```bash
docker compose up
```
