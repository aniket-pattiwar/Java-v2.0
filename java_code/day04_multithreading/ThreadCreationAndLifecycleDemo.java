package day04_multithreading;

/**
 * Demo 1: Thread Creation (Thread vs Runnable) & Lifecycle States
 * L.N. Mishra College of Business Management - Java SME Masterclass
 */
class CustomThread extends Thread {
    public CustomThread(String name) {
        super(name);
    }

    @Override
    public void run() {
        System.out.println(getName() + " is running (State: " + getState() + ")");
        try {
            Thread.sleep(800); // TIMED_WAITING
        } catch (InterruptedException e) {
            System.out.println(getName() + " interrupted!");
        }
        System.out.println(getName() + " finished execution.");
    }
}

public class ThreadCreationAndLifecycleDemo {
    public static void main(String[] args) throws InterruptedException {
        System.out.println("=== 1. Creating Threads: Extending Thread vs Implementing Runnable ===");

        // Method 1: Extending Thread
        CustomThread t1 = new CustomThread("Worker-Thread-1");
        System.out.println("t1 state before start(): " + t1.getState()); // NEW

        // Method 2: Implementing Runnable with Lambda
        Runnable task = () -> {
            String threadName = Thread.currentThread().getName();
            for (int i = 1; i <= 3; i++) {
                System.out.println(" [" + threadName + "] processing item #" + i);
                try {
                    Thread.sleep(400);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };
        Thread t2 = new Thread(task, "Runnable-Worker-2");

        // Start both threads
        t1.start();
        t2.start();

        System.out.println("t1 state immediately after start(): " + t1.getState()); // RUNNABLE

        // Main thread waits for t1 and t2 using join()
        t1.join();
        t2.join();

        System.out.println("t1 state after completion: " + t1.getState()); // TERMINATED
        System.out.println("All threads finished. Main thread continues.");
    }
}
