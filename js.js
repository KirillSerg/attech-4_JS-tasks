
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
/**/
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
