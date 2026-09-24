package unit02_java_basics;

/**
 * ============================================================================
 * JAVA STRINGS ARCHITECTURE MASTERCLASS:
 * Immutability, String Constant Pool (SCP), StringBuilder & StringBuffer
 * Course: MC101 - Problem Solving & Programming Concepts using Java
 * Program: Master of Computer Applications (MCA) - Semester I
 * ============================================================================
 * You can directly copy-paste this file into Eclipse IDE and press [Ctrl + F11]
 */
public class StringsMasterclass {

    public static void main(String[] args) {
        System.out.println("===============================================================");
        System.out.println("   JAVA STRINGS MASTERCLASS: IMMUTABILITY, SCP & BUILDERS     ");
        System.out.println("===============================================================\n");

        // -------------------------------------------------------------
        // 1. STRING IMMUTABILITY (Why String Objects Cannot Be Modified)
        // -------------------------------------------------------------
        System.out.println("+-------------------------------------------------------------+");
        System.out.println("| 1. String Immutability Mechanics                            |");
        System.out.println("+-------------------------------------------------------------+");

        String original = "Java";
        System.out.println("Initial String value        : " + original);

        // Calling .concat() without reassignment
        original.concat(" Masterclass");
        System.out.println("After original.concat(...)  : " + original + "  <- Unchanged! (Immutable)");

        // Explicit reassignment points reference to a NEW Heap object
        original = original.concat(" Masterclass");
        System.out.println("After explicit reassignment : " + original + " <- Reference updated!\n");


        // -------------------------------------------------------------
        // 2. STRING CONSTANT POOL (SCP) & EQUALITY OPERATORS
        // -------------------------------------------------------------
        System.out.println("+-------------------------------------------------------------+");
        System.out.println("| 2. String Constant Pool (SCP): '==' vs '.equals()' & intern |");
        System.out.println("+-------------------------------------------------------------+");

        String s1 = "MCA";                 // Created in String Constant Pool (SCP)
        String s2 = "MCA";                 // Reuses existing "MCA" from SCP
        String s3 = new String("MCA");     // Forces a new object in general Heap
        String s4 = s3.intern();            // Fetches canonical reference from SCP

        System.out.println("s1 = \"MCA\"               (SCP Literal)");
        System.out.println("s2 = \"MCA\"               (SCP Literal - Reused)");
        System.out.println("s3 = new String(\"MCA\")   (Explicit Heap Object)");
        System.out.println("s4 = s3.intern()         (Canonical SCP Reference)\n");

        // Reference equality (Address comparison)
        System.out.printf("  s1 == s2      : %-5b (Points to identical SCP memory address)%n", (s1 == s2));
        System.out.printf("  s1 == s3      : %-5b (Different memory addresses: SCP vs General Heap)%n", (s1 == s3));
        
        // Content equality (Character-by-character comparison)
        System.out.printf("  s1.equals(s3) : %-5b (Content characters are identical: \"MCA\")%n", s1.equals(s3));
        
        // Interned reference check
        System.out.printf("  s1 == s4      : %-5b (s3.intern() returns pool address matching s1)%n%n", (s1 == s4));


        // -------------------------------------------------------------
        // 3. STRINGBUILDER (Mutable, High Performance, Non-Synchronized)
        // -------------------------------------------------------------
        System.out.println("+-------------------------------------------------------------+");
        System.out.println("| 3. StringBuilder (Mutable Buffer for Single-Threaded Logic) |");
        System.out.println("+-------------------------------------------------------------+");

        StringBuilder sb = new StringBuilder("Problem Solving");
        System.out.println("Initial StringBuilder : " + sb);

        sb.append(" & Programming");
        System.out.println("After .append()       : " + sb);

        sb.insert(0, "MC101: ");
        System.out.println("After .insert(0,...)  : " + sb);

        sb.replace(7, 22, "Java Concepts");
        System.out.println("After .replace()      : " + sb);

        sb.reverse();
        System.out.println("After .reverse()      : " + sb);
        sb.reverse(); // Flip back
        System.out.println("Flipped back          : " + sb + "\n");


        // -------------------------------------------------------------
        // 4. STRINGBUFFER (Mutable, Thread-Safe, Synchronized)
        // -------------------------------------------------------------
        System.out.println("+-------------------------------------------------------------+");
        System.out.println("| 4. StringBuffer (Thread-Safe & Synchronized for Threads)    |");
        System.out.println("+-------------------------------------------------------------+");

        StringBuffer sbf = new StringBuffer("ThreadSafe");
        sbf.append("-Buffer-Demo");
        System.out.println("StringBuffer value    : " + sbf);
        System.out.println("Capacity              : " + sbf.capacity() + " characters");
        System.out.println("Length                : " + sbf.length() + " characters\n");


        // -------------------------------------------------------------
        // 5. PERFORMANCE BENCHMARK: String vs StringBuilder vs StringBuffer
        // -------------------------------------------------------------
        System.out.println("+-------------------------------------------------------------+");
        System.out.println("| 5. Performance Benchmark (Concatenating 25,000 Iterations)  |");
        System.out.println("+-------------------------------------------------------------+");

        int iterations = 25000;

        // A. Immutable String Concatenation
        long startTime = System.currentTimeMillis();
        String strTest = "";
        for (int i = 0; i < iterations; i++) {
            strTest += "X"; // Creates 25,000 temporary garbage objects in memory!
        }
        long stringDuration = System.currentTimeMillis() - startTime;
        System.out.printf("  String (+) Concatenation   : %4d ms  (Slow - High GC Overhead)%n", stringDuration);

        // B. Mutable StringBuilder Append
        startTime = System.currentTimeMillis();
        StringBuilder sbTest = new StringBuilder();
        for (int i = 0; i < iterations; i++) {
            sbTest.append("X"); // In-place buffer expansion without garbage objects
        }
        long sbDuration = System.currentTimeMillis() - startTime;
        System.out.printf("  StringBuilder.append()     : %4d ms  (Blazing Fast - Zero Garbage)%n", sbDuration);

        // C. Mutable StringBuffer Append (Synchronized)
        startTime = System.currentTimeMillis();
        StringBuffer sbfTest = new StringBuffer();
        for (int i = 0; i < iterations; i++) {
            sbfTest.append("X"); // Thread-safe synchronization overhead
        }
        long sbfDuration = System.currentTimeMillis() - startTime;
        System.out.printf("  StringBuffer.append()      : %4d ms  (Thread-Safe Synchronized)%n", sbfDuration);

        System.out.println("\n===============================================================");
        System.out.println("  Summary Rules for Interviews & Production:");
        System.out.println("  1. Use String        -> When values are constant / read-only.");
        System.out.println("  2. Use StringBuilder -> For fast string building (Single-threaded).");
        System.out.println("  3. Use StringBuffer  -> When sharing strings across multiple Threads.");
        System.out.println("===============================================================");
    }
}
