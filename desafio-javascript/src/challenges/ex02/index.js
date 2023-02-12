import answer from "./answer.js";

export default function ex02() {
  const objeto = [
    { name: "Felipe", age: 65 },
    { name: "Bonezi", age: 32 },
    { name: "Luís", age: 21 },
  ];
  const x = 30;
  answer(objeto, 80);
}
// 2) Quem é o mais novo
/**Dada a função chamada findAge(pessoas, x), que recebe um array de objetos contendo as propriedades 'name' e 'age'
 * que possuem o nome de uma pessoa e a idade dela, respectivamente,
 * e recebe uma idade x como segundo parâmetro para filtragem.
 * A função deve retornar a quantidade e os nomes das pessoas com idade abaixo de x anos,
 * conforme exemplo de input e output abaixo:
 */
//INPUT

// const idade = 30;
//OUTPUT
// const retorno = "1 Pessoa(s): Luís";
