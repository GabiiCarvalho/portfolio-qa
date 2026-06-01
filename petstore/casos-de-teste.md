# 📋 Suíte Completa de Casos de Teste (Test Suite) - PetStore

- **Ambiente de Testes:** Web (Ambiente de Staging)
- **Documentação de Origem:** Requisitos Estendidos da PetStore

---

### **PS-TC-001: Impeditivo de ID de usuário já registrado**

- **Prioridade:** 🔴 Alta
- **Passos para Execução:**
  1. Abrir formulário de registro.
  2. Inserir um _User ID_ já existente.
  3. Preencher os demais campos válidos.
  4. Clicar em `[Save Account]`.
- **Resultado Esperado:** > O sistema deve bloquear a ação e exibir uma mensagem de erro indicando que o _User ID_ deve ser único.

---

### **PS-TC-002: Bloqueio de caracteres especiais no User ID**

- **Prioridade:** 🔴 Alta
- **Passos para Execução:**
  1. Abrir formulário de registro.
  2. Inserir símbolo especial no _User ID_.
  3. Preencher demais campos válidos.
  4. Clicar em `[Save Account Information]`.
- **Resultado Esperado:** > O sistema deve exibir uma mensagem de erro indicando que o campo aceita apenas caracteres alfanuméricos.

---

### **PS-TC-003: Validação positiva de caracteres alfanuméricos no User ID**

- **Prioridade:** 🔥 Crítica
- **Passos para Execução:**
  1. Abrir formulário de registro.
  2. Inserir valor alfanumérico e números no _User ID_.
  3. Clicar em `[Save Account Information]`.
- **Resultado Esperado:** > Exibição de mensagem de sucesso no registro e redirecionamento automático para a página principal.

---

### **PS-TC-004: Validação de senha obrigatória com números**

- **Prioridade:** 🔴 Alta
- **Passos para Execução:**
  1. Acessar página de registro.
  2. Preencher campos obrigatórios.
  3. No campo _New password_, digitar senha sem números.
  4. Clicar em `[Save Account Information]`.
- **Resultado Esperado:** > Mensagem de erro indicando que a senha necessita de pelo menos um número.

---

### **PS-TC-005: Validação de senha obrigatória com caractere especial**

- **Prioridade:** 🔴 Alta
- **Passos para Execução:**
  1. Acessar página de registro.
  2. No campo _New password_, digitar senha sem caracteres especiais.
  3. Clicar em `[Save Account Information]`.
- **Resultado Esperado:** > Mensagem de erro solicitando um caractere especial (Ex: `!`, `@`, `#`).

---

### **PS-TC-006: Divergência entre campos de senha e confirmação**

- **Prioridade:** 🔴 Alta
- **Passos para Execução:**
  1. Digitar senha válida em _New password_.
  2. Digitar uma senha diferente em _Repeat password_.
  3. Clicar em `[Save Account Information]`.
- **Resultado Esperado:** > O sistema deve impedir o registro e informar que as senhas não coincidem.

---

### **PS-TC-007: Impeditivo de e-mail já cadastrado no sistema**

- **Prioridade:** 🔴 Alta
- **Passos para Execução:**
  1. No campo _E-mail_, inserir endereço já pertencente a outra conta.
  2. Preencher demais campos válidos.
  3. Clicar em `[Save Account Information]`.
- **Resultado Esperado:** > O sistema deve informar que o e-mail já está em uso e bloquear o registro.

---

### **PS-TC-008: Validação de formato inválido de e-mail**

- **Prioridade:** 🟡 Média
- **Passos para Execução:**
  1. Inserir texto fora do formato padrão de e-mail (sem `@` ou sem domínio válido).
  2. Tentar salvar o registro.
- **Resultado Esperado:** > O sistema deve validar o campo em tempo real ou ao enviar, exibindo erro de formato inválido.

---

### **PS-TC-009: Registro preenchendo apenas campos obrigatórios**

