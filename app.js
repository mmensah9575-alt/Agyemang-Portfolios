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


function showCard(index) {
  cards.forEach((card, i) => {
    // Remove previous classes
    card.classList.remove("active", "left", "right");

    if (i === index) {
      // Center card
      card.classList.add("active");
    } else if (i === (index - 1 + cards.length) % cards.length) {
      // Card on the left
      card.classList.add("left");
    } else if (i === (index + 1) % cards.length) {
      // Card on the right
      card.classList.add("right");
    }
  });

  // Change active dot

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[index].classList.add("active");

}

// CLICK ON DOT

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = Number(dot.dataset.index);

    showCard(index);
  });
});

// Show first card when page loads

showCard(0);