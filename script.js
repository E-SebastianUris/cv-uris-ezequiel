// Botón "Volver arriba"
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnTop.classList.add("btn-floating--visible");
  } else {
    btnTop.classList.remove("btn-floating--visible");
  }
});

btnTop.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Botón "Cambiar tema" (modo claro/oscuro simple)
const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("theme-light");
});

// Formulario de contacto: mensaje visible al enviar
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // No envía nada real
  formFeedback.textContent =
    "¡Gracias por tu mensaje! (Simulación: el correo no se envía realmente)";
  contactForm.reset();
});

// Animación de secciones al hacer scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section--visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});