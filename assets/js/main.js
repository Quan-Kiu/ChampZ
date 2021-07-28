let about1 = document.querySelector("#about1");
let about2 = document.querySelector("#about2");

document.addEventListener("scroll", function () {
  let pScroll = window.scrollY;

  if (pScroll >= 300) {
    about1.style.display = "flex";
  }

  if (pScroll >= 1400) {
    about2.style.display = "flex";
  }
});
