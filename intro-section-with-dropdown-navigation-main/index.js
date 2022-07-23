// create function turn the arrow from point up to down.
// get nav item
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  const arrow = item.querySelector(".arrow");
  if (arrow) {
    item.addEventListener("mouseenter", () => {
      arrow.src = "./images/icon-arrow-up.svg";
    });

    item.addEventListener("mouseleave", () => {
      arrow.src = "./images/icon-arrow-down.svg";
    });
  }
});

// mobile image

function mobile() {
  const menu = document.querySelector(".menu");

  if (window.innerWidth < 900) {
    hamburger.style.display = "block";
    // mobile version of hero image
    const right = document.querySelector(".right");

    const img = right.querySelector("img");
    img.src = "./images/image-hero-mobile.png";

    menu.classList.toggle("side-nav");

    mobileSubmenu();
  }
}

let subMenuIsOpen = false;
function mobileSubmenu() {
  navItems.forEach((item) => {
    const dropdown = item.querySelector(".dropdown");
    const arrow = item.querySelector(".arrow");
    item.addEventListener("click", () => {
      if (!subMenuIsOpen) {
        arrow.src = "./images/icon-arrow-up.svg";
        openSubMenu(dropdown);
      } else {
        arrow.src = "./images/icon-arrow-down.svg";
        closeSubMenu(dropdown);
      }
    });
  });
}

function openSubMenu(dropdown) {
  dropdown.style.display = "block";
  dropdown.style.position = "relative";
  subMenuIsOpen = true;
}
function closeSubMenu(dropdown) {
  dropdown.style.display = "none";
  dropdown.style.position = "absolute";
  subMenuIsOpen = false;
}

let menuIsOpen = false;
const hamburger = document.querySelector(".hamburger");

function toggleBtn() {
  const menuBtn = document.getElementById("menu-toggle-btn");
  if (!menuIsOpen) {
    hamburger.classList.toggle("rotate");
    menuBtn.src = "./images/icon-close-menu.svg";
    menuIsOpen = true;
    openSideNav();
  } else {
    hamburger.classList.toggle("rotate");
    menuBtn.src = "./images/icon-menu.svg";
    menuIsOpen = false;
    closeSideNav();
  }
}

function openSideNav() {
  const sideNav = document.querySelector(".side-nav");
  sideNav.style.width = "250px";
}

function closeSideNav() {
  const sideNav = document.querySelector(".side-nav");
  sideNav.style.width = "0";
}

hamburger.addEventListener("click", () => {
  toggleBtn();
});
