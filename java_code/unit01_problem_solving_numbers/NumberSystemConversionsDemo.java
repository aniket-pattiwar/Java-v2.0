package unit01_problem_solving_numbers;

/**
 * ============================================================================
 * UNIT 1: PROBLEM SOLVING & NUMBER SYSTEM
 * Topic: Number Systems, Positional Notation & Number Base Conversions
 * Course: MC101 - Problem Solving & Programming Concepts using Java
 * Program: Master of Computer Applications (MCA) - Semester I
 * ============================================================================
 * Demonstrates:
 * 1. Mathematical Positional Notation: N = Sum(d_i * Base^i)
 * 2. Decimal to Binary (Base 2), Octal (Base 8), and Hexadecimal (Base 16)
 * 3. Base Conversions via Direct Grouping (3-bit Octal, 4-bit Hexadecimal)
 * 4. Fractional Number Base Conversions (Multiplication by Radix)
 */
public class NumberSystemConversionsDemo {

    private static final char[] HEX_DIGITS = "0123456789ABCDEF".toCharArray();

    /**
     * Converts an integer from Decimal (Base 10) to any target base (2 to 16)
     * using the Repeated Division by Base Algorithm.
     */
    public static String decimalToBase(long decimalNumber, int targetBase) {
        if (targetBase < 2 || targetBase > 16) {
            throw new IllegalArgumentException("Target base must be between 2 and 16");
        }
        if (decimalNumber == 0) return "0";

        boolean isNegative = decimalNumber < 0;
        long num = Math.abs(decimalNumber);
        StringBuilder result = new StringBuilder();

        while (num > 0) {
            int remainder = (int) (num % targetBase);
            result.append(HEX_DIGITS[remainder]);
            num /= targetBase;
        }

        if (isNegative) result.append("-");
        return result.reverse().toString();
    }

    /**
     * Converts any string in a given base (2 to 16) to Decimal (Base 10)
     * using Positional Polynomial Expansion: value = Sum(d_i * Base^i)
     */
    public static long baseToDecimal(String numStr, int sourceBase) {
        if (sourceBase < 2 || sourceBase > 16) {
            throw new IllegalArgumentException("Source base must be between 2 and 16");
        }
        numStr = numStr.trim().toUpperCase();
        boolean isNegative = numStr.startsWith("-");
        if (isNegative) numStr = numStr.substring(1);

        long decimalValue = 0;
        for (int i = 0; i < numStr.length(); i++) {
            char ch = numStr.charAt(i);
            int digitValue;
            if (ch >= '0' && ch <= '9') {
                digitValue = ch - '0';
            } else if (ch >= 'A' && ch <= 'F') {
                digitValue = 10 + (ch - 'A');
            } else {
                throw new NumberFormatException("Invalid character '" + ch + "' for base " + sourceBase);
            }

            if (digitValue >= sourceBase) {
                throw new NumberFormatException("Digit '" + ch + "' out of bounds for base " + sourceBase);
            }

            decimalValue = decimalValue * sourceBase + digitValue;
        }

        return isNegative ? -decimalValue : decimalValue;
    }

    /**
     * Converts a fractional decimal number (e.g. 0.625) to binary
     * using the Successive Multiplication by Radix algorithm.
     */
    public static String fractionalDecimalToBinary(double fraction, int maxPrecision) {
        if (fraction < 0 || fraction >= 1.0) {
            throw new IllegalArgumentException("Fraction must be in range [0.0, 1.0)");
        }
        StringBuilder binaryFraction = new StringBuilder("0.");
        double current = fraction;

        while (current > 0 && binaryFraction.length() - 2 < maxPrecision) {
            current *= 2;
            int integerPart = (int) current;
            binaryFraction.append(integerPart);
            current -= integerPart;
        }

        return binaryFraction.toString();
    }

    /**
     * Demonstrates 3-bit Octal and 4-bit Hexadecimal direct binary grouping.
     */
    public static void demonstrateGroupingConversion(String binaryStr) {
        System.out.println("Input Binary: " + binaryStr);

        // Convert to Octal (Group by 3 bits from right)
        long dec = baseToDecimal(binaryStr, 2);
        String octal = decimalToBase(dec, 8);
        String hex = decimalToBase(dec, 16);

        System.out.println("  -> Grouped 3-bit Octal (Base 8) : " + octal);
        System.out.println("  -> Grouped 4-bit Hex   (Base 16): 0x" + hex);
        System.out.println("  -> Standard Decimal   (Base 10): " + dec);
    }

    public static void main(String[] args) {
        System.out.println("===============================================================");
        System.out.println(" MC101 UNIT 1: NUMBER SYSTEM CONVERSIONS & POSITIONAL MATH");
        System.out.println("===============================================================\n");

        long testValue = 254;
        System.out.println("--- 1. Base Conversions for Decimal Value: " + testValue + " ---");
        System.out.printf("Decimal (Base 10)     : %d%n", testValue);
        System.out.printf("Binary (Base 2)       : %s%n", decimalToBase(testValue, 2));
        System.out.printf("Octal (Base 8)        : %s%n", decimalToBase(testValue, 8));
        System.out.printf("Hexadecimal (Base 16) : %s%n%n", decimalToBase(testValue, 16));

        // 2. Reverse conversions (Any base to Decimal)
        System.out.println("--- 2. Reverse Conversion to Decimal (Base 10) ---");
        String bin = "11111110";
        String oct = "376";
        String hex = "FE";
        System.out.printf("Binary '%s'_2    -> Decimal: %d%n", bin, baseToDecimal(bin, 2));
        System.out.printf("Octal  '%s'_8      -> Decimal: %d%n", oct, baseToDecimal(oct, 8));
        System.out.printf("Hex    '%s'_16      -> Decimal: %d%n%n", hex, baseToDecimal(hex, 16));

        // 3. Fractional conversions
        double fraction = 0.6875; // 1/2 + 1/8 + 1/16 = 0.5 + 0.125 + 0.0625
        System.out.println("--- 3. Fractional Decimal to Binary Conversion ---");
        System.out.printf("Decimal Fraction 0.6875_10 -> Binary: %s_2%n%n", fractionalDecimalToBinary(fraction, 10));

        // 4. Grouping demonstration
        System.out.println("--- 4. Direct 3-bit / 4-bit Binary Grouping ---");
        demonstrateGroupingConversion("11010110");
        System.out.println("\n===============================================================");
    }
}
