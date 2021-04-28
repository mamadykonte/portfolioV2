// header fixed
// window.onscroll = function () {
//   myFunction();
// };
// function myFunction() {
//   const menu = document.querySelector("header");

//   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//     menu.classList.add("fixed");
//   } else {
//     menu.classList.remove("fixed");
//   }
// }



/* Menu Hamburger*/
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}

// circle progress
const circle = document.querySelector(".circle");
function updateProgresseScroll() {
  circle.style.strokeDashoffset = 1 - `${getScrollPercentage() * 1}`;
  requestAnimationFrame(updateProgresseScroll);
}

const arrow = document.querySelector(".arrow");

// Ecouteur d'évènement sur scroll show
window.addEventListener("scroll", () => {
  // header postion fixe
  const header = document.querySelector("header");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }

  // arrow

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    arrow.classList.add("active");
    let val = `${Math.floor(getScrollPercentage() * 100 - 1)}%`;
    arrow.setAttribute("data-value", val);
  } else {
    arrow.classList.remove("active");
  }
});

function getScrollPercentage() {
  let pourcent =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);
  return pourcent;
}

updateProgresseScroll();

const open = document.getElementById("contact-open");
const close = document.getElementById("contact-close");

const container = document.getElementById("contactModal-container");

open.addEventListener("click", () => {
  container.classList.add("active");
});

close.addEventListener("click", () => {
  container.classList.remove("active");
});

// conttact

// https://blog.mailtrap.io/php-email-contact-form/

// Formnulaire conatct
function error(input, message) {
  input.className = "error";
  // show the error message
  const error = input.previousElementSibling;
  error.innerText = message;
  return false;
}

function success(input) {
  input.className = "success";
  // hide the error message
  const error = input.previousElementSibling;
  error.innerText = "";
  return true;
}

function requireValue(input, message) {
  return input.value.trim() === "" ? error(input, message) : success(input);
}

function validateEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(input.value.trim())
    ? success(input)
    : error(input, "Format d'email n'est pas valide");
}

// select the form
const form = document.getElementById("contact_form");

// get name and email elements
if (form != null) {
  const name = form.elements["nom"];
  const email = form.elements["email"];
  const msg = form.elements["message"];

  const requiredFields = [
    { input: name, message: "Le nom est obligatoire" },
    { input: email, message: "Email est obligatoire" },
    { input: msg, message: "Le message est vide" },
  ];

  form.addEventListener("submit", (event) => {
    // check required fields
    let valid = true;
    requiredFields.forEach((input) => {
      valid = requireValue(input.input, input.message);
    });

    // validate email
    if (valid) {
      valid = validateEmail(email);
    }

    // stop submitting the form if the data is invalid
    if (!valid) {
      event.preventDefault();
    } //else {
    //alert('Votre message a été envoyé')
    //}
  });
}

// récupérer l'année en cours
let annee = new Date();
let n = (document.querySelector(
  ".copyright span"
).innerHTML = annee.getFullYear());
