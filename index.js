// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".navbar-menu ul");
const navLinks = document.querySelectorAll(".navbar-menu ul a");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}

//Language choice

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
    { name: "Australia", coords: [-27, 133] },
    { name: "Armenia", coords: [40, 45] },
    { name: "Austria", coords: [47.3333, 13.3333] },
    { name: "Brazil", coords: [-10, -55] },
    { name: "Canada", coords: [60, -95] },
    { name: "China", coords: [35, 105] },
    { name: "Cyprus", coords: [35, 33] },
    { name: "France", coords: [46, 2] },
    { name: "Georgia", coords: [42, 43.5] },
    { name: "Germany", coords: [51, 9] },
    { name: "Greece", coords: [39, 22] },
    { name: "Iceland", coords: [65, -18] },
    { name: "India", coords: [20, 77] },
    { name: "Iran", coords: [32, 53] },
    { name: "Iraq", coords: [33, 44] },
    { name: "Israel", coords: [31.5, 34.75] },
    { name: "Italy", coords: [42.8333, 12.8333] },
    { name: "Japan", coords: [36, 138] },
    { name: "Kazakhstan", coords: [48, 68] },
    { name: "Korea", coords: [37, 127.5] },
    { name: "Kyrgyzstan", coords: [41, 75] },
    { name: "Latvia", coords: [57, 25] },
    { name: "Lebanon", coords: [33.8333, 35.8333] },
    { name: "Libya", coords: [25, 17] },
    { name: "Lithuania", coords: [56, 24] },
    { name: "Mexico", coords: [23, -102] },
    { name: "Netherlands", coords: [52.5, 5.75] },
    { name: "New Zealand", coords: [-41, 174] },
    { name: "Nigeria", coords: [10, 8] },
    { name: "Norway", coords: [62, 10] },
    { name: "Poland", coords: [52, 20] },
    { name: "Portugal", coords: [39.5, -8] },
    { name: "Russia", coords: [60, 100] },
    { name: "Spain", coords: [40, -4] },
    { name: "Sweden", coords: [62, 15] },
    { name: "Turkey", coords: [39, 35] },
    { name: "Ukraine", coords: [49, 32] },
    { name: "United Kingdom", coords: [54, -2] },
    { name: "United States", coords: [38, -97] },
  ],
  labels: {
    markers: {
      render(marker, index) {
        return marker.name || marker.labelName || "Not available";
      },
    },
  },
  focusOn: {
    regions: ["TR", "AZ", "KZ", "IR", "SY"],
    animate: false,
  },
});
z;
// getRegionName
