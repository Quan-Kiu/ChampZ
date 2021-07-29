let video = document.getElementsByTagName("video");
let iconVideo = document.querySelector(".video .media i");
function remoteVideo() {
  if (video[0].paused == true) {
    video[0].play();
    iconVideo.style.display = "none";
  } else {
    video[0].pause();
    iconVideo.style.display = "block";
  }
}

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".scroll");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoin = 150;

    if (revealtop < windowHeight - revealpoin) {
      reveals[i].setAttribute("data-scroll", "in");
    }
  }
}
