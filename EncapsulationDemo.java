// Encapsulation Example

class Student {
    // ✅ Private data members (cannot be accessed directly outside this class)
    private String name;
    private int age;

    // ✅ Public setter method to set name
    public void setName(String newName) {
        name = newName;
    }

    // ✅ Public getter method to get name
    public String getName() {
        return name;
    }

    // ✅ Public setter method to set age
    public void setAge(int newAge) {
        if(newAge > 0) {
            age = newAge;
        } else {
            System.out.println("Invalid age!");
        }
    }

    // ✅ Public getter method to get age
    public int getAge() {
        return age;
    }
}

public class EncapsulationDemo {
    public static void main(String[] args) {
        // Creating object of Student class
        Student s1 = new Student();

        // Using setter methods to set values
        s1.setName("Nikita");
        s1.setAge(20);

        // Using getter methods to access values
        System.out.println("Student Name: " + s1.getName());
        System.out.println("Student Age: " + s1.getAge());
    }
}
