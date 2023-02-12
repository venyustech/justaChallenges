import java.util.List;
import java.util.ArrayList;

public class ex03 {
    
    public static void main(String[] args) {
        answer("Silva");
    }

    public static void answer(String lastName) {    

        Lojista[] lojistas = {
            new Lojista(102, "Justo Silva", true, "2023-02-01"),
            new Lojista(343, "Mariana Silva", false, "2020-02-01"),
            new Lojista(576, "Justina Pereira", true, "2022-01-17"),
            new Lojista(685, "Roberto Justos", true, "2021-01-10"),
            new Lojista(967, "Fausto Silva", false, "2019-01-01")
        };
        
        List<Integer> result = new ArrayList<>();
        for (Lojista lojista : lojistas) {
            String[] arrOfName = lojista.getName().split(" ");
            for(int i = 0; i < arrOfName.length; i++) 
                if (arrOfName[i].equals(lastName) ) 
                    result.add(lojista.getId());
        }

        System.out.println(result);
    }

    static class Lojista {
        private int id;
        private String name;
        private boolean status;
        private String createDate;
        public Lojista(int id, String name, boolean status, String createDate) {
            this.id = id;
            this.name = name;
            this.status = status;
            this.createDate = createDate;
        }
    
        public int getId() {
            return id;
        }
    
        public String getName() {
            return name;
        }
    
        public boolean isStatus() {
            return status;
        }
    
        public String getCreateDate() {
            return createDate;
        }

    }
}
