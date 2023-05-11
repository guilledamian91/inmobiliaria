class Formulario{
	formulario
	//el constructor recibira el id que va a tener el formulario y tambien va a recibir la ruta
	//del archivo que se encargada de gestionar la info del form
	constructor(id){
		this.formulario= document.createElement('form')
		this.formulario.setAttribute('id',id)

	}

	addBox(name,id,placeholder,tipo){
		let txt = document.createElement('input')
		let inputContent= document.createElement('div')
		inputContent.classList.add('contenedorInput')
		txt.setAttribute('type',tipo)
		txt.setAttribute('name',name)
		txt.setAttribute('id','id')
		txt.setAttribute('placeholder',placeholder)
		inputContent.appendChild(txt)
		this.formulario.appendChild(inputContent)

		txt.addEventListener('focus',()=>{
			txt.classList.toggle('inputHover');
			inputContent.classList.toggle('contentHover')
		})
		txt.addEventListener('blur',()=>{
			txt.classList.toggle('inputHover');
			inputContent.classList.toggle('contentHover')
		})
		inputContent.addEventListener('click',()=>{
			txt.focus()
		})
	}
	addTextArea(name,id,placeholder){
		let inputContent= document.createElement('div')
		inputContent.classList.add('contentTextArea')
		let textA = document.createElement('textarea')
		textA.setAttribute('name',name)
		textA.setAttribute('id',id)
		textA.setAttribute('placeholder',placeholder)
		

		inputContent.appendChild(textA)
		this.formulario.appendChild(inputContent)

		textA.addEventListener('focus',()=>{
			
			inputContent.classList.toggle('contentHover')			
		})
		textA.addEventListener('blur',()=>{			
			inputContent.classList.toggle('contentHover')			
		})
		inputContent.addEventListener('click',()=>{
			textA.focus()
		})
	}
	addBoton(id,texto){
		let boton = document.createElement('button')
		boton.classList.add('btnClass')
		boton.setAttribute('id',id)
		boton.setAttribute('type','submit')
		boton.textContent= texto
		this.formulario.appendChild(boton);

		boton.addEventListener('click',this._enviarDatos())
	}

	_enviarDatos(){

	}

}
export default Formulario = Formulario