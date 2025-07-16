public class EncapsulationDemo {

    public static void main(String[] args) {
        
        // Object creation
        OopsConceptDemo obj = new OopsConceptDemo();
        
        obj.setSerialNum(101);
        obj.setName("Pooja");
        obj.setAge(21);
        
        System.out.println(obj);  // Calls toString() automatically
    }
}
