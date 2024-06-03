const images = require.context('../assets/woman', true, /\.png$/)



export const products = [
   {
     src: images('./camiseta_verde_mujer.png'),
     description: {
      "es": "Camiseta de mujer clásica",
      "ca": "Samarreta de dona clàsica"
     },
     name: {
      "es": "Camiseta verde",
      "ca": "Camiseta verda"
     },
     category: "camisetas",
     price: 45,
     id: 1,
   },

   {
     src:  images('./camiseta_azul_mujer.png'),
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
     src: images('./camisa_negra_mujer.png'),
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
     src: images('./camisa_verde_mujer.png'),
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
     src: images('./pantalones_azul_mujer.png'),
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
     src: images('./pantalones_mujer_verde.png'),
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