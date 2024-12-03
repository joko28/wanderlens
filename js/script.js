// Images and Captions
const images = [
  {
    src: "../images/benjamin-chambon-rOoaNIRO5fM-unsplash.jpg",
    caption: "A serene reflection.",
  },
  {
    src: "../images/giang-nguyen-rv3YPJbedhY-unsplash.jpg",
    caption: "Chaos within calm.",
  },
  {
    src: "../images/zhenyu-luo-dFMNqqBMPGU-unsplash.jpg",
    caption: "A fleeting moment.",
  },
  {
    src: "../images/chi-xiang--Q-PZARQIhU-unsplash.jpg",
    caption: "Abstract harmony.",
  },
  {
    src: "../images/janis-dzenis-2Vf7aybJxBs-unsplash.jpg",
    caption: "Abstract harmony.",
  },
  {
    src: "../images/janis-dzenis-4qVBguW9ibM-unsplash.jpg",
    caption: "Abstract harmony.",
  },
  {
    src: "../images/janis-dzenis-laLUon9AaFo-unsplash.jpg",
    caption: "Abstract harmony.",
  },
  {
    src: "../images/janis-dzenis-bUpGUcqTzHU-unsplash.jpg",
    caption: "Abstract harmony.",
  },
  {
    src: "../images/max-fuchs-DG6q0r7RYS8-unsplash.jpg",
    caption: "Abstract harmony.",
  },
  {
    src: "../images/carlos-A0xv0-vSpkc-unsplash.jpg",
    caption: "Abstract harmony.",
  },
  {
    src: "../images/kellen-riggin-105M1xsnV4o-unsplash.jpg",
    caption: "Abstract harmony.",
  },
  {
    src: "../images/mathias-reding-5HUg48NGlwc-unsplash.jpg",
    caption: "Abstract harmony.",
  },
  {
    src: "../images/mathias-reding-ouwGKHExTEw-unsplash.jpg",
    caption: "Abstract harmony.",
  },
  {
    src: "../images/guillaume-didelet-zTTceeGcKsU-unsplash.jpg",
    caption: "Abstract harmony.",
  },
  {
    src: "../images/mathias-reding-JoI6kkQbuAk-unsplash.jpg",
    caption: "Abstract harmony.",
  },
];

// Load Mosaic Grid
const mosaic = document.getElementById("mosaic");
if (mosaic) {
  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = `Image ${index + 1}`;
    img.dataset.index = index;
    img.addEventListener("click", () => openDetailView(index));
    mosaic.appendChild(img);
  });
}

// Open Detail View
function openDetailView(index) {
  localStorage.setItem("currentImageIndex", index);
  window.location.href = "details.html";
}

// Load Detail View
const detailsPage = document.getElementById("details");
if (detailsPage) {
  const currentIndex = parseInt(localStorage.getItem("currentImageIndex"), 10);
  const detailImage = document.getElementById("detail-image");
  const detailCaption = document.getElementById("detail-caption");

  detailImage.src = images[currentIndex].src;
  detailCaption.textContent = images[currentIndex].caption;

  document.getElementById("next").addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      localStorage.setItem("currentImageIndex", currentIndex + 1);
      location.reload();
    }
  });

  document.getElementById("prev").addEventListener("click", () => {
    if (currentIndex > 0) {
      localStorage.setItem("currentImageIndex", currentIndex - 1);
      location.reload();
    }
  });

  document.getElementById("back").addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
