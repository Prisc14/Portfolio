const buttonEntrer = document.querySelector('#buttonScreen');
const buttonBack = document.querySelector('#buttonBack');
const screenLaptop = document.querySelector('#screenLaptop');

buttonEntrer.addEventListener("click", () => {
    screenLaptop.classList.add('hidden');
});

buttonBack.addEventListener("click", () => {
    screenLaptop.classList.remove('hidden');
});