let formulario = JSON.parse(localStorage.getItem('formulario')) || [];
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const datos = {
        name: document.getElementById('name').value,
        email:document.getElementById('email').value,
        mensaje:document.getElementById('mensaje').value,
        url:document.getElementById('url').value
    };
    // Agregar los nuevos datos al arreglo
    formulario.push(datos);

    // Guardar el arreglo actualizado nuevamente en localStorage
    localStorage.setItem('formulario', JSON.stringify(formulario));
    });

    document.getElementById('btnBorrar').addEventListener('click',function(){
        
        return localStorage.clear();
    });