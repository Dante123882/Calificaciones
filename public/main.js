
// document.getElementById('btnCalcular').addEventListener('click', () => {

//     const nombre = document.getElementById('nombre').value;
//     const unidad1 = document.getElementById('unidad1').value;
//     const unidad2 = document.getElementById('unidad2').value;
//     const unidad3 = document.getElementById('unidad3').value;
//     const txtEstatus = document.getElementById('estatus');

//     if (!nombre || !unidad1 || !unidad2 || !unidad3) {
//         alert('Por favor completa todos los campos');
//         return;
//     }

//     fetch('/calcular-promedio', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             nombre,
//             unidad1,
//             unidad2,
//             unidad3
//         })
//     })
//     .then(res => res.json())
//     .then(data => {
//         document.getElementById('promedio').value = data.promedio.toFixed(2);
//         document.getElementById('estatus').value = data.estatus;
        
//         const notaMinima = 7.0;
//         txtEstatus.className = '';
        
//         if (data.promedio >= notaMinima) {
//             txtEstatus.classList.add('aprobado'); // Añade color verde
//         } else {
//             txtEstatus.classList.add('reprobado'); // Añade color rojo
//         }
//     })
//     .catch(err => console.error(err));


// });

// Boton para limpiar las cajas del formulario

// 1. Referencias a los botones
const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiar = document.getElementById('btnLimpiar');

// 2. Evento del botón Calcular
btnCalcular.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que se recargue la página

    // Obtener referencias a los inputs
    const inputPromedio = document.getElementById('promedio');
    const inputEstatus = document.getElementById('estatus');
    
    // Obtener valores numéricos
    const u1 = parseFloat(document.getElementById('unidad1').value);
    const u2 = parseFloat(document.getElementById('unidad2').value);
    const u3 = parseFloat(document.getElementById('unidad3').value);

    // Validar que sean números
    if (isNaN(u1) || isNaN(u2) || isNaN(u3)) {
        alert("Por favor ingresa calificaciones válidas.");
        return;
    }

    // --- AQUÍ ESTÁ LA MATEMÁTICA ---
    const promedioFinal = (u1 + u2 + u3) / 3;
    const estatusFinal = promedioFinal >= 7 ? "Aprobado" : "Reprobado"; // Ajusté a 7.0 como tenías antes

    // --- MOSTRAR RESULTADOS (Corrección de IDs) ---
    // Como son <input>, usamos .value (no .innerText)
    inputPromedio.value = promedioFinal.toFixed(2); 
    inputEstatus.value = estatusFinal;

    // Colores visuales (Opcional)
    inputEstatus.className = ''; // Limpiar clases previas
    if(promedioFinal >= 7) {
        inputEstatus.classList.add('aprobado');
    } else {
        inputEstatus.classList.add('reprobado');
    }
});

// 3. Evento del botón Limpiar
btnLimpiar.addEventListener('click', () => {
    document.getElementById('nombre').value = '';
    document.getElementById('unidad1').value = '';
    document.getElementById('unidad2').value = '';
    document.getElementById('unidad3').value = '';
    document.getElementById('promedio').value = '';
    document.getElementById('estatus').value = '';
    document.getElementById('estatus').className = ''; // Quitar colores
});