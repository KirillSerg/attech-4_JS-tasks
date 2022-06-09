
// Task#0
/*const inputText = "Highly recommend you to read at least one work of Shakespeare. He made his masterpieces for hundreds of years before London, Dickens and Fitzgerald. Hope to buy last book to my collection it 2022, and read it.";

function parser(txt) {
   let parserTxt;
   // разобрали текст на предложения
   let parseSentence = txt.split('. ');

   // перебираем каждое предложение
   for (let i = 0; i < parseSentence.length; ++i) {
     // разбираем каждое предложение на слова
     let parseWords = parseSentence[i].split(' ');

     // цикл перебора каждого слова (кроме первого) по буквам
     for (let j = 1; j < parseWords.length; ++j) {
       // если первая буква Большая и не число - заменяем слово на "writer"
       if (parseWords[j][0] === parseWords[j][0].toUpperCase() && !Number(parseWords[j][0])) {
         parseWords.splice(j, 1, "writer");
       }
     }
     // заменяем каждое предложение на новое (где уже заменили собственные имена на "writer")
     parseSentence.splice(i, 1, parseWords.join(' '));
   }
   // скручиваем все предложения (массив) в строку
   parserTxt = parseSentence.join('. ');
   console.log(parserTxt);
 }
parser(inputText)*/

// 2й вариант не доработан
/*const parser = (txt) => {

  let result = txt[i - 1]

  for (let i = 1; i < txt.length; i++) {
      if (txt[i - 1] === ' ' && txt[i] === txt[i].toUpperCase() && !Number(txt[i])) {
          while ()
          result = result + 
      } else {
          result = result +
      }
  }
};
console.log(parser(inputText));*/


/*Task-l1#1
Create a "countSymbols" function, that will count how much "a" letters contains in provided string.
*/
/*
function countSymbols(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      ++counter;
    }
  }
  return counter;
}

console.log(countSymbols("Jeremy")) // 0
console.log(countSymbols("Antony")) // 1
console.log(countSymbols("Barack Obama")) // 4
*/

/*Task-l1#2
Extend a "countSymbols" function, to support custom letter to search. Function receive two arguments: text and element to search in text.*/
/*
function countSymbols(str, Symb) {
  let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === Symb) {
          ++counter;
        }
    }
    return counter;
}
console.log(countSymbols("Jeremy", "e")) // 2
console.log(countSymbols("Antony", "n")) // 2
console.log(countSymbols("Antony Smith", "s")) // 0 (because we looking for small "s", but in "Smith" we have big "S")
*/

/*Task-l1#3
Extend "countSymbols" to make search not case sensitive.
*/
/*
function countSymbols(str, Symb) {
  let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === Symb.toLowerCase()) {
          ++counter;
        }
    }
    return counter;
}
console.log(countSymbols("Jeremy", "E")) // 2
console.log(countSymbols("Antony", "n")) // 2
console.log(countSymbols("Antony Smith", "s")) // 1
*/

/*Task-l1#4
Add optional third argument, that will control enable/disable case sensitive search.
*/

/*
function countSymbols(str, Symb, x) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (x){  
      if (str[i].toLowerCase() === Symb.toLowerCase()) {
        ++counter;
      }
    } else {
      if (str[i] === Symb) {
        ++counter;
      }
    }
  }
  return counter;
}
console.log(countSymbols("Antony Smith", "s", true)) // 1
console.log(countSymbols("Antony Smith", "s", false)) // 0
console.log(countSymbols("Antony Smith", "s")) // 0
*/

/*Task-l1AntiSpy#2
Extend "antiSpy" function with optional second argument, that will be a string used to hide data. If argument not provided, should be used "HIDDEN_DATA" string.
*/
/*
const text = "If you agree with that, just let me know to obama@mail.us or newpower@gmail.com and I'll reach out as soon as possible."

function antiSpy(txt, changeTo = 'HIDDEN_DATA') {
	let resultStr = '';
	let startPositionWord = 0;
  let currentWord = '';
  
	// шагаем по символам ...
  next:
	for (let i = 0; i < txt.length; i++) {
		// ... если встречаем "пробел" или конец txt, то ...
		if (txt[i] == ' ' || i == txt.length - 1) {
			// ... шагаем по символам от начала слова до позиции с пробелом и ... 
			for (let j = startPositionWord; j < i; j++) {
			
				currentWord = currentWord + txt[j];   // заранее записываем каждый символ проверяемого слова, чтобы при отсутствии "@" добавить все проверенное слово к результирующей строке
				
				// ... проверяем на наличие символа "@"
				if (txt[j] == '@') {
					resultStr = resultStr + ` ${changeTo}`
					currentWord = '';
					startPositionWord = i
					continue next;
				}
			}
			resultStr = resultStr + currentWord;
			currentWord = '';
			startPositionWord = i;
		}
	}
console.log(resultStr)
return resultStr
}

antiSpy(text, '{XXXXXXX}')
*/






