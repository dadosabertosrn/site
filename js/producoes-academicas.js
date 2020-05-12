const sectionCards = document.querySelector("main .container");
const card = document.querySelector(".projeto");

const conteudos = [
  {
    title: "Título de produção acadêmica 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    conteudo_id: "GykTLqODQuU"
  },
  {
    title: "Título de produção acadêmica 2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    conteudo_id: "GykTLqODQuU"
  },
];

conteudos.map(element => {
  const cardClone = card.cloneNode(true)
  cardClone.querySelector(".title").innerHTML = element.title
  cardClone.querySelector(".description").innerHTML = element.description
  sectionCards.appendChild(cardClone)
})

card.remove()