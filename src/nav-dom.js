import { generateAboutUs } from "./about-us-dom.js";
import { generateHero } from "./hero-dom";
import { generateContactUs } from "./contact-us-dom.js";

export function generateNav() {
  const main = document.querySelector("main");
  const nav = document.createElement("nav");
  nav.id = "landing-page-nav";

  // generate logo
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");
  const logo = document.createElement("img");
  logo.src = "/images/praclogo (2).png";
  logo.classList.add("logo");
  const logoH3 = document.createElement("h3");
  const logoText1 = document.createTextNode("The Flame ");
  const logoLineBr = document.createElement("br");
  const logoText2 = document.createTextNode("Bowl");
  logoH3.append(logoText1, logoLineBr, logoText2);
  logoContainer.append(logo, logoH3);

  // generate nav main
  const navBtns = document.createElement("div");
  navBtns.classList.add("nav-btns");
  const btnHome = document.createElement("button");
  btnHome.textContent = "Home";
  const btnAboutUs = document.createElement("button");
  btnAboutUs.textContent = "About Us";
  const btnStores = document.createElement("button");
  btnStores.textContent = "Stores";
  const btnMenu = document.createElement("button");
  btnMenu.textContent = "Menu";
  const btnContactUs = document.createElement("button");
  btnContactUs.textContent = "Contact Us";
  navBtns.append(btnHome, btnAboutUs, btnStores, btnMenu, btnContactUs);

  // generate nav right
  const navRightDiv = document.createElement("div");
  navRightDiv.classList.add("nav-container-right");
  const searchBar = document.createElement("input");
  searchBar.setAttribute("type", "text");
  searchBar.id = "search-bar";
  const searchIcon = document.createElement("img");
  searchIcon.src = "/images/search_FILL0_wght400_GRAD0_opsz48.svg";
  searchIcon.id = "btn-search";
  const checkoutIcon = document.createElement("img");
  checkoutIcon.src = "/images/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg";
  checkoutIcon.id = "btn-checkout";
  checkoutIcon.setAttribute("alt", "checkout button");
  const btnSignIn = document.createElement("button");
  btnSignIn.id = "btn-sign-in";
  btnSignIn.textContent = "Sign In";
  navRightDiv.append(searchBar, searchIcon, checkoutIcon, btnSignIn);

  // append nav together
  nav.append(logoContainer, navBtns, navRightDiv);

  function handleNavBtns() {
    function clearMain() {
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
    }

    btnHome.addEventListener("click", () => {
      clearMain();
      main.append(...generateHero());
    });

    btnAboutUs.addEventListener("click", () => {
      clearMain();
      main.append(generateAboutUs());
    });

    btnContactUs.addEventListener("click", () => {
      clearMain();
      main.append(generateContactUs());
    });
  }

  handleNavBtns();
  return nav;
}
