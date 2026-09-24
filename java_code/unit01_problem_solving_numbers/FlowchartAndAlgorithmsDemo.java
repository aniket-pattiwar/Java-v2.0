package unit01_problem_solving_numbers;

import java.util.Arrays;
import java.util.Scanner;

/**
 * ============================================================================
 * UNIT 1: PROBLEM SOLVING & NUMBER SYSTEM
 * Topic: Logical Thinking, Problem-Solving Process, Flowcharts & Algorithms
 * Course: MC101 - Problem Solving & Programming Concepts using Java
 * Program: Master of Computer Applications (MCA) - Semester I
 * ============================================================================
 * Demonstrates:
 * 1. Step-by-step Algorithmic Problem Solving (Input -> Process -> Output)
 * 2. Euclidean Algorithm for Greatest Common Divisor (GCD) & LCM
 * 3. Prime Number Determination & Sieve of Eratosthenes
 * 4. Iterative vs. Recursive Algorithm Paradigms
 */
public class FlowchartAndAlgorithmsDemo {

    /**
     * Algorithm 1: Euclidean Algorithm for Greatest Common Divisor (GCD)
     * Flowchart Logic:
     * [Start] -> [Input a, b] -> <is b == 0?>
     *      YES -> [Return a] -> [End]
     *      NO  -> [temp = b; b = a % b; a = temp] -> <Loop back>
     */
    public static int computeGcd(int a, int b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b != 0) {
            int remainder = a % b;
            a = b;
            b = remainder;
        }
        return a;
    }

    /**
     * Algorithm 2: Least Common Multiple (LCM)
     * Formula: LCM(a, b) = (|a * b|) / GCD(a, b)
     */
    public static long computeLcm(int a, int b) {
        if (a == 0 || b == 0) return 0;
        return ((long) Math.abs(a) * Math.abs(b)) / computeGcd(a, b);
    }

    /**
     * Algorithm 3: Optimized Primality Test
     * Time Complexity: O(sqrt(n))
     */
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;

        // Check 6k +/- 1 pattern up to sqrt(n)
        for (int i = 5; (long) i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * Algorithm 4: Sieve of Eratosthenes for generating primes up to limit N
     * Time Complexity: O(N log log N)
     */
    public static int[] generatePrimesUpTo(int limit) {
        if (limit < 2) return new int[0];
        boolean[] isPrimeArr = new boolean[limit + 1];
        Arrays.fill(isPrimeArr, true);
        isPrimeArr[0] = false;
        isPrimeArr[1] = false;

        for (int p = 2; (long) p * p <= limit; p++) {
            if (isPrimeArr[p]) {
                for (int multiple = p * p; multiple <= limit; multiple += p) {
                    isPrimeArr[multiple] = false;
                }
            }
        }

        int count = 0;
        for (int i = 2; i <= limit; i++) {
            if (isPrimeArr[i]) count++;
        }

        int[] primes = new int[count];
        int idx = 0;
        for (int i = 2; i <= limit; i++) {
            if (isPrimeArr[i]) primes[idx++] = i;
        }
        return primes;
    }

    public static void main(String[] args) {
        System.out.println("===============================================================");
        System.out.println(" MC101 UNIT 1: ALGORITHM & FLOWCHART PROBLEM-SOLVING SUITE");
        System.out.println("===============================================================\n");

        // 1. GCD & LCM Demonstration
        int num1 = 72, num2 = 120;
        int gcd = computeGcd(num1, num2);
        long lcm = computeLcm(num1, num2);
        System.out.println("--- 1. Euclidean Algorithm: GCD & LCM ---");
        System.out.printf("Numbers: %d and %d%n", num1, num2);
        System.out.printf("-> Greatest Common Divisor (GCD) = %d%n", gcd);
        System.out.printf("-> Least Common Multiple (LCM)   = %d%n%n", lcm);

        // 2. Primality Test
        System.out.println("--- 2. Primality Testing (O(sqrt(N)) Algorithm) ---");
        int[] testNumbers = {1, 2, 17, 27, 97, 100, 541};
        for (int num : testNumbers) {
            System.out.printf("Is %4d Prime? -> %s%n", num, isPrime(num) ? "YES (Prime)" : "NO (Composite)");
        }

        // 3. Sieve of Eratosthenes
        int limit = 50;
        System.out.printf("%n--- 3. Sieve of Eratosthenes (Primes up to %d) ---%n", limit);
        int[] primes = generatePrimesUpTo(limit);
        System.out.println("Generated Primes: " + Arrays.toString(primes));
        System.out.println("Total primes found: " + primes.length);
        System.out.println("\n===============================================================");
    }
}
