// Image Details
const images = [
  {
    src: "images/giang-nguyen-rv3YPJbedhY-unsplash.jpg",
    captions: ["Credit: Giang Nguyen."],
  },
  {
    src: "images/guillaume-didelet-zTTceeGcKsU-unsplash.jpg",
    captions: ["Credit: Guillaume Didelet."],
  },
  {
    src: "images/max-fuchs-DG6q0r7RYS8-unsplash.jpg",
    captions: ["Credit: Max Fuchs."],
  },
  {
    src: "images/jimmy-chang-ACt8ycSzpdE-unsplash.jpg",
    captions: ["Credit: Jimmy Chang."],
  },
  {
    src: "images/joakim-nadell-K67sBVqLLuw-unsplash.jpg",
    captions: [
      "Credit: Joakim Nadell, May 28, 2018.",
      "Location: København, Denmark. Axel Towers (Copenhagen) by Lundgaard & Tranberg.",
    ],
  },
  {
    src: "images/howard-bouchevereau-042Srn0-82o-unsplash.jpg",
    captions: [
      "Credit: Howard Bouchevereau, Feb. 24, 2019.",
      "Location: Rennes, France.",
    ],
  },
  {
    src: "images/kellen-riggin-105M1xsnV4o-unsplash.jpg",
    captions: ["Credit: Kellen Riggin."],
  },
  {
    src: "images/mathias-reding-5HUg48NGlwc-unsplash.jpg",
    captions: ["Credit: Mathias Reding."],
  },
  {
    src: "images/mathias-reding-JoI6kkQbuAk-unsplash.jpg",
    captions: ["Credit: Mathias Reding."],
  },
  {
    src: "images/alex-wong-l5Tzv1alcps-unsplash.jpg",
    captions: ["Credit: Alex Wong."],
  },
  {
    src: "images/lance-anderson-QdAAasrZhdk-unsplash.jpg",
    captions: ["Credit: Lance Anderson."],
  },
  {
    src: "images/anders-jilden-Sc5RKXLBjGg-unsplash.jpg",
    captions: ["Credit: Anders Jilden."],
  },
  {
    src: "images/julien-moreau-688Fna1pwOQ-unsplash.jpg",
    captions: ["Credit: Julian Moreau."],
  },
  {
    src: "images/matthew-henry-VviFtDJakYk-unsplash.jpg",
    captions: ["Credit: Matthew Henry."],
  },
  {
    src: "images/grant-lemons-jTCLppdwSEc-unsplash.jpg",
    captions: ["Credit: Grant Lemons."],
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
