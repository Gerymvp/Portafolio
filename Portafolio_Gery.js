// Variables para el carrusel
const carouselContainer = document.querySelector('.projects-carousel-container');
const projects = document.querySelectorAll('.project');
const projectWidth = projects[0].offsetWidth + 40; // Ancho de cada proyecto, incluyendo el margen
let currentIndex = 0; // Índice del proyecto actualmente centrado

// Función para mover el carrusel
function moveCarousel(direction) {
    // Calculamos el nuevo índice basado en la dirección
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % projects.length; // Si llegamos al final, volvemos al primer proyecto
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length; // Si estamos en el primero, vamos al último
    }

    // Desplazamos el contenedor para centrar el proyecto actual
    carouselContainer.style.transform = `translateX(-${currentIndex * 248}px)`;
}

// Añadimos eventos a los botones para navegar entre los proyectos
document.querySelector('.prev').addEventListener('click', () => moveCarousel('prev'));
document.querySelector('.next').addEventListener('click', () => moveCarousel('next'));

// Función para alternar el modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skill');
    const projects = document.querySelectorAll('.project');
    sections.forEach(section => section.classList.toggle('dark-mode'));
    skills.forEach(skill => skill.classList.toggle('dark-mode'));
    projects.forEach(project => project.classList.toggle('dark-mode'));
}
