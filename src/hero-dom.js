export function generateHero() {
  // content container
  const contentDiv = document.createElement("div");
  contentDiv.id = "content";

  function generateNav() {
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
    return nav;
  }

  function generateMain() {
    const main = document.createElement("main");
    const heroLeft = document.createElement("div");
    heroLeft.id = "hero-text-container";

    //generate hero's h1
    const h1 = document.createElement("h1");
    const textNode1 = document.createTextNode("Your Favorite Bowls ");
    const span1 = document.createElement("span");
    span1.classList.add("h1-colored");
    span1.innerText = "Now";
    const br = document.createElement("br");
    const textNode2 = document.createTextNode("At The ");
    const span2 = document.createElement("span");
    span2.classList.add("h1-colored");
    span2.innerText = "Palm Of Your\nHands";
    h1.append(textNode1, span1, br, textNode2, span2);

    // generate hero's p
    const p = document.createElement("p");
    p.textContent =
      "Now on the go! Have your favorite Flame Bowl show up at your doorstep with just a few clicks. ";

    // generate order now btn
    const btnOrderNow = document.createElement("button");
    btnOrderNow.id = "hero-btn-order";
    btnOrderNow.textContent = "Order Now";

    // generate hero reviews container and content
    const reviewsContainer = document.createElement("div");
    reviewsContainer.classList.add("hero-reviews-container");

    // customer icons
    const customerIconsContainer = document.createElement("div");
    customerIconsContainer.classList.add("customer-icons-container");
    const icon1 = document.createElement("img");
    icon1.classList.add("customer-icon");
    icon1.src = "/images/hpy-woman.png";
    const icon2 = document.createElement("img");
    icon2.classList.add("customer-icon");
    icon2.src = "/images/female-018-512.png";
    const icon3 = document.createElement("img");
    icon3.classList.add("customer-icon");
    icon3.src = "/images/male1.png";
    const icon4 = document.createElement("img");
    icon4.classList.add("customer-icon");
    icon4.src = "/images/happy-girls-153.jpg";
    customerIconsContainer.append(icon1, icon2, icon3, icon4);

    // reviews
    const container = document.createElement("div");
    const reviewsP = document.createElement("p");
    reviewsP.textContent = "Our Happy Customers";
    const reviewsStatsContainer = document.createElement("div");
    reviewsStatsContainer.classList.add("reviews-container");
    const starIcon = document.createElement("img");
    starIcon.classList.add("img-review-star");
    starIcon.src = "/images/star-svgrepo-com.svg";
    const stats = document.createElement("span");
    stats.classList.add("rating");
    const statsTextNode1 = document.createTextNode("4.9 ");
    const ratingsSpan = document.createElement("span");
    ratingsSpan.classList.add("rating-count");
    ratingsSpan.textContent = "(10.2K Reviews)";
    stats.append(statsTextNode1, ratingsSpan);
    reviewsStatsContainer.append(starIcon, stats);
    container.append(reviewsP, reviewsStatsContainer);

    reviewsContainer.append(customerIconsContainer, container);

    // generate hero images container/content (right side of hero)
    const imgsContainer = document.createElement("div");
    imgsContainer.classList.add("hero-imgs-container");
    const imgScooter = document.createElement("img");
    imgScooter.id = "img-scooter";
    imgScooter.src = "/images/undraw_on_the_way_re_swjt (1).svg";
    const imgMap = document.createElement("img");
    imgMap.id = "img-map";
    imgMap.src = "/images/undraw_tourist_map_re_293e (1).svg";
    imgsContainer.append(imgScooter, imgMap);

    heroLeft.append(h1, p, btnOrderNow, reviewsContainer);
    main.append(heroLeft, imgsContainer);
    return main;
  }

  contentDiv.append(generateNav(), generateMain());
  document.body.append(contentDiv);
}
