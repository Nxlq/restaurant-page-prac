import { generateHero } from "./hero-dom.js";
import { generateAboutUs } from "./about-us-dom.js";
import { generateNav } from "./nav-dom.js";

window.addEventListener("load", (e) => {
  const contentContainer = document.querySelector("#content");
  const main = document.querySelector("main");
  const nav = generateNav();
  const [heroLeft, heroRight] = generateHero();
  console.log(heroLeft, heroRight);
  const aboutUs = generateAboutUs();

  contentContainer.insertBefore(nav, main);
  main.append(heroLeft, heroRight);
});
