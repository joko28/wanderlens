// Image Details
const images = [
  {
    src: "images/biel-morro-d0xjEv-WJQk-unsplash.jpg",
    captions: [
      "Credit: Biel Morro, November 24, 2017.",
      "Location: Barcelona, Spain.",
      "Church in Tibidabo.",
    ],
  },
  {
    src: "images/ryan-spencer-WJDR8_QxVR8-unsplash.jpg",
    captions: [
      "Credit: Ryan Spencer, July 31, 2018.",
      "Location: Oia, Greece.",
      "Greek cottage.",
    ],
  },
  {
    src: "images/simone-hutsch-TqEjlOTmF5U-unsplash.jpg",
    captions: [
      "Credit: Simone Hutsch, February 27, 2018.",
      "Location: Berlin, Germany.",
      "Hotel Motel One Berlin-Upper West.",
    ],
  },
  {
    src: "images/jimmy-chang-ACt8ycSzpdE-unsplash.jpg",
    captions: [
      "Credit: Jimmy Chang, Feb. 7, 2018.",
      "Location: Chaoyang, China.",
      "The Beijing Galaxy Soho",
    ],
  },
  {
    src: "images/joakim-nadell-K67sBVqLLuw-unsplash.jpg",
    captions: [
      "Credit: Joakim Nadell, May 28, 2018.",
      "Location: København, Denmark.",
      "Axel Towers (Copenhagen) by Lundgaard & Tranberg.",
    ],
  },
  {
    src: "images/howard-bouchevereau-042Srn0-82o-unsplash.jpg",
    captions: [
      "Credit: Howard Bouchevereau, Feb. 24, 2019.",
      "Location: Rennes, France.",
      "Rennes architecture.",
    ],
  },
  {
    src: "images/nikolay-vorobyev-QJ2HGuSSQz0-unsplash.jpg",
    captions: [
      "Credit: Nikolay Vorobyev, December 5, 2017.",
      "Location: Moscow, Russia.",
      "Red square.",
    ],
  },
  {
    src: "images/simone-hutsch-l8fyK9RS-OU-unsplash.jpg",
    captions: [
      "Credit:  Simone Hutsch, June 18, 2018.",
      "Location: Vauxhall, London, United Kingdom.",
      "Orange sunshine.",
    ],
  },
  {
    src: "images/christian-perner-1fEQTFhcEXU-unsplash.jpg",
    captions: [
      "Credit: Christian Perner, August 3, 2017.",
      "Location: New York, United States.",
      "The FUlton Center.",
    ],
  },
  {
    src: "images/joel-filipe-kupusAgaWZg-unsplash.jpg",
    captions: [
      "Credit: Joel Filipe, March 16, 2017.",
      "Location: Madrid, Spain.",
    ],
  },

  {
    src: "images/joshua-fuller-N2q8hRVzEg8-unsplash.jpg",
    captions: [
      "Credit: Joshua Fuller, August 2, 2017.",
      "Location: London, United Kingdom.",
      "Blue, red, and purple facade.",
    ],
  },
  {
    src: "images/victor-yj-Ue4yoyuo-unsplash.jpg",
    captions: [
      "Credit: Victor, April 7, 2018.",
      "Location: Art Science Museum, Singapore.",
      "Lotus.",
    ],
  },
  {
    src: "images/ann-fossa-CmSwG8Jqs48-unsplash.jpg",
    captions: [
      "Credit: Ann Fossa, March 29, 2019.",
      "Location: Moscow-City, Moscow, Russia.",
      "Evolution Tower.",
    ],
  },
  {
    src: "images/alexandr-bormotin-jj3PpeBIlLA-unsplash.jpg",
    captions: [
      "Credit: Alexandr Bormotin, November 5, 2018.",
      "Location: Moscow, Russia.",
      "Mercury Tower, Moscow.",
    ],
  },
  {
    src: "images/david-east-6psstU2DLKs-unsplash.jpg",
    captions: [
      "Credit: David East, June 7, 2017.",
      "Location: Paris, France.",
      "Paris buildings.",
    ],
  },
  {
    src: "images/dorien-beernink-0BFbMv3Y3dY-unsplash.jpg",
    captions: [
      "Credit: Dorien Beernink, May 4, 2019.",
      "Location: Copenhagen, Denmark.",
      "Architecture in Denmark, Copenhagen.",
    ],
  },
  {
    src: "images/jericho-cervantes-pDtBVxu2N-I-unsplash.jpg",
    captions: [
      "Credit: Jericho Cervantes, March 1, 2019.",
      "Location: New York City, United States.",
      "Highline.",
    ],
  },
  {
    src: "images/robz-bM8PSh6vf8s-unsplash.jpg",
    captions: [
      "Credit: ROBZ, February 7, 2019.",
      "Location: Montpellier, France.",
      "WAVE.",
    ],
  },
  {
    src: "images/jayden-chong-DFqa4Fq5LNE-unsplash.jpg",
    captions: [
      "Credit: Jayden Chong, November 16, 2018.",
      "Location: Taipei, Taiwan.",
      "NTNU Art Museum.",
    ],
  },
  {
    src: "images/jonas-jacobsson-FxGIEI0dWAM-unsplash.jpg",
    captions: [
      "Credit: Jonas Jacobsson, August 11, 2017.",
      "Location: Gothenburg, Sweden.",
      "Apartments in central Gothenburg, Sweden.",
    ],
  },
  {
    src: "images/dario-veronesi-_G4eAbP4SI4-unsplash.jpg",
    captions: [
      "Credit: Dario Veronesi, October 4, 2017.",
      "Location: Piazza Antonio Fontanesi, Reggio Emilia, Italy.",
      "Lost in the heart of the city.",
    ],
  },
  {
    src: "images/meric-dagli-J9LaQhfPoQU-unsplash.jpg",
    captions: [
      "Credit: Meric Dagli, February 9, 2018.",
      "Location: New York, United States.",
      "Flatiron District.",
    ],
  },
  {
    src: "images/timothy-chan-HprJoPvgk-s-unsplash.jpg",
    captions: [
      "Credit: Timothy Chan, October 12, 2017.",
      "Location: Chinese Garden, Singapore.",
      "White and red castle.",
    ],
  },

  // {
  //   src: "images/.jpg",
  //   captions: ["Credit: , .", "Location: , .", "."],
  // },

  // {
  //   src: "images/.jpg",
  //   captions: ["Credit: , .", "Location: , .", "."],
  // },

  // horizontal images
  {
    src: "images/lance-anderson-QdAAasrZhdk-unsplash.jpg",
    captions: [
      "Credit: Lance Anderson.",
      "Location: Cleveland, United States.",
      "The Rock and Roll Hall of Fame and Museum.",
    ],
  },
  {
    src: "images/alex-wong-l5Tzv1alcps-unsplash.jpg",
    captions: [
      "Credit: Alex Wong, May 13, 2015.",
      "Location: Hong Kong China.",
      "China Hong Kong City Tower 2",
      "Orange reflective architecture.",
    ],
  },
  {
    src: "images/anders-jilden-Sc5RKXLBjGg-unsplash.jpg",
    captions: [
      "Credit: Anders Jilden.",
      "Location: Sundbyberg, Sweden.",
      "The folding exterior of Tuletornen creates an interesting mix of shadows and highlights.",
    ],
  },
  {
    src: "images/julien-moreau-688Fna1pwOQ-unsplash.jpg",
    captions: [
      "Credit: Julian Moreau, April 13, 2016.",
      "Location: Los Angeles, California.",
      "The Broad, Abstract white facade edge.",
    ],
  },
  {
    src: "images/matthew-henry-VviFtDJakYk-unsplash.jpg",
    captions: [
      "Credit: Matthew Henry.",
      "Location: Financial District, Toronto, Canada.",
      "Foggy skyscrapers.",
    ],
  },
  {
    src: "images/grant-lemons-jTCLppdwSEc-unsplash.jpg",
    captions: [
      "Credit: Grant Lemons, April 4, 2016.",
      "Location: Berlin, Germany.",
      "Modern apartmet building",
    ],
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

  const currentImage = images[currentIndex];
  detailImage.src = currentImage.src;

  // Render captions as separate lines
  detailCaption.innerHTML = currentImage.captions
    .map((line) => `<p>${line}</p>`)
    .join("");

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

// DOM Elements for comment section
const commentBox = document.getElementById("comment-box");
const submitButton = document.getElementById("submit-comment");
const commentsList = document.getElementById("comments-list");

// Get current image ID from the URL (make sure this is being set properly on the "details.html" page)
const currentImageId = new URLSearchParams(window.location.search).get("image");

// Logging for debugging
console.log("Current Image ID:", currentImageId);

// Set image and caption dynamically
const detailImage = document.getElementById("detail-image");
const detailCaption = document.getElementById("detail-caption");

if (currentImageId) {
  // Check if the currentImageId corresponds to one of the images
  const currentImage = images[currentImageId];
  if (currentImage) {
    detailImage.src = currentImage.src;
    detailCaption.innerHTML = currentImage.captions
      .map((line) => `<p>${line}</p>`)
      .join("");
  } else {
    console.error("No image found for this ID.");
  }
} else {
  console.error("No image ID provided in URL.");
}

// Submit Comment
submitButton.addEventListener("click", () => {
  const comment = commentBox.value.trim();
  if (comment) {
    const comments = JSON.parse(localStorage.getItem(currentImageId)) || [];
    const newComment = {
      text: comment,
      timestamp: Date.now(),
    };
    comments.push(newComment);
    localStorage.setItem(currentImageId, JSON.stringify(comments));

    console.log("Comment successfully submitted.");
    commentBox.value = ""; // Clear the input
    loadComments(); // Reload comments after submission
  } else {
    console.log("Comment input is empty.");
  }
});

// Load Comments
function loadComments() {
  const comments = JSON.parse(localStorage.getItem(currentImageId)) || [];
  commentsList.innerHTML = ""; // Clear existing comments

  if (comments.length > 0) {
    console.log("Loaded Comments:", comments);
    comments.forEach((comment) => {
      const commentElement = document.createElement("p");
      commentElement.textContent = comment.text;
      commentsList.appendChild(commentElement);
    });
  } else {
    console.log("No comments available.");
  }
}

// Load comments when the page is loaded
loadComments();
