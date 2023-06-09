import Nav from './classNav.js'	



let c = document.getElementById('navegacion')

window.addEventListener('load',()=>{
	let who = window.location.pathname
	
	if(who=="/inmobiliaria/"||who=="/inmobiliaria/index.html"){
		c.appendChild(new Nav("logo.png",["Inicio","Comprar","Alquilar","Blog","Franquicia","Contacto"],["./","./pestañas/comprar.html","./pestañas/alquilar.html","./pestañas/blog.html","./pestañas/franquicia.html","./pestañas/contacto.html"]))	
	}else{
		c.appendChild(new Nav("../logo.png",["Inicio","Comprar","Alquilar","Blog","Franquicia","Contacto"],["../","../pestañas/comprar.html","../pestañas/alquilar.html","../pestañas/blog.html","../pestañas/franquicia.html","../pestañas/contacto.html"]))
	}
	
})