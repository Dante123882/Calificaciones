
document.getElementById('btnCalcular').addEventListener('click', () => {

    const nombre = document.getElementById('nombre').value;
    const unidad1 = document.getElementById('unidad1').value;
    const unidad2 = document.getElementById('unidad2').value;
    const unidad3 = document.getElementById('unidad3').value;
    const txtEstatus = document.getElementById('estatus');

    if (!nombre || !unidad1 || !unidad2 || !unidad3) {
        alert('Por favor completa todos los campos');
        return;
    }

    fetch('/calcular-promedio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nombre,
            unidad1,
            unidad2,
            unidad3
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('promedio').value = data.promedio.toFixed(2);
        document.getElementById('estatus').value = data.estatus;
        
        const notaMinima = 7.0;
        txtEstatus.className = '';
        
        if (data.promedio >= notaMinima) {
            txtEstatus.classList.add('aprobado'); // Añade color verde
        } else {
            txtEstatus.classList.add('reprobado'); // Añade color rojo
        }
    })
    .catch(err => console.error(err));


});

// Boton para limpiar las cajas del formulario

document.getElementById('btnLimpiar').addEventListener('click', () => {
    document.getElementById('nombre').value = '';
    document.getElementById('unidad1').value = '';
    document.getElementById('unidad2').value = '';
    document.getElementById('unidad3').value = '';
    document.getElementById('promedio').value = '';
    document.getElementById('estatus').value = '';
    document.getElementById('estatus').className = '';
});
const btnCalcular = document.getElementById('btnCalcular');
// ... obtener tus inputs ...

btnCalcular.addEventListener('click', (e) => {
    e.preventDefault(); // Para que no recargue la página
    
    // 1. Obtienes los números aquí
    const u1 = parseFloat(document.getElementById('unidad1').value);
    const u2 = parseFloat(document.getElementById('unidad2').value);
    const u3 = parseFloat(document.getElementById('unidad3').value);

    // 2. Haces la suma y división AQUÍ (NO en app.js)
    const promedio = (u1 + u2 + u3) / 3;
    const estatus = promedio >= 6 ? "Aprobado" : "Reprobado";

    // 3. Muestras el resultado
    document.getElementById('resultado').innerText = promedio.toFixed(2);
});