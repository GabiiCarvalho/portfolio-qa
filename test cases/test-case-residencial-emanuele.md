# Suíte de Testes: Landing Page - Captação de Leads.

Este documento contém os cenários de teste para a funcionalidade de cadastro de novos usuários/clientes.

**ID:** CT-01: Efetuar cadastro no formulário com sucesso (Cenário Positivo)
**Objetivo:** Validar se o site permite o cadastro quando todos os dados são válidos.
**Prioridade:** Alta

### Pré-condições

- O usuário deve estar na página inicial do site.
- Campos do formulário carregados e visíveis.

## Passos

1. Acessar o site www.residencialemanuele.com.br
2. Localizar o formulário de cadastro.
3. Inserir um nome válido no campo "Nome Completo".
4. Inserir um número de telefone válido com o DDD (ex: (47) 99999-9999).
5. Inserir um e-mail com formato válido (ex: teste@gmail.com).
6. Clicar no botão "Quero saber mais".

## Resultado Esperado

- O site deve mostrar uma mensagem de sucesso para o usuário "Seu envio foi bem-sucedido".

# ----------------

**ID:** CT-02: Tentar efetuar cadastro no formulário com e-mail inválido
**Objetivo:** Validar se o site impede o cadastro com o formato de e-mail incorreto.

## Passos

1. Acessar o site www.residencialemanuele.com.br
2. Localizar o formulário de cadastro.
3. Inserir um nome válido no campo "Nome Completo".
4. Inserir um número de telefone válido com o DDD (ex: (47) 99999-9999).
5. Inserir um e-mail com formato inválido.
6. Clicar no botão [Quero saber mais].

## Resultado Esperado

- O site deve exibir uma mensagem de erro: "Por favor, insira um e-mail válido". O cadastro não deve ser processado.

# --------------------

**ID:** CT-03: Validação de Campos Obrigatórios
**Objetivo:** Exibir destaque em campos vazios e não permitir envio

## Passos

1. Acessar o site www.residencialemanuele.com.br
2. Localizar o formulário de cadastro.
3. Tentar clicar no botão de ação (CTA) sem preencher nenhum campo [Quero saber mais].

## Resultado Esperado

- A Landing Page deve exibir a mensagem 'Preencha este campo' abaixo de cada campo vazio e a borda do input deve ficar vermelha ou cinza.

**Status da Execução:**

- [x] Passou (Chrome)
- [x] Passou (Safari)
