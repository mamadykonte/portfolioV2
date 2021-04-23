const loader = document.querySelector(".loader");
// loading
window.addEventListener("load", () => {
  loader.classList.add("loaderNone");
});

document.addEventListener("mousemove", function (e) {
  let circle = document.createElement("div");
  circle.classList.add("circle-cursor");
  let x = e.offsetX;
  let y = e.offsetY;
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  let size = Math.random() * 50;
  circle.style.width = 20 + size + "px";
  circle.style.height = 20 + size + "px";

  banner.appendChild(circle);

  setTimeout(function () {
    circle.remove();
  }, 5000);
});

// block
const allBlocs = document.querySelectorAll(".about_bloc");

allBlocs.forEach((bloc) => {
  bloc.addEventListener("click", (e) => {
    e.target.classList.add("content");

    for (let i = 0; i < allBlocs.length; i++) {
      if (allBlocs[i] !== e.target) {
        allBlocs[i].classList.remove("content");
      }
    }
  });
});
