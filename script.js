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
    element.addEventListener("mouseenter", () => {
        element.style.fontWeight = "bold";
    });
    element.addEventListener("mouseleave", () => {
        element.style.fontWeight = "normal";
    });
});

// Carousel cards
const cards = document.querySelectorAll(".card");

cards.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.classList.add("scale-me");
    });
    element.addEventListener("mouseleave", () => {
        element.classList.remove("scale-me");
    });
});

// For Element Navbar Collapse (Resolution to the bug appearing before opening )
const rightNav = document.querySelector(".right-nav");
const buttonToggler = document.querySelector("button.navbar-toggler");
const navbarToggler = document.querySelector("nav.navbar.navbar-expand-lg.navbar-light.bg-light");
let rightNavStatus = false;

buttonToggler.addEventListener("click", () => {
    rightNav.classList.remove("open", "close");
    if (!rightNavStatus) {
        rightNavStatus = true;
        rightNav.classList.add("open");
        navbarToggler.classList.add("opening");
    }else if(rightNavStatus) {
        rightNavStatus = false;
        rightNav.classList.remove("open");
        rightNav.classList.add("close");
        navbarToggler.classList.remove("opening");
    }
});

// Footer brands events
brands = document.querySelectorAll("footer>div>div>div>i");

brands.forEach(element =>{
    element.addEventListener("mouseenter", () => {
        element.classList.add("scale-me");
    });
    element.addEventListener("mouseleave", () => {
        element.classList.remove("scale-me");
    });
})

// Scroll Events
let elements = document.querySelectorAll(".element");
let windowHeight = window.innerHeight;


const displayOn = () => {
    elements.forEach(element => {
        let pointOfReactIn = windowHeight - element.getBoundingClientRect().bottom;
        let pointOfReactOut = windowHeight - element.getBoundingClientRect().top;
        
        if (pointOfReactIn > -120) {
            element.classList.add("lesAppears");
        }else if(pointOfReactOut < 0){
            element.classList.remove("lesAppears");
        }

    });
}

const firstControl = ()=>{
elements.forEach(element => {
    let pointOfReact = windowHeight - element.getBoundingClientRect().bottom;
    if (pointOfReact > 0) {
        element.classList.add("lesAppears");
    }
});
}

firstControl();

window.addEventListener("scroll", displayOn);
window.addEventListener("resize", ()=>{
    const reload = ()=>{
        window.location.reload();
    }
    setTimeout(reload, 2000);
});

// Animation button-navbar toggler
const btnRow = document.querySelectorAll(".btn-row");
const btn = document.querySelector("button");
let btnStatus = false;

const animation = ()=>{
    btnRow.forEach(element => {
        element.classList.remove("start", "stop");
    });

    if(!btnStatus){    
        btnRow.forEach(element => {
            element.offsetWidth;        
            element.classList.add("start");
            btnStatus = true;        
        });
    }else{
        btnRow.forEach(element =>{
            element.offsetWidth;
            element.classList.add("stop", "start");
            btnStatus = false;
        })
    }
}

btn.addEventListener("click", animation);