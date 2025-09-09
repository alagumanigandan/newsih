const renewableWaste = [
  { name: "Vegetable Peels", img: "https://cdn-icons-png.flaticon.com/512/2909/2909764.png" },
  { name: "Fruit Scraps", img: "https://cdn-icons-png.flaticon.com/512/415/415682.png" },
  { name: "Paper", img: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png" },
  { name: "Cardboard", img: "https://cdn-icons-png.flaticon.com/512/619/619034.png" },
  { name: "Garden Leaves", img: "https://cdn-icons-png.flaticon.com/512/2909/2909837.png" },
  { name: "Coffee Grounds", img: "https://cdn-icons-png.flaticon.com/512/809/809944.png" },
  { name: "Grass Clippings", img: "https://cdn-icons-png.flaticon.com/512/808/808436.png" },
  { name: "Cotton Cloth", img: "https://cdn-icons-png.flaticon.com/512/2947/2947964.png" },
  { name: "Wood Chips", img: "https://cdn-icons-png.flaticon.com/512/102/102338.png" },
  { name: "Flowers", img: "https://cdn-icons-png.flaticon.com/512/616/616408.png" }
];

const nonRenewableWaste = [
  { name: "Plastic Bottles", img: "https://cdn-icons-png.flaticon.com/512/616/616490.png" },
  { name: "Glass", img: "https://cdn-icons-png.flaticon.com/512/2913/2913472.png" },
  { name: "Metal Cans", img: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },
  { name: "Styrofoam", img: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },
  { name: "Electronics", img: "https://cdn-icons-png.flaticon.com/512/1041/1041873.png" },
  { name: "Batteries", img: "https://cdn-icons-png.flaticon.com/512/1040/1040223.png" },
  { name: "Chemicals", img: "https://cdn-icons-png.flaticon.com/512/808/808547.png" },
  { name: "Paint Cans", img: "https://cdn-icons-png.flaticon.com/512/616/616556.png" },
  { name: "Rubber Tires", img: "https://cdn-icons-png.flaticon.com/512/616/616526.png" },
  { name: "Medicine Waste", img: "https://cdn-icons-png.flaticon.com/512/1041/1041877.png" }
];

function showWaste(type) {
  document.querySelector(".split.left").style.display = "none";
  document.querySelector(".split.right").style.display = "none";
  const container = document.getElementById("wasteContainer");
  const title = document.getElementById("wasteTitle");
  const items = document.getElementById("wasteItems");

  container.classList.remove("hidden");
  items.innerHTML = "";

  if (type === "renewable") {
    title.textContent = "Renewable Waste";
    renewableWaste.forEach(item => {
      items.innerHTML += `
        <div class="waste-card">
          <img src="${item.img}" alt="${item.name}">
          <p>${item.name}</p>
        </div>`;
    });
  } else {
    title.textContent = "Non-Renewable Waste";
    nonRenewableWaste.forEach(item => {
      items.innerHTML += `
        <div class="waste-card">
          <img src="${item.img}" alt="${item.name}">
          <p>${item.name}</p>
        </div>`;
    });
  }
}

function goBack() {
  document.getElementById("wasteContainer").classList.add("hidden");
  document.querySelector(".split.left").style.display = "block";
  document.querySelector(".split.right").style.display = "block";
}





