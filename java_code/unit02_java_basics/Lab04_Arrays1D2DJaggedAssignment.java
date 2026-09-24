package unit02_java_basics;

import java.util.Scanner;

/**
 * ============================================================================
 * UNIT 2 ASSIGNMENT [EASY LEVEL]
 * Title: Hands-On 1D, 2D Matrix & Jagged Array Operations
 * Course: MC101 - Problem Solving & Programming Concepts using Java
 * Program: Master of Computer Applications (MCA) - Semester I
 * ============================================================================
 * Assignment Objectives:
 * Part 1: (1D Array) Calculate Total & Average marks of 5 subjects.
 * Part 2: (2D Regular Matrix) Display a 3x3 matrix and compute its Diagonal Sum.
 * Part 3: (Jagged Array) Manage scores for 3 student teams with variable sizes:
 *         - Team 1: 2 members
 *         - Team 2: 3 members
 *         - Team 3: 4 members
 *         Find the highest score in each team.
 * ============================================================================
 */
public class Lab04_Arrays1D2DJaggedAssignment {

    // -------------------------------------------------------------
    // Part 1: 1D Array Analysis
    // -------------------------------------------------------------
    public static void process1DArray() {
        System.out.println("-------------------------------------------------------------");
        System.out.println("PART 1: 1D ARRAY (Student Subject Marks)");
        System.out.println("-------------------------------------------------------------");
        
        int[] marks = { 78, 85, 92, 88, 95 };
        int sum = 0;
        
        System.out.print("Marks list: [ ");
        for (int m : marks) {
            System.out.print(m + " ");
            sum += m;
        }
        System.out.println("]");
        
        double avg = (double) sum / marks.length;
        System.out.println("Total Subjects : " + marks.length);
        System.out.println("Total Marks    : " + sum);
        System.out.printf("Average Score  : %.2f%n%n", avg);
    }

    // -------------------------------------------------------------
    // Part 2: 2D Regular Array (Matrix)
    // -------------------------------------------------------------
    public static void process2DMatrix() {
        System.out.println("-------------------------------------------------------------");
        System.out.println("PART 2: 2D REGULAR ARRAY (3x3 Matrix & Diagonal Sum)");
        System.out.println("-------------------------------------------------------------");
        
        int[][] matrix = {
            { 1, 2, 3 },
            { 4, 5, 6 },
            { 7, 8, 9 }
        };
        
        System.out.println("Matrix Representation (3x3 Grid):");
        int primaryDiagonalSum = 0;
        
        for (int r = 0; r < matrix.length; r++) {
            System.out.print("  | ");
            for (int c = 0; c < matrix[r].length; c++) {
                System.out.printf("%d ", matrix[r][c]);
                if (r == c) {
                    primaryDiagonalSum += matrix[r][c]; // [0][0], [1][1], [2][2]
                }
            }
            System.out.println("|");
        }
        
        System.out.println("Primary Diagonal Elements: 1, 5, 9");
        System.out.println("Primary Diagonal Sum     : " + primaryDiagonalSum + "\n");
    }

    // -------------------------------------------------------------
    // Part 3: Jagged Array (Variable Row Lengths)
    // -------------------------------------------------------------
    public static void processJaggedArray() {
        System.out.println("-------------------------------------------------------------");
        System.out.println("PART 3: JAGGED ARRAY (3 Project Teams with Dynamic Sizes)");
        System.out.println("-------------------------------------------------------------");
        
        // 3 teams with different numbers of members
        int[][] teams = new int[3][];
        teams[0] = new int[]{ 88, 92 };             // Team 1: 2 members
        teams[1] = new int[]{ 75, 84, 89 };         // Team 2: 3 members
        teams[2] = new int[]{ 90, 82, 96, 91 };     // Team 3: 4 members
        
        for (int i = 0; i < teams.length; i++) {
            int maxScore = teams[i][0];
            int teamSum = 0;
            
            System.out.printf("Team #%d (Members: %d) -> Scores: [ ", (i + 1), teams[i].length);
            for (int j = 0; j < teams[i].length; j++) {
                int score = teams[i][j];
                System.out.print(score + " ");
                teamSum += score;
                if (score > maxScore) {
                    maxScore = score;
                }
            }
            double teamAvg = (double) teamSum / teams[i].length;
            System.out.printf("] | Top Score: %d | Avg: %.2f%n", maxScore, teamAvg);
        }
    }

    public static void main(String[] args) {
        System.out.println("=============================================================");
        System.out.println("  MC101 UNIT 2 LAB ASSIGNMENT: ARRAYS FUNDAMENTALS [EASY]");
        System.out.println("=============================================================\n");
        
        process1DArray();
        process2DMatrix();
        processJaggedArray();
        
        System.out.println("\n=============================================================");
        System.out.println("  Assignment Execution Finished Successfully!");
        System.out.println("=============================================================");
    }
}
