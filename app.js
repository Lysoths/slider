const boxes = document.querySelectorAll("div");
const images = document.querySelectorAll("img");
const container = document.querySelector(".container");
const back = document.querySelector(".back");
const next = document.querySelector(".next");

for (let i = 0; i <= images.length - 1; i++) {
  let randomNumber = Math.ceil(Math.random() * 300 + 300);

  images[i].setAttribute(
    "src",
    `https://source.unsplash.com/random/300x${randomNumber}`
  );
  container.children[i].addEventListener("mouseover", () => {
    if (container.scrollLeft <= 1970) {
      setTimeout(scrollLeftSide, 1000);
    }
  });
}

function calcScroll() {
  let scrollCalc = container.scrollWidth / container.children.length;
  return scrollCalc;
}

next.addEventListener("click", () => {
  if (container.scrollLeft <= 1970) {
    container.scrollLeft += calcScroll();
  } else {
    container.scrollLeft = 0;
  }
});

back.addEventListener("click", () => {
  if (container.scrollLeft > calcScroll()) {
    container.scrollLeft -= calcScroll();
    console.log(container.scrollLeft);
  } else {
    container.scrollLeft = calcScroll() * container.children.length;
  }
});

function scrollLeftSide() {
  container.scrollLeft += calcScroll();
}

function scrollRightSide() {
  container.scrollLeft -= calcScroll();
}
