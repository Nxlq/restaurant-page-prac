import { generateHero } from "./hero-dom.js";
import { generateAboutUs } from "./about-us-dom.js";
import { generateNav } from "./nav-dom.js";

window.addEventListener("load", (e) => {
  const contentContainer = document.querySelector("#content");
  const main = document.querySelector("main");
  const nav = generateNav();
  const hero = generateHero(); // returns arr of elements
  const aboutUs = generateAboutUs();

  contentContainer.insertBefore(nav, main);
  main.append(...hero);
});
