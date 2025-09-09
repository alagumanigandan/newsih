const trees = [
  {name: "Mango Tree", desc: "Produces sweet mangoes all summer.", img: "../../../../img/mangotree.webp"},
  {name: "Neem Tree", desc: "Medicinal and evergreen tree.", img: "../../../../img/neemtree.webp"},
  {name: "Banyan Tree", desc: "Symbol of longevity and shade.", img: "../../../../img/banayamtree.jpg"},
  {name: "Guava Tree", desc: "Fruit-bearing and easy to grow.", img: "../../../../img/guavatree.jpg"},
  {name: "Papaya Tree", desc: "Quick growing and nutritious fruit.", img: "../../../../img/papayatree.jpeg"},
  {name: "Jackfruit Tree", desc: "Large fruit and tropical favorite.", img: "../../../../img/jackfruitetree.webp"},
  {name: "Lemon Tree", desc: "Citrus fruit with health benefits.", img: "../../../../img/lemontree.webp"},
  {name: "Coconut Tree", desc: "Tall tree with versatile fruit.", img: "../../../../img/coconutree.jpeg"},
  {name: "Pomegranate Tree", desc: "Red fruit rich in antioxidants.", img: "../../../../img/pomagranet.webp"},
  {name: "Banana Plant", desc: "Produces bananas year-round.", img: "../../../../img/bananatree.webp"}
];

const container = document.getElementById("treesContainer");

trees.forEach(tree => {
  const div = document.createElement("div");
  div.className = "tree";
  div.innerHTML = `
    <img src="${tree.img}" alt="${tree.name}">
    <p><strong>${tree.name}</strong>: ${tree.desc}</p>
  `;
  container.appendChild(div);
});

// Back button to go to previous page
document.getElementById("backBtn").addEventListener("click", () => {
  window.history.back();
});


