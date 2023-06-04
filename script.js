function scrollHome() {
  var bodyElement = document.querySelector("body");
  var headerElement = document.querySelector("header");
  var mouseIconElement = document.getElementById("mouse-icon");

  this.scrollY > 185
    ? (headerElement.style.background = "var(--bg-color)")
    : (headerElement.style.background = "transparent");

  this.scrollY == 0
    ? (mouseIconElement.style.display = "")
    : (mouseIconElement.style.display = "none");
}

window.addEventListener("scroll", scrollHome);
