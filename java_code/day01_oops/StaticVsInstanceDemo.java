package day01_oops;

/**
 * Demo 3: Static Variables, Static Methods & Cross-Class Access
 * Enterprise Java Masterclass - MCA Program
 */
class StudentRegistry {
    // 1. Static Variable: Single copy shared across all instances (Class level)
    public static final String INSTITUTE_NAME = "Institute of Technology";
    public static int totalEnrolledStudents = 0;

    // 2. Instance Variables: Distinct copy per object (Instance level)
    private int studentId;
    private String studentName;

    public StudentRegistry(String studentName) {
        totalEnrolledStudents++;
        this.studentId = totalEnrolledStudents;
        this.studentName = studentName;
    }

    // Instance Method: Can access both instance and static members
    public void displayStudentCard() {
        System.out.printf("ID: %d | Name: %-15s | Institute: %s%n",
                this.studentId, this.studentName, INSTITUTE_NAME);
    }

    // Static Method: Can ONLY access static members directly (no 'this' keyword)
    public static void displayInstituteStats() {
        System.out.println("=== Enrollment Statistics ===");
        System.out.println("Institute: " + INSTITUTE_NAME);
        System.out.println("Total Admissions: " + totalEnrolledStudents);
    }
}

public class StaticVsInstanceDemo {
    public static void main(String[] args) {
        System.out.println("=== Cross-Class Static Access (Without creating any Object) ===");
        System.out.println("Accessing static constant: " + StudentRegistry.INSTITUTE_NAME);
        StudentRegistry.displayInstituteStats();

        System.out.println("\n=== Creating Multiple Instances ===");
        StudentRegistry s1 = new StudentRegistry("Aarav Gupta");
        StudentRegistry s2 = new StudentRegistry("Bhavna Sharma");
        StudentRegistry s3 = new StudentRegistry("Chetan Bhagat");

        s1.displayStudentCard();
        s2.displayStudentCard();
        s3.displayStudentCard();

        System.out.println("\n=== Updated Static State Across Entire Class ===");
        StudentRegistry.displayInstituteStats();
    }
}
