# 🐛 Registro e Engenharia de Defeitos (Bug Reports) - PetStore

Esta documentação contém o mapeamento e a triagem das falhas identificadas durante a execução da suíte de testes na aplicação Swagger PetStore. Os defeitos foram reportados seguindo as melhores práticas de mercado e a metodologia **WWW (What, Where, When)**.

---

## 🐞 BUG-001: Quebra de layout e vazamento de texto na interface do carrinho

- **ID do Defeito:** PS-BUG-001
- **Severidade:** Baixa (Interface) | **Prioridade:** Média
- **Componente:** Shopping Cart (Carrinho de Compras)

### 🔍 Descrição Técnica (WWW)

- **What (O que acontece):** O texto descritivo do produto não quebra a linha de forma automática, fazendo com que o conteúdo ultrapasse os limites da tabela do carrinho e se sobreponha a outros elementos visuais.
- **Where (Onde acontece):** Na página de visualização do Carrinho de Compras (`/shop/viewCart.shtml`).
- **When (Sob quais condições):** Quando um produto com uma descrição muito longa (ex: múltiplos caracteres sem espaços) é adicionado ao carrinho.

### 🚶 Passos para Reprodução

1. Acessar a aplicação PetStore.
2. Adicionar ao carrinho um produto que possua uma descrição longa ou alfanumérica extensa.
3. Acessar a página do Carrinho de Compras.
4. Observar a coluna de descrição do item.

- **Resultado Obtido:** O texto da descrição "vaza" para fora da coluna designada, comprometendo o layout da página.
- **Resultado Esperado:** O container ou a célula da tabela deve possuir propriedades CSS de quebra automática de texto (`word-break: break-word` ou similar) para manter a integridade do layout.

---

## 🐞 BUG-002: Persistência indevida de sessão ativa após comando de Logout

- **ID do Defeito:** PS-BUG-002
- **Severidade:** Alta (Segurança/Lógica) | **Prioridade:** Alta
- **Componente:** Authentication (Autenticação)

### 🔍 Descrição Técnica (WWW)

- **What (O que acontece):** O sistema permite que um usuário deslogado acesse novamente a área logada e realize ações na conta utilizando o botão "Voltar" do navegador, sem exigir uma nova autenticação.
- **Where (Onde acontece):** Fluxo de transição entre a sessão ativa e a página de desautenticação.
- **When (Sob quais condições):** Imediatamente após clicar no botão [Sign Out] e, em seguida, interagir com o histórico de navegação do browser.

### 🚶 Passos para Reprodução

1. Realizar o login com credenciais válidas na aplicação.
2. Executar alguma ação na conta (Ex: acessar dados cadastrais).
3. Clicar no botão [Sign Out] no menu superior para encerrar a sessão.
4. Na página de confirmação de saída, clicar na seta de "Voltar" (Back) do próprio navegador.

- **Resultado Obtido:** O navegador retorna para a tela anterior exibindo os dados do usuário e permitindo a navegação como se a sessão ainda estivesse ativa.
- **Resultado Esperado:** Os tokens de sessão e cookies de autenticação devem ser completamente destruídos no servidor e no client-side após o Logout. O uso do botão voltar deve redirecionar o usuário para a tela de login ou bloquear o acesso aos dados privados através de validações de rota.

---

## 🐞 BUG-003: Ausência de validação de dados no campo de senha (Inputs vazios/espaços)

- **ID do Defeito:** PS-BUG-003
- **Severidade:** Média (Regra de Negócio) | **Prioridade:** Alta
- **Componente:** User Registration (Cadastro de Usuário)

### 🔍 Descrição Técnica (WWW)

- **What (O que acontece):** O formulário de registro de conta aceita a criação de senhas compostas exclusivamente por caracteres de espaço em branco (`"   "`), violando as diretrizes de segurança.
- **Where (Onde acontece):** Nos campos "New password" e "Repeat password" da tela de registro (`/shop/newAccount.shtml`).
- **When (Sob quais condições):** Durante o processo de envio de um novo cadastro de usuário.

### 🚶 Passos para Reprodução

1. Acessar a tela de criação de nova conta ("Register Now!").
2. Preencher os campos obrigatórios (User ID, Email, etc) com dados válidos.
3. No campo "New password", pressionar a barra de espaço 5 vezes.
4. No campo "Repeat password", pressionar a barra de espaço 5 vezes.
5. Clicar no botão [Save Account Information].

- **Resultado Obtido:** O sistema processa o formulário com sucesso, criando uma conta cuja credencial de acesso é invisível e insegura.
- **Resultado Esperado:** O sistema deve sanitizar os inputs removendo espaços em branco extras (_trim_) e aplicar uma validação de expressão regular (Regex) impeditiva, exibindo um alerta de que espaços em branco não são caracteres permitidos para a composição da senha.
