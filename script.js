/* =====================================================================
   CATÁLOGO — é aqui que você edita a lista.
   Cada coleção tem: nome, autor, genero e livros.
   Cada livro tem: t (título) e, se quiser, v (volume), a (autor, se
   diferente do da coleção), capa (opcional: só se quiser usar outro nome
   ou endereço; por padrão o site procura capas/<titulo-do-livro>.jpg),
   url (página do livro),
   editora e sinopse. Campos que você não preencher simplesmente não
   aparecem. Para remover um livro, apague a linha dele.
   ===================================================================== */
const COLECOES = [
  { nome: "Rangers: A Origem", autor: "John Flanagan", genero: "Fantasia", livros: [
    { t: "A Batalha de Hackham", v: 2 } ] },
  { nome: "Royal Rangers", autor: "John Flanagan", genero: "Fantasia", livros: [
    { t: "O Clã da Raposa Vermelha" } ] },
  
  { nome: "Crônicas do Mundo Emerso", autor: "Licia Troisi", genero: "Fantasia", livros: [
    { t: "O Talismã do Poder", v: 3 } ] },
  { nome: "Guerras do Mundo Emerso", autor: "Licia Troisi", genero: "Fantasia", livros: [
    { t: "Um Novo Reino", v: 3 } ] },
  { nome: "Lendas do Mundo Emerso", autor: "Licia Troisi", genero: "Fantasia", livros: [
    { t: "Os Últimos Heróis", v: 3 } ] },
  { nome: "A Queda dos Reinos", autor: "Morgan Rhodes", genero: "Fantasia", livros: [
    { t: "A Primavera Rebelde", v: 2 }, { t: "A Ascensão das Trevas", v: 3 },
    { t: "Maré Congelada", v: 4 }, { t: "Tempestade de Cristal", v: 5 },
    { t: "Reinado Imortal", v: 6 } ] },
  { nome: "Assassin's Creed", autor: "Oliver Bowden", genero: "Aventura", livros: [
    { t: "Bandeira Negra", v: 6 }, { t: "Unity", v: 7 }, { t: "Submundo", v: 8 } ] },
  { nome: "A Mão Esquerda de Deus", autor: "Paul Hoffman", genero: "Fantasia", livros: [
    { t: "As Últimas Quatro Coisas", v: 2 }, { t: "O Bater de Suas Asas", v: 3 } ] },
 
  { nome: "The Walking Dead", autor: "Robert Kirkman e Jay Bonansinga", genero: "Terror", livros: [
    { t: "Declínio" }, { t: "Invasão" }, { t: "Busca e Destruição" }, { t: "Retorno a Woodbury" } ] },
  { nome: "Mistborn: Segunda Era", autor: "Brandon Sanderson", genero: "Fantasia", livros: [
    { t: "A Liga da Lei", v: 1 }, { t: "As Sombras de Si Mesmo", v: 2 },
    { t: "Os Braceletes da Perdição", v: 3 }, { t: "O Metal Perdido", v: 4 } ] },
  { nome: "Trono de Vidro", autor: "Sarah J. Maas", genero: "Fantasia", livros: [
    { t: "A Lâmina da Assassina" }, { t: "Trono de Vidro" }, { t: "Coroa da Meia-Noite" },
    { t: "Herdeira do Fogo" }, { t: "Rainha das Sombras" }, { t: "Império de Tempestades 1" },{ t: "Império de Tempestades 2" },
    { t: "Torre do Alvorecer" }, { t: "Reino de Cinzas" } ] },
  { nome: "Elantris", autor: "Brandon Sanderson", genero: "Fantasia", livros: [
    { t: "Elantris" } ] },
  { nome: "As Crônicas da Quasinoite", autor: "Jay Kristoff", genero: "Fantasia", livros: [
    { t: "A Sombra do Corvo", v: 1 }, { t: "O Espetáculo Sangrento", v: 2 },
    { t: "As Cinzas da República", v: 3 } ] },
  { nome: "A Rainha Vermelha", autor: "Victoria Aveyard", genero: "Fantasia", livros: [
    { t: "A Rainha Vermelha", v: 1 }, { t: "Espada de Vidro", v: 2 },
    { t: "A Prisão do Rei", v: 3 }, { t: "Tempestade de Guerra", v: 4 },
    { t: "Coroa Cruel", sinopse: "Histórias complementares." },
    { t: "Trono Destruído", sinopse: "Coletânea de histórias. Parte dos contos aparece também em outras edições." } ] },
  { nome: "A Guerra da Rainha Vermelha", autor: "Mark Lawrence", genero: "Fantasia", livros: [
    { t: "prince of fools", v: 1 }, { t: "liar's key", v: 2 }, { t: "the wheel of Osheim", v: 3 } ] },
  { nome: "Uma Chama Entre as Cinzas", autor: "Sabaa Tahir", genero: "Fantasia", livros: [
    { t: "Uma Chama Entre as Cinzas", v: 1 }, { t: "Uma Tocha na Escuridão", v: 2 },
    { t: "Um Assassino nos Portões", v: 3 }, { t: "Um Céu Além da Tempestade", v: 4 } ] },
  { nome: "Wereworld", autor: "Curtis Jobling", genero: "Fantasia", livros: [
    { t: "A Sombra do Gavião", v: 3 }, { t: "Ninho de Serpentes", v: 4 },
    { t: "Tempestade de Tubarões", v: 5 }, { t: "Guerra dos Werelords", v: 6 } ] },
  { nome: "Conjurador", autor: "Taran Matharu", genero: "Fantasia", livros: [
    { t: "O Aprendiz", v: 1 }, { t: "A Inquisição", v: 2 }, { t: "O Mago de Batalha", v: 3 } ] },
  { nome: "Ciclo Terramar", autor: "Ursula K. Le Guin", genero: "Fantasia", livros: [
    { t: "O Feiticeiro de Terramar", v: 1 }, { t: "As Tumbas de Atuan", v: 2 },
    { t: "A Última Margem", v: 3 }, { t: "Tehanu", v: 4 },
    { t: "Contos de Terramar", v: 5, editora: "Morro Branco" }, { t: "O Outro Vento", v: 6 } ] }
];

