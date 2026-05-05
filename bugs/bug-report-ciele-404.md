# Bug Report: Erro 404 na Home Page

**ID:** BUG-001
**Título:** [Home] Erro 404 ao acessar a URL principal do site.
**Severidade:** Crítica (Bloqueante)
**Prioridade:** Alta

### Ambiente
- **Navegadores:** Safari e Google Chrome (v124)
- **URL:** [https://www.cieleempreendimentos.com.br](https://www.cieleempreendimentos.com.br)

### Descrição
Ao acessar o domínio principal, o servidor retorna uma página de erro 404 (NOT_FOUND), impedindo o acesso a qualquer conteúdo do site.

## Passos para Reproduzir
1. Abrir o navegador;
2. Digital a URL: `www.cieleempreendimentos.com.br` na barra de endereços;
3. Pressione "Enter";

### Resultados
- **Resultado Atual**: A tela exibe a mensagem "404: NOT_FOUND".
- **Resultado Esperado:** O site deve carregar a página inicial com sucesso (Status 200)

## Evidências
![Evidência de Rede - Status 404](./Captura%20de%20Tela%202026-05-05%20às%2018.07.30.png)
![Evidência de Console - Erro de Recurso](./Captura%20de%20Tela%202026-05-05%20às%2018.08.09.png)

- ## Notas Técnicas
- O erro foi reproduzido em múltiplos navegadores, confirmando falha no recurso hospedado em `connectbroker.com.br`.
