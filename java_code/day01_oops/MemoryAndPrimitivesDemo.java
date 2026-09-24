package day01_oops;

/**
 * Demo 1: Primitive vs Reference Data Types & JVM Memory (Stack vs Heap)
 * Enterprise Java Masterclass - MCA Program
 */
public class MemoryAndPrimitivesDemo {

    public static void main(String[] args) {
        System.out.println("=== 1. Primitive Data Types (Stored directly in Stack) ===");
        int a = 10;
        int b = a; // Exact binary value (10) copied
        b = 20;

        System.out.println("Original variable 'a': " + a + " (Unchanged!)");
        System.out.println("Copied variable 'b': " + b);

        System.out.println("\n=== 2. Reference Data Types (Reference in Stack, Object in Heap) ===");
        int[] originalArray = {10, 20, 30};
        int[] copiedArray = originalArray; // Copies memory address pointer, NOT array contents!

        System.out.println("Before mutation:");
        System.out.println("originalArray[0]: " + originalArray[0]);
        System.out.println("copiedArray[0]: " + copiedArray[0]);

        // Modifying through copiedArray
        copiedArray[0] = 999;

        System.out.println("\nAfter mutating copiedArray[0] = 999:");
        System.out.println("originalArray[0]: " + originalArray[0] + " (Mutated because both point to same Heap array!)");
        System.out.println("copiedArray[0]: " + copiedArray[0]);

        System.out.println("\n=== 3. Reference Equality (==) vs Content Equality (.equals()) ===");
        String s1 = new String("Java");
        String s2 = new String("Java");

        System.out.println("s1 == s2: " + (s1 == s2) + " (False! Compares Stack memory pointers)");
        System.out.println("s1.equals(s2): " + s1.equals(s2) + " (True! Compares character content)");
    }
}
