class ArrayMultiple{
    constructor(array){
        this.array = array;
    }
    encontrarRepetido(){
        let contador = {};
        let masRepeticiones = 0;
        let numeroMasRepetido = null;

        this.array.forEach(num => {
            contador[num] = (contador[num] || 0) +1;
        });
        console.log(contador);
        
        for (const numero in contador) {
         
            if (contador[numero] >= masRepeticiones) {
                masRepeticiones = contador[numero];
                numeroMasRepetido = numero;    
            }
        }
        return numeroMasRepetido;
    }
}

const array = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6]
const analizarArray = new ArrayMultiple(array);

const resultado = analizarArray.encontrarRepetido();
console.log(`El número más repetido es: ${resultado}`);
