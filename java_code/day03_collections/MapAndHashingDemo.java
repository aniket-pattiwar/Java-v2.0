package day03_collections;

import java.util.*;

/**
 * Demo 2: Map Architecture, HashMap Buckets & The hashCode / equals Contract
 * L.N. Mishra College of Business Management - Java SME Masterclass
 */
class StudentKey {
    int rollNumber;
    String department;

    public StudentKey(int rollNumber, String department) {
        this.rollNumber = rollNumber;
        this.department = department;
    }

    // Contract: If equals is true, hashCode MUST be equal!
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StudentKey that = (StudentKey) o;
        return rollNumber == that.rollNumber && Objects.equals(department, that.department);
    }

    @Override
    public int hashCode() {
        return Objects.hash(rollNumber, department);
    }

    @Override
    public String toString() {
        return "[" + department + "-" + rollNumber + "]";
    }
}

public class MapAndHashingDemo {
    public static void main(String[] args) {
        System.out.println("=== 1. Custom Key Lookup with hashCode & equals Contract ===");
        Map<StudentKey, Double> studentCgpaMap = new HashMap<>();

        StudentKey k1 = new StudentKey(101, "MCA");
        StudentKey k2 = new StudentKey(102, "MBA");
        studentCgpaMap.put(k1, 9.4);
        studentCgpaMap.put(k2, 8.8);

        // Lookup with a NEW key object having same data
        StudentKey lookupKey = new StudentKey(101, "MCA");
        System.out.println("Lookup CGPA for [MCA-101]: " + studentCgpaMap.get(lookupKey) + 
                           " (Found because hashCode/equals are overridden!)");

        System.out.println("\n=== 2. HashMap vs TreeMap (Sorted Keys) ===");
        Map<String, Integer> feeMap = new HashMap<>();
        feeMap.put("Semester-3", 45000);
        feeMap.put("Semester-1", 50000);
        feeMap.put("Semester-2", 48000);

        System.out.println("HashMap entries (Unordered):");
        feeMap.forEach((sem, fee) -> System.out.println("  " + sem + " -> ₹" + fee));

        Map<String, Integer> sortedFeeMap = new TreeMap<>(feeMap);
        System.out.println("\nTreeMap entries (Sorted alphabetically by Key):");
        sortedFeeMap.forEach((sem, fee) -> System.out.println("  " + sem + " -> ₹" + fee));
    }
}
