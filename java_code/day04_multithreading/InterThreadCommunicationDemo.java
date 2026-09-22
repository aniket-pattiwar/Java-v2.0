package day04_multithreading;

import java.util.LinkedList;
import java.util.Queue;

/**
 * Demo 4: Inter-Thread Communication via wait(), notify() & notifyAll()
 * Producer-Consumer Pattern (Printing Press / Hall Ticket Generation)
 * L.N. Mishra College of Business Management - Java SME Masterclass
 */
class AdmitCardQueue {
    private final Queue<String> queue = new LinkedList<>();
    private final int MAX_CAPACITY = 3;

    // Producer Method: Exam Admin produces admit cards
    public synchronized void produceAdmitCard(String studentCard) throws InterruptedException {
        while (queue.size() == MAX_CAPACITY) {
            System.out.println("[Queue FULL] Producer waiting for printer to consume...");
            wait(); // Releases monitor lock on 'this'
        }

        queue.add(studentCard);
        System.out.println("  [+ PRODUCED] " + studentCard + " | Current Queue: " + queue.size());
        notifyAll(); // Wakes up waiting consumer threads
    }

    // Consumer Method: Printer thread prints admit cards
    public synchronized String printAdmitCard() throws InterruptedException {
        while (queue.isEmpty()) {
            System.out.println(" [Queue EMPTY] Printer waiting for new cards to be produced...");
            wait(); // Releases monitor lock on 'this'
        }

        String card = queue.poll();
        System.out.println("  [- PRINTED] " + card + " | Remaining in Queue: " + queue.size());
        notifyAll(); // Wakes up waiting producer threads
        return card;
    }
}

public class InterThreadCommunicationDemo {
    public static void main(String[] args) {
        AdmitCardQueue queue = new AdmitCardQueue();

        // Producer Thread
        Thread producer = new Thread(() -> {
            String[] students = { "AdmitCard-MCA-101", "AdmitCard-MCA-102", "AdmitCard-MCA-103", "AdmitCard-MCA-104", "AdmitCard-MCA-105" };
            for (String s : students) {
                try {
                    queue.produceAdmitCard(s);
                    Thread.sleep(300);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "Admin-Producer");

        // Consumer Thread
        Thread consumer = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                try {
                    queue.printAdmitCard();
                    Thread.sleep(700); // Printing takes longer
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "LaserPrinter-Consumer");

        System.out.println("=== Starting Inter-Thread Producer-Consumer Communication ===");
        producer.start();
        consumer.start();
    }
}
