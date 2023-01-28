// 1.1

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (const product of products) {
    if (product.includes("Camiseta")) {
        console.log(product)
    }
}

// 1.2

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (const alumn of alumns) {
    if (alumn.T1 && alumn.T2) {
        alumn.isApproved = true;
    }
    else if (alumn.T1 && alumn.T3) {
        alumn.isApproved = true;
    }
    else if (alumn.T2 && alumn.T3) {
        alumn.isApproved = true;
    }  else {
        alumn.isApproved = false;
    }
}

console.log(alumns);

// 1.3

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const place of placesToTravel) {
    console.log(place);
}

// 1.4

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    console.log(alien[key]);
}

// 1.5

const placesToTravel1 = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
]

let newArray = [];
for (let i = 0; i < placesToTravel1.length; i++) {
if (placesToTravel1[i].id === 11 || placesToTravel1[i].id === 40) {
    } 
    else {
       newArray.push(placesToTravel1[i]);
    }
}
console.log(newArray);

// 1.6

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
]

const newToys = [];

for (const toy of toys) {
    if (toy.name.toLowerCase().includes("gato".toLowerCase())) {

    }
    else {
        newToys.push(toy);
    }
}
console.log(newToys);


// 1.7

const toys1 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

const popularToys = [];

for (const toy of toys1) {
    if (toy.sellCount > 15) {
        popularToys.push(toy)
    }
}
console.log(popularToys);