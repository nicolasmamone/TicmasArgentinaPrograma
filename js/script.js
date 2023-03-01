document.getElementById('contact').style.display = 'none';
document.getElementById('academic').style.display = 'none';
document.getElementById('personal').style.display = 'none';
async function obtenerDatos() {
    let response = await fetch('https://randomuser.me/api/');
    var datos = await response.json();
    //console.log(datos.results[0].name.title)
    console.log(datos)
    
    let logo = document.getElementById('logo')
    logo.src=datos.results[0].picture.large

    let name = document.getElementById("name")
    console.log(name)
    name.textContent = datos.results[0].name.title +" "+ datos.results[0].name.first +" "+ datos.results[0].name.last;
    console.log(name)

    let edad = document.getElementById('age');
    edad.textContent = "EDAD: " + datos.results[0].dob.age;
    let direccion = document.getElementById('street');
    direccion.textContent = "DIRECCION: " + datos.results[0].location.street.name +" "+ datos.results[0].location.street.number;
    let telefono = document.getElementById('phone');
    telefono.textContent = "TELEFONO MÓVIL: " + datos.results[0].phone;
    let celular = document.getElementById('cel');
    celular.textContent = "TELEFONO FIJO: " + datos.results[0].cell;
    let email = document.getElementById('email');
    email.textContent = "EMAIL: " + datos.results[0].email;

    return datos; // no es necesario await en el return
   };
var data = obtenerDatos();

//logo = document.getElementById('logo')
//logo.setAttribute('src',urlImg);
//logo.src=datos[0].picture.medium;

console.log("data");
console.log(data);
//console.log(datos);

document.getElementById('btn-personal').addEventListener('click', function(){
    document.getElementById('personal').style.display = 'initial';
    document.getElementById('academic').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
})

document.getElementById('btn-academic').addEventListener('click', function(){
    document.getElementById('academic').style.display = 'initial';
    document.getElementById('personal').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
})

document.getElementById('btn-contact').addEventListener('click', function(){
    document.getElementById('contact').style.display = 'initial';
    document.getElementById('academic').style.display = 'none';
    document.getElementById('personal').style.display = 'none';
})