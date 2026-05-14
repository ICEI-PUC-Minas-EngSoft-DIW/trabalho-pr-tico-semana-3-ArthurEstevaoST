/* ============================================================
   VynilVault — app.js
   Responsabilidades:
   • Armazena os dados dos álbuns em formato JSON
   • Monta os cards dinamicamente na home-page (index.html)
   • Lê o parâmetro "id" da query string e monta a página de
    detalhes (detalhes.html) com o álbum correspondente
   ============================================================ */

// ── Estrutura de dados JSON ──────────────────────────────────
const dados = [
  {
    "id": 1,
    "titulo": "Kind of Blue",
    "artista": "Miles Davis",
    "ano": 1959,
    "genero": "Jazz",
    "gravadora": "Columbia Records",
    "duracao": "45 min",
    "descricao": "Um dos álbuns mais icônicos do cool jazz, reunindo nomes como John Coltrane e Bill Evans.",
    "conteudo": "Gravado em apenas duas sessões, em março e abril de 1959, Kind of Blue é amplamente considerado o álbum de jazz mais vendido de todos os tempos. Miles Davis reuniu uma formação extraordinária — John Coltrane, Cannonball Adderley, Bill Evans, Wynton Kelly, Paul Chambers e Jimmy Cobb — e lhes entregou apenas esboços melódicos no dia das gravações. O resultado foi um álbum de improvisação modal que redefiniu a linguagem do jazz e influenciou gerações de músicos de todos os gêneros.",
    "faixas": ["So What", "Freddie Freeloader", "Blue in Green", "All Blues", "Flamenco Sketches"],
    "capa": "https://picsum.photos/id/91/600/600"
  },
  {
    "id": 2,
    "titulo": "A Love Supreme",
    "artista": "John Coltrane",
    "ano": 1964,
    "genero": "Jazz",
    "gravadora": "Impulse! Records",
    "duracao": "33 min",
    "descricao": "Obra-prima espiritual de Coltrane, dividida em quatro movimentos que traduzem uma jornada de fé.",
    "conteudo": "A Love Supreme é uma suite em quatro partes — Acknowledgement, Resolution, Pursuance e Psalm — composta por John Coltrane como uma oferta ao divino após superar sua dependência química. Gravado em dezembro de 1964 com o clássico quarteto de Coltrane (McCoy Tyner, Jimmy Garrison e Elvin Jones), o álbum transcende o jazz convencional para entrar em território quase litúrgico. O motivo de quatro notas que abre o álbum é uma das frases mais reconhecíveis da história da música.",
    "faixas": ["Part I – Acknowledgement", "Part II – Resolution", "Part III – Pursuance", "Part IV – Psalm"],
    "capa": "https://picsum.photos/id/326/600/600"
  },
  {
    "id": 3,
    "titulo": "Goldberg Variations",
    "artista": "Bach / Glenn Gould",
    "ano": 1955,
    "genero": "Música Clássica",
    "gravadora": "Columbia Masterworks",
    "duracao": "38 min",
    "descricao": "Interpretação histórica de Glenn Gould que redefiniu o cânone da música clássica para piano.",
    "conteudo": "As Variações Goldberg de J.S. Bach foram compostas por volta de 1741 e consistem em uma ária seguida de 30 variações. A gravação de 1955 por Glenn Gould, feita quando o pianista tinha apenas 22 anos, tornou-se imediatamente uma sensação. Gould cantarolava audível e inseparavelmente durante a execução — um detalhe que virou marca registrada. Décadas depois, em 1981, pouco antes de morrer, Gould regravou a obra com interpretação radicalmente mais lenta e introspectiva, deixando à posteridade dois retratos opostos e igualmente magnéticos da mesma música.",
    "faixas": ["Aria", "Variation 1", "Variation 13", "Variation 25", "Variation 30", "Aria da capo"],
    "capa": "https://picsum.photos/id/305/600/600"
  },
  {
    "id": 4,
    "titulo": "Getz/Gilberto",
    "artista": "Stan Getz & João Gilberto",
    "ano": 1963,
    "genero": "Bossa Nova",
    "gravadora": "Verve Records",
    "duracao": "34 min",
    "descricao": "A aliança perfeita entre o saxofone de Stan Getz e o violão de João Gilberto que levou a Bossa Nova ao mundo.",
    "conteudo": "Gravado em março de 1963 em Nova York, Getz/Gilberto é o encontro definitivo entre o cool jazz americano e a Bossa Nova brasileira. O álbum conta com composições de Tom Jobim e apresenta Astrud Gilberto em sua estreia discográfica na faixa The Girl from Ipanema, que se tornaria um dos singles mais tocados de todos os tempos. Ganhou quatro Grammy Awards em 1965, incluindo Álbum do Ano — o primeiro álbum de jazz a receber o prêmio máximo.",
    "faixas": ["The Girl from Ipanema", "Doralice", "P'ra Machucar meu Coração", "Desafinado", "Corcovado", "So Danço Samba"],
    "capa": "https://picsum.photos/id/167/600/600"
  },
  {
    "id": 5,
    "titulo": "Chet Baker Sings",
    "artista": "Chet Baker",
    "ano": 1954,
    "genero": "Jazz Vocal",
    "gravadora": "Pacific Jazz Records",
    "duracao": "32 min",
    "descricao": "A voz melancólica e o trompete lânguido de Baker num álbum que definiu o romantismo do west coast jazz.",
    "conteudo": "Chet Baker tinha apenas 25 anos quando gravou Chet Baker Sings para a Pacific Jazz. Sua voz — suave, quase frágil, desprovida de vibrato — capturava uma melancolia singular que contrastava com o vigor extrovertido de muitos dos cantores de jazz da época. O álbum inclui standards como My Funny Valentine e But Not for Me, e permanece um dos discos de jazz mais vendidos de todos os tempos. Baker tocava trompete e cantava com a mesma voz interior: intimista, próxima, confessional.",
    "faixas": ["That Old Feeling", "I Fall in Love Too Easily", "It's Always You", "My Funny Valentine", "But Not for Me", "The Thrill Is Gone"],
    "capa": "https://picsum.photos/id/392/600/600"
  },
  {
    "id": 6,
    "titulo": "The Well-Tempered Clavier",
    "artista": "Bach / Angela Hewitt",
    "ano": 1997,
    "genero": "Música Clássica",
    "gravadora": "Hyperion Records",
    "duracao": "155 min",
    "descricao": "A pianista canadense Angela Hewitt entrega uma das leituras mais claras e equilibradas do monumental ciclo de Bach.",
    "conteudo": "O Cravo Bem Temperado de J.S. Bach — dois livros, 48 prelúdios e fugas em todas as tonalidades maiores e menores — é muitas vezes chamado de Antigo Testamento do piano. A gravação de Angela Hewitt, realizada ao longo de dois anos para a Hyperion, é aclamada por sua transparência polifônica e naturalidade expressiva. Hewitt trata Bach sem afetação: sem excessos românticos, sem o rigor glacial do historicismo extremo. O resultado é uma música que respira, que conversa consigo mesma, que ilumina cada voz como se fossem pessoas distintas em diálogo.",
    "faixas": ["Prelude and Fugue in C major BWV 846", "Prelude and Fugue in C minor BWV 847", "Prelude and Fugue in D major BWV 850", "Prelude and Fugue in B minor BWV 869"],
    "capa": "https://picsum.photos/id/28/600/600"
  }
];

