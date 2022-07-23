// create function turn the arrow from point up to down.
// get nav item
let menuIsOpen = false;

const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelectorAll(".nav-item");

function openSubMenu(dropdown) {
  dropdown.style.display = "block";

  return true;
}
function closeSubMenu(dropdown) {
  dropdown.style.display = "none";

  return false;
}

function mobileSubmenu(mobile = true) {
  let subMenuIsOpen = false;
  navItems.forEach((item) => {
    const dropdown = item.querySelector(".dropdown");
    const arrow = item.querySelector(".arrow");
    if (arrow) {
      item.addEventListener("click", () => {
        if (!subMenuIsOpen) {
          arrow.src = "./images/icon-arrow-up.svg";
          subMenuIsOpen = openSubMenu(dropdown, mobile);
        } else {
          arrow.src = "./images/icon-arrow-down.svg";
          subMenuIsOpen = closeSubMenu(dropdown);
        }
      });
    }
  });
}
mobileSubmenu(false);

// mobile image

function mobile() {
  const menu = document.querySelector(".menu");

  if (window.innerWidth < 900) {
    // menu.classList.toggle("");
    // mobile version of hero image
    const right = document.querySelector(".right");

    const img = right.querySelector("img");
    img.src = "./images/image-hero-mobile.png";

    mobileSubmenu(true);
  }
}

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
