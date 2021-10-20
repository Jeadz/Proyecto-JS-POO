/**
 * SOLUCIÓN PUNTO 1
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
console.log(persona1.es_mayor_de_edad()); */

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
console.log(cuenta1.retirar(2));