// ── Utilitários

function getIdDaURL() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

function renderFaixas(faixas) {
  return faixas
    .map(faixa => `<li class="tracklist__item">${faixa}</li>`)
    .join("");
}

// ── HOME-PAGE

function renderCards() {
  const grid = document.getElementById("albums-grid");
  if (!grid) return; // proteção: só executa na home-page

  grid.innerHTML = ""; // limpa conteúdo estático eventual

  dados.forEach(album => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <img
        class="card__cover"
        src="${album.capa}"
        alt="Capa do álbum ${album.titulo}"
      >
      <div class="card__body">
        <h3 class="card__title">${album.titulo}</h3>
        <p class="card__meta">${album.artista} · ${album.ano} · ${album.genero}</p>
        <p class="card__desc">${album.descricao}</p>
        <a class="btn btn--primary card__btn" href="detalhes.html?id=${album.id}">
          Ver detalhes →
        </a>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ── PÁGINA DE DETALHES

function renderDetalhes() {
  const container = document.getElementById("detalhe-container");
  if (!container) return; // proteção: só executa em detalhes.html

  const id = getIdDaURL();
  const album = dados.find(item => item.id === id);

  // Álbum não encontrado — exibe mensagem de erro
  if (!album) {
    container.innerHTML = `
      <div class="detalhe__erro">
        <p>Álbum não encontrado.</p>
        <a class="btn btn--primary" href="index.html">← Voltar ao início</a>
      </div>
    `;
    return;
  }

  // Atualiza o título da aba do navegador
  document.title = `${album.titulo} — VynilVault`;

  // Monta o HTML completo da página de detalhes
  container.innerHTML = `
    <div class="detalhe">

      <a class="detalhe__voltar" href="index.html">← Voltar</a>

      <div class="detalhe__topo">
        <div class="detalhe__capa-wrap">
          <img
            class="detalhe__capa"
            src="${album.capa}"
            alt="Capa do álbum ${album.titulo}"
          >
          <div class="detalhe__vinyl-shadow"></div>
        </div>

        <div class="detalhe__info">
          <span class="detalhe__genero">${album.genero}</span>
          <h1 class="detalhe__titulo">${album.titulo}</h1>
          <p class="detalhe__artista">${album.artista}</p>

          <ul class="detalhe__meta-lista">
            <li>
              <span class="meta__label">Ano</span>
              <span class="meta__valor">${album.ano}</span>
            </li>
            <li>
              <span class="meta__label">Gravadora</span>
              <span class="meta__valor">${album.gravadora}</span>
            </li>
            <li>
              <span class="meta__label">Duração</span>
              <span class="meta__valor">${album.duracao}</span>
            </li>
          </ul>

          <p class="detalhe__descricao">${album.descricao}</p>
        </div>
      </div>

      <div class="detalhe__corpo">
        <div class="detalhe__resenha">
          <h2 class="detalhe__subtitulo">Sobre o álbum</h2>
          <p class="detalhe__conteudo">${album.conteudo}</p>
        </div>

        <div class="detalhe__faixas">
          <h2 class="detalhe__subtitulo">Faixas</h2>
          <ol class="tracklist">
            ${renderFaixas(album.faixas)}
          </ol>
        </div>
      </div>

    </div>
  `;
}

// ── Inicialização ────────────────────────────────────────────

renderCards();
renderDetalhes();