/* ===================== A partir daqui, o código do site ===================== */

// Transforma as coleções em uma lista simples de livros.
const LIVROS = COLECOES.flatMap((c, ci) => c.livros.map((l, li) => ({
  titulo: l.t, autor: l.a || c.autor, colAutor: c.autor, colecao: c.nome, genero: c.genero,
  volume: l.v || null, capa: l.capa || "", url: l.url || "", editora: l.editora || "",
  sinopse: l.sinopse || "", ordemCol: ci, ordemLivro: li
})));

const $ = (id) => document.getElementById(id);
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const cmp = (a, b) => a.localeCompare(b, "pt-BR");
const CORES = ["#1f3d36", "#6b1f2e", "#27475a", "#5a3a22", "#3d3a5c", "#4a5a2a"];

function el(tag, cls, texto) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (texto) e.textContent = texto;
  return e;
}

// Nome do arquivo da capa: o título sem acentos, em minúsculas, com hífens.
// Exemplo: "Trono de Vidro" -> capas/trono-de-vidro.jpg
const EXTENSOES = ["jpg", "jpeg", "png", "webp"];
const slug = (s) => norm(s).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// Capa: procura o arquivo na pasta "capas" (tenta jpg, jpeg, png e webp).
// Se o livro tiver o campo capa preenchido, usa esse endereço no lugar.
// Se nenhuma imagem existir ou carregar, mostra um bloco com o título.
function criarCapa(livro) {
  const box = el("div", "capa");
  const placeholder = () => {
    const ph = el("div", "capa-ph", livro.titulo);
    ph.style.background = CORES[livro.ordemCol % CORES.length];
    ph.appendChild(el("small", "", livro.autor));
    box.replaceChildren(ph);
  };
  const candidatas = livro.capa
    ? [livro.capa]
    : EXTENSOES.map((e) => "capas/" + slug(livro.titulo) + "." + e);
  let i = 0;
  const img = document.createElement("img");
  img.alt = "Capa de " + livro.titulo;
  img.loading = "lazy";
  img.onerror = () => {
    i++;
    if (i < candidatas.length) img.src = candidatas[i];
    else placeholder();
  };
  img.src = candidatas[0];
  box.appendChild(img);
  return box;
}

