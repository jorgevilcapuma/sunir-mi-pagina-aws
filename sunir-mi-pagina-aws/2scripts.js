var logo = document.getElementById('header-img');

logo.addEventListener('mouseover', function() {
    logo.style.transition = 'all 0.5s ease';
    logo.style.transform = 'scale(1.1)'; // Aumenta ligeramente el tamaño
    logo.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0)'; // Añade sombra
});

logo.addEventListener('mouseout', function() {
    logo.style.transform = 'scale(1)'; // Regresa al tamaño normal
    logo.style.boxShadow = 'none'; // Elimina la sombra
});