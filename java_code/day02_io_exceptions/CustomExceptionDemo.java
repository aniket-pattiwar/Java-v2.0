package day02_io_exceptions;

/**
 * Demo 4: Creating User-Defined Checked and Unchecked Exceptions
 * L.N. Mishra College of Business Management - Java SME Masterclass
 */

// 1. User-Defined Checked Exception (Extends Exception)
class InsufficientAttendanceException extends Exception {
    private double currentPercentage;
    private double requiredPercentage;

    public InsufficientAttendanceException(double current, double required) {
        super(String.format("Admit Card Denied! Current Attendance: %.1f%% (Required: %.1f%%)",
                current, required));
        this.currentPercentage = current;
        this.requiredPercentage = required;
    }

    public double getShortfall() {
        return requiredPercentage - currentPercentage;
    }
}

// 2. User-Defined Unchecked Exception (Extends RuntimeException)
class InvalidEnrollmentYearException extends RuntimeException {
    public InvalidEnrollmentYearException(String message) {
        super(message);
    }
}

class ExamCell {
    public static void issueAdmitCard(String studentName, double attendance, int batchYear)
            throws InsufficientAttendanceException {

        // Validate business rule 1 (Unchecked runtime check)
        if (batchYear < 2020 || batchYear > 2026) {
            throw new InvalidEnrollmentYearException("Invalid Batch Year: " + batchYear);
        }

        // Validate business rule 2 (Checked compile-time check)
        if (attendance < 75.0) {
            throw new InsufficientAttendanceException(attendance, 75.0);
        }

        System.out.printf("[SUCCESS] Admit Card Issued to %s (Batch: %d, Attendance: %.1f%%)%n",
                studentName, batchYear, attendance);
    }
}

public class CustomExceptionDemo {
    public static void main(String[] args) {
        System.out.println("=== 1. Testing Successful Admit Card Issuance ===");
        try {
            ExamCell.issueAdmitCard("Ramesh Kumar", 82.5, 2024);
        } catch (InsufficientAttendanceException e) {
            System.err.println(e.getMessage());
        }

        System.out.println("\n=== 2. Testing Custom Checked Exception ===");
        try {
            ExamCell.issueAdmitCard("Sneha Roy", 68.0, 2024);
        } catch (InsufficientAttendanceException e) {
            System.err.println("Caught Custom Checked Exception: " + e.getMessage());
            System.err.printf("Shortfall Attendance: %.1f%%%n", e.getShortfall());
        }

        System.out.println("\n=== 3. Testing Custom Unchecked Exception ===");
        try {
            ExamCell.issueAdmitCard("Vikram Singh", 90.0, 2018);
        } catch (InvalidEnrollmentYearException | InsufficientAttendanceException e) {
            System.err.println("Caught Custom Unchecked Exception: " + e.getMessage());
        }
    }
}
