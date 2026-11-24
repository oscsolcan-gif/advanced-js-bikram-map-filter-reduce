//RESUELVE LOS EJERCICIOS AQUI
// Enunciado: README.md de esta carpeta (Bikram map, filter y reduce)
// Tests: abre index.html para ver el resultado de jasmine

// ---------- MAP ----------

//Ejercicio 1. Dado el array numbers crear una función llamada "elevados"
//  que sea el resultado de elevar cada número a si mismo. >
//  El array numbers está declarado

/** @type {Number[]} Números del enunciado */
const numbers = [4, 5, 6, 7, 8, 9, 10];

/**
 * Eleva cada número del array numbers a sí mismo.
 * @returns {Number[]} Array nuevo con cada número elevado a sí mismo
 * @example
 * elevados(); // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
 */
const elevados = () => numbers.map(num => num ** num);
console.log(elevados());  // tendria que salir [cada uno elevado asi mismo]

// Ejercicios map > Ejercicio 2. Dado el array foodList, generar un segundo array
// llamado result2 que consiga generar de salida el siguiente resultado
//  ['Como soy de Italia, amo comer Pizza', 'Como soy de Japón, amo comer Ramen',
//  'Como soy de Valencia, amo comer Paella',
//  'Aunque no como carne, el Entrecot es sabroso'] >
//  El array foodList está correctamente declarado

/** @type {String[]} Platos del enunciado */
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];

/** @type {String[]} Lugar de origen de los tres primeros platos */
const lugares = ["Italia", "Japón", "Valencia"];

/** @type {String[]} Una frase por cada plato */
const result2 = foodList.map((comida, i) => {
    // El cuarto plato (posición 3) lleva una frase distinta
    if (i === 3) {
        return `Aunque no como carne, el ${comida} es sabroso`;
    }
    return `Como soy de ${lugares[i]}, amo comer ${comida}`;
});

console.log(result2);

// Ejercicio 3. Dado el array staff, generar un segundo array staffDescriptions
// (el test lo pide en result3) con frases como
// 'Pepe es The Boss y le gusta leer y ver pelis'

/** @type {{name: String, role: String, hobbies: String[]}[]} Plantilla del enunciado */
const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

/** @type {String[]} Una frase por cada persona de staff */
const result3 = staff.map((persona) => {
    // join(' y ') une los hobbies: 'leer y ver pelis'
    return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(' y ')}`;
});

console.log(result3);

// ---------- FILTER ----------

// Ejercicio 4 - Crea un segundo array result4 a partir del array numbers2
// que devuelva solo los impares

/** @type {Number[]} Números del enunciado */
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/** @type {Number[]} Solo los impares (el resto de dividir entre 2 es 1) */
const result4 = numbers2.filter((numero) => numero % 2 === 1);

console.log(result4);

// Ejercicio 5 - Dado el array foodList2, genera un segundo array result5
// que filtre los platos veganos y saque una sentencia como la del ejemplo

/** @type {{name: String, isVeggie: Boolean}[]} Platos del enunciado */
const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }
];

/** @type {String[]} Frase de cada plato vegano: primero filter y luego map */
const result5 = foodList2
    .filter((plato) => plato.isVeggie)
    .map((plato) => {
        // El enunciado pide "rico" para Tempeh y "rica" para Tofu burguer
        // (concuerda con el género de la palabra): se escribe a mano para cada caso
        const articulo = plato.name === 'Tempeh' ? 'rico' : 'rica';
        return `Que ${articulo} ${plato.name} me voy a comer!`;
    });

console.log(result5);

// Ejercicio 6 - Dado el array inventory, devolver un array result6
// con los nombres de los elementos que valgan más de 300 euros

/** @type {{name: String, price: Number}[]} Inventario del enunciado */
const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a Cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

/** @type {String[]} Nombres de lo que vale más de 300 */
const result6 = inventory
    .filter((producto) => producto.price > 300)
    .map((producto) => producto.name);

console.log(result6);

// ---------- REDUCE ----------

// Ejercicio 7 - Dado el array numeros3 (en el README se llama numeros),
// obten la multiplicación de todos los elementos del array en la variable result7

/** @type {Number[]} Números del enunciado */
const numeros3 = [39, 2, 4, 25, 62];

/** @type {Number} Multiplicación de todos (empieza en 1, el neutro de multiplicar) */
const result7 = numeros3.reduce((acumulado, numero) => acumulado * numero, 1);

console.log(result7);   // 483600

// Ejercicio 8 - Concatena todos los elementos del array con reduce
// para que devuelva una sola frase en la variable result8

/** @type {String[]} Palabras de la frase (la posición 2 es el nombre) */
const sentenceElements = [
    'Me',
    'llamo',
    'Óscar',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

/** @type {String} Frase completa: cada palabra se une a la anterior con un espacio */
const result8 = sentenceElements.reduce((frase, palabra) => `${frase} ${palabra}`);

console.log(result8);   // 'Me llamo Óscar y quiero sentir la fuerza con javascript'

// Ejercicio 9 - Obtener el monto total de los elementos que pertenecen
// a la categoría "code" en la variable result9

/** @type {{name: String, author: String, price: Number, category: String}[]} Libros del enunciado */
const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];

/** @type {Number} Suma de los precios de los libros de categoría "code" */
const result9 = books
    .filter((libro) => libro.category === 'code')
    .reduce((total, libro) => total + libro.price, 0);

console.log(result9);   // 60
