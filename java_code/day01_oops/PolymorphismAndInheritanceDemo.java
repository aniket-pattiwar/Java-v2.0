package day01_oops;

/**
 * Demo 4: Inheritance, Upcasting & Dynamic Method Dispatch (Polymorphism)
 * L.N. Mishra College of Business Management - Java SME Masterclass
 */
abstract class PaymentMethod {
    protected String transactionId;
    protected double amount;

    public PaymentMethod(String transactionId, double amount) {
        this.transactionId = transactionId;
        this.amount = amount;
    }

    // Overloaded method (Compile-time Polymorphism)
    public void validate() {
        System.out.println("Validating generic payment for ₹" + amount);
    }

    public void validate(String securityToken) {
        System.out.println("Validating payment with secure OTP token: " + securityToken);
    }

    // Abstract method for Dynamic Dispatch (Runtime Polymorphism)
    public abstract void processPayment();
}

class UPIPayment extends PaymentMethod {
    private String vpaAddress;

    public UPIPayment(String transactionId, double amount, String vpaAddress) {
        super(transactionId, amount);
        this.vpaAddress = vpaAddress;
    }

    @Override
    public void processPayment() {
        System.out.printf("[UPI SUCCESS] Transferred ₹%.2f to VPA: %s (TxnId: %s)%n",
                amount, vpaAddress, transactionId);
    }
}

class CreditCardPayment extends PaymentMethod {
    private String maskedCardNumber;

    public CreditCardPayment(String transactionId, double amount, String cardNumber) {
        super(transactionId, amount);
        this.maskedCardNumber = "XXXX-XXXX-XXXX-" + cardNumber.substring(cardNumber.length() - 4);
    }

    @Override
    public void processPayment() {
        System.out.printf("[CARD SUCCESS] Charged ₹%.2f on Card: %s (TxnId: %s)%n",
                amount, maskedCardNumber, transactionId);
    }
}

public class PolymorphismAndInheritanceDemo {
    public static void main(String[] args) {
        System.out.println("=== 1. Compile-Time Polymorphism (Method Overloading) ===");
        PaymentMethod p1 = new UPIPayment("TXN1001", 1500.0, "student@okhdfcbank");
        p1.validate();
        p1.validate("984123");

        System.out.println("\n=== 2. Runtime Polymorphism (Dynamic Method Dispatch via Upcasting) ===");
        // Parent Reference holding diverse Child Objects
        PaymentMethod[] batchPayments = {
            new UPIPayment("TXN1002", 5000.0, "fees@lnmc"),
            new CreditCardPayment("TXN1003", 25000.0, "4111222233334444"),
            new UPIPayment("TXN1004", 750.0, "canteen@upi")
        };

        for (PaymentMethod payment : batchPayments) {
            // Polymorphic dispatch: JVM decides which processPayment() to call at runtime!
            payment.processPayment();
        }
    }
}
