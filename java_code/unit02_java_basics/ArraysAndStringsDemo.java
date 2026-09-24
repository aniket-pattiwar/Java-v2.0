package unit02_java_basics;

import java.util.Arrays;

/**
 * ============================================================================
 * UNIT 2: JAVA BASICS
 * Topic: Arrays (1D, 2D, Jagged) & Strings (Immutability, SCP, StringBuilder)
 * Course: MC101 - Problem Solving & Programming Concepts using Java
 * Program: Master of Computer Applications (MCA) - Semester I
 * ============================================================================
 * Demonstrates:
 * 1. 1D Array manipulation & memory initialization
 * 2. 2D Matrix Multiplication: C[i][j] = Sum(A[i][k] * B[k][j])
 * 3. Jagged (Ragged) Arrays with variable row dimensions
 * 4. String Immutability & String Constant Pool (SCP) mechanics
 * 5. Reference Equality (==) vs. Value Equality (.equals())
 * 6. String vs. StringBuilder vs. StringBuffer
 */
public class ArraysAndStringsDemo {

    /**
     * Multiplies two matrices A (m x k) and B (k x n) to produce C (m x n).
     */
    public static int[][] multiplyMatrices(int[][] a, int[][] b) {
        int rowsA = a.length;
        int colsA = a[0].length;
        int rowsB = b.length;
        int colsB = b[0].length;

        if (colsA != rowsB) {
            throw new IllegalArgumentException("Matrix dimensions mismatch! Cols of A must equal Rows of B.");
        }

        int[][] result = new int[rowsA][colsB];
        for (int i = 0; i < rowsA; i++) {
            for (int j = 0; j < colsB; j++) {
                for (int k = 0; k < colsA; k++) {
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println("===============================================================");
        System.out.println(" MC101 UNIT 2: ARRAYS & STRINGS DEEP-DIVE MASTERCLASS");
        System.out.println("===============================================================\n");

        // 1. 1D Array & Jagged Array
        System.out.println("--- 1. Jagged / Ragged Arrays (Variable Row Lengths) ---");
        // Representing student marks for 3 batches with differing batch sizes:
        int[][] batchMarks = new int[3][];
        batchMarks[0] = new int[]{85, 90, 78};       // Batch 1 (3 students)
        batchMarks[1] = new int[]{92, 88};           // Batch 2 (2 students)
        batchMarks[2] = new int[]{76, 81, 95, 89};   // Batch 3 (4 students)

        for (int i = 0; i < batchMarks.length; i++) {
            System.out.printf("Batch #%d (Size: %d): %s%n", (i + 1), batchMarks[i].length, Arrays.toString(batchMarks[i]));
        }

        // 2. Matrix Multiplication
        System.out.println("\n--- 2. 2D Matrix Multiplication ---");
        int[][] matA = {
            {1, 2},
            {3, 4}
        };
        int[][] matB = {
            {5, 6},
            {7, 8}
        };
        int[][] product = multiplyMatrices(matA, matB);
        System.out.println("Matrix Product (A x B):");
        for (int[] row : product) {
            System.out.println("  " + Arrays.toString(row));
        }

        // 3. String Immutability & String Constant Pool (SCP)
        System.out.println("\n--- 3. String Constant Pool (SCP) & Reference vs Value ---");
        String s1 = "Java";                 // Placed in String Constant Pool
        String s2 = "Java";                 // Reuses pooled literal "Java"
        String s3 = new String("Java");     // Forced new Heap object outside pool
        String s4 = s3.intern();            // Canonical reference from pool

        System.out.println("s1 = \"Java\" (SCP literal)");
        System.out.println("s2 = \"Java\" (SCP literal)");
        System.out.println("s3 = new String(\"Java\") (Heap object)");
        System.out.println("s4 = s3.intern() (Explicitly interned)");

        System.out.printf("s1 == s2      : %b  (Points to identical SCP memory address)%n", (s1 == s2));
        System.out.printf("s1 == s3      : %b (Different memory addresses: SCP vs Heap)%n", (s1 == s3));
        System.out.printf("s1.equals(s3) : %b  (Compares character sequence content)%n", s1.equals(s3));
        System.out.printf("s1 == s4      : %b  (Interned reference points to pool)%n", (s1 == s4));

        // 4. StringBuilder vs StringBuffer
        System.out.println("\n--- 4. String vs StringBuilder (Mutable Buffer) ---");
        StringBuilder sb = new StringBuilder("Master of Computer Applications");
        sb.append(" (MCA)");
        sb.insert(0, "MCA: ");
        System.out.println("StringBuilder output: " + sb.toString());
        System.out.println("Reversed: " + sb.reverse().toString());
        System.out.println("\n===============================================================");
    }
}
