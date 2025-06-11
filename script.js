document.addEventListener("DOMContentLoaded", () => {
  const bemVindo = document.getElementById('bemVindoCard');
  const login = document.getElementById('loginCard');
  [bemVindo, login].forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(-20px)";
    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 100);
  });
});

  // Alternância de modo noturno
  modoNoturnoBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    modoNoturnoBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  window.location.href = 'pagina-inicial.html'; // Redireciona para a página inicial
});


