let items = document.querySelectorAll('.carousel');

items.forEach((item) => {
    let slides = item.querySelectorAll(".carousel-item");
    console.log(slides);
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