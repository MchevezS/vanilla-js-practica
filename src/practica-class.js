
// Practica usando el class.
class Auto {
    constructor(marca, modelo, anoe) { // El constructor es por lo que vva a estar con puesto el auto/// estos son los atributos que va a tener auto
        this.marca = marca;
        this.modelo = modelo;
        this.anoe = anoe;

    }
   
   mostrarAuto(){ // estos e es como si fuera una funcion

  return `Este Vehiculo es ${this.marca} ${this.modelo} ${this.anoe}`;  // es signo de dolar es para que me pueda mostrar lo que sigue de el, sino pongo el signo de dolar me lo devolveria como un string
    
   }

}

const miCarroToyota = new Auto('Toyota', 'Corolla', 2024 ); // a 2024 no le agregue las comillas por es un numero entero y ya lo lee sin las comillas // pero si quiero le puedo agregar las comillas y hace lo mmismo
const miCarroHiunday = new Auto('Hiunday', 'Elentra', 2024 );

console.log(miCarroToyota.mostrarAuto());
console.log(miCarroHiunday.mostrarAuto());







