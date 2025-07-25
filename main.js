import './style.css'

document.getElementById('miBoton').addEventListener('click', function() {
    window.location.href = 'contactame.html';
});

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

const testimonials = [
    {
        text: "Samuel hizo un trabajo excepcional en nuestro sitio web. Profesional y eficiente.",
        author: "Juan Pérez, CEO de Empresa X",
    },
    {
        text: "El sitio quedó exactamente como lo imaginamos, con gran atención al detalle.",
        author: "María Gómez, Emprendedora",
    },
    {
        text: "Recomiendo ampliamente a Samuel para cualquier proyecto web.",
        author: "Carlos Ruiz, Desarrollador Senior",
    },
];

const testimonialsContainer = document.getElementById('testimonials-container');
testimonials.forEach((testimonial, index) => {
  const testimonialCard = document.createElement('article');
  testimonialCard.classList.add('testimonial-card');
  testimonialCard.style.animationDelay = `${index * 0.3}s`; // Corregido

  testimonialCard.innerHTML = `
    <p class="testimonial-text">"${testimonial.text}"</p>
    <p class="testimonial-author">- ${testimonial.author}</p>
  `; // Corregido

  testimonialsContainer.appendChild(testimonialCard);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.testimonial-card').forEach(card => {
  observer.observe(card);
});
