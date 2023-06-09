window.addEventListener('scroll',function(){
	let scrTop = window.pageYOffset || document.documentElement.scrollTop;

	console.log(scrTop);
	let texto1= document.querySelectorAll('.texto');
	let serv = document.getElementById('servicios');
	let posServicio = serv.offsetTop;
	if(scrTop>=posServicio-350){
		


		texto1[0].style.opacity= '1';
		texto1[0].style.marginRight = '-150px'
		texto1[0].style.boxShadow= '10px 3px 10px var(--color2)'

		
	}
	if(scrTop>=posServicio){
		let t2= document.querySelectorAll('.cs2>.texto');

		t2[0].style.opacity= '1';
		t2[0].style.marginLeft= '-100px'
		t2[0].style.boxShadow= '-10px 3px 10px var(--color2)'
	}
	 if(scrTop>=posServicio-200){
		let nav = document.querySelectorAll('.menuFlot');
		let logo = document.querySelectorAll('.logo');
		let opciones = document.querySelectorAll('.opMenu');


		nav[0].style.backgroundColor= 'var(--color4)';
		opciones.forEach(function(e){

			e.style.color = 'var(--color2)';
		})

		logo[0].style.filter= '';

	}else{
		let nav = document.querySelectorAll('.menuFlot');
		let logo = document.querySelectorAll('.logo');
		let opciones = document.querySelectorAll('.opMenu');
		nav[0].style.backgroundColor= 'var(--color2)';
		logo[0].style.filter= 'drop-shadow(2px 2px 5px var(--color4))';

		opciones.forEach(function(e){

			e.style.color = 'var(--color5)';
		})

	}
});