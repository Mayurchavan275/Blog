// Add live search functionality
document.getElementById("search-bar").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card-title");

  cards.forEach((card) => {
    const title = card.textContent.toLowerCase();
    const cardElement = card.closest(".card");

    if (title.includes(query)) {
      cardElement.style.display = "block";
    } else {
      cardElement.style.display = "none";
    }
  });
});
// Add click events to menu items
const menuItems = document.querySelectorAll('#menu');
  menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    alert(`You selected: ${menuItem.textContent.trim()}`);
  });
});
// Redirect to recipe details on card click
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    const recipeName = this.querySelector(".card-title").textContent.trim();
    alert(`Navigating to details for: ${recipeName}`); // Replace with navigation logic
  });
});

// Add a scroll-to-top button
const scrollTopButton = document.createElement("button");
scrollTopButton.textContent = "↑ Top";
scrollTopButton.id = "scroll-to-top";
scrollTopButton.style.position = "fixed";
scrollTopButton.style.bottom = "20px";
scrollTopButton.style.right = "20px";
scrollTopButton.style.padding = "10px";
scrollTopButton.style.backgroundColor = "#28a745";
scrollTopButton.style.color = "white";
scrollTopButton.style.border = "none";
scrollTopButton.style.borderRadius = "5px";
scrollTopButton.style.cursor = "pointer";
scrollTopButton.style.display = "none";
document.body.appendChild(scrollTopButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Interactive star ratings
document.querySelectorAll(".card svg").forEach((star) => {
  star.addEventListener("click", function () {
    const stars = this.parentElement.querySelectorAll("svg");
    const index = Array.from(stars).indexOf(this);

    stars.forEach((s, i) => {
      s.style.fill = i <= index ? "orange" : "currentColor";
    });

    alert(`You rated this ${index + 1} stars!`);
  });
});