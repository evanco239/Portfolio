const navbar = document.querySelector("#navbar");
const pageDown = document.querySelector("#page-down");
const hamburger = document.querySelector("#hamburger");
const mobileLinks = document.querySelector("#mobile-nav-links");

// capture scroll event  to attach sticky nav
window.onscroll = () => {
  if (window.pageYOffset > 140) {
    navbar.classList.remove("sticky");
    pageDown.classList.add("sticky");
  } else {
    navbar.classList.add("sticky");
    pageDown.classList.remove("sticky");
  }
};

// toggle display class on hamburger menu
hamburger.addEventListener("click", () => {
  console.log(mobileLinks.style.display);
  if (mobileLinks.style.display == "none" || mobileLinks.style.display == "") {
    mobileLinks.style.display = "block";
  } else {
    mobileLinks.style.display = "none";
  }
});

// close the hamburger menu on click for link
mobileLinks.addEventListener("click", () => {
  mobileLinks.style.display = "none";
});
