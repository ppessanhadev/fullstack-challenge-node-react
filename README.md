# Desafio FullStack

Desafio elaborado e prestado pela empresa [Plataforma A+](https://www.plataformaamais.com.br/).

## Proposta

Desenvolver uma aplicação WEB ou APP, para controlar Alunos e Professores em suas Turmas, referentes às séries do Ensino Fundamental, em uma Escola Pública.

- A aplicação deve apresentar uma lista de Escolas Públicas:
  - Deve permitir adicionar, modificar e excluir Escolas.
  - Cada Escola deve possuir um Diretor responsável.
- As Turmas devem ser disponibilizadas ao acessar detalhes de uma Escola:
  - Deve permitir adicionar, modificar e excluir Turmas.
  - Cada Turma possui um Professor associado a ela.
    - Um Professor poderá estar associado a mais de uma Turma.
      - Deve permitir que o Diretor possa adicionar e excluir Professores em uma Turma.
  - Ao entrar nos detalhes da Turma, os alunos e professores relacionados devem ser exibidos.
    - Alunos devem ser adicionados ou excluídos das Turmas.
- Os Alunos possuem informações mínimas que devem estar contidas em seus cadastros, como:
  - Nome do Aluno
  - Nomes dos Responsáveis
  - Contatos
- Os Professores devem ser capazes de adicionar observações sobre a Turma e sobre determinado Aluno.
- A solução deve possibilitar buscar com base em alguma informação, de escolha livre, contida nas entidades.

### Recomendações

- Módulos de frontend e backend devem ser desenvolvidos de forma separada.
- O backend pode ser feito utilizando uma das seguintes linguagens: Javascript, Typescript, Python ou C#, nesta ordem de preferência.
- O frontend poderá ser desenvolvido com JavaScript, Typescript, Dart `(No caso de um app Flutter como frontend)` ou qualquer framework/ferramenta que suporte ou utilize essas tecnologias.
- Para camada de persistência, utilize NoSQL como o MongoDB ou um SGBD relacional como o PostgreSQL. A modelagem de documentos ou entidades é livre e de acordo com o escolhido e utilizado pela sua solução.
- O que for submetido, mesmo que incompleto, deve funcionar.

### Considerações gerais

- Utilize as melhores práticas que você conhece.
- Utilize ferramentas visuais como desenhos, fluxos e diagramas para explicar sua solução, sem muita formalidade, apenas para passar uma idéia geral e/ou explicar pontos interessantes.
- As opções de tecnologias são baseadas no que utilizamos para desenvolver soluções hoje. Porém, na Plataforma A+, o foco no resultado é muito valorizado, por isso não se sinta limitado e caso tenha implementações fora dos opcionais oferecidos de tecnologias e ferramentas, foque em responder o desafio com o que conhece.
- Caso não termine o desafio, utilizaremos o que entregou como base para a conversa.
- Lembre-se que iremos analisar seu desafio e terá a chance de explicar sua estratégia para pessoas de tecnologia.
- Teremos uma conversa agradável e objetiva, onde falaremos sobre tech, com base neste desafio.

### Diferenciais

- Utilizar layout responsivo.
- Boas práticas de UX na solução.
- Backend dockerizado.
- Documentação.
- Testes unitários e de integração.
- Uso de TDD.
- Uso de patterns.
- Abordagem para desenvolvimento de software.
