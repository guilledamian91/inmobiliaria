import Formulario from './classFormulario.js'
const c2= document.getElementById('contenedorFormulario')


window.addEventListener('load', ()=>{
	let f = new Formulario('contactoInmo')
	f.addBox('nombre','nombre','Ingrese su nombre','text')
	f.addBox('email','email','Ingrese su correo electronico','email')
	f.addTextArea('mensaje','mensaje','Ingrese un mensaje')
	f.addBoton('btnEnviar','Enviar')
	c2.appendChild(f.formulario);
})