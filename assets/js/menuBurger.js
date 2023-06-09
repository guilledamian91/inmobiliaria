import Burger from './classBurger.js'
const contenedor= document.getElementById('contentMB')


window.addEventListener('load',()=>{
	let menu = new Burger()
	menu.addOpcion('inicio','./')
	menu.addOpcion('Comprar','../pestañas/comprar.html')
	menu.addOpcion('Alquilar','../pestañas/alquilar.html')
	menu.addOpcion('Franquicia','../pestañas/franquicia.html')
	menu.addOpcion('Blog','../pestañas/blog.html')
	menu.addOpcion('Contacto','../pestañas/contacto.html')
	contenedor.appendChild(menu.menu)
})