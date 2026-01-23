const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

let currentIndex = 0;

// Open image in lightbox
function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[index].src;
  lightbox.style.display = "flex";
}

// Close lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}

// Next / Previous image
function changeImage(step) {
  currentIndex += step;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  lightboxImg.src = images[currentIndex].src;
}

// Filter images by category
function filterImages(category) {
  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
