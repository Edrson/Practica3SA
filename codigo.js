
/*const callback = () => {
	document.write('Llamando a mi callback');
	console.log('Llamando a mi callback')
  }*/
  

function callback(){
	document.write('Ejecutando funcion secundaria o de parametro.');
	console.log('Ejecutando funcion secundaria o de parametro.')
}

  function otraFuncion(callback) {
	document.write('Ejecutando funcion principal.'+"<br>");
	console.log('Ejecutando la funcion principal.');
	callback();
  }
  
otraFuncion(callback);


//Clases-------------------------

/*class animal{

	constructor(especie,edad,color){
		this.especie = especie;
		this.color = color;
		this.edad = edad;
		this.info = "Hola soy un "+especie+" y tengo "+edad+" años de edad.";
	}

 verInfo(){
		document.write(this.info);
	}

}

/*let perro = new animal("perro",6,"negro")
let gato = new animal("gato",2,"amarillo")
let ave = new animal("ave",1,"verde")

perro.verInfo();
gato.verInfo();
ave.verInfo();*/
/*document.write(perro.info+"<br>");
document.write(gato.info+"<br>");
document.write(ave.info+"<br>");
*/

//FUNCIONES ----------------------------------------
/*function saludar(){
let nombre	= prompt("Ingrese su nombre");

alert("¡Hola amigo! "+nombre+" como estás? ");
}
saludar();*/

/*function saludo(){
alert("Hola")
return "Hellooo!!"
}

let saludar = saludo();
document.write(saludar);*/

/*function suma(num1,num2){
	let res = num1+num2;
	return res;	
}
let res = suma(24,5);
document.write(res);*/ 


/*var cadena = "Cadena de texto";
var	 number = 19;
const booleano = true;*/

//BUCLE WHILE------------------------------------------
/*let numeroParaSumar = 0; 
while(numeroParaSumar<10){
	document.write(numeroParaSumar);
	numeroParaSumar++;
	break;
}*/

//BUCLE DO WHILE--------------------------------------
/*let numero = 0;
do{
numero++;
document.write(numero);
}
while(numero<10);*/

//Bucle For-------------------------------------------
/*for (let i = 0; i<6;i++){
document.write(i+"<br>")
}*/

//Bucle for in devuelve posicion---------------------
//let animales = ["gato","perro","tortuga"]

/*for(animal in animales){
	document.write(animal+"<br>")
}*/

//Bucle for of devuelve contenido---------------------
/*for(animal of animales){
	document.write(animal+"<br>")
}*/




/* = prompt("Ingrese su nombre");

alert("¡Hola amigo! como estás?"+cadena)
alert(number)
alert(booleano)
document.write("¡Hola amigo! como estás?"+cadena)
 
 if(cadena == number){
 	
 	alert("cadena igual a numero " );
 }else{
 	//let number = 4
 	alert("cadena distinta a numero "+ number);
 }*/

 //let frutas = ["banana","manzana","pera"];   
 //document.write(frutas[1])

/* let pc = {
 	nombre : "equipo",
 	proceador:"Intel",
 	ram:"16GB",
 	espacio:"1TB"
 }
 document.write(pc["nombre"])

 document.write(pc["espacio"]);*/