/*Task-l2#1
Create a function postBuilder that will receive two arguments: object with values, and text. This function should help to fill text in templates. Logic should calculate the WINNER based on score. If game results is draft - WINNER value should be "both teams".
*/
/*
const template = "%TEAM_A% vs %TEAM_B% game score is %SCORE%. Fans of %WINNER% already started celebrating on the streets of the %GAME_CITY%, %GAME_COUNTRY%."

function postBuilder(inTxt, objResult) {
  
  const x = objResult.teamAGameScore - objResult.teamBGameScore

  // определили победителя
  let winer;

  (x == 0) ? winer = 'both teams' :
  (x > 0) ? winer = `${objResult.teamA}` :
  winer = `${objResult.teamB}`;
  //console.log(winer)

  // фун-я для замены слов в шаблоне (для map)
  function replaceWord(item) {
    if (item == "TEAM_A") {
      return item = objResult.teamA
    } else if (item == "TEAM_B") {
      return item = objResult.teamB
    } else if (item == "SCORE") {
      return item = `${objResult.teamAGameScore} : ${objResult.teamBGameScore}`
    } else if (item == "WINNER") {
      return item = winer
    } else if (item == "GAME_CITY") {
      return item = objResult.city
    } else if (item == "GAME_COUNTRY") {
      return item = objResult.country
    } else {
      return item
    }
  }

  let outTxt = inTxt.split('%')
    .map(replaceWord)
    .join('')

  return outTxt
}

console.log(
  postBuilder(template, {
    teamAGameScore: 2,
    teamBGameScore: 0,
    teamA: "Barcelona FC",
    teamB: "Inter Milan",
    city: "Milan",
    country: "Italy",
  })
); // "Barcelona FC vs Inter Milan game score is 2:0. Fans of Barcelona FC are already started celebrating on the streets of the Milan, Italy."
console.log(
  postBuilder(template, {
    teamAGameScore: 0,
    teamBGameScore: 3,
    teamA: "Barcelona FC",
    teamB: "Inter Milan",
    city: "Milan",
    country: "Italy",
  })
); // "Barcelona FC vs Inter Milan game score is 0:3. Fans of Inter Milan are already started celebrating on the streets of the Milan, Italy."
console.log(
  postBuilder(template, {
    teamAGameScore: 0,
    teamBGameScore: 0,
    teamA: "Barcelona FC",
    teamB: "Inter Milan",
    city: "Milan",
    country: "Italy",
  })
); // "Barcelona FC vs Inter Milan game score is 0:0. Fans of both teams are already started celebrating on the streets of the Milan, Italy."
*/






/*Task-l2-Sorting#1
Create a function sortByAge that will sort array of object based on "age" key.
*/

/*
const students = [
  { name: "Alex", age: 27 },
  { name: "Deny", age: 25 },
  { name: "Max", age: 20 },
];
const teachers = [
  { name: "Tommy", age: 33, experience: 10, skillsId: 1 },
  { name: "Lora", age: 44, experience: 12, skillsId: 2 },
  { name: "Rafat", age: 35, experience: 3, skillsId: 3 },
];


function sortByAge (arr) {

	const sortedNames = [];
	let copyArr = arr.slice();      //делаем клон, чтобы не ломать исходник
  
	copyArr.sort((a, b) => a.age > b.age ? 1 : -1)   // сортируем "на месте". Это все еще массив объектов
  .forEach(keys => sortedNames.push(keys.name))     // вытягиваем свойство name -> из каждого объекта -> каждого эл. массива и тулим в отдельный итоговый массив имен
 
  return sortedNames.join(', ') // выводим преобразованный в строку массив
}

console.log(sortByAge(students)); // order: Max, Deny, Alex
console.log(sortByAge(teachers)); // order: Tommy, Rafat, Lora
*/






/*Task-l2-Sorting#2
Create a function sortByAge that will sort array of object based on "age" key.
*/

