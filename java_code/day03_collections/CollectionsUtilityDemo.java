package day03_collections;

import java.util.*;

/**
 * Demo 3: java.util.Collections Utility Algorithms
 * L.N. Mishra College of Business Management - Java SME Masterclass
 */
public class CollectionsUtilityDemo {

    public static void main(String[] args) {
        List<Integer> marks = new ArrayList<>(Arrays.asList(78, 45, 92, 88, 36, 99, 64, 82));
        System.out.println("Original list: " + marks);

        System.out.println("\n=== 1. Sorting & Reversing ===");
        Collections.sort(marks); // TimSort O(n log n)
        System.out.println("Ascending Sorted: " + marks);

        Collections.reverse(marks);
        System.out.println("Descending Reversed: " + marks);

        System.out.println("\n=== 2. Extremum Operations ===");
        System.out.println("Highest Mark: " + Collections.max(marks));
        System.out.println("Lowest Mark: " + Collections.min(marks));
        System.out.println("Frequency of 92: " + Collections.frequency(marks, 92));

        System.out.println("\n=== 3. Binary Search (Requires sorted list) ===");
        Collections.sort(marks);
        int index = Collections.binarySearch(marks, 88);
        System.out.println("Element 88 found at sorted index: " + index);

        System.out.println("\n=== 4. Thread-Safe & Unmodifiable Wrappers ===");
        List<Integer> safeList = Collections.synchronizedList(marks);
        List<Integer> readOnlyList = Collections.unmodifiableList(marks);

        try {
            readOnlyList.add(100); // Throws UnsupportedOperationException
        } catch (UnsupportedOperationException e) {
            System.out.println("Caught UnsupportedOperationException when mutating unmodifiableList!");
        }
    }
}
