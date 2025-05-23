# Aula 03

## Revisão Geral

### HTML - HyperText Markup Language
É a aestrutura da páquina web. Ela organiza o conteúdo em elemnto como:
- Títulos: <h1> até <h6>
- Parágrafos: <p>
- Imagens: <img> 
- Outros: Listas, Tabelas, seções, divs e etc

### CSS - Cascading Style Sheet
É uma linguagem de estilo (formataçãio) que define cores, fontes, tramanho, posições (ver hoje) e animações.
CSS ele completa o HTML (esqueleto) para uma interface moderna visual chamada CSS (pele e roupas)

### JavaScript - JS
É a linguagem de programação Web (normamente client-side) usada para dar interatividade e dinamismo na páginas Web (FrontEnd) - 
Foco de FrontEnd 2

## Web Semância
A Web Semântica é a prática de usar tags HTML que representam o significado real do conteúdo, facilitando a leitura por humanos, navegadores e ferramentas de acessibilidade.

## Layouts Modernos com CSS

## Flexbox (Flexível + Caixa)
é um sistema unidimensional (horizontal OU vertical)

Um elemento é o elemento PAI (container)
Aplicamos o CSS: display: flex; (transforamamos esse elemento de um container flexível)

Elemento filhos (itens) ou itens flexíveis 
- Controlar o alinhamentom espaçamento e direção dos itens dentro de um container

Não é umma boa prática ter um container flex detro de outro


.container {
    display: flex;
}

flex-direction: column;