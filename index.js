// First page - Main Page Start

//Navbar
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
//Carousel

var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
});

// Language choice

$(".select-box").on("click", function () {
  $(".select-box__list").toggleClass("active");
});
$(".select-box__option").on("click", function () {
  $(".select-box__list").removeClass("active");
});

// Map Section

var map = new jsVectorMap({
  selector: "#map",
  map: "world",
  regionStyle: {
    selected: { fill: "#1DACB0" },
    hover: { fill: "#1DACB0" },
  },
  markers: [
    { name: "Azerbaijan", code: "AZ", coords: [40.5, 47.5] },
    { name: "Georgia", code: "GE", coords: [42, 43.5] },
    { name: "Russia", code: "RU", coords: [60, 100] },
    { name: "Ukraine", code: "UA", coords: [49, 32] },
    { name: "Belarus", code: "BY", coords: [53, 28] },
    { name: "Turkey", code: "TR", coords: [39, 35] },
    { name: "Iran", code: "IR", coords: [32, 53] },
    { name: "Kazakhstan", code: "KZ", coords: [48, 68] },
    { name: "Uzbekistan", code: "UZ", coords: [41, 64] },
    { name: "Turkmenistan", code: "TM", coords: [40, 60] },
    { name: "Tajikistan", code: "TJ", coords: [39, 71] },
    { name: "Latvia", code: "LV", coords: [57, 25] },
    { name: "Lithuania", code: "LT", coords: [56, 24] },
    { name: "Estonia", code: "EE", coords: [59, 26] },
  ],
  labels: {
    markers: {
      render(marker) {
        const mediaQuery = window.matchMedia("(max-width: 992px)");
        if (mediaQuery.matches) {
          return marker.code;
        } else {
          return marker.name;
        }
      },
    },
  },
  markerLabelStyle: {
    initial: {
      fontFamily: "Montserrat",
      fontSize: 11,
      fontWeight: 500,
      fill: "#374457",
    },
  },
  focusOn: {
    regions: [
      "TR",
      "AZ",
      "KZ",
      "IR",
      "LT",
      "LV",
      "EE",
      "TJ",
      "GE",
      "UA",
      "BY",
      "UZ",
      "TM",
    ],
    animate: false,
  },
  showTooltip: false,
  draggable: false,
  zoomOnScroll: false,
  bindTouchEvents: true,
});

