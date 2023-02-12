import java.util.List;
import java.util.ArrayList;

public class ex02 {
    public static void main(String[] args) {
        Pessoa[] objeto = {
            new Pessoa("Felipe", 65),
            new Pessoa("Bonezi", 32),
            new Pessoa("Luís", 21)
        };
        int x = 80;
        answer(objeto, x);
    }

    public static void answer(  Pessoa[] pessoas, int x) {
        String result = "";
        List<String> namesMIN = new ArrayList<String>();
        
        for (int i = 0; i < pessoas.length; i++) {
          if (pessoas[i].getAge() < x) {
            namesMIN.add(pessoas[i].getName() + " ");
          }
        }
        
        result = " " + namesMIN.size() + " Pessoa(s): " + namesMIN.toString() + " ";
        System.out.println(result);
    }

    static class Pessoa {
        private String name;
        private int age;
      
        public Pessoa(String name, int age) {
          this.name = name;
          this.age = age;
        }
      
        public String getName() {
          return name;
        }
      
        public void setName(String name) {
          this.name = name;
        }
      
        public int getAge() {
          return age;
        }
      
        public void setAge(int age) {
          this.age = age;
        }
      }
}