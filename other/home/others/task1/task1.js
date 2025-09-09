const dropArea = document.getElementById('dropArea');
const fileInput = document.getElementById('fileInput');
const filePreview = document.getElementById('filePreview');

// Open file dialog on click
dropArea.addEventListener('click', () => {
  fileInput.click();
});

// Handle file selection
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = e => {
      filePreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
    };
    reader.readAsDataURL(file);
  } else {
    filePreview.innerHTML = "<p>Only image files are allowed!</p>";
  }
});

// Drag & Drop
dropArea.addEventListener('dragover', e => {
  e.preventDefault();
  dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('dragover');
});

dropArea.addEventListener('drop', e => {
  e.preventDefault();
  dropArea.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = e => {
      filePreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
    };
    reader.readAsDataURL(file);
  } else {
    filePreview.innerHTML = "<p>Only image files are allowed!</p>";
  }
});
const upload = document.getElementById("upload");
const uploadBtn = document.getElementById("uploadBtn");
const soilLabel = document.getElementById("soilLabel");
const plants = document.getElementById("plants");
const fertilizers = document.getElementById("fertilizers");

uploadBtn.addEventListener("click", () => {
  if (upload.files.length > 0) {
    soilLabel.style.display = "block";
    plants.style.display = "flex";
  } else {
    alert("Please select a file first.");
  }
});

function showFertilizers() {
  fertilizers.style.display = "block";
}
