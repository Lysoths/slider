const boxes = document.querySelectorAll("div");
const images = document.querySelectorAll("img");
const container = document.querySelector(".container");
const back = document.querySelector(".back");
const next = document.querySelector(".next");
console.log(container.scrollLeft);
for (let i = 0; i <= images.length - 1; i++) {
  let randomNumber = Math.ceil(Math.random() * 300 + 300);

  images[i].setAttribute(
    "src",
    `https://source.unsplash.com/random/300x${randomNumber}`
  );
}

next.addEventListener("click", () => {
  container.scrollLeft += 330;
  console.log(container.scrollLeft);
});

back.addEventListener("click", () => {
  container.scrollLeft -= 330;
  console.log(container.scrollLeft);
});
