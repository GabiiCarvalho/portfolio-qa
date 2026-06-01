# QA Portfolio 🚀 - Projetos Reais

Este repositório contém meus estudos e práticas na área de Quality Assurence (QA).

## 📁 Projetos e Estudo de Caso

1. ## [Investigação de Erro 404 - Ciele Empreendimentos](.bugs/bug-report-ciele-404.md)\*\*
   - Foco: Uso de DevTools (Network/Console) e testes Cross-Browser.

## 🔍 Casos de Estudo

- Identificação de erro de infraestrutura e comunicação proativa com o cliente.

## 🛠️ Ferramentas Utilizadas neste Estudo

- **Navegadores:** Google Chrome e Safari (Tests Cross-browser).
- **DevTools:** Inspeção de Network (Status Code) e Console (Logs de Erro).
- **Documentação:** Markdown.
- **Versionamento:** Git e GitHub via VS Code.

# -----------

2. ## [Suíte de Testes - Captação de Leads](./test%20cases/test-case-residencial-emanuele.md)

- Foco: Teste de validação de formulário (cenários positivos e negativos)

Este documento contém os cenários de teste para a funcionalidade de cadastro de novos usuários/clientes.

## 🔍 Casos de Estudo

- Residencial Emanuele: Garantir a integridade da captação de leads e a experiência do usuário (UX) em formulários de conversão.

## 🛠️ Ferramentas Utilizadas neste Estudo

- **Navegadores:** Google Chrome e Safari.
- **Documentação:** Markdown.
- **Versionamento:** Git e GitHub via VS Code.

---

3. ## [Automação de Testes End-to-End (E2E) - Primeiros Passos Cypress](./cypress/)
   - Foco: Automação de fluxos críticos de usuário e validação de interface (UI).

Este projeto marca o início dos meus estudos em automação, focando na escrita de scripts de testes funcionais robustos e rápidos.

## 🔍 Cenários Automatizados

- **Login - Success:** Validação de fluxo feliz, garantindo que usuários com credenciais válidas acessem o sistema com sucesso.
- **Login - Fail:** Validação das mensagens de erro e comportamento do sistema ao tentar logar com dados inválidos ou campos vazios.

## 🛠️ Ferramentas Utilizadas neste Estudo

- **Framework de Automação:** Cypress (JavaScript).
- **Ambiente de Execução:** Node.js.
- **IDE:** Visual Studio Code.
- **Versionamento:** Git e GitHub.

---

4. ## [Planejamento de Testes e Gerenciamento de Defeitos - Swagger PetStore](./petstore/)
   - Foco: Técnicas de Caixa-Preta, Validação de Regras de Negócio e Engenharia de Defeitos.

Projeto focado no planejamento estratégico de testes e mapeamento de falhas em um ecossistema de e-commerce (PetStore), simulando cenários reais de integração entre gerenciamento de usuários, catálogo de produtos e regras de negócio do carrinho de compras.

## 🎯 Escopo dos Testes (Test Cases)

A suíte de testes foi desenhada aplicando conceitos de **Partição de Equivalência** e **Análise de Valor Limite** para garantir a cobertura dos seguintes fluxos críticos:

- **Gestão de Usuários:** Validação de restrições de campos (User ID, e-mail e regras de senha), fluxos de cadastro e persistência de dados de autenticação (Login/Logout).
- **Catálogo de Produtos:** Comportamento e relevância da barra de busca por palavras-chave e integridade dos dados exibidos.
- **Ciclo de Compra:** Validação de regras de negócio do carrinho de compras (adição, remoção e cálculo automatizado de subtotal/total com base na alteração de quantidades).

👉 **[Suíte Completa com os 14 Casos de Teste detalhados](./petstore/casos-de-teste.md)**

## 🐛 Engenharia de Defeitos (Bug Reports)

Identificação, triagem e documentação de falhas na aplicação baseando-se nas inconsistências encontradas frente aos requisitos esperados. Os reports foram estruturados utilizando o padrão de mercado **WWW (What, Where, When)**, contendo:

- **Severidade e Prioridade:** Classificação do impacto técnico do bug no sistema versus a urgência de correção para o negócio.
- **Passos para Reprodução:** Descrição exata, sequencial e reprodutível do comportamento inesperado.
- **Resultados:** Contraste claro entre o _Resultado Esperado_ (Regra de Negócio) e o _Resultado Obtido_ (Falha presenciada).

👉 **[Registro Detalhado dos Bug Reports Mapeados](./petstore/bug-reports.md)**

## 🛠️ Ferramentas e Conceitos Aplicados

- **Design de Testes:** Testes Funcionais, Testes de Regressão, Testes de Caixa-Preta.
- **Documentação:** Markdown estruturado para engenharia de QA.
- **Versionamento:** Git e GitHub.

# 🎭 Especificação por Comportamento (BDD) e Casos de Teste

**História de Usuário (User Story):**

- **Como:** Visitante sem conta
- **Quero:** Criar um cadastro na plataforma
- **Para:** Ter acesso ao sistema

---

## 📑 Cenários em Formato Gherkin (BDD)

**Cenário: Cadastro realizado com sucesso (Happy Path)**

- **Dado** que estou na tela de cadastro do sistema
- **Quando** eu preencher todos os campos obrigatórios (Nome, e-mail, senha e confirmação de senha) com dados válidos
- **E** clicar no botão [Cadastrar]
- **Então** o sistema deve criar a conta com sucesso
- **E** exibir uma mensagem de confirmação
- **E** me redirecionar para a tela inicial já autenticado

**Cenário: Cadastro com e-mail já existente**

- **Dado** que estou na tela de cadastro do sistema
- **Quando** eu preencher os dados utilizando um e-mail que já está cadastrado na base de dados
- **E** clicar no botão [Cadastrar]
- **Então** o sistema deve exibir a mensagem de erro: _“Este e-mail já está em uso“_
- **E** o novo cadastro não deve ser processado

---

## 📋 Casos de Teste Tradicionais (Test Cases)

### **PS-TC-015: Cadastro de usuário com dados válidos**

- **Pré-condição:** Acessar a URL da página de cadastro.
- **Passos para Execução:**
  1. Preencher o campo de Nome com um valor válido.
  2. Inserir um endereço de e-mail válido e inédito.
  3. Digitar uma senha que atenda aos critérios de segurança.
  4. Confirmar a senha digitada no campo correspondente.
  5. Clicar no botão [Cadastrar].
- **Resultado Esperado:** Usuário é registrado na plataforma com sucesso e redirecionado para a tela inicial logado.

### **PS-TC-016: Tentativa de cadastro com formato de e-mail inválido**

- **Pré-condição:** Acessar a URL da página de cadastro.
- **Passos para Execução:**
  1. Preencher o campo de Nome com um valor válido.
  2. Inserir um endereço de e-mail fora do padrão (Ex: `gabi.gmail.com` ou `gabi@.com`).
  3. Digitar uma senha válida.
  4. Confirmar a senha.
  5. Clicar no botão [Cadastrar].
- **Resultado Esperado:** O sistema impede o envio do formulário e exibe a mensagem de validação de campo: _“Formato de e-mail inválido“_.
