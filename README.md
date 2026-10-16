# Laboratório Interativo de Algoritmos de Ordenação

## Sobre o projeto
O Laboratório Interativo de Algoritmos de Ordenação é um projeto educacional do curso Técnico em Informática, desenvolvido para demonstrar como diferentes algoritmos organizam uma sequência numérica.

## Objetivo
Permitir que o visitante informe números, escolha um algoritmo e selecione a ordem crescente ou decrescente. A aplicação apresenta a sequência original, o resultado e um registro das comparações e trocas realizadas.

## Problema que resolve
O projeto ajuda estudantes a visualizar e compreender o funcionamento de algoritmos de ordenação, em vez de observar somente o resultado final.

## Tecnologias utilizadas
- HTML5: estrutura da página.
- CSS3: aparência e adaptação a diferentes tamanhos de tela.
- JavaScript: validação, algoritmos e atualização dos resultados no navegador.
- GitHub: armazenamento e controle de versão do código.
- GitHub Pages: publicação gratuita da aplicação.

## Algoritmos implementados
- **Bubble Sort:** compara elementos vizinhos e troca suas posições quando necessário.
- **Selection Sort:** seleciona o menor elemento para ordem crescente ou o maior para ordem decrescente e o coloca na posição correta.

Os algoritmos de ordenação são implementados manualmente em JavaScript. `Array.sort()` não é utilizado como método principal de ordenação.

## Como executar localmente
1. Baixe ou clone este repositório.
2. Mantenha `index.html`, `style.css`, `script.js` e `README.md` na mesma pasta.
3. Abra o arquivo `index.html` em um navegador atualizado.
4. Digite os números, escolha o algoritmo e a ordem e clique em **Ordenar números**.

Não é necessário instalar servidor ou banco de dados para executar a versão básica.

## Exemplo de uso
Entrada: `8, 3, 10, -2, 3, 1`

- Ordem crescente: `-2, 1, 3, 3, 8, 10`
- Ordem decrescente: `10, 8, 3, 3, 1, -2`

## Testes obrigatórios
Os dois algoritmos devem ser testados com:
1. Sequência comum: `5, 2, 8, 1` → `1, 2, 5, 8`.
2. Valores repetidos: `4, 2, 4, 1` → `1, 2, 4, 4`.
3. Valores negativos: `3, -5, 0, -1` → `-5, -1, 0, 3`.
4. Um elemento: `7` → `7`.
5. Sequência vazia → mensagem adequada.
6. Entrada inválida: `3, abc, 2` → mensagem de erro.
7. Ordem decrescente: `1, 5, 3` → `5, 3, 1`.

## Limitações e melhorias futuras
Esta é uma aplicação executada inteiramente no navegador e não armazena dados. Como melhoria futura, a interface pode apresentar uma animação visual das comparações e trocas.

## Autores e contribuições
- Autores: preencher com os nomes dos integrantes do grupo.
- Contribuições individuais: descrever a parte desenvolvida por cada integrante.

## Links
- Repositório: preencher após criar o repositório no GitHub.
- Site publicado: preencher após ativar o GitHub Pages.

## Créditos
Projeto educacional desenvolvido para a disciplina de Estrutura de Dados.
