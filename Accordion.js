
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// var shows = document.querySelectorAll(".show");
// var infos = document.querySelectorAll(".info");
// var accordions = document.querySelectorAll(".accordion");

// for (let i = 0; i < shows.length; i++) {
//   shows[i].onclick = function() {
//     for (let j = 0; j < shows.length; j++) {
//       if (shows[j] != this) {
//         infos[j].classList.remove("reveal");
//         shows[j].innerHTML = "+";
//         accordions[j].classList.remove("radius");
//       }
//     }
//     accordions[i].classList.toggle("radius");
//     infos[i].classList.toggle("reveal");
//     if (infos[i].className.includes("reveal")) shows[i].innerHTML = "-";
//     else shows[i].innerHTML = "+";
//   };
// }
