const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle"); //NodeList treat like array

// console.log(circles)

// Adding eventlistener to next button
currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  console.log("currentActive :",currentActive);
  update();
});

// Adding eventlistener to previous button
currentActive = 1;
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log("currentActive :",currentActive);
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    console.log("idx",idx);
    if (idx < currentActive) {
      circle.classList.add("active");
      console.log(" index is :",idx);
    } else {
      circle.classList.remove("active");
      console.log("prev index is :",idx);

    }
  });

  //   Width
  const actives = document.querySelectorAll(".active");
//   console.log(actives.length, circles.length);
//   console.log(actives.length / circles.length);
  //   change it in %
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //   buttons display
  if (currentActive == 1) {
    prev.disabled = true;
  } else if (currentActive == circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
