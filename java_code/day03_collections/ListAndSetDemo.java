package day03_collections;

import java.util.*;

/**
 * Demo 1: List (ArrayList vs LinkedList) & Set (HashSet vs TreeSet)
 * Enterprise Java Masterclass - MCA Program
 */
public class ListAndSetDemo {

    public static void main(String[] args) {
        System.out.println("=== 1. ArrayList (Fast O(1) Indexing) vs LinkedList (Fast O(1) Ends Insertion) ===");
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Java");
        arrayList.add("Python");
        arrayList.add("C++");
        arrayList.add("Java"); // Duplicates allowed!

        System.out.println("ArrayList (Preserves Insertion Order + Duplicates): " + arrayList);
        System.out.println("Direct Index Access (O(1)): " + arrayList.get(1));

        LinkedList<String> linkedList = new LinkedList<>(arrayList);
        linkedList.addFirst("Rust"); // Deque capability
        linkedList.addLast("Go");
        System.out.println("LinkedList with Deque operations: " + linkedList);

        System.out.println("\n=== 2. Set Hierarchy: HashSet (O(1) Unordered) vs TreeSet (O(log n) Sorted) ===");
        Set<String> hashSet = new HashSet<>();
        hashSet.add("Bhavna");
        hashSet.add("Aarav");
        hashSet.add("Divya");
        hashSet.add("Chirag");
        hashSet.add("Aarav"); // Duplicate eliminated silently!

        System.out.println("HashSet (Deduplicated, Unordered): " + hashSet);

        // TreeSet automatically sorts elements according to natural order
        Set<String> treeSet = new TreeSet<>(hashSet);
        System.out.println("TreeSet (Deduplicated & Red-Black Tree Sorted): " + treeSet);

        System.out.println("\n=== 3. PriorityQueue (Min-Heap FIFO) ===");
        Queue<Integer> pQueue = new PriorityQueue<>();
        pQueue.add(45);
        pQueue.add(12);
        pQueue.add(89);
        pQueue.add(23);

        System.out.print("Polling from PriorityQueue (Always extracts minimum first): ");
        while (!pQueue.isEmpty()) {
            System.out.print(pQueue.poll() + " ");
        }
        System.out.println();
    }
}
