
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
/*function countSymbols(str) {
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

console.log(countSymbols("Jeremy", "e")) // 2
console.log(countSymbols("Antony", "n")) // 2
console.log(countSymbols("Antony Smith", "s")) // 0 (because we looking for small "s", but in "Smith" we have big "S")