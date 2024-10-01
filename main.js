function buscar() {
    const input = document.getElementById('searchInput').value.toLowerCase(); // Obtiene el valor de la barra de búsqueda
    
    if (input.includes('hombre') || input.includes('camisas de hombre') || input.includes('pantalones de hombre')) {
        mostrarSeccion('hombres'); // Muestra la sección de hombres
    } else if (input.includes('mujer')) {
        mostrarSeccion('mujeres'); // Muestra la sección de mujeres
    } else if (input.includes('bebé') || input.includes('bebe')) {
        mostrarSeccion('bebes'); // Muestra la sección de bebés
    } else if (input.includes('accesorios')) {
        mostrarSeccion('accesorios'); // Muestra la sección de accesorios
    } else {
        alert('No se encontró ninguna sección para la búsqueda: ' + input); // Mensaje si no se encuentra coincidencia
    }
}

function filtrarCategorias() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const secciones = document.querySelectorAll('.seccion');

    secciones.forEach((seccion) => {
        if (seccion.querySelector('h2').innerText.toLowerCase().includes(input)) {
            seccion.classList.remove('ocultar');
        } else {
            seccion.classList.add('ocultar');
        }
    });
}

function abrirModal() {
    var modal = document.getElementById("loginModal");
    modal.style.display = "block";
}

function cerrarModal() {
    var modal = document.getElementById("loginModal");
    modal.style.display = "none";
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById("loginForm").reset();
}

window.onclick = function (event) {
    var modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
        limpiarFormulario();
    }
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errorElement.textContent = "Por favor, introduce un correo electrónico válido.";
        errorElement.style.display = "block";
        return;
    }

    if (password.length < 6) {
        errorElement.textContent = "La contraseña debe tener al menos 6 caracteres.";
        errorElement.style.display = "block";
        return;
    }

    errorElement.style.display = "none";
    alert("Inicio de sesión exitoso");
    cerrarModal();
});
function mostrarSeccion(seccionId) {

    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function (seccion) {
        seccion.classList.remove('activa');
        seccion.classList.add('ocultar');
    });


    var seccionSeleccionada = document.getElementById(seccionId);
    if (seccionSeleccionada) {
        seccionSeleccionada.classList.remove('ocultar');
        seccionSeleccionada.classList.add('activa');
    }
    if (seccionId === 'hombres') {
        var seccionZapatos = document.getElementById('zapatos-hombre');
        seccionZapatos.classList.remove('activa');
        seccionZapatos.classList.add('ocultar');
    }
    if (seccionId === 'mujeres') {
        var seccionZapatos = document.getElementById('zapatos-mujer');
        seccionZapatos.classList.remove('activa');
        seccionZapatos.classList.add('ocultar');
    }

    cerrarModal();
}

let index = 0;

function moverSlide(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    const visibleSlides = 4; 
    const slideWidth = slides[0].offsetWidth;
    
    index += direction;
    
    if (index < 0) {
        index = 0;
    }
    if (index > totalSlides - visibleSlides) {
        index = totalSlides - visibleSlides;
    }

    slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

document.getElementById('logo').addEventListener('click', function(event) {
    event.preventDefault(); 
    var seccionActiva = document.querySelector('.seccion.activa');
    
    if (seccionActiva && seccionActiva.id === 'inicio') {
        location.reload(); 
    } else {
        mostrarSeccion('inicio'); 
    }
});


function cargarContenido(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('contenido').innerHTML = xhr.responseText;
        }
    };
    
    xhr.send();
}
function abrirEnNuevaPestana(url) {
    window.open(url, '_blank');
}


function abrirDetalles(tipo) {
    const contenedorDetalles = document.getElementById('detallesZapatosBebes');
    contenedorDetalles.classList.remove('ocultar'); // Muestra el contenedor de detalles

    // Opcional: puedes ocultar el contenedor de los zapatos si es necesario
    // const contenedorZapatos = document.getElementById('bebes');
    // contenedorZapatos.classList.add('ocultar'); 
}

function cerrarDetalles() {
    const contenedorDetalles = document.getElementById('detallesZapatosBebes');
    contenedorDetalles.classList.add('ocultar'); // Oculta el contenedor de detalles
}



//Funcion para actualizar pagina 
function mostrarZapatos() {
    // Oculta la sección de ropa de hombre
    var seccionHombres = document.getElementById('hombres');
    seccionHombres.classList.remove('activa');
    seccionHombres.classList.add('ocultar');
    
    // Muestra la nueva sección de zapatos
    var seccionZapatos = document.getElementById('zapatos-hombre');
    seccionZapatos.classList.remove('ocultar');
    seccionZapatos.classList.add('activa');
}

function mostrarZapatosM() {
    // Oculta la sección de ropa de hombre
    var seccionMujeres = document.getElementById('mujeres');
    seccionMujeres.classList.remove('activa');
    seccionMujeres.classList.add('ocultar');
    
    // Muestra la nueva sección de zapatos
    var seccionZapatos = document.getElementById('zapatos-mujer');
    seccionZapatos.classList.remove('ocultar');
    seccionZapatos.classList.add('activa');
}






