# Comentários

<br>

#### Decisão da arquitetura utilizada
A arquitetura utilizada foi baseada em padrões utilizados na criação da aplicação utilizando o VueCLI e configurando as dependências, assim como o ESLint.

A aplicação está organizada da seguinte maneira:
- assets: os arquivos relacionados à regra e lógica de negócio estão localizados na pasta app, organizados nas subpastas controllers e models;
- components: pasta onde estão os componentes, separados por módulos específicos;
- plugins: pasta onde vão as configurações de plugins utilizados, neste caso existe somente o Vuetify;
- router: pasta onde são declaradas as rotas, não vi necessidade de criar mais arquivos pois existem apenas 3 rotas;
- store: pasta onde estão separados por módulos as configurações e usos do VueX;
- views: pasta onde vão as páginas que compõem a aplicação;

#### Lista de bibliotecas de terceiros utilizadas
As bibliotecas de terceiros utilizadas são as seguintes:
- axios: utilizada para as chamadas para a API;
- core-js: utilizada como suporte para alguns componentes do Vuetify;
- vue: framework solicitado para desenvolvimento;
- vue-router: utilizada como complemento para gestão de rotas no Vue;
- vuetify: framework de UI solicitado para o desenvolvimento;
- vuex: utilizado para o controle e gestão de estados do Vue;
- eslint: utilizado para padronização do código;

#### O que você melhoraria se tivesse mais tempo
Realizaria algumas melhorias, dentre elas:
- Paginação na rota de listar alunos;
- Criar uma folha de estilos e melhorar o visual da aplicação;
- Separar os arquivos de forma mais modular, deixando junto apenas a folha de estilos caso houver (utilizando SASS) e o componente;
- Criar testes unitários e de integração para os componentes;

#### Quais requisitos obrigatórios que não foram entregues
- Todos os requisitos obrigatórios foram entregues;
