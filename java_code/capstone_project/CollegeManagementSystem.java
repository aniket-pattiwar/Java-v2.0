package capstone_project;

import java.io.*;
import java.util.*;

/**
 * ============================================================================
 * Enterprise Java Masterclass - MCA Program
 * Capstone Project: Enterprise Student & Academic Management System
 * ============================================================================
 * Demonstrates:
 * 1. Object-Oriented Principles (Abstraction, Inheritance, Polymorphism)
 * 2. Custom Checked and Unchecked Exceptions
 * 3. Java I/O Streams (Audit Trail persistence)
 * 4. Java Collections Framework (Map lookups, Sorting via Comparators)
 * 5. Multithreading & Synchronization (Concurrent Fee Payment Gateway)
 */

// --- 1. Custom Exceptions ---
class StudentNotFoundException extends Exception {
    public StudentNotFoundException(String message) {
        super(message);
    }
}

class InsufficientFeePaymentException extends RuntimeException {
    public InsufficientFeePaymentException(String message) {
        super(message);
    }
}

// --- 2. OOP Models: Abstraction & Inheritance ---
abstract class Person implements Serializable {
    private static final long serialVersionUID = 1L;

    protected int id;
    protected String name;
    protected String email;

    public Person(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public int getId() { return id; }
    public String getName() { return name; }

    public abstract void displayProfile();
}

class Student extends Person implements Comparable<Student> {
    private static final long serialVersionUID = 1L;

    private String course;
    private double cgpa;
    private double feeDue;

    public Student(int id, String name, String email, String course, double cgpa, double feeDue) {
        super(id, name, email);
        this.course = course;
        this.cgpa = cgpa;
        this.feeDue = feeDue;
    }

    public double getCgpa() { return cgpa; }
    public double getFeeDue() { return feeDue; }
    public String getCourse() { return course; }

    public synchronized void payFee(double amount) {
        if (amount <= 0) {
            throw new InsufficientFeePaymentException("Payment amount must be greater than zero!");
        }
        this.feeDue = Math.max(0, this.feeDue - amount);
    }

    @Override
    public void displayProfile() {
        System.out.printf("[STUDENT] ID: %d | Name: %-15s | Course: %s | CGPA: %.2f | Fee Due: ₹%.2f%n",
                id, name, course, cgpa, feeDue);
    }

    // Natural Sorting by ID
    @Override
    public int compareTo(Student other) {
        return Integer.compare(this.id, other.id);
    }
}

// --- 3. Academic Registry Service with Collections & I/O ---
class StudentService {
    private final Map<Integer, Student> studentMap = new HashMap<>();
    private static final String AUDIT_LOG = "transaction_audit.txt";

    public void registerStudent(Student student) {
        studentMap.put(student.getId(), student);
        logAudit("ENROLLED: " + student.getName() + " (ID: " + student.getId() + ")");
    }

    public Student getStudent(int id) throws StudentNotFoundException {
        Student s = studentMap.get(id);
        if (s == null) {
            throw new StudentNotFoundException("Student with ID " + id + " not found in registry!");
        }
        return s;
    }

    public List<Student> getMeritList() {
        List<Student> list = new ArrayList<>(studentMap.values());
        // Sort by CGPA Descending, then by Name
        list.sort(Comparator.comparingDouble(Student::getCgpa).reversed().thenComparing(Student::getName));
        return list;
    }

    public synchronized void logAudit(String event) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(AUDIT_LOG, true))) {
            writer.write(new Date() + " | " + event + "\n");
        } catch (IOException e) {
            System.err.println("Audit logging failed: " + e.getMessage());
        }
    }
}

// --- 4. Main Application Execution ---
public class CollegeManagementSystem {

    public static void main(String[] args) {
        System.out.println("===============================================================");
        System.out.println(" ENTERPRISE STUDENT & ACADEMIC MANAGEMENT SYSTEM");
        System.out.println(" Core Java & Distributed Computing Capstone");
        System.out.println("===============================================================\n");

        StudentService service = new StudentService();

        // 1. Enrollment & Collections
        System.out.println("--- 1. Enrolling Students into System ---");
        service.registerStudent(new Student(101, "Vikram Malhotra", "vikram@univ.edu", "MCA", 8.9, 45000));
        service.registerStudent(new Student(102, "Ananya Roy", "ananya@univ.edu", "MBA", 9.6, 50000));
        service.registerStudent(new Student(103, "Rohan Verma", "rohan@univ.edu", "MCA", 7.8, 30000));
        service.registerStudent(new Student(104, "Priya Kumari", "priya@univ.edu", "MBA", 9.6, 40000));
        service.registerStudent(new Student(105, "Amitabh Sen", "amitabh@univ.edu", "MCA", 8.4, 35000));

        // 2. Polymorphic Display
        System.out.println("\n--- 2. Merit Ranking via Custom Comparator ---");
        List<Student> meritRankings = service.getMeritList();
        int rank = 1;
        for (Student s : meritRankings) {
            System.out.print("Rank #" + rank++ + " -> ");
            s.displayProfile();
        }

        // 3. Exception Handling Demonstration
        System.out.println("\n--- 3. Testing Exception Handling ---");
        try {
            Student found = service.getStudent(999); // Non-existent ID
        } catch (StudentNotFoundException e) {
            System.err.println("[HANDLED EXPECTED ERROR] " + e.getMessage());
        }

        // 4. Multithreaded Fee Collection Simulation
        System.out.println("\n--- 4. Concurrent Fee Payment Gateway (Multithreading & Locks) ---");
        Thread t1 = new Thread(() -> {
            try {
                Student s = service.getStudent(101);
                s.payFee(20000);
                service.logAudit("PAYMENT: ₹20000 by " + s.getName());
                System.out.println("[Gateway Thread 1] Payment processed for " + s.getName() + " | Remaining Due: ₹" + s.getFeeDue());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }, "PaymentGateway-1");

        Thread t2 = new Thread(() -> {
            try {
                Student s = service.getStudent(102);
                s.payFee(50000);
                service.logAudit("PAYMENT: ₹50000 by " + s.getName());
                System.out.println("[Gateway Thread 2] Payment processed for " + s.getName() + " | Remaining Due: ₹" + s.getFeeDue());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }, "PaymentGateway-2");

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("\n===============================================================");
        System.out.println(" Capstone Execution Complete. Audit logs written to transaction_audit.txt");
        System.out.println("===============================================================");
    }
}
