// Función para cambiar entre las secciones del menú
function showSection(sectionId) {
    // 1. Ocultar todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // 2. Quitar la clase 'active' de todos los enlaces del menú
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Mostrar la sección solicitada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // 4. Marcar el enlace seleccionado como activo
    const targetNav = document.getElementById('nav-' + sectionId);
    if (targetNav) {
        targetNav.classList.add('active');
    }
}

// Ejemplo práctico de la página de JavaScript Vanilla
function saludarJS() {
    alert("¡Excelente elección! Tu licuado artesanal y 100% natural está en camino 🍹.");
}

// Lógica del Cuestionario
function evaluarCuestionario(event) {
    event.preventDefault(); // Evita que la página se recargue

    let score = 0;
    
    // Respuestas correctas
    const answers = {
        q1: 'b', // CSS
        q2: 'c', // $
        q3: 'b', // Comillas dobles
        q4: 'a', // Hosting Vercel
        q5: 'b'  // Falso (No usa azúcares)
    };

    // Obtener el formulario
    const form = document.getElementById('quizForm');
    const resultBox = document.getElementById('quizResult');

    // Validar respuestas
    for (let key in answers) {
        const selected = form.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    // Mostrar el resultado
    resultBox.classList.remove('hidden');
    
    if (score === 5) {
        resultBox.className = 'result-box success';
        resultBox.innerHTML = `¡Felicidades! Obtuviste ${score}/5. Eres un experto en Desarrollo Web y conoces perfectamente a NaturaBlend.`;
    } else if (score >= 3) {
        resultBox.className = 'result-box warning';
        resultBox.innerHTML = `Buen trabajo, obtuviste ${score}/5. Puedes dar un repaso a las secciones para sacar puntaje perfecto.`;
    } else {
        resultBox.className = 'result-box warning';
        resultBox.innerHTML = `Obtuviste ${score}/5. Te sugerimos volver a leer la información investigada y volver a intentarlo.`;
    }
}
