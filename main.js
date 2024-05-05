const personas = [
  { name: "Joel", age: 19, empresa: "Fibremex", actividades: [{ juegos: [], jobs:'Empleado'}] },
  { name: "Rafael", age: 34, empresa: "Fibremex", actividades: [{ juegos: [], jobs:'Jefe'}] },
  { name: "Tania", age: 21, empresa: "Optronics", actividades: [{ juegos: [], jobs:'Coordinador'}] },
  { name: "Roberto", age: 17, empresa: "Fibremex", actividades: [{ juegos: [], jobs:'Empleado'}] },
];

const buscarEmpresa = (f) => f.empresa === "Fibremex";
const buscarJob = (f) => f.actividades[0].jobs === "Empleado";
const filtrar = personas.filter(buscarJob);
console.log(filtrar); //Extraer Registros
const alguno = personas.some(buscarEmpresa); //Boleano
console.log(alguno);
