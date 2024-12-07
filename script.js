// Images and Captions
const images = [
  {
    src: "images/giang-nguyen-rv3YPJbedhY-unsplash.jpg",
    caption: "Credit: Giang Nguyen.",
  },
  {
    src: "images/guillaume-didelet-zTTceeGcKsU-unsplash.jpg",
    caption: "Credit: Guillaume Didelet.",
  },
  {
    src: "images/max-fuchs-DG6q0r7RYS8-unsplash.jpg",
    caption: "Credit: Max Fuchs.",
  },
  {
    src: "images/jimmy-chang-ACt8ycSzpdE-unsplash.jpg",
    caption: "Credit: Jimmy Chang.",
  },
  {
    src: "images/joakim-nadell-K67sBVqLLuw-unsplash.jpg",
    caption: "Credit: Joakin Nadell.",
  },
  {
    src: "images/howard-bouchevereau-042Srn0-82o-unsplash.jpg",
    caption:
      "Credit: Howard Bouchevereau, Feb. 24, 2019. Location: Rennes, France.",
  },

  {
    src: "images/kellen-riggin-105M1xsnV4o-unsplash.jpg",
    caption: "Credit: Kellen Riggin.",
  },
  {
    src: "images/mathias-reding-5HUg48NGlwc-unsplash.jpg",
    caption: "Credit: Mathais Reding.",
  },
  {
    src: "images/mathias-reding-JoI6kkQbuAk-unsplash.jpg",
    caption: "Credit: Mathias Reding.",
  },
  {
    src: "images/alex-wong-l5Tzv1alcps-unsplash.jpg",
    caption: "Credit: Alex Wong.",
  },
  {
    src: "images/lance-anderson-QdAAasrZhdk-unsplash.jpg",
    caption: "Credit: Lance Anderson.",
  },
  {
    src: "images/anders-jilden-Sc5RKXLBjGg-unsplash.jpg",
    caption: "Credit: Anders Jilden.",
  },
  {
    src: "images/julien-moreau-688Fna1pwOQ-unsplash.jpg",
    caption: "Credit: Julian Moreau.",
  },
  {
    src: "images/matthew-henry-VviFtDJakYk-unsplash.jpg",
    caption: "Credit: Matthew Henry.",
  },
  {
    src: "images/grant-lemons-jTCLppdwSEc-unsplash.jpg",
    caption: "Credit: Grant Lemons.",
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
