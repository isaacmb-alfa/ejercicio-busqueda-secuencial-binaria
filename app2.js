class AnalizarArray {
    constructor(array) {
        this.array = array;
        
    }

    separarStrings() {
        let string = []
        this.array.forEach((element) => {
            let esNumero = Number(element);
            if (isNaN(esNumero)) {
                string.push(element);
            }

        });
        return string;
    }
}

const array = [8,'e', 7, 2,'a','d','f', 2, 3, 1, 4, 3];
const strings = new AnalizarArray(array);

console.log('Los strings en el array son: ', strings.separarStrings());
