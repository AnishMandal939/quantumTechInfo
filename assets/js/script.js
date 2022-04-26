'use strict';

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("nav-active");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * header scroll active state & go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 100) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

// let browserLoad = window.onload;
window.onload = function () {
// animate all image drop from top to down own position with transition and faded lazy loading
  const images = document.querySelectorAll("[data-image]");
  for (let i = 0; i < images.length; i++) {
    images[i].style.transition = "all 1.5s ease-in-out";
    images[i].style.transform = "translateY(100%)";
    images[i].style.opacity = "0";
  }
  setTimeout(function () {
    for (let i = 0; i < images.length; i++) {
      images[i].style.transition = "all 0.5s ease-in-out";
      images[i].style.transform = "translateY(0)";
      images[i].style.opacity = "1";
    }
  }, 500);
}

  // const images = document.querySelectorAll("[data-image]");
  // for (let i = 0; i < images.length; i++) {
  //   images[i].style.top = `${Math.floor(Math.random() * 100)}%`;
  // }

// on scroll image load function
window.addEventListener("scroll", function () {
  const images = document.querySelectorAll("[data-image]");
  for (let i = 0; i < images.length; i++) {
    if (images[i].getBoundingClientRect().top <= window.innerHeight) {
      images[i].style.transition = "all 1.5s ease-in-out";
      images[i].style.transform = "translateY(0)";
      images[i].style.opacity = "1";
    }
  }
});

// create modal to display dummy data with js on hover card
const cards = document.querySelectorAll("[data-card]");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", function () {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>${this.dataset.title}</h3>
          <span class="close">&times;</span>
        </div>
        <div class="modal-body">
          <p>${this.dataset.description}</p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", function () {
      modal.remove();
    });
  });
}


