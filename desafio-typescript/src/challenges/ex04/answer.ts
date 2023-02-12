export default function answer(words: string) {
  let biggestWord : string = "";
  let arrOfWords : string[]= words.split(" ");

  for (let i = 0; i < arrOfWords.length; i++) {
    const word :string = arrOfWords[i];
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
    
  }

  console.log(biggestWord);
}