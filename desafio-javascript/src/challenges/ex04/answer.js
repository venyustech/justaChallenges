export default function answer(sobrenome) {
  let biggestName = -Infinity;
  let arrOfName = sobrenome.split(" ");
  for (let i = 0; i < arrOfName.length; i++) {
    const name = arrOfName[i];
    if (name.length > biggestName) {
      biggestName = name;
    }
  }

  console.log(biggestName);
}
