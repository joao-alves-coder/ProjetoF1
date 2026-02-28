const navbar = document.getElementById("navbar");
const overlay = document.querySelector(".overlay");

/* NAVBAR + OVERLAY */
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar?.classList.add("scrolled");
    } else {
        navbar?.classList.remove("scrolled");
    }

    if (overlay) {
        overlay.style.opacity = window.scrollY / window.innerHeight;
    }

    revealOnScroll();
});

/* REVEAL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

/* LUZ DINÂMICA */
if (window.innerWidth > 1000 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const section = document.querySelector(".segunda");
    const light = document.getElementById("light");

    if (section && light) {
        section.addEventListener("mousemove", (e) => {
            const rect = section.getBoundingClientRect();
            light.style.left = (e.clientX - rect.left) + "px";
            light.style.top = (e.clientY - rect.top) + "px";
        });
    }
}

/* FAÍSCAS */
const container = document.getElementById("faiscas-container");
const totalFaiscas = 15;

if (container) {
    for (let i = 0; i < totalFaiscas; i++) {
        const span = document.createElement("div");
        span.classList.add("faisca");
        span.style.left = Math.random() * 100 + "%";

        let size = 4 + Math.random() * 4;
        span.style.width = size + "px";
        span.style.height = size + "px";

        span.style.animationDuration = (2 + Math.random() * 2) + "s";
        span.style.animationDelay = Math.random() * 3 + "s";

        container.appendChild(span);
    }
}
const scrollIndicator = document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        scrollIndicator.classList.add("hide");
    } else {
        scrollIndicator.classList.remove("hide");
    }
});