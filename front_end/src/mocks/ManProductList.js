const images = require.context('../assets/man', true, /\.png$/)



export const products = [
   {
     src: images('./camisa_negra.png'),
     description: {
      "es": "Camiseta de mujer clásica",
      "ca": "Samarreta de dona clàsica"
     },
     name: {
      "es": "Camiseta negra",
      "ca": "Camiseta"
     },
     category: "camisetas",
     price: 45,
     id: 1,
   },

   {
     src:  images('./camisa_verde_hombre.png'),
     description: {
      "es": "Camisa verde",
      "ca": "Camisa verde"
     },
     name: {
      "es": "Camisa verde",
      "ca": "Camisa verde"
     },
     category: "camisas",
     price: 20,
     id: 2,
   },

   {
     src: images('./camisa_negra.png'),
     description: {
      "es": "Camisa negra",
      "ca": "Camisa negra"
     },
     name: {
      "es": "Camisa negra",
      "ca": "Camisa negra"
     },
     category: "camisas",
     price: 15,
     id: 3,
   },

   {
     src: images('./camiseta_hombre.png'),
     description: {
      "es": "Camisetas hombre blanca",
      "ca": "Camisetas hombre blanca"
     },
     name: {
      "es": "Camisetas hombre blanca",
      "ca": "Camisetas hombre blanca"  
     },
     category: "camisetas",
     price: 25,
     id: 4,
   },

   {
     src: images('./pantalon_chino_hombre.png'),
     description: {
      "es": "Pantalones chinos",
      "ca": "Pantalones chinos"
     },
     name: {
      "es": "Pantalones chinos",
      "ca": "Pantalones chinos"  
     },
     category: "pantalones",
     price: 23,
     id: 5,
   },

   {
     src: images('./pantalon_lino_hombre.png'),
     description: {
      "es": "Pantalones de lino",
      "ca": "Pantalones de lino"
     },
     name: {
      "es": "Pantalones de lino",
      "ca": "Pantalones de lino"
     },
     category: "pantalones",
     price: 18,
     id: 6,
 
   },

 ];