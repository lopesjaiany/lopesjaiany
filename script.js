// Rolagem suave
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação ao rolar a página
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});

// Validação de formulário
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.querySelector('input[placeholder="Seu Nome"]').value;
    const email = form.querySelector('input[placeholder="Seu Email"]').value;
    const message = form.querySelector('textarea[placeholder="Sua Mensagem"]').value;

    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Mensagem enviada com sucesso!');
        form.reset(); // Limpa o formulário após o envio
    }
});
