const buttons = document.querySelectorAll('.categoria-btn');
const sections = document.querySelectorAll('.categoria-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Resetar botões
    buttons.forEach(b => b.classList.remove('btn-dark'));
    buttons.forEach(b => b.classList.add('btn-light'));
    btn.classList.add('btn-dark');

    // Esconder todos os conteúdos
    sections.forEach(sec => sec.classList.add('d-none'));

    // Mostrar a seção selecionada com animação
    const target = document.querySelector(btn.dataset.target);
    target.classList.remove('d-none');
    target.classList.remove('animate__fadeIn'); // Reset
    void target.offsetWidth; // Reflow
    target.classList.add('animate__fadeIn');
  });
});

// Exibir a primeira seção por padrão
document.querySelector('.categoria-btn').click();