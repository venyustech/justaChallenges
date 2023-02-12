export default function answer() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("LinkouCheckout");
    if (i % 3 === 0) console.log("Linkou");
    if (i % 5 === 0) console.log("Checkout");
    else {
      console.log(i);
    }
  }
  return 0;
}
