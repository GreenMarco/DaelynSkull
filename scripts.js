function mostrarTabla(id) {
  const secciones = document.querySelectorAll('.tabla-contenido');
  secciones.forEach(sec => sec.classList.remove('activa'));

  const mostrar = document.getElementById('tabla-' + id);
  if (mostrar) {
    mostrar.classList.add('activa');
  }
}

// Mostrar "Normal" por defecto al cargar
window.addEventListener('DOMContentLoaded', () => {
  mostrarTabla('normal');
});

