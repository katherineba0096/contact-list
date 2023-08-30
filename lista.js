const listaContactos = ["Camila Gutierrez", "Pedro Perez", "Katherine Villegas", "Mathias Balanta", "Daniela Antury", "Lorenth Londoño"];

const contactos = [
    {
      CC: 1091677274,
      Nombres:"Pedro Jose",
      Apellidos:"Perez Linares",
      Telefono:3238150582,
      Ubicacion:{ 
        Ciudad:"Santa Marta",
        Direccion:"Batallon Cordoba",

      },
    },
    {
      CC: 123977845,
      Nombres:"Mathias",
      Apellidos:"Balanta",
      Telefono:3125647879,
      Ubicacion:{ 
        Ciudad:"Villavicencio",
        Direccion:"Dg 12 # 12-13 BR Porfia",

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
        Ubicacion:{
        Ciudad:ciudad,
        Direccion:direccion,
      }
    }
    contactos.push(objectoContacto)
    
 
    
};

const deleteContact = (cc,Nombre,Apellido,telefono,ciudad,direccion)=>{
    const objectoContacto ={
        CC: cc,
        Nombres: Nombre,
        Apellidos:Apellido,
        Telefono:telefono,
        Ubicacion:{
          Ciudad:ciudad,
          Direccion:direccion,
        }
    }
    let indice = contactos.findIndex(e => e == objectoContacto)
    console.log(indice);
     contactos.splice(2,1)
};


const imprimir = (contacto) =>{

  // Lista de contactos
  console.log("LISTA DE CONTACTOS")
  console.log("-------------------")

  for (const iterator of listaContactos){
    console.log(iterator)
  };
  console.log("  ")

// contactos
  console.log("CONTACTOS:")
  console.log("----------")

  /*for (const iterator of contactos){
      console.log(iterator)*/
      for (prop in contactos) {
       console.log(prop,": ",contactos[prop])
    }
      
  


  console.log("  ")
}
// actualizar contacto 

const updateContact = (cc,Nombre,Apellido,telefono,ciudad,direccion)=>{
  contactos.splice(1,1, {
    CC: 123977845,
    Nombres:"Alan Mathias",
    Apellidos:"Balanta Villegas",
    Telefono:3125647879,
    Ubicacion:{ 
      Ciudad:"Ocaña",
      Direccion:"Dg 12 # 12-13",


    },
    
  })
  
}




imprimir()
addContact(100099922,"Daniela","Antury Perez",3148765544,"Florencia","cl 13");
imprimir()
deleteContact(12135566,"Camila","Gutierrez",3228907667,"Bogota","Kr 12 N12-12");
imprimir()
updateContact(123977845,"Alan Mathias","Balanta Villegas",3125647879,"Villavicencio","g 12 # 12-13 BR Porfia");
imprimir()