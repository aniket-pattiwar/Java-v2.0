package day01_oops;

/**
 * Demo 2: The Universal Truth - Java is 100% Pass-by-Value
 * L.N. Mishra College of Business Management - Java SME Masterclass
 */
class Student {
    String name;
    double cgpa;

    Student(String name, double cgpa) {
        this.name = name;
        this.cgpa = cgpa;
    }

    @Override
    public String toString() {
        return "Student[name='" + name + "', cgpa=" + cgpa + "]";
    }
}

public class PassByValueDemo {

    // Primitive test: Value is copied
    public static void modifyPrimitive(int num) {
        num = 500; // Changes local copy only
    }

    // Reference test: Reference pointer is copied
    public static void modifyObjectFields(Student s) {
        // Mutating field through the copied reference affects the Heap object
        s.name = "Rahul Kumar";
        s.cgpa = 9.5;
    }

    // Reassignment test: Proves Pass-by-Value of references!
    public static void attemptReferenceReassignment(Student s) {
        // Pointing the local parameter 's' to a brand new object in Heap
        s = new Student("Amit Sharma", 6.8);
        System.out.println("Inside attemptReferenceReassignment: " + s);
    }

    public static void main(String[] args) {
        System.out.println("=== 1. Primitive Pass-by-Value Proof ===");
        int score = 100;
        modifyPrimitive(score);
        System.out.println("Score after method call: " + score + " (Unchanged!)");

        System.out.println("\n=== 2. Object Field Mutation Proof ===");
        Student student1 = new Student("Priya Singh", 8.2);
        System.out.println("Before modifyObjectFields: " + student1);
        modifyObjectFields(student1);
        System.out.println("After modifyObjectFields: " + student1 + " (Fields mutated in Heap!)");

        System.out.println("\n=== 3. Reference Reassignment Proof (The Trap Question) ===");
        System.out.println("Before attemptReferenceReassignment: " + student1);
        attemptReferenceReassignment(student1);
        System.out.println("After attemptReferenceReassignment: " + student1 + " (Caller's reference untouched!)");
    }
}
