package day01_oops;

/**
 * Demo 3: Static Variables, Static Methods & Cross-Class Access
 * L.N. Mishra College of Business Management - Java SME Masterclass
 */
class CollegeRegistry {
    // 1. Static Variable: Single copy shared across all instances (Class level)
    public static final String COLLEGE_NAME = "L.N. Mishra College of Business Management";
    public static int totalEnrolledStudents = 0;

    // 2. Instance Variables: Distinct copy per object (Instance level)
    private int studentId;
    private String studentName;

    public CollegeRegistry(String studentName) {
        totalEnrolledStudents++;
        this.studentId = totalEnrolledStudents;
        this.studentName = studentName;
    }

    // Instance Method: Can access both instance and static members
    public void displayStudentCard() {
        System.out.printf("ID: %d | Name: %-15s | College: %s%n",
                this.studentId, this.studentName, COLLEGE_NAME);
    }

    // Static Method: Can ONLY access static members directly (no 'this' keyword)
    public static void displayCollegeStats() {
        System.out.println("=== College Statistics ===");
        System.out.println("Institute: " + COLLEGE_NAME);
        System.out.println("Total Admissions: " + totalEnrolledStudents);
    }
}

public class StaticVsInstanceDemo {
    public static void main(String[] args) {
        System.out.println("=== Cross-Class Static Access (Without creating any Object) ===");
        System.out.println("Accessing static constant: " + CollegeRegistry.COLLEGE_NAME);
        CollegeRegistry.displayCollegeStats();

        System.out.println("\n=== Creating Multiple Instances ===");
        CollegeRegistry s1 = new CollegeRegistry("Aarav Gupta");
        CollegeRegistry s2 = new CollegeRegistry("Bhavna Mishra");
        CollegeRegistry s3 = new CollegeRegistry("Chetan Bhagat");

        s1.displayStudentCard();
        s2.displayStudentCard();
        s3.displayStudentCard();

        System.out.println("\n=== Updated Static State Across Entire Class ===");
        CollegeRegistry.displayCollegeStats();
    }
}
