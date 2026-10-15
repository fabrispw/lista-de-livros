# Minha Lista de Livros

Site estático (HTML, CSS e JavaScript puro) com a lista de livros que faltam na minha biblioteca, para o amigo secreto.

## Arquivos

```
lista-presentes/
├── index.html   estrutura da página
├── style.css    cores, fontes e layout
├── script.js    catálogo de livros, busca, filtros e compartilhamento
└── README.md    este guia
```

## Publicar no GitHub Pages

1. Crie uma conta gratuita em https://github.com (se ainda não tiver).
2. Clique em **+** (canto superior direito) → **New repository**.
3. Em *Repository name*, escreva por exemplo `lista-de-livros`. Marque **Public** e clique em **Create repository**.
4. Na página do repositório novo, clique em **uploading an existing file**.
5. Arraste para a página os **arquivos** `index.html`, `style.css`, `script.js` e `README.md` (os arquivos, não a pasta). Clique em **Commit changes**.
6. Vá em **Settings** → **Pages** (menu da esquerda).
7. Em *Build and deployment*, deixe *Source* como **Deploy from a branch**. Em *Branch*, escolha **main** e a pasta **/ (root)**, e clique em **Save**.
8. Espere 1 a 2 minutos e atualize a página. O endereço aparece no topo: `https://SEU-USUARIO.github.io/lista-de-livros/`.

## Testar antes de compartilhar

- Abra o endereço no celular e no computador.
- Digite um autor na busca (ex.: Sanderson) e confira o contador de resultados.
- Escolha uma coleção no filtro, depois clique em **Limpar filtros**.
- Clique em **Compartilhar lista**: no celular abre o menu de compartilhamento; no computador copia o endereço.
- Pressione a tecla Tab várias vezes para ver se o foco aparece em todos os controles.

## Atualizar a lista

Abra `script.js` no GitHub (clique no arquivo → ícone de lápis). O catálogo fica no começo do arquivo, em `COLECOES`.

- **Remover um livro** (por exemplo, quando alguém já te deu): apague a linha `{ t: "..." }` dele.
- **Adicionar um livro**: acrescente `{ t: "Título", v: 2 }` dentro da lista `livros` da coleção. O `v` (volume) é opcional.
- **Nova coleção**: copie um bloco inteiro de coleção e troque nome, autor, gênero e livros.
- Ao terminar, clique em **Commit changes**. O site atualiza em poucos minutos.

## Capas e links de compra

Os livros começam sem capa e sem link, de propósito: nenhum endereço foi inventado. Cada livro mostra um bloco colorido com o título.

Para adicionar, preencha os campos no livro:

```js
{ t: "Elantris", capa: "https://.../capa.jpg", url: "https://.../pagina-do-livro", editora: "Nome da editora" }
```

- `capa`: endereço de uma imagem (ou o nome de um arquivo enviado ao repositório, como `capas/elantris.jpg`).
- `url`: página específica do livro (editora ou livraria). Só então o botão **Ver livro** aparece.
- Se a imagem não carregar, o bloco com o título volta sozinho.

## Personalizar

- Seu nome ou foto: procure o comentário `PERSONALIZE` em `index.html`.
- Cores: variáveis no começo de `style.css`.