- **Prioridade:** 🔥 Crítica
- **Passos para Execução:**
  1. Abrir página principal, clicar em `[Sign In]` e `[Register Now!]`.
  2. Preencher apenas: _User ID_, _Email_, _New password_ e _Repeat password_.
  3. Clicar em `[Save Account Information]`.
- **Resultado Esperado:** > Usuário registrado com sucesso, redirecionado para a home com o identificador visível no topo da interface.

---

### **PS-TC-010: Autenticação (Login) com credenciais válidas**

- **Prioridade:** 🔥 Crítica
- **Passos para Execução:**
  1. Abrir página principal e clicar em `[Sign In]`.
  2. Inserir _User ID_ e senha válidos.
  3. Clicar no botão `[Login]`.
- **Resultado Esperado:** > Usuário autenticado com sucesso e redirecionado para a home com mensagem de boas-vindas.

---

### **PS-TC-011: Retorno de produtos relevantes na barra de busca**

- **Prioridade:** 🔴 Alta
- **Passos para Execução:**
  1. Localizar barra de pesquisa no topo da interface.
  2. Inserir uma palavra-chave válida (Ex: `"Bulldog"`).
  3. Clicar no botão `[Search]`.
- **Resultado Esperado:** > Exibição correta de uma lista contendo apenas os produtos relacionados à palavra-chave inserida.

---

### **PS-TC-012: Inclusão de item com sucesso no carrinho de compras**

- **Prioridade:** 🔴 Alta
- **Passos para Execução:**
  1. Navegar até a categoria _"Fish"_.
  2. Selecionar um produto do catálogo.
  3. Clicar no botão `[Add to Cart]` ao lado do ID do item.
- **Resultado Esperado:** > Item adicionado com sucesso e página do _Shopping Cart_ exibida listando o produto correto e valor correspondente.

---

### **PS-TC-013: Remoção de item do carrinho de compras**

- **Prioridade:** 🔴 Alta
- **Passos para Execução:**
  1. Navegar até a página do _Shopping Cart_ (com item previamente adicionado).
  2. Localizar o item na listagem.
  3. Clicar no botão `[Remove]` ao lado do item.
- **Resultado Esperado:** > Item removido da lista instantaneamente e o valor _Total_ atualizado com sucesso para `$0.00`.

---

### **PS-TC-014: Atualização de quantidade de itens no carrinho**

- **Prioridade:** 🟡 Média
- **Passos para Execução:**
  1. Acessar o carrinho com item adicionado.
  2. Alterar o campo _Quantity_ para o valor `"5"`.
  3. Clicar em `[Update Cart]`.
- **Resultado Esperado:** > Os valores de _Sub Total_ e _Total Cost_ devem ser recalculados e atualizados baseados na nova quantidade inserida.

---

### **PS-TC-015: Cadastro de usuário com dados válidos**

- **Prioridade:** 🔴 Alta
- **Passos para Execução:**
  1. Acessar a URL da página de cadastro.
  2. Preencher o campo de Nome com valor válido.
  3. Inserir e-mail válido inédito e senha forte.
  4. Confirmar a senha e clicar em `[Cadastrar]`.
- **Resultado Esperado:** > Usuário é registrado na plataforma com sucesso e redirecionado para a tela inicial já autenticado.

---

### **PS-TC-016: Tentativa de cadastro com formato de e-mail inválido**

- **Prioridade:** 🟡 Média
- **Passos para Execução:**
  1. Acessar a URL da página de cadastro.
  2. Preencher Nome e senha com valores válidos.
  3. Inserir e-mail fora do padrão técnico (Ex: `gabi.gmail.com`).
  4. Confirmar a senha e clicar em `[Cadastrar]`.
- **Resultado Esperado:** > O sistema impede o envio do formulário, barra a persistência e exibe a mensagem de validação: _“Formato de e-mail inválido“_.
