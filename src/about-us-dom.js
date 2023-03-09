export function generateAboutUs() {
  const aboutUsContainer = document.createElement("div");
  aboutUsContainer.id = "about-us-container";

  // generate img
  const aboutUsImg = document.createElement("img");
  aboutUsImg.classList.add("about-us-logo");
  aboutUsImg.src = "/images/praclogo (2).png";

  // generate about us text
  const textContainer = document.createElement("div");
  textContainer.id = "about-us-text";
  const h1 = document.createElement("h1");
  h1.textContent = "Who We Are";
  const p = document.createElement("p");
  p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga architecto odio esse molestias sit dolores ducimus in praesentium. Eum rerum quia libero quod explicabo aliquid cupiditate nemo dolore distinctio.
  Earum atque illum, ex, saepe expedita pariatur doloribus vel quisquam hic nam sed explicabo alias rem quibusdam consequuntur eum magnam, officiis quidem obcaecati inventore accusamus! Praesentium aperiam temporibus iste commodi.
  Ex, dolor quaerat tempore eveniet, repellendus ullam, perspiciatis alias quibusdam temporibus tenetur incidunt dolorum quidem? Nulla porro suscipit eligendi, omnis excepturi minima! Numquam molestias porro fuga deleniti optio? Porro, cum!
  Quisquam neque nemo quo nulla blanditiis ipsa! Perferendis nesciunt fugit soluta ut temporibus commodi nobis mollitia, modi sequi veritatis animi praesentium, omnis culpa minus dolor architecto eum maiores! Nobis, voluptate.
  Nesciunt, maxime. Assumenda, consequuntur a!`;
  textContainer.append(h1, p);

  aboutUsContainer.append(aboutUsImg, textContainer);

  return aboutUsContainer;
}
