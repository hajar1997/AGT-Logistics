// Second Page - About Company Start

// Navbar
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".navbar-menu ul");
const navLinks = document.querySelectorAll(".navbar-menu ul a");

allEventListners();

function allEventListners() {
  navToggler.addEventListener("click", togglerClick);
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}

//navbar current page highlight
for (var i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === document.URL) {
    navLinks[i].className = "current";
  }
}

var newsLink = document.querySelector("#news-link");

if (window.location.pathname === "/news-detail.html") {
  newsLink.className = "current";
}

// Language choice

$(".select-box").on("click", function () {
  $(".select-box__list").toggleClass("active");
});
$(".select-box__option").on("click", function () {
  $(".select-box__list").removeClass("active");
});

// Check if an element contains image

const galleryContainer = document.querySelector(".company-gallery");
const gallery = document.querySelector(".gallery");

if (gallery.children.length > 0) {
  galleryContainer.style.display = "grid";
} else {
  galleryContainer.style.display = "none";
}

// Company Page

var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".gallery img")).forEach((item) => {
  item.addEventListener("click", (event) => {
    modalEle.style.display = "block";
    modalImage.src = event.target.src;
  });
});
document.querySelector(".close").addEventListener("click", () => {
  modalEle.style.display = "none";
});

//News page

