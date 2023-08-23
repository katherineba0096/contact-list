const listaContactos = ["Camila Gutierrez", "Pedro Perez", "Katherine Villegas", "Mathias Balanta", "Daniela Antury", "Lorenth Londoño"];

const contactos = [
    {
      CC: 1091677274,
      Nombres:"Pedro Jose",
      Apellidos:"Perez Linares",
      Telefono:"3238150582",
      Ubicacion:{ 
        Ciudad:"Santa Marta",
        Direccion:"Batallon Cordoba",

      },
    },

    {
        CC: 12135566,
        Nombres:"Camila",
        Apellidos:"Gutierrez",
        Telefono:3228907667,
        Ubicacion:{ 
          Ciudad:"Bogota",
          Direccion:"Kr 12 N12-12",
  
        },
      },
];


const addContact = (cc,Nombre,Apellido,telefono,ciudad,direccion)=>{
    const objectoContacto ={
        CC: cc,
        Nombres:Nombre,
        Apellidos:Apellido,
        Telefonos:telefono,
        Ciudad:ciudad,
        Direccion:direccion,
    }
    contactos.push(objectoContacto)
    
 
    
};


const deleteContact = (cc,Nombre,Apellido,telefono,ciudad,direccion)=>{
    const objectoContacto ={
        CC: cc,
        Nombres: Nombre,
        Apellidos:Apellido,
        Telefono:telefono,
        Ciudad:ciudad,
        Direccion:direccion,
    }
    let indice = contactos.findIndex(e => e == objectoContacto)
    console.log(indice);
     contactos.splice(1,1)
};

const imprimir = (cc,Nombre,Apellido,telefono,ciudad,direccion) =>{
  const objectoContacto ={
    CC: cc,
    Nombres: Nombre,
    Apellidos:Apellido,
    Telefono:telefono,
    Ciudad:ciudad,
    Direccion:direccion,
}
  console.log("CONTACTO:")
  console.log("-----------")
  for (const iterator of contactos){
         console.log(iterator)
  }

  console.log("  ")
}

imprimir()
addContact(100099922,"Daniela","Antury Perez",3148765544,"Florencia","cl 13");
imprimir()
deleteContact(12135566,"Camila","Gutierrez",3228907667,"Bogota","Kr 12 N12-12");
imprimir()