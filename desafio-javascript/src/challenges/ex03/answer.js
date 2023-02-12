export default function answer(sobrenome) {
  let result = [];
  const lojistas = [
    { id: 102, name: "Justo Silva", status: true, createDate: "2023-02-01" },
    { id: 343, name: "Mariana Silva", status: false, createDate: "2020-02-01" },
    {
      id: 576,
      name: "Justina Pereira",
      status: true,
      createDate: "2022-01-17",
    },
    { id: 685, name: "Roberto Justos", status: true, createDate: "2021-01-10" },
    { id: 967, name: "Fausto Silva", status: false, createDate: "2019-01-01" },
  ];
  let arrOfName = [];
  for (let i = 0; i < lojistas.length; i++) {
    arrOfName = lojistas[i].name.split(" ");
    if (arrOfName.includes(sobrenome)) result.push(lojistas[i].id);
  }

  console.log(result);
}
