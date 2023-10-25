document.addEventListener("DOMContentLoaded", function () {
    // Prisc: je selection l'image des mains 
    const main1 = document.querySelector("#main1");
    const main2 = document.querySelector("#main2");

// Prisc: j'attends 3sec pour changer l'image. remplacer la main1 pas la main2
    setTimeout(function () {
        main1.classList.add("hidden"); //Prisc:cache la main1
        main2.classList.remove("hidden");// Prisc: affiche la main2
    }, 3000); // Prisc : au bout de 3sec
    });

// je selection les boutons
const buttonEntrer = document.querySelector('#buttonScreen');
const buttonBack = document.querySelector('#buttonBack');





 // jordan : code pour le bouton entrer
buttonEntrer.addEventListener("click", () => {
    screenLaptop.classList.add('hidden');
});
// jordan : code pour le bouton revenir page d'accueil
buttonBack.addEventListener("click", () => {
    screenLaptop.classList.remove('hidden');
});