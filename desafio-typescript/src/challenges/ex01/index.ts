
export default function ex01() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("LinkouCheckout");
    } else if (i % 3 === 0) {
    console.log("Linkou");
    } else if (i % 5 === 0) {
    console.log("Checkout");
    } else {
    console.log(i);
    }
  }
}
/* 
// 1) Encontre os múltiplos
/**Escreva um programa que imprima os número de 1 a 100.
 * Mas para os múltiplos de 3 substitua por "Linkou" em vez do número e para múltiplos de 5 imprima "Checkout". 
 * E para números múltiplos de 3 e 5 ao mesmo tempo imprima "LinkouCheckout".
 * */
