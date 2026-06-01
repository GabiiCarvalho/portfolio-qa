# 🐛 Registro e Engenharia de Defeitos (Bug Reports) - PetStore

Esta documentação contém a triagem e o mapeamento das falhas identificadas na aplicação Swagger PetStore, utilizando a estrutura de mercado **WWW (What, Where, When)**.

---

### 🐞 BUG-001: Quebra de layout e vazamento de texto na interface do carrinho

- **ID do Defeito:** `PS-BUG-001`
- **Severidade:** 🟢 Baixa (Interface) | **Prioridade:** 🟡 Média
- **Componente:** Shopping Cart (Carrinho de Compras)

#### 🔍 Descrição Técnica (WWW)

- **What (O que ocorre):** O texto descritivo do produto não quebra a linha de forma automática, fazendo com que ultrapasse os limites laterais da tabela e se sobreponha a outros elementos da interface.
- **Where (Onde ocorre):** Na página de visualização do Carrinho de Compras (`/shop/viewCart.shtml`).
- **When (Sob quais condições):** Sempre que um produto contendo uma descrição muito longa (múltiplos caracteres contínuos sem espaços) é inserido no carrinho.

#### 🚶 Passos para Reprodução

1. Acessar a aplicação PetStore.
2. Adicionar ao carrinho qualquer produto que possua uma descrição longa ou alfanumérica extensa.
3. Acessar a página de visualização do Carrinho de Compras.
4. Observar a coluna de descrição do item.

#### 📊 Evidências e Análise

- **Resultado Obtido:** > O texto da descrição ultrapassa fisicamente a borda da coluna designada, quebrando o layout visual da página.
- **Resultado Esperado:** > O container da tabela deve possuir propriedades CSS de quebra automática de texto (Ex: `word-break: break-word` ou `overflow: hidden`) para conter o texto dentro do limite visual correto.

---

### 🐞 BUG-002: Persistência indevida de sessão ativa após comando de Logout

- **ID do Defeito:** `PS-BUG-002`
- **Severidade:** 🔴 Alta (Segurança/Lógica) | **Prioridade:** 🔴 Alta
- **Componente:** Authentication (Autenticação)

#### 🔍 Descrição Técnica (WWW)

- **What (O que ocorre):** O sistema permite que um usuário que acabou de se deslogar acesse novamente os dados privados da área restrita utilizando o histórico do navegador, sem exigir novas credenciais.
- **Where (Onde ocorre):** Fluxo de transição entre a sessão ativa e a página de desautenticação de conta.
- **When (Sob quais condições):** Imediatamente após clicar no comando `[Sign Out]` e interagir com o botão de voltar do browser.

#### 🚶 Passos para Reprodução

1. Realizar o login com credenciais válidas na aplicação.
2. Executar alguma ação na conta (Ex: acessar dados cadastrais internos).
3. Clicar no botão `[Sign Out]` no menu superior para encerrar a sessão corrente.
4. Na página de confirmação de saída, clicar na seta de **"Voltar" (Back)** do próprio navegador.

#### 📊 Evidências e Análise

- **Resultado Obtido:** > O navegador retorna para a tela logada anterior, exibindo as informações da conta e permitindo navegação normal sem validar a sessão.
- **Resultado Esperado:** > Os tokens de autenticação e cookies de sessão devem ser completamente destruídos/invalidados no client-side e no servidor após o Logout. O acionamento do histórico do browser deve ser interceptado e redirecionado para a tela de login.

---

### 🐞 BUG-003: Ausência de validação de dados no campo de senha (Inputs vazios/espaços)

- **ID do Defeito:** `PS-BUG-003`
- **Severidade:** 🟠 Média (Regra de Negócio) | **Prioridade:** 🔴 Alta
- **Componente:** User Registration (Cadastro de Usuário)

#### 🔍 Descrição Técnica (WWW)

- **What (O que ocorre):** O formulário de registro de nova conta aceita e processa a criação de credenciais de acesso compostas unicamente por espaços em branco (`"   "`).
- **Where (Onde ocorre):** Nos campos _New password_ e _Repeat password_ da tela de registro (`/shop/newAccount.shtml`).
- **When (Sob quais condições):** Durante a submissão de um novo formulário de cadastro de conta.

#### 🚶 Passos para Reprodução

1. Acessar a tela de criação de nova conta através do link `[Register Now!]`.
2. Preencher os demais campos obrigatórios com dados alfanuméricos válidos.
3. No campo _New password_, pressionar a barra de espaço 5 vezes.
4. No campo _Repeat password_, pressionar a barra de espaço 5 vezes de forma idêntica.
5. Clicar no botão `[Save Account Information]`.

#### 📊 Evidências e Análise

- **Resultado Obtido:** > O sistema processa o formulário com sucesso, criando e salvando uma conta com credenciais de acesso em branco e vulneráveis.
- **Resultado Esperado:** > O sistema deve sanitizar a string de entrada eliminando espaços vazios nas extremidades (_trim_) e aplicar validações por expressões regulares (Regex) que exijam caracteres alfanuméricos visíveis, exibindo um alerta de erro caso os critérios não sejam atingidos.
