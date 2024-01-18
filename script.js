// Carousel items
let items = document.querySelectorAll('.carousel');

items.forEach((item) => {
    let slides = item.querySelectorAll(".carousel-item");
    let firstSlide = slides[0];

    slides.forEach((element) => {

        const minPerSlide = 6;
        let next = element.nextElementSibling
        for (let i = 1; i < minPerSlide; i++) {
            if (!next) {
                next = firstSlide;
            }
            let cloneChild = next.cloneNode(true)
            element.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
        }
    });
});

// Hover navbar links
const navElements = document.querySelectorAll(".nav-link");

navElements.forEach(element => {
    element.addEventListener("mouseenter", ()=>{
        element.style.fontWeight = "bold";
    });
    element.addEventListener("mouseleave", ()=>{
        element.style.fontWeight = "normal";
    });
});

// Carousel cards
const cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach(element => {
    element.addEventListener("mouseenter", ()=>{
        element.classList.add("scale-me");
    });
    element.addEventListener("mouseleave", ()=>{
        element.classList.remove("scale-me");
    });
});