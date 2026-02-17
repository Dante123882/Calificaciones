// // Referencias a los elementos del DOM
// const inputU1 = document.getElementById('u1');
// const inputU2 = document.getElementById('u2');
// const inputU3 = document.getElementById('u3');
// const inputU4 = document.getElementById('u4');
// const btnCalcular = document.getElementById('btnCalcular');
// const btnLimpiar = document.getElementById('btnLimpiar');

// const txtPromedio = document.getElementById('txtPromedio');
// const txtEstatus = document.getElementById('txtEstatus');

// // Función principal
// btnCalcular.addEventListener('click', () => {
//     // 1. Obtener valores y convertirlos a número (float)
//     const u1 = parseFloat(inputU1.value) || 0;
//     const u2 = parseFloat(inputU2.value) || 0;
//     const u3 = parseFloat(inputU3.value) || 0;
//     const u4 = parseFloat(inputU4.value) || 0;

//     // 2. Calcular promedio
//     const promedio = (u1 + u2 + u3 + u4) / 4;

//     // 3. Mostrar promedio (con 1 decimal)
//     txtPromedio.value = promedio.toFixed(1);

//     // 4. Determinar estatus (Considerando 7.0 como aprobatorio, puedes cambiarlo a 6.0)
//     const notaMinima = 7.0; 
    
//     // Limpiar clases previas
//     txtEstatus.className = ''; 

//     if (promedio >= notaMinima) {
//         txtEstatus.value = "APROBADO";
//         txtEstatus.classList.add('aprobado'); // Añade color verde
//     } else {
//         txtEstatus.value = "REPROBADO";
//         txtEstatus.classList.add('reprobado'); // Añade color rojo
//     }
// });

// // Función para limpiar
// btnLimpiar.addEventListener('click', () => {
//     inputU1.value = '';
//     inputU2.value = '';
//     inputU3.value = '';
//     inputU4.value = '';
//     txtPromedio.value = '';
//     txtEstatus.value = '';
//     txtEstatus.className = '';
// });
// la funcion principal del main es:

//  1. Obtiene los valores del formulario 
//  2. Valida que los campos tengan información
//  3. La funcion fetch hace las peticiones al servidor
//  4. /calcular-promedio es la ruta a donde se estan enviando la petición
//  5. method: 'POST' → Vamos a enviar datos
//  6. headers → Estamos enviando JSON
//  7. body → Aquí van los datos convertidos a texto JSON

document.getElementById('btnCalcular').addEventListener('click', () => {

    const nombre = document.getElementById('nombre').value;
    const unidad1 = document.getElementById('unidad1').value;
    const unidad2 = document.getElementById('unidad2').value;
    const unidad3 = document.getElementById('unidad3').value;
    const btnCalcular = document.getElementById('btnCalcular');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const txtPromedio = document.getElementById('promedio');
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