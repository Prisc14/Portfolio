document.addEventListener("DOMContentLoaded", function mains () {
    // je selection l'image de la main 
    const handImage = document.querySelector("#sreenLaptop img");

// je selection les boutons
const buttonEntrer = document.querySelector('#buttonScreen');
const buttonBack = document.querySelector('#buttonBack');


// Prisc:  J'attend 3s et j'ajoute une classe pour activer l'animation
setTimeout(function () {
    handImage.src = "./img/page-individuels/main2.png";

// Prisc : j'ajoute la classe pour l'animation
handImage.classList.add("animate-hand");

//je cache la 1ere main apres 3seg
screenLaptop.classList.add("hidden");
}, 3000);


 // jordan : code pour le bouton entrer
buttonEntrer.addEventListener("click", () => {
    screenLaptop.classList.add('hidden');
});
// jordan : code pour le bouton revenir page d'accueil
buttonBack.addEventListener("click", () => {
    screenLaptop.classList.remove('hidden');
});
});