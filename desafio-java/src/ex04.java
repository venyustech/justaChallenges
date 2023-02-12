public class ex04 {
    public static void main(String[] args) {
        answer("Palavra mais longa");
    }

    public static void answer(String words) {        
        String biggestWord = "";
        String[] arrOfWords = words.split(" ");

        for (int i = 0; i < arrOfWords.length; i++) {
            String word = arrOfWords[i];
            if (word.length() > biggestWord.length()) biggestWord = word;    
        }
        System.out.println(biggestWord);
    } 
}
