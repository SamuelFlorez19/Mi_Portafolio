import './style.css'

const projects = [
  {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1.",
      image: "https://via.placeholder.com/300",
  },
  {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2.",
      image: "https://via.placeholder.com/300",
  },
  {
      title: "Proyecto 3",
      description: "Descripción del proyecto 3.",
      image: "https://via.placeholder.com/300",
  },
  
];

const cardContainer = document.getElementById('card-container');

projects.forEach(project => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
  `;

  cardContainer.appendChild(card);
});


document.addEventListener("DOMContentLoaded", function() {
  const skillCards = document.querySelectorAll('.skill-card');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  });

  skillCards.forEach(card => {
      observer.observe(card);
  });
});