const locationIcon = document.getElementById("locationIcon");
const locationMessage = document.getElementById("locationMessage");
const backBtn = document.getElementById("backBtn");

locationIcon.addEventListener("click", () => {
  locationMessage.style.display = "block";
});

backBtn.addEventListener("click", () => {
  window.history.back();
});
