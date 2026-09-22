package day04_multithreading;

/**
 * Demo 2: Race Conditions & Thread Synchronization (Methods vs Blocks)
 * L.N. Mishra College of Business Management - Java SME Masterclass
 */
class CollegeFeeCounter {
    private int collectedTotal = 0;

    // 1. Unsafe Method (Suffers from Race Condition)
    public void recordPaymentUnsafe(int feeAmount) {
        int current = collectedTotal;
        try {
            Thread.sleep(10); // Simulates database latency
        } catch (InterruptedException e) {}
        collectedTotal = current + feeAmount;
    }

    // 2. Synchronized Block: Protects only critical shared data
    public void recordPaymentSafe(int feeAmount) {
        synchronized (this) {
            int current = collectedTotal;
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {}
            collectedTotal = current + feeAmount;
        }
    }

    public int getCollectedTotal() {
        return collectedTotal;
    }

    public void reset() {
        collectedTotal = 0;
    }
}

public class SynchronizationAndLocksDemo {
    public static void main(String[] args) throws InterruptedException {
        CollegeFeeCounter counter = new CollegeFeeCounter();

        System.out.println("=== 1. Simulating Unsynchronized Concurrent Access (Race Condition) ===");
        Thread[] unsafeThreads = new Thread[10];
        for (int i = 0; i < 10; i++) {
            unsafeThreads[i] = new Thread(() -> counter.recordPaymentUnsafe(1000));
            unsafeThreads[i].start();
        }
        for (Thread t : unsafeThreads) t.join();
        System.out.println("Expected: ₹10,000 | Actual (Corrupted due to Race Condition): ₹" + counter.getCollectedTotal());

        System.out.println("\n=== 2. Simulating Synchronized Counter (Thread-Safe) ===");
        counter.reset();
        Thread[] safeThreads = new Thread[10];
        for (int i = 0; i < 10; i++) {
            safeThreads[i] = new Thread(() -> counter.recordPaymentSafe(1000));
            safeThreads[i].start();
        }
        for (Thread t : safeThreads) t.join();
        System.out.println("Expected: ₹10,000 | Actual (Thread-Safe): ₹" + counter.getCollectedTotal());
    }
}
