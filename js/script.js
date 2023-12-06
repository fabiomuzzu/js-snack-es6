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

let pesi = [];
for(i=0; i<bici.length; i++){
    pesi.push(bici[i].peso);
}

const peso_min = Math.min(...pesi);

console.log(peso_min);

console.log(`La bici ${bici[1].nome} è la più leggera con un peso di ${peso_min}`);

