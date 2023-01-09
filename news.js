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

// News Cards

// const valuesCards = [
//   {
//     image: "./images/news-img-1.png",
//     date: "19.10.2022",
//     title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     image: "./images/news-img-2.png",
//     date: "19.10.2022",
//     title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     image: "./images/news-img-3.png",
//     date: "19.10.2022",
//     title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     image: "./images/news-img-4.png",
//     date: "19.10.2022",
//     title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     image: "./images/news-img-5.png",
//     date: "19.10.2022",
//     title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     image: "./images/news-img-6.png",
//     date: "19.10.2022",
//     title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
// ];

// valuesCards.map((card) => {
//   var cardDiv = document.createElement("div");
//   cardDiv.className = "col";
//   cardDiv.innerHTML = `
//         <div class="card h-100" >
//             <a href="news-detail.html">
//               <img src="${card.image}" class="card-img-top" alt="...">
//               </a>
//             <div class="card-body">
//                 <div class="card-date">
//                   <p>${card.date}</p>
//                 </div>
//                 <a href="news-detail.html">
//                   <h5 class="card-title">${card.title}</h5>
//                 </a>
//                 <p class="card-text">${card.content}</p>
//             </div>
//           </div>
//     `;
//   document.getElementsByClassName("news-container")[0].appendChild(cardDiv);
// });
