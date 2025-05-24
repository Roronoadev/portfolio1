// Mostrar elementos quando rolar a página
const sections = document.querySelectorAll("section, article");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    } else {
      sec.style.opacity = "0";
      sec.style.transform = "translateY(50px)";
    }
  });
});