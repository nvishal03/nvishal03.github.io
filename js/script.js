'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}


/* ========================================================================== */
/*            Added code for "Load more work" button functionality           */
/* ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const loadMoreButton = document.querySelector('.load-more');
  const hiddenProjects = document.querySelectorAll('.project-list li.hidden');

  if (loadMoreButton) {
    loadMoreButton.addEventListener('click', () => {
      // Remove the 'hidden' class from each hidden project card
      hiddenProjects.forEach(project => {
        project.classList.remove('hidden');
      });
      // Optionally, hide the load more button after loading the projects
      loadMoreButton.style.display = 'none';
    });
  }
});


// for work experience:

document.addEventListener('DOMContentLoaded', () => {
  // Select the work experience card using the new class
  const workExperienceCard = document.querySelector('.work-experience-card');
  const experienceModal = document.getElementById('experienceModal');
  const modalCloseBtn = experienceModal.querySelector('.close');

  // When the card is clicked, open the modal
  workExperienceCard.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    experienceModal.style.display = 'block';
  });

  // Close the modal when the close button is clicked
  modalCloseBtn.addEventListener('click', () => {
    experienceModal.style.display = 'none';
  });

  // Optional: Close the modal when clicking outside of the modal content
  window.addEventListener('click', (e) => {
    if (e.target === experienceModal) {
      experienceModal.style.display = 'none';
    }
  });
});
