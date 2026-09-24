package unit02_java_basics;

/**
 * ============================================================================
 * JAVA ARRAYS ARCHITECTURE MASTERCLASS (1D, 2D & JAGGED ARRAYS)
 * Course: MC101 - Problem Solving & Programming Concepts using Java
 * Program: Master of Computer Applications (MCA) - Semester I
 * ============================================================================
 * You can directly copy-paste this file into Eclipse IDE and press [Ctrl + F11]
 */
public class ArraysMasterclass {

    public static void main(String[] args) {
        System.out.println("===============================================================");
        System.out.println("   JAVA ARRAYS ARCHITECTURE: 1D, 2D REGULAR & JAGGED ARRAYS    ");
        System.out.println("===============================================================\n");

        // -------------------------------------------------------------
        // A. 1D ARRAY (Linear Sequence - Like a row of lockers)
        // -------------------------------------------------------------
        System.out.println("+-------------------------------------------------------------+");
        System.out.println("| A. 1D Array (Linear Sequence in Heap Memory)                |");
        System.out.println("+-------------------------------------------------------------+");
        
        int[] marks = { 85, 92, 78, 90, 88 }; // length = 5
        System.out.println("Total Elements (marks.length): " + marks.length);
        
        int totalSum = 0;
        for (int i = 0; i < marks.length; i++) {
            System.out.println("  Index [" + i + "] -> Value: " + marks[i] + " (Instant O(1) Access)");
            totalSum += marks[i];
        }
        double average = (double) totalSum / marks.length;
        System.out.printf("  -> Total Score: %d | Class Average: %.2f%n%n", totalSum, average);


        // -------------------------------------------------------------
        // B. 2D REGULAR MATRIX (Uniform Grid - Equal Rows & Columns)
        // -------------------------------------------------------------
        System.out.println("+-------------------------------------------------------------+");
        System.out.println("| B. 2D Regular Array (3x3 Symmetric Grid Matrix)             |");
        System.out.println("+-------------------------------------------------------------+");
        
        int[][] matrix = {
            { 10, 20, 30 },
            { 40, 50, 60 },
            { 70, 80, 90 }
        }; // 3 rows x 3 columns

        System.out.println("Rows: " + matrix.length + " | Columns per row: " + matrix[0].length);
        int diagonalSum = 0;

        for (int r = 0; r < matrix.length; r++) {
            System.out.print("  Row " + r + " -> ");
            for (int c = 0; c < matrix[r].length; c++) {
                System.out.printf("[%d][%d]: %-3d  ", r, c, matrix[r][c]);
                if (r == c) {
                    diagonalSum += matrix[r][c]; // Main diagonal: [0][0] + [1][1] + [2][2]
                }
            }
            System.out.println();
        }
        System.out.println("  -> Primary Diagonal Sum (10 + 50 + 90) = " + diagonalSum + "\n");


        // -------------------------------------------------------------
        // C. JAGGED / RAGGED ARRAY (Dynamic Variable Column Lengths)
        // -------------------------------------------------------------
        System.out.println("+-------------------------------------------------------------+");
        System.out.println("| C. Jagged Array (Custom Column Lengths - Zero Memory Waste) |");
        System.out.println("+-------------------------------------------------------------+");

        // Step 1: Declare 3 rows (sub-arrays are unallocated null references)
        int[][] batches = new int[3][];

        // Step 2: Allocate custom column length for each individual row
        batches[0] = new int[]{ 95, 88 };             // Row 0: Batch A has 2 students
        batches[1] = new int[]{ 72, 85, 90, 94 };     // Row 1: Batch B has 4 students
        batches[2] = new int[]{ 60, 75, 80 };         // Row 2: Batch C has 3 students

        // Step 3: Traverse using dynamic row length (batches[r].length)
        for (int r = 0; r < batches.length; r++) {
            int batchTotal = 0;
            int maxScore = batches[r][0];

            System.out.printf("  Batch #%d (Allocated Size: %d) -> Scores: ", (r + 1), batches[r].length);
            for (int c = 0; c < batches[r].length; c++) {
                int score = batches[r][c];
                System.out.print(score + " ");
                batchTotal += score;
                if (score > maxScore) {
                    maxScore = score;
                }
            }
            double batchAvg = (double) batchTotal / batches[r].length;
            System.out.printf("| Avg: %.2f | Highest: %d%n", batchAvg, maxScore);
        }

        System.out.println("\n===============================================================");
        System.out.println("  Key Takeaway: Jagged Arrays prevent unused heap memory cells!");
        System.out.println("===============================================================");
    }
}
