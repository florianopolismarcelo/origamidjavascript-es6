class Veiculo1 {
  constructor(rodas1) {
    this.rodas1 = rodas1;
  }
  acelerar1() {
    console.log("acelerou");
  }
}
class Moto1 extends Veiculo1 {
  empinar1() {
    console.log(`Moto empinou com ${this.rodas1} rodas`);
  }
}
const honda1 = new Moto1(2);
const civic1 = new Veiculo1(4);

//.........................................

class Veiculo2 {
  constructor(rodas2) {
    this.rodas2 = rodas2;
  }
}
class Moto2 extends Veiculo2 {
  acelerar2() {
    console.log("Acelerou rápido");
  }

  empinar2() {
    console.log(`Moto empinou com ${this.rodas2} rodas`);
  }
}
const honda2 = new Moto2(2);
const civic2 = new Veiculo2(4);

//Super

class Veiculo3 {
  constructor(rodas3, combustivel3) {
    this.rodas3 = rodas3;
    this.combustivel3 = combustivel3;
  }
  acelerar3() {
    console.log("Acelerou...");
  }
}
class Moto3 extends Veiculo3 {
  constructor(rodas3, combustivel3, capacete3) {
    super(rodas3, combustivel3);
    this.capacete = capacete3;
  }
  acelerar3() {
    super.acelerar3();
    console.log("Acelerou rápido");
  }

  empinar3() {
    console.log(`Moto empinou com ${this.rodas3} rodas`);
  }
}
const honda3 = new Moto3(2, 'Gasolina', true);
const civic3 = new Veiculo3(4);
