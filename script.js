const firebaseConfig = {
    apiKey: "AIzaSyA-ha4Xb-IfzgwV0HlSpDkJoDpoh2BJV9s",
    authDomain: "demoweb-f041d.firebaseapp.com",
    projectId: "demoweb-f041d",
    storageBucket: "demoweb-f041d.firebasestorage.app",
    messagingSenderId: "1098096742663",
    appId: "1:1098096742663:web:013cf8026ef6b03f4035a2"
  };
firebase.initializeApp(firebaseConfig);// Inicializaar app Firebase

const db = firebase.firestore();
const contactos= [];
db.collection("usuarios")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data().mensaje);
    });
  });
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
   const datos = {
       name: document.getElementById('name').value,
       email:document.getElementById('email').value,
       mensaje:document.getElementById('mensaje').value,
       url:document.getElementById('url').value
   };
   readAll(datos)
});
  const printData = () => {
    //Petición a Firestore para leer todos los documentos de la colección album
    const listaContactos = document.getElementById("lista-contactos");
    listaContactos.innerHTML = "";
  
    db.collection("usuarios")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const contactoDiv = document.createElement("div");
          
          contactoDiv.innerHTML = `
              <p>Nombre: ${doc.data().name}</p>
              <p>Email: ${doc.data().email}</p>
              <p>Mensaje: ${doc.data().mensaje}</p>
              <p>URL: ${doc.data().url}</p>
              <p>ID: ${doc.id}</p>
              <button id="delete" type="button">Borrar</button>
              <hr>
          `;
          listaContactos.appendChild(contactoDiv);
        });
      });
  };
  const readAll = (array) => {
    db.collection("usuarios")
      .add(array)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        printData();
      })
      .catch((error) => console.error("Error adding document: ", error));
  };
  


    // formulario.push(datos);

    
    // localStorage.setItem('formulario', JSON.stringify(formulario));
//});

    
// let eliminarLS = document.getElementById('borrarLS').addEventListener('submit',function(){
//     return localStorage.clear();
// });

//  document.getElementById('url').addEventListener('click',function(){
//      return localStorage.removeItem('url');
// })

// let fomulario= document.getElementById("form");
// function formBase(formulario){
//     db.collection("usuario")
//     .add(formulario);
//     console.log(formulario);
// }


