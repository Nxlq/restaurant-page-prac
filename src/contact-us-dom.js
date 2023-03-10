export function generateContactUs() {
  const contactUsContainer = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us";
  const p = document.createElement("p");
  p.textContent =
    "loremaidhf alkjdafda, fdakjfd~!!lk lkfjdaoifhmfdkj lkfjjk kjk jkj fdi";

  contactUsContainer.append(h1, p);
  return contactUsContainer;
}
