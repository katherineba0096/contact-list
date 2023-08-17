
const listaContactos = ["Camila Gutierrez", "Pedro Perez", "Katherine Villegas", "Mathias Balanta", "Daniela Antury", "Lorenth Londoño"];

// agregar contacto

const addContact = (contacto)=>{
    listaContactos.push("Sandra Villegas")
    listaContactos.sort()
 
    
}

// eliminar contacto

const deleteContact = (contacto)=>{
    let indice = listaContactos.findIndex(e => e == contacto)
    console.log(indice);
     listaContactos.splice(indice,1)
}
// imprimir contacto

const imprimir = () =>{
    console.log("LISTA DE CONTACTOS:")
    for (const iterator of listaContactos){
        console.log("...................")
        console.log(iterator)
    }

    console.log("  ")
}

imprimir()
addContact("Sangra Villegas");
imprimir()
deleteContact("Lorenth Londoño")
imprimir()