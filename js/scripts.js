// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const conteudos = [
  {
    title: "Portais de transparência",
    thumb: "img/icone.png",
    description: "Tenha acesso aos principais portais de transparência do RN.",
    conteudo_id: "GykTLqODQuU"
  },
  {
    title: "Planos de Dados Abertos",
    thumb: "img/icone-database.png",
    description: "Tenha acesso aos principais planos de dados abertos do RN. ",
    conteudo_id: "HN1UjzRSdBk"
  },
  {
    title: "Projetos de controle social",
    thumb: "img/icone-nave.png",
    description: "Tenha acesso aos principais projetos de controle social ou dados abertos do RN. ",
    conteudo_id: "rAzHvYnQ8DY"
  },
  {
    title: "Eventos no estado",
    thumb: "img/icone-calendario.png",
    description: "Tenha acesso aos principais eventos que ocorre no RN. ",
    conteudo_id: "ghTrp1x_1As"
  },
  {
    title: "Notícias no estado ",
    thumb: "img/icone-jornal.png",
    description: "Tenha acesso as principais notícias no estado do RN. ",
    conteudo_id: "GSqR2i-Pq6o"
  },
  {
    title: "Produções acadêmicas",
    thumb: "img/icone-academico.png",
    description: "Tenha acesso as produções acadêmicas desenvolvidas no RN.",
    conteudo_id: "2alg7MQ6_sI"
  }
];

conteudos.map(element => {
  const cardClone = card.cloneNode(true)
  cardClone.setAttribute("id", element.conteudo_id)
  cardClone.querySelector("img").src = element.thumb
  cardClone.querySelector(".title").innerHTML = element.title
  cardClone.querySelector(".description").innerHTML = element.description
  sectionCards.appendChild(cardClone)
})

card.remove()