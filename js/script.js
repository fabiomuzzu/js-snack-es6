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

// Snack 2

let squads = [
    {
        nome: 'Inter',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Milan',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Juventus',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Napoli',
        punti_fatti: 0,
        falli_subiti: 0,
    },
    {
        nome: 'Roma',
        punti_fatti: 0,
        falli_subiti: 0,
    }
];

// funzione per calcolare numero random tra un valore min e uno max
function rndNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

squads.forEach((elem) => {
    elem.punti_fatti = rndNumber(10, 100);
    elem.falli_subiti = rndNumber(30, 80);
});

let newSquads = [];

squads.forEach((elem) => {
    let {nome, falli_subiti} = elem;

    let squad = {
        nome,
        falli_subiti,
    }

    newSquads.push(squad);
})

console.log(newSquads);