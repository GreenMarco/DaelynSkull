function mostrarTabla(id) {
  const secciones = document.querySelectorAll('.tabla-contenido');
  secciones.forEach(sec => sec.classList.remove('activa'));

  const mostrar = document.getElementById('tabla-' + id);
  if (mostrar) {
    mostrar.classList.add('activa');
  }
  // Quitar clase 'activo' de todos los botones
    const botones = document.querySelectorAll('.tabs button');
    botones.forEach(btn => btn.classList.remove('activo'));

    // Agregar clase 'activo' al botón presionado
    const botonActivo = document.querySelector(`.tabs button[onclick*="${id}"]`);
    if (botonActivo) botonActivo.classList.add('activo');
}

// Mostrar "Normal" por defecto al cargar
window.addEventListener('DOMContentLoaded', () => {
  mostrarTabla('normal');
});

