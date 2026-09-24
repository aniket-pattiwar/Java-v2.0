package unit01_problem_solving_numbers;

/**
 * ============================================================================
 * UNIT 1: PROBLEM SOLVING & NUMBER SYSTEM
 * Topic: Binary Arithmetic, Signed/Unsigned Numbers, 1's & 2's Complement
 * Course: MC101 - Problem Solving & Programming Concepts using Java
 * Program: Master of Computer Applications (MCA) - Semester I
 * ============================================================================
 * Demonstrates:
 * 1. Binary Addition and Subtraction using 2's Complement
 * 2. 1's Complement (Bitwise Inversion) vs. 2's Complement (Invert + 1)
 * 3. Signed vs. Unsigned Bit Representations & Range Formulas (-2^(n-1) to 2^(n-1)-1)
 * 4. Computer Hardware Arithmetic Overflow (e.g. Byte Boundary Wrap-Around)
 * 5. Bitwise & Shift Operators: &, |, ^, ~, <<, >> (Arithmetic), >>> (Logical)
 */
public class BinaryArithmeticAndComplementsDemo {

    /**
     * Formats an integer as an 8-bit binary string with leading zeros.
     */
    public static String to8BitBinary(int value) {
        String s = Integer.toBinaryString(value & 0xFF);
        return String.format("%8s", s).replace(' ', '0');
    }

    /**
     * Calculates 1's complement of an 8-bit binary representation.
     */
    public static int getOnesComplement8Bit(int value) {
        return (~value) & 0xFF;
    }

    /**
     * Calculates 2's complement of an 8-bit binary representation.
     * Formula: 2's Complement = (1's Complement) + 1 = (-value & 0xFF)
     */
    public static int getTwosComplement8Bit(int value) {
        return ((~value) + 1) & 0xFF;
    }

    /**
     * Demonstrates 2's complement subtraction: A - B = A + (2's complement of B)
     */
    public static void demonstrateTwosComplementSubtraction(int a, int b) {
        System.out.printf("Computing Subtraction: %d - %d%n", a, b);
        int twosCompB = (-b) & 0xFF;
        int sum = (a + twosCompB);
        int result8Bit = sum & 0xFF;
        byte finalSignedResult = (byte) result8Bit;

        System.out.printf("  A = %3d in 8-bit binary             : %s%n", a, to8BitBinary(a));
        System.out.printf("  B = %3d in 8-bit binary             : %s%n", b, to8BitBinary(b));
        System.out.printf("  2's Complement of B (-%d)           : %s%n", b, to8BitBinary(twosCompB));
        System.out.printf("  Binary Addition [A + 2's Comp(B)]    : %s%n", to8BitBinary(result8Bit));
        System.out.printf("  -> Result as Signed 8-bit Byte       : %d (Expected: %d)%n%n", finalSignedResult, (a - b));
    }

    public static void main(String[] args) {
        System.out.println("===============================================================");
        System.out.println(" MC101 UNIT 1: BINARY ARITHMETIC & 2'S COMPLEMENT SUITE");
        System.out.println("===============================================================\n");

        // 1. 1's and 2's Complement representation
        int num = 42;
        System.out.println("--- 1. Complements for Value: " + num + " ---");
        System.out.printf("Original Decimal       : %d%n", num);
        System.out.printf("8-bit Binary           : %s%n", to8BitBinary(num));
        System.out.printf("1's Complement (~x)    : %s (Inverted all bits)%n", to8BitBinary(getOnesComplement8Bit(num)));
        System.out.printf("2's Complement (~x + 1): %s (Represents -%d in hardware)%n%n", to8BitBinary(getTwosComplement8Bit(num)), num);

        // 2. Binary Subtraction via 2's Complement Addition
        System.out.println("--- 2. Subtraction using 2's Complement Arithmetic ---");
        demonstrateTwosComplementSubtraction(25, 14); // Positive result
        demonstrateTwosComplementSubtraction(14, 25); // Negative result

        // 3. Hardware Overflow Demonstration
        System.out.println("--- 3. Computer Arithmetic Overflow (Fixed 8-bit Byte) ---");
        byte maxByte = 127;
        byte overflowed = (byte) (maxByte + 1);
        System.out.printf("Byte Max Value                   : %d (Binary: %s)%n", maxByte, to8BitBinary(maxByte));
        System.out.printf("Adding 1 to Byte (127 + 1)        : %d (Binary: %s) [OVERFLOW WRAP-AROUND!]%n%n",
                overflowed, to8BitBinary(overflowed));

        // 4. Bitwise Shift Operators in Java
        System.out.println("--- 4. Bitwise Shift Operators & Differences ---");
        int val = -16;
        System.out.printf("Original Value                  : %d (Binary: %32s)%n", val, Integer.toBinaryString(val));
        System.out.printf("Arithmetic Left Shift  (val << 2): %d (Binary: %32s)%n", (val << 2), Integer.toBinaryString(val << 2));
        System.out.printf("Sign-Extended Right    (val >> 2): %d (Binary: %32s)%n", (val >> 2), Integer.toBinaryString(val >> 2));
        System.out.printf("Zero-Fill Logical Right(val>>> 2): %d (Binary: %32s)%n", (val >>> 2), Integer.toBinaryString(val >>> 2));
        System.out.println("\n===============================================================");
    }
}
