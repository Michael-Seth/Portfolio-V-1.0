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

//Pop up modal for portfolio display
let port = document.getElementById("popImg");
port.addEventListener("click", function () {
  let e = document.getElementsByClassName("backgroundA");
  e[0].style.display = "block";
  // console.log("Working well");
});

let portB = document.getElementById("popImgB");
portB.addEventListener("click", function () {
  let e = document.getElementsByClassName("backgroundB");
  e[0].style.display = "block";
  // console.log("Working well");
});

let portC = document.getElementById("popImgC");
portC.addEventListener("click", function () {
  let e = document.getElementsByClassName("backgroundC");
  e[0].style.display = "block";
  // console.log("Working well");
});

let portD = document.getElementById("popImgD");
portD.addEventListener("click", function () {
  let e = document.getElementsByClassName("backgroundD");
  e[0].style.display = "block";
  // console.log("Working well");
});

let portE = document.getElementById("popImgE");
portE.addEventListener("click", function () {
  let e = document.getElementsByClassName("backgroundE");
  e[0].style.display = "block";
  // console.log("Working well");
});

let portF = document.getElementById("popImgF");
portF.addEventListener("click", function () {
  let e = document.getElementsByClassName("backgroundF");
  e[0].style.display = "block";
  // console.log("Working well");
});

let close = document.getElementById("close");
close.addEventListener("click", function () {
  let e = document.getElementsByClassName("backgroundA");
  e[0].style.display = "none";
});

let closeB = document.getElementById("closeB");
closeB.addEventListener("click", function () {
  let e = document.getElementsByClassName("backgroundB");
  e[0].style.display = "none";
});

let closeC = document.getElementById("closeC");
closeC.addEventListener("click", function () {
  let e = document.getElementsByClassName("backgroundC");
  e[0].style.display = "none";
});

let closeD = document.getElementById("closeD");
closeD.addEventListener("click", function () {
  let e = document.getElementsByClassName("backgroundD");
  e[0].style.display = "none";
});

let closeE = document.getElementById("closeE");
closeE.addEventListener("click", function () {
  let e = document.getElementsByClassName("backgroundE");
  e[0].style.display = "none";
});

let closeF = document.getElementById("closeF");
closeF.addEventListener("click", function () {
  let e = document.getElementsByClassName("backgroundF");
  e[0].style.display = "none";
});

fetch("https://formsubmit.co/michaelseth78@gmail.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name: "FormSubmit",
    message: "Form submitted",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

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
console.log(navs);

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
    page.classList.replace("light", "dark");
    mode.textContent = "Dark-mode";
  } else {
    page.classList.replace("dark", "light");
    mode.textContent = "Light-mode";
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
