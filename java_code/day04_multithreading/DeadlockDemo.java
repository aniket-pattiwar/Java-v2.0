package day04_multithreading;

/**
 * Demo 3: Deadlock Creation and Deadlock Avoidance Strategy
 * Enterprise Java Masterclass - MCA Program
 */
public class DeadlockDemo {

    private static final Object ResourceA = new Object();
    private static final Object ResourceB = new Object();

    // Solution: Always enforce a FIXED global lock acquisition order!
    public static void runSafeThread1() {
        synchronized (ResourceA) {
            System.out.println("[Thread 1] Acquired Lock on ResourceA");
            try { Thread.sleep(50); } catch (InterruptedException e) {}

            synchronized (ResourceB) {
                System.out.println("[Thread 1] Acquired Lock on ResourceB -> Critical task completed!");
            }
        }
    }

    public static void runSafeThread2() {
        // Safe: Acquired ResourceA FIRST, then ResourceB (Same order as Thread 1)
        synchronized (ResourceA) {
            System.out.println("[Thread 2] Acquired Lock on ResourceA");
            try { Thread.sleep(50); } catch (InterruptedException e) {}

            synchronized (ResourceB) {
                System.out.println("[Thread 2] Acquired Lock on ResourceB -> Critical task completed!");
            }
        }
    }

    public static void main(String[] args) throws InterruptedException {
        System.out.println("=== Safe Multi-Lock Acquisition (Avoiding Circular Wait) ===");

        Thread t1 = new Thread(DeadlockDemo::runSafeThread1, "Worker-1");
        Thread t2 = new Thread(DeadlockDemo::runSafeThread2, "Worker-2");

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        System.out.println("Execution completed smoothly without deadlocks.");
    }
}
