import Burger from './classBurger.js'
const contenedor= document.getElementById('contentMB')


window.addEventListener('load',()=>{
	let menu = new Burger()
	menu.addOpcion('inicio','./')
	menu.addOpcion('Comprar','#')
	menu.addOpcion('Alquilar','#')
	menu.addOpcion('Franquicia','#')
	menu.addOpcion('Blog','blog.html')
	menu.addOpcion('Contacto','contacto.html')
	contenedor.appendChild(menu.menu)
})