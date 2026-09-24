package unit02_java_basics;

/**
 * ============================================================================
 * UNIT 2: JAVA BASICS
 * Topic: Control Flow Statements (Selection, Iteration, Jump)
 * Course: MC101 - Problem Solving & Programming Concepts using Java
 * Program: Master of Computer Applications (MCA) - Semester I
 * ============================================================================
 * Demonstrates:
 * 1. Decision Making: if-else-if ladder & nested conditions
 * 2. Traditional Switch Statement vs. Modern Enhanced Switch Expressions (Java 14+)
 * 3. Iteration Statements: for, while, do-while, and enhanced for-each
 * 4. Branching & Jump Statements: break, continue, return
 * 5. Labeled break & continue for navigating nested loop matrices
 */
public class ControlFlowStatementsDemo {

    /**
     * Demonstrates Modern Enhanced Switch Expression (Arrow syntax & yield)
     */
    public static String getDayClassification(String dayOfWeek) {
        return switch (dayOfWeek.toUpperCase()) {
            case "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY" -> "Weekday (Academic / Lectures)";
            case "SATURDAY" -> "Weekend (Lab Sessions & Practical Projects)";
            case "SUNDAY" -> "Weekend (Holiday / Revision)";
            default -> {
                System.out.println("Warning: Unrecognized day format: " + dayOfWeek);
                yield "Invalid Day";
            }
        };
    }

    /**
     * Demonstrates Labeled Break in Nested Matrix Search
     */
    public static boolean findElementInMatrix(int[][] matrix, int target) {
        boolean found = false;
        System.out.printf("Searching for target %d in matrix using Labeled Break:%n", target);

        searchLoop:
        for (int r = 0; r < matrix.length; r++) {
            for (int c = 0; c < matrix[r].length; c++) {
                if (matrix[r][c] == target) {
                    System.out.printf("  -> Target %d FOUND at row %d, column %d. Breaking out of ALL loops!%n", target, r, c);
                    found = true;
                    break searchLoop; // Breaks outer loop immediately!
                }
            }
        }
        return found;
    }

    public static void main(String[] args) {
        System.out.println("===============================================================");
        System.out.println(" MC101 UNIT 2: CONTROL FLOW & ITERATION DEMONSTRATION");
        System.out.println("===============================================================\n");

        // 1. Selection: If-Else-If Ladder
        int attendancePercentage = 78;
        System.out.println("--- 1. Decision Making (Exam Eligibility) ---");
        if (attendancePercentage >= 75) {
            System.out.printf("Attendance: %d%% -> Eligible for End Semester Exam (ESE).%n%n", attendancePercentage);
        } else if (attendancePercentage >= 65) {
            System.out.printf("Attendance: %d%% -> Eligible only with Medical Condonation.%n%n", attendancePercentage);
        } else {
            System.out.printf("Attendance: %d%% -> NOT ELIGIBLE. Must repeat coursework.%n%n", attendancePercentage);
        }

        // 2. Enhanced Switch
        System.out.println("--- 2. Modern Enhanced Switch Expression ---");
        String[] testDays = {"Monday", "Saturday", "Sunday", "Funday"};
        for (String day : testDays) {
            System.out.printf("%-10s -> %s%n", day, getDayClassification(day));
        }

        // 3. Iteration: for, while, do-while
        System.out.println("\n--- 3. Iteration Paradigms ---");
        System.out.print("Standard for loop (1 to 5) : ");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();

        System.out.print("do-while loop (Runs >= 1x): ");
        int k = 10;
        do {
            System.out.print("Executed with k=" + k + " (even though condition k < 5 is false!) ");
            k++;
        } while (k < 5);
        System.out.println();

        // 4. Labeled Loop Search
        System.out.println("\n--- 4. Labeled Break Matrix Search ---");
        int[][] sampleMatrix = {
            {10, 20, 30},
            {40, 50, 60},
            {70, 80, 90}
        };
        findElementInMatrix(sampleMatrix, 50);
        System.out.println("\n===============================================================");
    }
}
