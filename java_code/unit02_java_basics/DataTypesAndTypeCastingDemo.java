package unit02_java_basics;

/**
 * ============================================================================
 * UNIT 2: JAVA BASICS
 * Topic: Data Types, Literals, Type Casting & Operators
 * Course: MC101 - Problem Solving & Programming Concepts using Java
 * Program: Master of Computer Applications (MCA) - Semester I
 * ============================================================================
 * Demonstrates:
 * 1. 8 Primitive Data Types, Memory Sizes, Ranges & Wrapper Classes
 * 2. Numeric Literals (Binary 0b, Octal 0, Hex 0x, Underscores in numbers)
 * 3. Implicit Widening Conversion vs. Explicit Narrowing Type Casting
 * 4. Java Operators: Arithmetic, Relational, Short-Circuit Logical, Bitwise & Ternary
 * 5. Automatic Numeric Promotion rules in expressions
 */
public class DataTypesAndTypeCastingDemo {

    public static void main(String[] args) {
        System.out.println("===============================================================");
        System.out.println(" MC101 UNIT 2: DATA TYPES, CASTING & OPERATORS MASTERCLASS");
        System.out.println("===============================================================\n");

        // 1. Primitive Data Types & Bounds
        System.out.println("--- 1. Java 8 Primitive Data Types & Ranges ---");
        System.out.printf("%-10s | %-6s | %-25s | %-25s%n", "Type", "Size", "Min Value", "Max Value");
        System.out.println("-----------------------------------------------------------------------");
        System.out.printf("%-10s | %-6s | %-25d | %-25d%n", "byte", "1 byte", Byte.MIN_VALUE, Byte.MAX_VALUE);
        System.out.printf("%-10s | %-6s | %-25d | %-25d%n", "short", "2 bytes", Short.MIN_VALUE, Short.MAX_VALUE);
        System.out.printf("%-10s | %-6s | %-25d | %-25d%n", "int", "4 bytes", Integer.MIN_VALUE, Integer.MAX_VALUE);
        System.out.printf("%-10s | %-6s | %-25d | %-25d%n", "long", "8 bytes", Long.MIN_VALUE, Long.MAX_VALUE);
        System.out.printf("%-10s | %-6s | %-25e | %-25e%n", "float", "4 bytes", Float.MIN_VALUE, Float.MAX_VALUE);
        System.out.printf("%-10s | %-6s | %-25e | %-25e%n", "double", "8 bytes", Double.MIN_VALUE, Double.MAX_VALUE);
        System.out.printf("%-10s | %-6s | %-25d | %-25d%n", "char", "2 bytes", (int) Character.MIN_VALUE, (int) Character.MAX_VALUE);
        System.out.printf("%-10s | %-6s | %-25s | %-25s%n%n", "boolean", "1 bit*", "false", "true");

        // 2. Literals
        System.out.println("--- 2. Literals in Java ---");
        int binaryLit = 0b10110;    // Binary 22
        int octalLit = 077;         // Octal 63
        int hexLit = 0x2F;          // Hex 47
        long bigNum = 1_000_000_000L; // Underscore for readability
        System.out.printf("Binary 0b10110 = %d, Octal 077 = %d, Hex 0x2F = %d, BigNum = %d%n%n",
                binaryLit, octalLit, hexLit, bigNum);

        // 3. Type Casting (Widening vs Narrowing)
        System.out.println("--- 3. Type Casting (Widening vs Narrowing) ---");
        int originalInt = 130;
        // Implicit Widening: byte -> short -> int -> long -> float -> double
        double widenedDouble = originalInt;
        // Explicit Narrowing: double -> float -> long -> int -> short -> byte
        byte narrowedByte = (byte) originalInt; // 130 wraps around 8-bit to -126
        System.out.printf("Original int: %d%n", originalInt);
        System.out.printf("Widened to double: %.2f (Safe / No Data Loss)%n", widenedDouble);
        System.out.printf("Explicit narrowed to byte: %d (Data Loss / Wrap-around: 130 - 256 = -126)%n%n", narrowedByte);

        // 4. Short-Circuit Logical Operators vs Bitwise
        System.out.println("--- 4. Short-Circuit Evaluation (&&, ||) ---");
        int counter = 0;
        boolean condition = (5 < 3) && (++counter > 0); // Short-circuits at (5 < 3) -> false
        System.out.printf("Short-circuit result: %b | Counter value: %d (Second operand was skipped!)%n",
                condition, counter);

        // 5. Ternary & Expressions
        System.out.println("\n--- 5. Ternary Operator & Expression Promotion ---");
        int marks = 85;
        String grade = (marks >= 90) ? "A+" : (marks >= 75) ? "A" : (marks >= 60) ? "B" : "C";
        System.out.printf("Marks: %d -> Grade: %s%n", marks, grade);

        byte b1 = 10, b2 = 20;
        // Note: b1 + b2 automatically promotes operands to int!
        int sum = b1 + b2;
        System.out.printf("Byte sum (b1 + b2) promoted to int: %d%n", sum);
        System.out.println("\n===============================================================");
    }
}
