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
addContact(100099922,"Daniela","Antury Perez",3148765544,"Florencia","cl 13");
imprimir()
deleteContact(12135566,"Camila","Gutierrez",3228907667,"Bogota","Kr 12 N12-12");
imprimir()