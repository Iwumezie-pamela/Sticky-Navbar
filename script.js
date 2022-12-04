const nav = document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");

// console.log(nav.offsetHeight);//this gets the height of the navbar

// console.log(bottomContainer.offsetTop);//gets the height of the bottom container and the  navbar would change color once it reaches that point

//window.scrollY that is the vertical scroll


window.addEventListener("scroll", (e) => {
  if (window.scrollY > bottomContainer.offsetTop - nav.offsetHeight - 50) {
    nav.classList.add("active");
  } else {
      nav.classList.remove("active");
  }
});
