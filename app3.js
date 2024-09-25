class ArrayNUmeroGrande{
    constructor(array){
        this.array = array;
    }
    numeroMasGrande(){
        let masGrande = 0;
        this.array.forEach((numero) => {
          if (numero > masGrande){            
            masGrande = numero;
          }
        });
        return masGrande;
    }
}

const array = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
const numeroGrande = new ArrayNUmeroGrande(array);

console.log(`El número más grande del array es: -> ${numeroGrande.numeroMasGrande()}`);

