// CARDS INTERATIVOS - CARREIRA

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card-tempo");

    cards.forEach(card => {

        card.addEventListener("click", function () {

            // (desktop), não ativa clique
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