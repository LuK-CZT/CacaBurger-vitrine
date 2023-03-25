const links = document.querySelectorAll('a[href^="#"]');

// Ajouter un événement click sur chaque lien
links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();

    // Récupérer l'élément cible de l'ancre
    const target = document.querySelector(link.getAttribute('href'));

    // Vérifier si l'élément cible existe et l'animer si c'est le cas
    if (target) {
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    }
  });
});

// on gère la border de la navbar au scroll
window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

// faire un prout

const audio1 = document.getElementById('fart');
const audio2 = document.getElementById('fart2');
const audio3 = document.getElementById('fart3');

const audioTab = [audio1, audio2, audio3];

const menuImg = document.querySelectorAll('.menu-img')

menuImg.forEach(img => {
  img.addEventListener('click', () => {
    audioTab[Math.floor(Math.random() * 3)].play()
  })
})