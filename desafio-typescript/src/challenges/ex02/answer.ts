import { Pessoa } from ".";

export default function answer(pessoas: Pessoa[], x : number) {
    let result :string = "";
    const namesMIN :string[] = [];
  
    for (let i = 0; i < pessoas.length; i++)
      if (pessoas[i].age < x) namesMIN.push(`${pessoas[i].name} `);
  
    result = ` ${namesMIN.length} Pessoa(s): ${namesMIN.toString()} `;
    console.log(result);
}