function criarCard(livro) {
  const card = el("article", "card");
  card.appendChild(criarCapa(livro));
  const info = el("div", "info");
  info.appendChild(el("h3", "", livro.titulo));
  info.appendChild(el("p", "autor", livro.autor));
  const meta = [livro.colecao, livro.volume ? "Vol. " + livro.volume : ""].filter(Boolean).join(" · ");
  info.appendChild(el("p", "meta", meta));
  if (livro.editora) info.appendChild(el("p", "autor", "Editora " + livro.editora));
  if (livro.sinopse) info.appendChild(el("p", "sinopse", livro.sinopse));
  if (livro.url) {
    const a = el("a", "ver", "Ver livro");
    a.href = livro.url; a.target = "_blank"; a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", "Ver livro: " + livro.titulo + " (abre em nova aba)");
    info.appendChild(a);
  }
  card.appendChild(info);
  return card;
}

function filtrar() {
  const q = norm($("busca").value.trim());
  const col = $("f-colecao").value, gen = $("f-genero").value;
  return LIVROS.filter((l) =>
    (!q || norm(l.titulo + " " + l.autor + " " + l.colecao).includes(q)) &&
    (!col || l.colecao === col) && (!gen || l.genero === gen));
}

function desenhar() {
  const lista = filtrar(), ordem = $("ordem").value, cat = $("catalogo");
  cat.replaceChildren();
  $("vazio").hidden = lista.length > 0;
  $("contador").textContent = lista.length === LIVROS.length
    ? "Mostrando todos os " + lista.length + " livros."
    : lista.length + (lista.length === 1 ? " livro encontrado." : " livros encontrados.");

  if (ordem === "titulo") {
    const sec = el("section", "colecao");
    sec.appendChild(el("h2", "", "Todos os títulos"));
    const g = el("div", "grade");
    [...lista].sort((a, b) => cmp(a.titulo, b.titulo)).forEach((l) => g.appendChild(criarCard(l)));
    sec.appendChild(g); cat.appendChild(sec);
    return;
  }
  const grupos = new Map();
  lista.forEach((l) => {
    if (!grupos.has(l.colecao)) grupos.set(l.colecao, []);
    grupos.get(l.colecao).push(l);
  });
  let nomes = [...grupos.keys()];
  if (ordem === "colecao-az") nomes.sort(cmp);
  nomes.forEach((nome) => {
    const livros = grupos.get(nome).sort((a, b) => a.ordemLivro - b.ordemLivro);
    const sec = el("section", "colecao");
    sec.setAttribute("aria-label", nome);
    sec.appendChild(el("h2", "", nome));
    sec.appendChild(el("p", "autor-col", livros[0].colAutor + " · " + livros.length + (livros.length === 1 ? " livro" : " livros")));
    const g = el("div", "grade");
    livros.forEach((l) => g.appendChild(criarCard(l)));
    sec.appendChild(g); cat.appendChild(sec);
  });
}

function preencherFiltros() {
  const fc = $("f-colecao"), fg = $("f-genero");
  fc.add(new Option("Todas as coleções", ""));
  COLECOES.map((c) => c.nome).sort(cmp).forEach((n) => fc.add(new Option(n, n)));
  fg.add(new Option("Todos os gêneros", ""));
  [...new Set(COLECOES.map((c) => c.genero))].sort(cmp).forEach((g) => fg.add(new Option(g, g)));
}

let timer;
function aviso(msg) {
  const t = $("toast");
  t.textContent = msg; t.classList.add("on");
  clearTimeout(timer);
  timer = setTimeout(() => t.classList.remove("on"), 2500);
}

async function compartilhar() {
  const dados = { title: "Minha Lista de Livros", text: "Minha lista de livros para o amigo secreto:", url: location.href };
  if (navigator.share) {
    try { await navigator.share(dados); return; } catch (e) { if (e.name === "AbortError") return; }
  }
  try {
    await navigator.clipboard.writeText(location.href);
    aviso("Endereço copiado!");
  } catch (e) {
    window.prompt("Copie o endereço da página:", location.href);
  }
}

$("total").textContent = LIVROS.length;
$("total-col").textContent = COLECOES.length;
preencherFiltros();
["busca", "f-colecao", "f-genero", "ordem"].forEach((id) => {
  $(id).addEventListener(id === "busca" ? "input" : "change", desenhar);
});
$("limpar").addEventListener("click", () => {
  $("busca").value = ""; $("f-colecao").value = ""; $("f-genero").value = ""; $("ordem").value = "colecao";
  desenhar(); $("busca").focus();
});
$("compartilhar").addEventListener("click", compartilhar);
desenhar();