/*
const students = [
  { name: "Alex", age: 27 },
  { name: "Deny", age: 25 },
  { name: "Max", age: 20 },
];
const teachers = [
  { name: "Tommy", age: 33, experience: 10, skillsId: 1 },
  { name: "Lora", age: 44, experience: 12, skillsId: 2 },
  { name: "Rafat", age: 35, experience: 3, skillsId: 3 },
];


function sortBy (arr, sortBy) {

	const sortedNames = [];
	let copyArr = arr.slice();      //делаем клон, чтобы не ломать исходник
  
	copyArr.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1)   // сортируем "на месте". Это все еще массив объектов
  .forEach(keys => sortedNames.push(keys.name))     // вытягиваем свойство name -> из каждого объекта -> каждого эл. массива и тулим в отдельный итоговый массив имен
 
  return sortedNames.join(', ') // выводим преобразованный в строку массив
}

console.log(sortBy(students, "age")); // order: Max, Deny, Alex
console.log(sortBy(teachers, "experience")); // order: Rafat, Tommy, Lora
*/






/*Task-l2-Sorting#3
Create a function sortBySkills that will sort by values from another array. Function should take two arguments, match skills data from one array to another using id, and sort teachers based on count of skills. Lora has "skillsId" equal 2, and it match with ["chemistry", "physics", "math", "english"], and it means, that she has 4 skills.
*/

/*
const teachers = [
  { name: "Tommy", age: 33, experience: 10, skillsId: 1 },
  { name: "Lora", age: 44, experience: 12, skillsId: 2 },
  { name: "Rafat", age: 35, experience: 3, skillsId: 3 },
];

const skillsInfo = [
  {
    id: 1,
    items: ["math", "english"],
  },
  {
    id: 2,
    items: ["chemistry", "physics", "math", "english"],
  },
  {
    id: 3,
    items: ["chemistry"],
  },
];


function sortBySkills(arrToSort, arrSortBy) {

  const sortedNames = [];
  const copyArrToSort = arrToSort.slice();      //делаем клон, чтобы не ломать исходник

  copyArrToSort.sort((a, b) => arrSortBy.find(prop => prop.id == a.skillsId).items.length > arrSortBy.find(prop => prop.id == b.skillsId).items.length ? -1 : 1)
  .forEach(keys => sortedNames.push(keys.name))
 
  return sortedNames.join(', ')
}

console.log(sortBySkills(teachers, skillsInfo)); // order: Lora, Tommy, Rafat
*/





/*Task-l2#5-God-mode
Create a constructor World that will have next keys and methods:

planetName - string with planet name
species - array with all supported species
creatures - array of all created items
changePlanetName(newName) - method that change "planetName"
create(data) - method that create a new "creature" with provided data and push it to "creatures" list. If data contain a new "specie", that's not exist in "species", it should be added.
countPopulation() - method that return object with all species as keys, and their count as values
*/

/*
function World() {

	this.changePlanetName = (planetName) => {
  	this.planetName = planetName;
  };
  this.species = [];
  this.creatures = [];
  this.countPopulation = () => {
  	const hashTable = {};
    
    this.creatures.forEach(creatures => {
    
      const currentSpecieCount = hashTable[creatures.specie] || 0;
      const specieCount = currentSpecieCount + 1;
      
      hashTable[creatures.specie] = specieCount;
    })

    return hashTable;
  };
  
  this.create = (obj) => {
    this.creatures.push(obj);
    if (!this.species.includes(obj.specie)) {
      this.species.push(obj.specie);
    }
  };
  
}


const home = new World();

home.changePlanetName("Earth");

console.log(home.planetName); // Earth
console.log(home.species); // []
console.log(home.creatures); // []
console.log(home.countPopulation()); // {}

home.create({
  name: "human",
  specie: "homo sapiens",
});

home.create({
  name: "penguin",
  specie: "bird",
});

home.create({
  name: "swan",
  specie: "bird",
});

console.log(home.species); // ["homo sapiens", "bird"]
console.log(home.creatures); // [{ name: "human", specie: "homo sapiens" }, { name: "penguin", ...
console.log(home.countPopulation()); // { "homo sapiens": 1, bird: 2 }
*/




/*Task-l2-Aggregation-#6
Create a function aggregate that extends data in array of objects by ids.
*/

