package unit02_java_basics;

/**
 * ============================================================================
 * UNIT 2: JAVA BASICS
 * Topic: 1D, 2D Regular & Jagged (Ragged) Arrays
 * Course: MC101 - Problem Solving & Programming Concepts using Java
 * Program: Master of Computer Applications (MCA) - Semester I
 * ============================================================================
 * Simple, student-friendly demonstration of:
 * 1. 1D Array (Linear Sequence of homogeneous elements in Heap)
 * 2. 2D Regular Matrix (Uniform Rows x Columns Grid)
 * 3. Jagged Array (Variable Column Capacities per Row - Zero Memory Waste)
 */
public class Arrays1D2DJaggedDemo {

    public static void main(String[] args) {
        System.out.println("===============================================================");
        System.out.println("  1D, 2D REGULAR & JAGGED ARRAYS IN JAVA (SIMPLE DEMO)");
        System.out.println("===============================================================\n");

        // -------------------------------------------------------------
        // 1. 1D ARRAY (Linear Array - Like a row of Gym Lockers)
        // -------------------------------------------------------------
        System.out.println("--- 1. 1D Array (Linear Storage) ---");
        // Declaration & Instant initialization
        int[] marks = { 85, 92, 78, 90, 88 };

        System.out.println("Array Length: " + marks.length);
        int totalMarks = 0;

        // Traversal using standard for loop
        for (int i = 0; i < marks.length; i++) {
            System.out.println("  marks[" + i + "] = " + marks[i]);
            totalMarks += marks[i];
        }
        double averageMarks = (double) totalMarks / marks.length;
        System.out.printf("  -> Total: %d | Average: %.2f%n%n", totalMarks, averageMarks);


        // -------------------------------------------------------------
        // 2. 2D REGULAR ARRAY (Uniform Grid - Like a Classroom Seating Grid)
        // -------------------------------------------------------------
        System.out.println("--- 2. 2D Regular Array (3x3 Matrix Grid) ---");
        // Symmetric 3 rows x 3 columns matrix
        int[][] matrix = {
            { 10, 20, 30 },
            { 40, 50, 60 },
            { 70, 80, 90 }
        };

        System.out.println("Rows: " + matrix.length + " | Columns per row: " + matrix[0].length);
        int diagonalSum = 0;

        // Nested loop traversal
        for (int row = 0; row < matrix.length; row++) {
            System.out.print("  Row " + row + " -> ");
            for (int col = 0; col < matrix[row].length; col++) {
                System.out.printf("[%d][%d]: %-3d  ", row, col, matrix[row][col]);
                if (row == col) {
                    diagonalSum += matrix[row][col]; // Elements on main diagonal: [0][0], [1][1], [2][2]
                }
            }
            System.out.println();
        }
        System.out.println("  -> Main Diagonal Sum (10 + 50 + 90) = " + diagonalSum + "\n");


        // -------------------------------------------------------------
        // 3. JAGGED / RAGGED ARRAY (Like Airplane Cabin Seating)
        // -------------------------------------------------------------
        System.out.println("--- 3. Jagged Array (Dynamic / Variable Row Lengths) ---");
        // Step A: Declare array with 3 rows (sub-arrays are unallocated null references initially)
        int[][] batches = new int[3][];

        // Step B: Allocate customized column size for each individual row
        batches[0] = new int[]{ 95, 88 };                 // Batch A: 2 students (VIP / First Class)
        batches[1] = new int[]{ 72, 85, 90, 94 };         // Batch B: 4 students (Business Class)
        batches[2] = new int[]{ 60, 75, 80 };             // Batch C: 3 students (Economy Class)

        // Step C: Traverse each row using dynamic .length property
        for (int b = 0; b < batches.length; b++) {
            int batchTotal = 0;
            int maxScore = batches[b][0];

            System.out.printf("  Batch #%d (Allocated Size: %d) -> Scores: ", (b + 1), batches[b].length);
            for (int col = 0; col < batches[b].length; col++) {
                int score = batches[b][col];
                System.out.print(score + " ");
                batchTotal += score;
                if (score > maxScore) {
                    maxScore = score;
                }
            }
            double batchAvg = (double) batchTotal / batches[b].length;
            System.out.printf("| Avg: %.2f | Top Score: %d%n", batchAvg, maxScore);
        }

        System.out.println("\n===============================================================");
        System.out.println("  Key Takeaway: Jagged Arrays allocate EXACT memory required!");
        System.out.println("===============================================================");
    }
}
