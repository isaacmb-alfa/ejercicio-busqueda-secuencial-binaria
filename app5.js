class Contacto{
    constructor(nombre, apellidos, telefono){
        this.nombre = nombre;
        this.apellidos = {
            primerApellido : apellidos[0],
            segundoApellido: apellidos[1]
        };
        this.telefono = telefono;
    }
}
class ListaContactos{
    constructor() {
        this.contactos = [];
    }
    agregarContacto(contacto){
        this.contactos.push(contacto);
    }
    buscarPorNombre(nombre){
        return this.contactos.filter(contacto => contacto.nombre.toLowerCase() === nombre.toLowerCase());
    }
    mostrarContactos(){
        this.contactos.forEach(contacto => {
            const {nombre, apellidos:{primerApellido, segundoApellido}, telefono} = contacto;
            console.log(`Nombre: ${nombre}, Pimer Apellido: ${primerApellido}, Segundo Apellido: ${segundoApellido}, Teléfono: ${telefono}`); 
        });
    }
}


const listaContactos = new ListaContactos();

// Creamos unos contactos 
const contacto1 = new Contacto('Alejandro', ['Enriquez', 'Juárez'], '5588996622');
const contacto2 = new Contacto('Pedro', ['Almaraz', 'Benito'], '5587496585');
const contacto3 = new Contacto('Juana', ['Tellez', 'Gómez'], '5565785412');
const contacto4 = new Contacto('Horacio', ['Castañeda', 'Zimbrón'], '5536578744');
listaContactos.agregarContacto(contacto1);
listaContactos.agregarContacto(contacto2);
listaContactos.agregarContacto(contacto3);
listaContactos.agregarContacto(contacto4);
//Mostrar todos los contactos
console.log('Todos los contactos:');
listaContactos.mostrarContactos();

// Buscar un contacto por nombre
const resultadoBusqueda = listaContactos.buscarPorNombre('Horacio');
console.log('Los resultados para la busqueda para "Horacio": ');
resultadoBusqueda.forEach(contacto => {
    const { nombre, apellidos: { primerApellido, segundoApellido }, telefono } = contacto;
    console.log(`Nombre: ${nombre}, Pimer Apellido: ${primerApellido}, Segundo Apellido: ${segundoApellido}, Teléfono: ${telefono}`);
})

