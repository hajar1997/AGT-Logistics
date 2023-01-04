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
    { name: "Azerbaijan", coords: [40.5, 47.5] },
    { name: "Armenia", coords: [40, 45] },
    { name: "Georgia", coords: [42, 43.5] },
    { name: "Iran", coords: [32, 53] },
    { name: "Iraq", coords: [33, 44] },
    { name: "Kazakhstan", coords: [48, 68] },
    { name: "Uzbekistan", coords: [41, 64] },
    { name: "Turkmenistan", coords: [40, 60] },
    { name: "Afghanistan", coords: [33, 65] },
    { name: "Syria", coords: [35, 38] },
    { name: "Kuwait", coords: [29.3375, 47.6581] },
    { name: "Jordan", coords: [31, 36] },
    { name: "Latvia", coords: [57, 25] },
    { name: "Lebanon", coords: [33.8333, 35.8333] },
    { name: "Lithuania", coords: [56, 24] },
    { name: "Russia", coords: [60, 100] },
    { name: "Turkey", coords: [39, 35] },
    { name: "Ukraine", coords: [49, 32] },
    { name: "Belarus", coords: [53, 28] },
    { name: "Estonia", coords: [59, 26] },
  ],
  labels: {
    markers: {
      render(marker, index) {
        return marker.name || marker.labelName || "Not available";
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
    regions: ["TR", "AZ", "KZ", "IR", "SY", "LT", "LV", "EE"],
    animate: false,
  },
  showTooltip: false,
  draggable: false,
  zoomOnScroll: false,
});
