// ================= NAVBAR SCROLL =================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar?.classList.add("scrolled");
    } else {
        navbar?.classList.remove("scrolled");
    }
});


// ================= CARDS INTERATIVOS - CARREIRA =================
document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card-tempo");

    cards.forEach(card => {

        card.addEventListener("click", function () {

            // Se for desktop (tem hover real), não ativa clique
            if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                return;
            }

            // Remove classe ativa dos outros cards
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove("ativo");
                }
            });

            // Alterna estado do card clicado
            card.classList.toggle("ativo");

        });

    });

});