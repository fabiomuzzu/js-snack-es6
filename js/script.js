// Snack 1

// Creo un array di oggetti
let bici = [
    {
        nome: 'Bmx',
        peso: 20,
    },
    {
        nome: 'Mountain Bike',
        peso: 10,
    },
    {
        nome: 'Graziella',
        peso: 30,
    },
];

let bici_leggera = bici[1];

bici.forEach(element => {
    if(element.peso < bici_leggera.peso){
        bici_leggera = elem;
    }
});

let {nome, peso} = bici_leggera;

console.log(`La bici più leggerà è ${nome} ed ha un peso di ${peso}kg`);