/*
const users = [
  {
    id: '8o71g807b09hvd09h1',
    firstName: 'John',
    lastName: 'Smith'
  },
  {
    id: '9we8rn4e98161684s9',
    firstName: 'Marcus',
    lastName: 'Davis'
  },
  {
    id: '78y78t4ygd984y5c16',
    firstName: 'Anna',
    lastName: 'Rogers'
  }
];

const banks = [
  {
    id: '8s7b4s87d4s7e7ee',
    name: 'PrivatBank',
    country: 'Ukraine'
  },
  {
    id: 'df87ndre78r7ee13',
    name: 'UniversalBank',
    country: 'Ukraine'
  },
  {
    id: '28741hfhdfddsaaa',
    name: 'Revolut',
    country: 'UK'
  },
];

const currencies = [
  {
    id: '127122v2',
    short: 'UAH',
    full: 'Ukrainian Hryvnya'
  },
  {
    id: '914184g4',
    short: 'USD',
    full: 'United States Dollar'
  },
  {
    id: '1981vgd4',
    short: 'EUR',
    full: 'Euro'
  },
];

const payments = [
  {
    id: 1,
    sender: {
      userId: '8o71g807b09hvd09h1',
      bankId: 'df87ndre78r7ee13',
      currencyId: '1981vgd4'
    },
    receiver: {
      userId: '9we8rn4e98161684s9',
      bankId: '8s7b4s87d4s7e7ee',
      currencyId: '127122v2'
    }
  },
  {
    id: 2,
    sender: {
      userId: '78y78t4ygd984y5c16',
      bankId: '28741hfhdfddsaaa',
      currencyId: '127122v2'
    },
    receiver: {
      userId: '9we8rn4e98161684s9',
      bankId: '28741hfhdfddsaaa',
      currencyId: '127122v2'
    }
  },
]

// 1й вариант
// function aggregate(payments, users, banks, currencies) {
  
//   payments.forEach(element => {
//     element.sender.userData = users.find(prop => prop.id == element.sender.userId)
//     element.sender.bankData = banks.find(prop => prop.id == element.sender.bankId)
//     element.sender.currencyData = currencies.find(prop => prop.id == element.sender.currencyId)

//     element.receiver.userData = users.find(prop => prop.id == element.receiver.userId)
//     element.receiver.bankData = banks.find(prop => prop.id == element.receiver.bankId)
//     element.receiver.currencyData = currencies.find(prop => prop.id == element.receiver.currencyId)
//   });
  
//   return payments
// }

// console.log(aggregate(payments, users, banks, currencies)); // should return array of payments objects with extended data from related arrays


// 2й вариант
// function aggregate(payments, users, banks, currencies) {
  



  
//   return payments
// }

// console.log(aggregate(payments, users, banks, currencies)); // should return array of payments objects with extended data from related arrays
*/






/*Task-l3-Pizzeria-#1
Create pizzaCooking async function, that will receive two arguments: "pizzaName" - name of pizza and "ovenTime" number of milliseconds that need to bake a pizza. Function should wait for "ovenTime" milliseconds to resolve. Use only Promise API, without async/await syntax.
*/

/*
function pizzaCooking(pizzaName, ovenTime) {
  return new Promise(resolve => setTimeout(() => resolve(`${pizzaName} is done`), ovenTime));
}

pizzaCooking("margarita", 5400).then((message) => console.log(message)); // (should resolve in 5.4s) margarita is done
pizzaCooking("diabola", 3200).then((message) => console.log(message)); // (should resolve in 3.2s) diabola is done

//проверка времени асинхронности
console.time('pizzaCooking');
pizzaCooking("diabola", 3200).then(() => {console.timeEnd('pizzaCooking')})
*/






/*Task-l3-Pizzeria-#2
Create idealKitchen async function, that will receive one argument with array of pizza orders, and using pizzaCooking function from previous step for baking pizzas from order. For this task you have unlimited ovens, that means infinite count of pizzas can be baked in parallel. The idealKitchen function should resolve when all pizzas is done, and should return array of messages "PIZZA_NAME is done". Use only Promise API, without async/await syntax.
*/



const orders = [
  { name: "margarita", ovenTime: 5400 },
  { name: "diabola", ovenTime: 3200 },
  { name: "peperoni", ovenTime: 2500 },
];

function idealKitchen(orders) {

  // function pizzaCooking(pizza) {
  //   return new Promise(resolve => setTimeout(() => resolve(`${pizza.name} is done`), pizza.ovenTime));
  // }

  //можно втулить готовую функцию pizzaCooking(pizza) в orders.map()
  let oven = orders.map(pizza => new Promise(resolve => setTimeout(() => resolve(`${pizza.name} is done`), pizza.ovenTime)));
  
  return Promise.all(oven);
}

// should resolve in 5.4s, because all pizzas bakes in parallel, and time shouldn't add up
// oven1: margarita ======> 5.4
// oven2: diabola   ===> 3.2
// oven3: peperoni  ==> 2.5
idealKitchen(orders).then((messages) => console.log(messages)); // ['margarita is done', 'diabola is done', 'peperoni is done']

//проверка времени асинхронности
console.time('idealKitchen');
idealKitchen(orders).then(() => {console.timeEnd('idealKitchen')})
