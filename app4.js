class ArrayNumeroMenor {
    constructor(array) {
        this.array = array;
    }
    numeroMenor() {
        let masGrande = 0;
        this.array.forEach((numero) => {
            if (numero < masGrande) {
                masGrande = numero;
            }
        });
        return masGrande;
    }
}

const array = [1, 4, 5, -1, -7, 2, 3, 9];
const numeroGrande = new ArrayNumeroMenor(array);

console.log(`El número menor del array es: -> ${numeroGrande.numeroMenor()}`);

