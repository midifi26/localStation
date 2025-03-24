let formulario = JSON.parse(localStorage.getItem('formulario')) || [];
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const datos = {
        name: document.getElementById('name').value,
        email:document.getElementById('email').value,
        mensaje:document.getElementById('mensaje').value,
        url:document.getElementById('url').value
    };
    
    formulario.push(datos);

    
    localStorage.setItem('formulario', JSON.stringify(formulario));
    });

    
let eliminarLS = document.getElementById('borrarLS').addEventListener('submit',function(){
    return localStorage.clear();
 });

 document.getElementById('url').addEventListener('click',function(){
     return localStorage.removeItem('url');
 })

    