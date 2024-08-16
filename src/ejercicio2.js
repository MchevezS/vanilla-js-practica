class Contador {
  // Inserte el código aquí
  valor = 0;
  function () {
    return this.valor++


  }
};

// Inserte el código aquí
const instancia = new Contador (2);

export { instancia }