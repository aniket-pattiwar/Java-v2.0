package day02_io_exceptions;

import java.io.*;

/**
 * Demo 2: Serialization, Transient fields & Shallow vs Deep Copy
 * Enterprise Java Masterclass - MCA Program
 */
class Address implements Serializable, Cloneable {
    String city;
    String state;

    public Address(String city, String state) {
        this.city = city;
        this.state = state;
    }

    @Override
    public Address clone() {
        return new Address(this.city, this.state); // Clean deep clone
    }

    @Override
    public String toString() {
        return city + ", " + state;
    }
}

class StudentAccount implements Serializable, Cloneable {
    private static final long serialVersionUID = 1L;

    String studentName;
    transient String secretPin; // 'transient' skips serialization!
    Address address;

    public StudentAccount(String name, String pin, Address address) {
        this.studentName = name;
        this.secretPin = pin;
        this.address = address;
    }

    // Shallow Copy: Address object reference is SHARED
    public StudentAccount shallowCopy() {
        return new StudentAccount(this.studentName, this.secretPin, this.address);
    }

    // Deep Copy: Address object is INDEPENDENTLY cloned
    public StudentAccount deepCopy() {
        return new StudentAccount(this.studentName, this.secretPin, this.address.clone());
    }

    @Override
    public String toString() {
        return String.format("Student[Name='%s', PIN='%s', Address='%s']",
                studentName, (secretPin == null ? "NULL (Skipped by transient)" : secretPin), address);
    }
}

public class SerializationAndCloningDemo {
    public static void main(String[] args) {
        System.out.println("=== 1. Shallow Copy vs Deep Copy Demonstration ===");
        Address originalAddress = new Address("Bengaluru", "Karnataka");
        StudentAccount originalStudent = new StudentAccount("Rohan Verma", "9944", originalAddress);

        StudentAccount shallowStudent = originalStudent.shallowCopy();
        StudentAccount deepStudent = originalStudent.deepCopy();

        // Mutate original address
        originalAddress.city = "Mysuru";

        System.out.println("Original: " + originalStudent);
        System.out.println("Shallow:  " + shallowStudent + " (City changed because reference is shared!)");
        System.out.println("Deep:     " + deepStudent + " (City unaffected because nested object was cloned!)");

        System.out.println("\n=== 2. Serialization & Deserialization (with transient field) ===");
        File serFile = new File("student_account.ser");

        // Serialize Object
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(serFile))) {
            oos.writeObject(originalStudent);
            System.out.println("Object Serialized to " + serFile.getName());
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Deserialize Object
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(serFile))) {
            StudentAccount deserialized = (StudentAccount) ois.readObject();
            System.out.println("Deserialized Object: " + deserialized);
            System.out.println("Note: secretPin is null because it was marked 'transient'!");
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
