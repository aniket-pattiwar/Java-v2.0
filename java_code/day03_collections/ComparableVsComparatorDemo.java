package day03_collections;

import java.util.*;

/**
 * Demo 4: Comparable (Natural Sorting) vs Comparator (Multiple Custom Sorts)
 * Enterprise Java Masterclass - MCA Program
 */
class StudentRecord implements Comparable<StudentRecord> {
    int rollNo;
    String name;
    double cgpa;

    public StudentRecord(int rollNo, String name, double cgpa) {
        this.rollNo = rollNo;
        this.name = name;
        this.cgpa = cgpa;
    }

    // Comparable contract: Natural default sort by Roll Number
    @Override
    public int compareTo(StudentRecord other) {
        return Integer.compare(this.rollNo, other.rollNo);
    }

    @Override
    public String toString() {
        return String.format("[Roll: %3d | CGPA: %.2f | Name: %-12s]", rollNo, cgpa, name);
    }
}

public class ComparableVsComparatorDemo {
    public static void main(String[] args) {
        List<StudentRecord> students = new ArrayList<>();
        students.add(new StudentRecord(105, "Rajesh Sharma", 8.4));
        students.add(new StudentRecord(101, "Ananya Verma", 9.6));
        students.add(new StudentRecord(104, "Kunal Roy", 7.8));
        students.add(new StudentRecord(102, "Bhavna Singh", 9.6));
        students.add(new StudentRecord(103, "Deepak Kumar", 8.9));

        System.out.println("=== 1. Natural Sort via Comparable (By Roll Number) ===");
        Collections.sort(students);
        students.forEach(System.out::println);

        System.out.println("\n=== 2. Custom Sort via Comparator: By CGPA Descending ===");
        // Anonymous / Lambda comparator
        students.sort((s1, s2) -> Double.compare(s2.cgpa, s1.cgpa));
        students.forEach(System.out::println);

        System.out.println("\n=== 3. Multi-Criteria Chained Comparator: CGPA (Desc) -> Name (Asc) ===");
        Comparator<StudentRecord> placementComparator = Comparator
                .comparingDouble((StudentRecord s) -> s.cgpa).reversed()
                .thenComparing(s -> s.name);

        students.sort(placementComparator);
        students.forEach(System.out::println);
    }
}
