public class ex01 {
    public static void main(String[] args) {
        answer();
    }

    public static void answer() {
        for (int i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("LinkouCheckout");
            } else if (i % 3 == 0) {
                System.out.println("Linkou");
            } else if (i % 5 == 0) {
                System.out.println("Checkout");
            } else {
                System.out.println(i);
            }
          }
    }
}
