const track = document.querySelector(".carousel-track");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

next.addEventListener("click", () => {
    index++;
    moveCarousel();
});

prev.addEventListener("click", () => {
    index--;
    moveCarousel();
});

function moveCarousel() {
    const cards = document.querySelectorAll(".card");
    const cardWidth = cards[0].clientWidth + 40;

    if (index < 0) index = 0;
    if (index >= cards.length - 1) index = cards.length - 1;

    track.style.transform = `translateX(${-index * cardWidth}px)`;
}
