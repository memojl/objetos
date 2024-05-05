const personas = [
  {name: 'Joel', age: 19, empresa: 'Fibremex', actividades:[]},
  {name: 'Rafael', age: 34, empresa: 'Fibremex', actividades:[]},
  {name: 'Tania', age: 21, empresa: 'Optronics', actividades:[]},
  {name: 'Roberto', age: 17, empresa: 'Fibremex', actividades:[]}
]

const filtrar = personas.filter(f=>f.empresa === 'Fibremex');
console.log(filtrar);//Extraer Registros
const alguno = personas.some(f=>f.empresa === 'Fibremex');//Boleano
console.log(alguno);