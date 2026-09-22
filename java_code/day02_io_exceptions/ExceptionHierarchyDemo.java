package day02_io_exceptions;

import java.io.FileReader;
import java.io.IOException;

/**
 * Demo 3: Exception Hierarchy, Checked vs Unchecked, Multi-Catch & Call-Stack Propagation
 * L.N. Mishra College of Business Management - Java SME Masterclass
 */
public class ExceptionHierarchyDemo {

    // Method demonstrating Unchecked Exception (RuntimeException)
    static void level3Unchecked() {
        System.out.println("  -> Inside level3Unchecked(): Performing 100 / 0");
        int result = 100 / 0; // Throws ArithmeticException
    }

    // Method declaring Checked Exception via 'throws'
    static void level3Checked() throws IOException {
        System.out.println("  -> Inside level3Checked(): Opening non-existent file");
        FileReader fr = new FileReader("non_existent_file_xyz.txt"); // Throws FileNotFoundException
    }

    static void level2() throws IOException {
        System.out.println(" -> Inside level2(): Propagating call down the stack");
        level3Checked();
    }

    static void level1() {
        System.out.println("-> Inside level1(): Initiating try-catch-finally block");
        try {
            level2();
        } catch (IOException e) {
            System.err.println("Caught Propagated Checked Exception in level1: " + e.getClass().getSimpleName());
        } finally {
            System.out.println("Finally block inside level1() executed guaranteed!");
        }
    }

    public static void main(String[] args) {
        System.out.println("=== 1. Multi-Catch Block Demonstration ===");
        try {
            String[] names = { "Anil", "Sunil" };
            System.out.println("Accessing valid index: " + names[0]);

            // Risky operation
            int parsed = Integer.parseInt("NOT_A_NUMBER");
        } catch (ArrayIndexOutOfBoundsException | NumberFormatException e) {
            System.out.println("Handled in multi-catch: " + e.getClass().getSimpleName() + " -> " + e.getMessage());
        }

        System.out.println("\n=== 2. Call-Stack Exception Propagation Demonstration ===");
        level1();

        System.out.println("\n=== 3. Unchecked Runtime Exception Handling ===");
        try {
            level3Unchecked();
        } catch (ArithmeticException e) {
            System.out.println("Caught Unchecked ArithmeticException: " + e.getMessage());
        }
    }
}
