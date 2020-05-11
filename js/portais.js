const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const conteudos = [
  {
    title: "Portais de transparência",
    thumb: "img/portal-prefeitura.png",
    description: "Prefeitura Municipal de Natal",
    conteudo_id: "GykTLqODQuU"
  },
  {
    title: "Planos de Dados Abertos",
    thumb: "img/portal-estadorn.png",
    description: "Governo do Rio Grande do Norte. ",
    conteudo_id: "HN1UjzRSdBk"
  },
  {
    title: "Projetos de controle social",
    thumb: "img/portal-ceara-mirim.png",
    description: "Prefeitura Municipal de Ceará-Mirim",
    conteudo_id: "rAzHvYnQ8DY"
  },
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