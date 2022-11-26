// function fix() {
//     var head = document.querySelector('header');
//     alert('done');
//     return
// }

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("myHeader");
var brand = document.getElementById("myBrand");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed-header");
    brand.classList.add("change-brand");
  } else {
    header.classList.remove("fixed-header");
    brand.classList.remove("change-brand");
  }
}

var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 5,
  loop: true,
  margin: 10,
  autoplay: true,
  dots: false,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
      nav: false,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 5,
      nav: false,
      loop: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

const modal = document.querySelector(".modald");
const trigger = document.querySelectorAll(".trigger");
const closeButton = document.querySelector("#close");

// function openModal() {
//   modal.classList.add("show-modald");
// }
function closeModal() {
  modal.classList.remove("show-modald");
}

for (let i = 0; i < trigger.length; i++) {
  trigger[i].addEventListener(
    "click",
    function () {
      modal.classList.add("show-modald");
      console.log("working");
    },
    false
  );
}

//trigger.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
//closeButton.addEventListener("click", toggleModal);
//window.addEventListener("click", windowOnClick);

// fetch("https://formsubmit.co/michaelseth78@gmail.com", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     name: "FormSubmit",
//     message: "Form submitted",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

let tog = document.getElementById("navbar-collapse-toggle");
tog.addEventListener(
  "click",
  () => {
    if (tog.classList.contains("show")) {
      tog.classList.remove("show");
    }
  },
  false
);
const navs = document.querySelectorAll("ul li");

for (var i = 0; i < navs.length; i++) {
  navs[i].addEventListener(
    "click",
    function () {
      if (tog.classList.contains("show")) {
        tog.classList.remove("show");
      }
    },
    false
  );
}

const page = document.querySelector("body");
const mode = document.querySelector("b");
const toggle = page.querySelector(".toggle-input");
//const toggleIcon = page.querySelector(".toggl-icon");

// set theme and localStorage on page load
setCheckedState();

function setCheckedState() {
  // checks if localStorage has a "checked" value set at all
  if (!(localStorage.checked === undefined)) {
    // if it does, it sets the state of the toggle accordingly
    toggle.checked = isTrue(localStorage.getItem("checked"));
    // after setting the toggle state, the theme is adjusted according to the checked state
    toggleTheme();
  }
}

function toggleTheme() {
  // Toggle theme based on state of checkbox
  replaceClass();
  // replace icons on page
  // toggleIconTheme();
  // set the value of the "checked" key in localStorage
  updateLocalStorage();
}

function replaceClass() {
  if (toggle.checked) {
    page.classList.replace("dark", "light");
    mode.textContent = "Light-mode";
  } else {
    page.classList.replace("light", "dark");
    mode.textContent = "Dark-mode";
  }
}

// function toggleIconTheme() {
//   // Replace icons not able to be targeted by css variables
//   if (page.classList.contains("light")) {
//     toggleIcon.src = "./images/moon.svg";
//     toggleIcon.alt = "Switch to Dark Mode";
//   } else {
//     toggleIcon.src = "./images/sun.svg";
//     toggleIcon.alt = "Switch to Light Mode";
//   }
// }

function updateLocalStorage() {
  localStorage.setItem("checked", toggle.checked);
}

function isTrue(value) {
  // convert string to boolean
  return value === "true";
}

// Toggle theme any time the state of the checkbox changes
toggle.addEventListener("change", toggleTheme);
