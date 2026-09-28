const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove active from all buttons
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    // Hide all content
    contents.forEach(function (content) {
      content.classList.remove("active");
    });

    // Activate clicked button
    button.classList.add("active");

    // Get the tab name
    const tabName = button.dataset.tab;

    // Show the matching content
    document.getElementById(tabName).classList.add("active");
  });
});




const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});









const btnIndividual = document.getElementById("btn-individual");
const btnProfessional = document.getElementById("btn-professional");

const individualCards = document.getElementById("individual-cards");
const professionalCards = document.getElementById("professional-cards");

btnProfessional.addEventListener("click", () => {
  // Activate Professional Button
  btnProfessional.classList.add("active");
  btnIndividual.classList.remove("active");

  // Display Professional Cards & Hide Individual Cards
  professionalCards.classList.remove("hidden");
  individualCards.classList.add("hidden");
});

btnIndividual.addEventListener("click", () => {
  // Activate Individual Button
  btnIndividual.classList.add("active");
  btnProfessional.classList.remove("active");

  // Display Individual Cards & Hide Professional Cards
  individualCards.classList.remove("hidden");
  professionalCards.classList.add("hidden");
});




const cards = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active", "left", "right");

    if (i === index) {
      card.classList.add("active");
    } else if (i === (index - 1 + cards.length) % cards.length) {
      card.classList.add("left");
    } else if (i === (index + 1) % cards.length) {
      card.classList.add("right");
    }
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[index].classList.add("active");
}

// DOT CLICK

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = Number(dot.dataset.index);

    showCard(index);

    // Remember which card was clicked
    currentIndex = index;
  });
});

// AUTOMATICALLY CHANGE EVERY 4 SECONDS

setInterval(() => {
  currentIndex++;

  // Go back to the first card after the last card
  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }

  showCard(currentIndex);
}, 4000);

// Show first card initially

showCard(0);

