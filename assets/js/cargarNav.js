import Nav from './classNav.js'

let c = document.getElementById('navegacion')

window.addEventListener('load',()=>{
	c.appendChild(new Nav("48x48menu.png",["Inicio","Comprar","Alquilar","Blog","Franquicia","Contacto"],["./","./pestañas/comprar.html","./pestañas/alquilar.html","./pestañas/blog.html","./pestañas/franquicia.html","./pestañas/contacto.html"]))
})