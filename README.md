# Carrinho de compra
Um projeto criado para entender os conceitos sobre o Context e Provider no React. 
[Veja como ficou](https://shopping-cart-tettam.vercel.app/)


### Fluxo de Dados
Inicialmente criei um arquivo dentro da pasta service responsável por fazer requisições a API do MercadoLivre. Como padrão a busca é feita por smartphone, mas existe a possibilidade por meio do campo de busca de fazer pesquisas personalizadas.

Foi criado um Context específico para os métodos do carrinho de compra, sendo responsável por recebe a resposta que vem da API. Depois disso, o Provider recebe como parâmetro o Context e retorna como componente, ficando acessível para todas as rotas filhas.

Para consumir as informações da API, basta utilizar o hook useContext fornecido pelo React, retornando todos os métodos existentes.