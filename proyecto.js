/**
//PUNTO # 1-------------------------------------------------------------------------------
 * class Persona{
	constructor(nombre,edad,cedula){
		this.nombre = nombre;
		this.edad = edad;
		this.cedula = cedula;
	}
//PUNTO 1.1
	mostrar(){
		return `Nombre: ${this.nombre} \nEdad: ${this.edad}\nCédula: ${this.cedula}`;
	}
//PUNTO 1.2
	es_mayor_de_edad(){
		if(this.edad >= 18){
			return true;
		}
		else{
			return  false;
		}
	}
}

const persona1 = new Persona("Juan", 20, 1192801018);
console.log(persona1.mostrar());
console.log(persona1.es_mayor_de_edad()); 

//PUNTO # 2----------------------------------------------------------------------------
class Cuenta{
	
	constructor(titular, cantidad){
		this.titular = titular;
		this.cantidad = cantidad || 0;
	}
//PUNTO 2.1
	mostrar(){
		return `Titular: ${this.titular} \nCantidad: ${this.cantidad}`;
	}
//PUNTO 2.2
	ingresar(cantidadIngresar){
		if(cantidadIngresar < 0){
			return `Ingreso negativo. \nTotal cantidad: ${this.cantidad}`;
		}
		else{
			this.cantidad = cantidadIngresar;
			return `Nuevo ingreso de: ${this.cantidad}`;
		}
	}
//PUNTO 2.3
	retirar(cantidadRetiro){
		this.cantidadRetiro = cantidadRetiro;
		var total = this.cantidad - this.cantidadRetiro;
		return `Retiro de: ${this.cantidadRetiro} \nTotal Cantidad: ${total}`;
	}


}

const cuenta1 = new Cuenta('Juan');
console.log(cuenta1.mostrar());
console.log(cuenta1.ingresar(10));
console.log(cuenta1.retirar(2)); */

//PUNTO # 3-----------------------------------------------------------------------
/**class Formulas{
	//PUNTO 3.1
	sumar(num1,num2){
		this.num1 = num1;
		this.num2 = num2;
		var total = num1 + num2;
		return `Total suma: ${total}`;
	}

	fibonacci(cantidad){
	this.cantidad = cantidad;
	var fibonacci_inicio = [0,1];
	var i;
	for(i = 2; i <= cantidad; i++){
	fibonacci_inicio.push(fibonacci_inicio[i-1] + fibonacci_inicio[i-2]);
	return fibonacci_inicio;
	}
	}

//PUNTO 3.3

operacion_modulo(cantidad){
		this.cantidad = cantidad;
		var residuo = cantidad % 2;
		if(residuo == 0){
			return `Residuo 0`;
		}
		else{
			return `No tiene residuo 0, su residuo es: ${residuo}`;
		}
	}

//PUNTO 3.4
	primo(cantidad){
		for(var i = 2; i < cantidad; i++){
			if(cantidad%i==0){
				return `El número: ${cantidad} no es primo`;
			}
		};
		return `El número: ${cantidad}, es primo`;
	}
}

const formula = new Formulas();
console.log(formula.sumar(1,2));
console.log(formula.fibonacci(10));
console.log(formula.operacion_modulo(5));
console.log(formula.primo(4)); */

//PUNTO 4
class Persona{
	constructor(nombre,edad,DNI,sexo,peso,altura){
		this.nombre = nombre;
		this.edad = edad;
		this.DNI = DNI;
		this.sexo = sexo;
		this.peso = peso;
		this.altura = altura;
	}

	//PUNTO 4.1
	calcularIMC(){
		var formula = (this.peso/(this.altura**2));
		const menor = -1;
		const debajo = 0;
		const sobrepeso = 1;
		if(formula < 20){
			return `IMC= ${menor}`;
		}
		else if(formula >= 20 && formula <= 25){
			return `IMC= ${debajo}`;
		}
		else{
			return `IMC= ${sobrepeso}`;
		}
	}

  //PUNTO 4.2
  esMayorDeEdad(){
  	if(this.edad >= 18){
  		return true;
  	}
  	else{
  		return false;
  	}
  }

 comprobarSexo(){
 	if(this.sexo == 'M' || this.sexo == 'H'){
 		return `Sexo correcto: ${this.sexo}`;
 	}
 	else{
 		return `Sexo incorrecto.\nSexo por default:` + 'H';
 	}
 }
}

const persona1 = new Persona('Juan', 20,1129,'Hombree',64,1.73);
console.log(persona1.calcularIMC());
console.log(persona1.esMayorDeEdad());
console.log(persona1.comprobarSexo());