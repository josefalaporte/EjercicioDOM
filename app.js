const formulario = document.querySelector('#formulario');
const btn = document.querySelector('btn');

formulario.addEventListener('submit', (event) =>{
    event.preventDefault();
    
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const saludo = document.querySelector('#saludo');

    console.log(`El nombre es ${nombre} y el apellido es ${apellido}`);


    saludo.textContent = `Hola ${nombre} ${apellido}, gracias por rellenar el formulario`;

    saludo.style.color ='pink';
})