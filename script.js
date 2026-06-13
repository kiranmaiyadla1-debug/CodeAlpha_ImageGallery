let imagesArray = [];
let currentIndex = 0;

// collect images
function setupGallery() {
  imagesArray = Array.from(document.querySelectorAll(".gallery img"));
}

// FILTER
function filterImages(category) {
  let images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
    if (category === "all") {
      img.style.display = "block";
    } else {
      img.style.display = img.classList.contains(category)
        ? "block"
        : "none";
    }
  });
}

// OPEN LIGHTBOX
function openImage(img) {
  setupGallery();
  currentIndex = imagesArray.indexOf(img);

  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

// NEXT IMAGE (BONUS)
function nextImage() {
  currentIndex = (currentIndex + 1) % imagesArray.length;
  document.getElementById("lightbox-img").src =
    imagesArray[currentIndex].src;
}

// PREVIOUS IMAGE (BONUS)
function prevImage() {
  currentIndex =
    (currentIndex - 1 + imagesArray.length) % imagesArray.length;

  document.getElementById("lightbox-img").src =
    imagesArray[currentIndex].src;
}

// CLOSE LIGHTBOX
function closeImage() {
  document.getElementById("lightbox").style.display = "none";
}