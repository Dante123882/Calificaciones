
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