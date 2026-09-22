/**
 * ACTS, C-DAC Patna & LNMI Patna
 * Course Code: MC101 - Problem Solving & OOPs with Java (MCA Sem-I)
 * Subject Matter Expert (SME): Aniket
 */

const COURSE_DATA = {
  institution: "LNMI, Patna in association with ACTS, C-DAC Patna",
  program: "MCA (Master of Computer Applications) - Semester I",
  courseTitle: "Problem Solving & Programming Concepts using Java",
  courseCode: "MC101",
  credits: 4,
  assessment: "IA: 30 Marks | ESE: 70 Marks",
  smeName: "Aniket",

  // Reference Textbooks from Syllabus
  references: [
    "Core Java : Volume 1 - Fundamentals by Cay S. Horstmann (Prentice Hall)",
    "Core Java : Volume 2 - Advanced Features by Cay S. Horstmann (Prentice Hall)",
    "Core and Advanced Java Black Book (Dreamtech Press)",
    "Programming in Java by Sachin Malhotra, Saurabh Choudhary (Oxford University Press)",
    "NPTEL E-Resources (http://nptel.ac.in/)"
  ],

  // Units 3, 4, 5
  modules: [
    {
      id: "unit3-oops",
      unitNumber: 3,
      navTitle: "OOPs in Java",
      unitCode: "UNIT 3",
      title: "Object Oriented Programming with Java",
      summary: "OOP Principles, Classes & Objects, Pass by value v/s pass by reference, Static variables and methods, Cross-class static access, Reference variables vs Primitive data types, Reference vs Static variables, Inheritance and Polymorphism implementation.",
      outcomes: "CO2: Design and implement OOP concepts (classes, objects, inheritance, polymorphism, encapsulation, abstraction).",
      topics: [
        {
          id: "u3-t1",
          title: "OOP Principles, Classes & Objects",
          image: "images/oops_principles.jpg",
          imageCaption: "Visual Diagram: 4 Core Pillars of Object-Oriented Programming in Java",
          content: `
            <p>Object-Oriented Programming in Java is structured upon four foundational pillars:</p>
            <ul>
              <li><strong>Encapsulation:</strong> Wrapping data (private fields) and code (public methods) together into a single unit (Class), enforcing controlled access.</li>
              <li><strong>Abstraction:</strong> Hiding internal implementation complexities and showing only essential functionality via <code>abstract classes</code> and <code>interfaces</code>.</li>
              <li><strong>Inheritance:</strong> Mechanism where a subclass acquires attributes and behaviors of a superclass using <code>extends</code>.</li>
              <li><strong>Polymorphism:</strong> Ability of a message/method to be displayed or executed in multiple forms (Compile-time vs Runtime).</li>
            </ul>
          `,
          analogy: "A Class is an architectural blueprint; an Object is the physical building constructed in Heap memory.",
          trap: "Is a Java Class an Object? No! A class is a template loaded into Metaspace; objects are dynamically allocated instances in the Heap.",
          codeSnippet: {
            filename: "BankAccount.java",
            code: `public class BankAccount {
    // Encapsulation: Private state variables
    private String accountNumber;
    private double balance;

    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    public double getBalance() { return balance; }

    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            System.out.println("Deposited: ₹" + amount + " | Balance: ₹" + balance);
        }
    }

    public static void main(String[] args) {
        BankAccount acc = new BankAccount("LNMI-MCA-101", 5000.0);
        System.out.println("Initial Balance: ₹" + acc.getBalance());
        acc.deposit(2500.0);
    }
}`,
            output: `Initial Balance: ₹5000.0
Deposited: ₹2500.0 | Balance: ₹7500.0`
          }
        },
        {
          id: "u3-t2",
          title: "Primitive vs Reference Data Types & Memory Allocation",
          image: "images/stack_vs_heap.jpg",
          imageCaption: "Visual Diagram: Stack Memory (Primitives & Reference Pointers) vs Heap Memory (Allocated Objects)",
          content: `
            <p>Java memory architecture strictly separates <strong>Stack Memory</strong> from <strong>Heap Memory</strong>:</p>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Primitive Data Types (<code>int</code>, <code>float</code>, <code>boolean</code>...)</th>
                    <th>Reference Data Types (Objects, Arrays, Strings)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Storage</strong></td>
                    <td>Value is stored directly inside the Stack frame.</td>
                    <td>Pointer/Address is stored on Stack; actual object lives in Heap.</td>
                  </tr>
                  <tr>
                    <td><strong>Default Value</strong></td>
                    <td><code>0</code>, <code>0.0</code>, <code>false</code>.</td>
                    <td><code>null</code> (pointing to no Heap memory address).</td>
                  </tr>
                  <tr>
                    <td><strong>Equality (<code>==</code>)</strong></td>
                    <td>Compares literal binary values.</td>
                    <td>Compares Stack reference pointers, NOT object content!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `,
          analogy: "A Primitive variable is cash in your pocket. A Reference variable is an ATM card holding the pointer to your bank locker.",
          trap: "Comparing objects with `==` checks pointer equality in Stack. Always use `.equals()` for logical value comparison.",
          codeSnippet: {
            filename: "MemoryDemo.java",
            code: `public class MemoryDemo {
    public static void main(String[] args) {
        int primitiveA = 100;
        int primitiveB = primitiveA; // Binary value 100 copied
        primitiveB = 200;

        int[] refArray1 = {10, 20, 30};
        int[] refArray2 = refArray1; // Memory pointer copied!

        refArray2[0] = 999; // Mutates single Heap array!

        System.out.println("primitiveA: " + primitiveA + " (Unchanged!)");
        System.out.println("primitiveB: " + primitiveB);
        System.out.println("refArray1[0]: " + refArray1[0] + " (Mutated in Heap!)");
    }
}`,
            output: `primitiveA: 100 (Unchanged!)
primitiveB: 200
refArray1[0]: 999 (Mutated in Heap!)`
          }
        },
        {
          id: "u3-t3",
          title: "Pass by Value v/s Pass by Reference (The Java Memory Truth)",
          image: "images/pass_by_value.jpg",
          imageCaption: "Visual Diagram: Step-by-Step Proof of Java's Strict Pass-by-Value Parameter Passing",
          content: `
            <p><strong>Universal Truth: Java is strictly 100% Pass-by-Value, ALWAYS!</strong></p>
            <ul>
              <li>When passing a primitive, Java copies the literal binary value.</li>
              <li>When passing an object, Java copies the <strong>reference value (the memory address pointer)</strong> onto the method's stack frame.</li>
              <li>Modifying object fields through the copied reference mutates the Heap object.</li>
              <li>However, <em>reassigning the reference variable itself</em> has ZERO effect on the caller's reference variable!</li>
            </ul>
          `,
          analogy: "If you share a Google Doc link (reference copy), your peer can edit the document content. But if they delete the email containing the link (reassign reference), your document and original link remain intact.",
          trap: "MCA Exam / Placement Question: 'Does Java support pass-by-reference?' Answer: 'No, Java is strictly pass-by-value of the reference pointer.'",
          codeSnippet: {
            filename: "PassByValueProof.java",
            code: `class Student {
    String name;
    Student(String name) { this.name = name; }
}

public class PassByValueProof {
    public static void modifyStudent(Student s) {
        s.name = "Rahul Kumar"; // Mutates Heap Object!
        s = new Student("Amit Sharma"); // Reassigning local pointer has NO effect outside!
    }

    public static void main(String[] args) {
        Student s1 = new Student("Priya Singh");
        System.out.println("Before call: " + s1.name);
        modifyStudent(s1);
        System.out.println("After call:  " + s1.name + " (Caller pointer untouched!)");
    }
}`,
            output: `Before call: Priya Singh
After call:  Rahul Kumar (Caller pointer untouched!)`
          }
        },
        {
          id: "u3-t4",
          title: "Static Variables/Methods, Cross-Class Access & Reference vs Static",
          image: "images/static_vs_instance.jpg",
          imageCaption: "Visual Diagram: Metaspace (1 Shared Static Variable) vs Heap Memory (Separate Instance Copies)",
          content: `
            <p>The <code>static</code> keyword associates a member with the Class itself rather than individual object instances:</p>
            <ul>
              <li><strong>Static Variable:</strong> Allocated once per class load in Metaspace/Heap. Shared across all instances.</li>
              <li><strong>Reference Variable vs Static Variable:</strong> A reference variable points to a specific instance in Heap; a static variable belongs globally to the class blueprint.</li>
              <li><strong>Cross-Class Static Access:</strong> Directly accessed via <code>ClassName.staticMember</code> without creating an object with <code>new</code>.</li>
            </ul>
          `,
          analogy: "Static variable = College Notice Board (one copy for the whole college); Reference variable = Student's personal notebook (separate copy per student).",
          trap: "Can static methods be overridden? No! They are resolved at compile-time (Method Hiding, not Dynamic Method Dispatch).",
          codeSnippet: {
            filename: "StaticCrossClassDemo.java",
            code: `class InstituteConfig {
    public static String INSTITUTE_NAME = "LNMI Patna (C-DAC ACTS Center)";
    public static int enrolledCount = 0;

    public static void registerCandidate(String name) {
        enrolledCount++;
        System.out.println("Enrolled: " + name + " | Total: " + enrolledCount);
    }
}

public class StaticCrossClassDemo {
    public static void main(String[] args) {
        // Direct Cross-Class Access
        System.out.println("Center: " + InstituteConfig.INSTITUTE_NAME);
        InstituteConfig.registerCandidate("Aman Verma");
        InstituteConfig.registerCandidate("Sneha Roy");
    }
}`,
            output: `Center: LNMI Patna (C-DAC ACTS Center)
Enrolled: Aman Verma | Total: 1
Enrolled: Sneha Roy | Total: 2`
          }
        },
        {
          id: "u3-t5",
          title: "Inheritance & Polymorphism Implementation",
          image: "images/inheritance_polymorphism.jpg",
          imageCaption: "Visual Diagram: Inheritance, Overriding and Dynamic Method Dispatch (Runtime Polymorphism)",
          content: `
            <p>Polymorphism allows a parent reference to hold child objects and invoke overridden methods dynamically at runtime:</p>
            <ul>
              <li><strong>Method Overloading (Compile-Time):</strong> Same method name with different argument signatures in the same class.</li>
              <li><strong>Method Overriding (Runtime / Dynamic Method Dispatch):</strong> Subclass provides specific implementation of superclass method. Executed based on runtime Heap object.</li>
              <li><strong>Upcasting:</strong> <code>Parent p = new Child();</code> (Implicit & Safe).</li>
              <li><strong>Downcasting:</strong> <code>Child c = (Child) p;</code> (Explicit, verify with <code>instanceof</code>).</li>
            </ul>
          `,
          analogy: "A Universal Remote (Parent Reference) controlling a Sony TV or Samsung TV (Child Objects). Pressing 'Power' executes the specific TV's power routine.",
          trap: "Variables are NOT polymorphic in Java. If `Parent p = new Child();` and both define `int x`, `p.x` accesses Parent's field.",
          codeSnippet: {
            filename: "PolymorphismDemo.java",
            code: `class Employee {
    String name;
    Employee(String name) { this.name = name; }
    void calculateBonus() {
        System.out.println(name + " standard bonus: 5%");
    }
}

class Manager extends Employee {
    Manager(String name) { super(name); }
    @Override
    void calculateBonus() {
        System.out.println(name + " executive managerial bonus: 20%");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Employee emp = new Manager("Vikram Malhotra");
        emp.calculateBonus(); // Dynamic Method Dispatch -> Manager's version!
    }
}`,
            output: `Vikram Malhotra executive managerial bonus: 20%`
          }
        }
      ]
    },
    {
      id: "unit4-io",
      unitNumber: 4,
      navTitle: "I/O & Exceptions",
      unitCode: "UNIT 4",
      title: "Java IO and Exceptions",
      summary: "InputStream, OutputStream, Reader and Writer interfaces, Serialization and de-serialization, Shallow copy and Deep copy, Exception hierarchy, Errors, Checked and un-checked exceptions, Exception propagation, try-catch-finally, throws clause, throw keyword, Multi-catch, Creating user-defined checked and unchecked exceptions.",
      outcomes: "CO3: Develop robust Java applications using exception handling, custom exceptions, and file stream handling.",
      topics: [
        {
          id: "u4-t1",
          title: "InputStream, OutputStream, Reader and Writer Interfaces",
          image: "images/java_io_streams.jpg",
          imageCaption: "Visual Diagram: Byte Streams (InputStream/OutputStream) vs Character Streams (Reader/Writer) & Buffered I/O",
          content: `
            <p>Java IO is split into two stream families:</p>
            <ul>
              <li><strong>Byte Streams (8-bit bytes):</strong> Abstract roots <code>InputStream</code> and <code>OutputStream</code>. Used for binary files (images, audio, video, raw bytes).</li>
              <li><strong>Character Streams (16-bit Unicode characters):</strong> Abstract roots <code>Reader</code> and <code>Writer</code>. Automatically handles international character encoding (UTF-8, UTF-16) for text files.</li>
              <li><strong>Buffered Streams:</strong> <code>BufferedReader</code> and <code>BufferedWriter</code> reduce expensive disk read/write cycles by maintaining internal memory buffers in RAM.</li>
            </ul>
          `,
          analogy: "Byte stream is transferring water drop-by-drop; Buffered Reader fills a bucket in RAM first and transfers in one batch.",
          trap: "Why shouldn't you read UTF-8 Hindi/Unicode text with `FileInputStream` directly? Because multi-byte characters get fragmented across 8-bit boundaries into corrupted characters!",
          codeSnippet: {
            filename: "FileReadWriteDemo.java",
            code: `import java.io.*;

public class FileReadWriteDemo {
    public static void main(String[] args) {
        File file = new File("cdac_students.txt");

        // 1. Character Stream: BufferedWriter with Try-With-Resources
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(file))) {
            writer.write("C-DAC ACTS & LNMI Patna - MCA Batch 2026\\n");
            writer.write("Course: MC101 - Problem Solving & Java\\n");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 2. Character Stream: BufferedReader
        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println("Read: " + line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`,
            output: `Read: C-DAC ACTS & LNMI Patna - MCA Batch 2026
Read: Course: MC101 - Problem Solving & Java`
          }
        },
        {
          id: "u4-t2",
          title: "Serialization, Deserialization, Shallow Copy & Deep Copy",
          image: "images/serialization_cloning.jpg",
          imageCaption: "Visual Diagram: Java Object Serialization / Deserialization & Shallow vs Deep Copy Graphs",
          content: `
            <p><strong>Serialization:</strong> Mechanism of writing object state into a byte stream. <strong>Deserialization:</strong> Reverse process of rebuilding the in-memory object from the byte stream.</p>
            <ul>
              <li>Class must implement <code>java.io.Serializable</code> (Marker interface).</li>
              <li><code>transient</code> keyword prevents sensitive fields (passwords, encryption keys) from being serialized.</li>
              <li><strong>Shallow Copy:</strong> Copies primitive fields directly, but nested reference variables are shared between original and clone.</li>
              <li><strong>Deep Copy:</strong> Recursively duplicates all nested dependent objects, creating an entirely independent object graph in Heap.</li>
            </ul>
          `,
          analogy: "Shallow copy = 2 people sharing 1 room key. Deep copy = building a separate duplicate room with separate furniture.",
          trap: "If an object contains a non-serializable reference field without `transient`, JVM throws `NotSerializableException` at runtime!",
          codeSnippet: {
            filename: "SerializationCloningDemo.java",
            code: `import java.io.*;

class Address implements Serializable, Cloneable {
    String city;
    Address(String city) { this.city = city; }
    @Override public Address clone() { return new Address(city); }
}

class UserAccount implements Serializable {
    String username;
    transient String secretPin; // Will NOT be serialized!
    Address address;

    UserAccount(String username, String pin, Address address) {
        this.username = username;
        this.secretPin = pin;
        this.address = address;
    }
}

public class SerializationCloningDemo {
    public static void main(String[] args) throws Exception {
        UserAccount user = new UserAccount("aniket_sme", "PIN#9944", new Address("Patna"));

        // Serialization
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new ObjectOutputStream(baos);
        oos.writeObject(user);

        // Deserialization
        ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(baos.toByteArray()));
        UserAccount deserialized = (UserAccount) ois.readObject();

        System.out.println("Username: " + deserialized.username);
        System.out.println("Secret PIN: " + deserialized.secretPin + " (Skipped by transient!)");
        System.out.println("City: " + deserialized.address.city);
    }
}`,
            output: `Username: aniket_sme
Secret PIN: null (Skipped by transient!)
City: Patna`
          }
        },
        {
          id: "u4-t3",
          title: "Exception Hierarchy: Errors vs Checked vs Unchecked",
          image: "images/exception_hierarchy.jpg",
          imageCaption: "Visual Diagram: Complete Java Exception Hierarchy (Throwable -> Error & Exception)",
          content: `
            <p>All exceptions and errors in Java inherit from <code>java.lang.Throwable</code>:</p>
            <ul>
              <li><strong><code>Error</code>:</strong> Serious hardware/JVM system failures that programs should not attempt to handle (e.g. <code>OutOfMemoryError</code>, <code>StackOverflowError</code>).</li>
              <li><strong>Checked Exceptions (Compile-Time):</strong> Inherit from <code>Exception</code> (excluding <code>RuntimeException</code>). Compiler enforces handling via <code>try-catch</code> or declaration with <code>throws</code> (e.g. <code>IOException</code>, <code>SQLException</code>).</li>
              <li><strong>Unchecked Exceptions (Runtime):</strong> Inherit from <code>RuntimeException</code>. Indicate programming bugs/logic flaws (e.g. <code>NullPointerException</code>, <code>ArithmeticException</code>, <code>ArrayIndexOutOfBoundsException</code>).</li>
            </ul>
          `,
          analogy: "Checked exception = airport security passport check before boarding. Unchecked exception = spilling coffee on yourself during the flight.",
          trap: "Is `NullPointerException` checked or unchecked? Unchecked, because it extends `RuntimeException`!",
          codeSnippet: {
            filename: "ExceptionHierarchyDemo.java",
            code: `public class ExceptionHierarchyDemo {
    public static void main(String[] args) {
        // Multi-catch block handling diverse runtime exceptions
        try {
            int[] arr = {10, 20};
            int divisor = 0;
            int result = arr[0] / divisor;
        } catch (ArithmeticException | ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught Expected Exception: " + e.getClass().getSimpleName());
            System.out.println("Message: " + e.getMessage());
        }
    }
}`,
            output: `Caught Expected Exception: ArithmeticException
Message: / by zero`
          }
        },
        {
          id: "u4-t4",
          title: "Exception Propagation, try-catch-finally, throws & throw",
          image: "images/exception_propagation.jpg",
          imageCaption: "Visual Diagram: Exception Propagation down the Call Stack & try-catch-finally Flow",
          content: `
            <p>Java handles exceptions through a structured control flow:</p>
            <ul>
              <li><code>try</code>: Encloses risky code.</li>
              <li><code>catch</code>: Catches specific exception types. Multi-catch syntax: <code>catch (IOException | SQLException e)</code>.</li>
              <li><code>finally</code>: Guaranteed to execute regardless of whether an exception occurred or was caught.</li>
              <li><strong>Exception Propagation:</strong> If unhandled in the current method, the exception drops down the call stack to the calling method.</li>
              <li><code>throw</code> (triggers exception) vs <code>throws</code> (declares method can throw exception).</li>
            </ul>
          `,
          analogy: "Hot Potato game: If a method cannot handle the hot potato (exception), it passes it down the call stack to its caller.",
          trap: "Does `finally` block execute if `try` block has a `return;` statement? YES! `finally` always executes right before return.",
          codeSnippet: {
            filename: "PropagationDemo.java",
            code: `public class PropagationDemo {
    static void methodC() {
        int res = 50 / 0; // Throws ArithmeticException
    }

    static void methodB() {
        methodC(); // Propagates upward
    }

    static void methodA() {
        try {
            methodB();
        } catch (ArithmeticException e) {
            System.out.println("Caught propagated exception in methodA: " + e.getMessage());
        } finally {
            System.out.println("Cleanup executed in finally block guaranteed!");
        }
    }

    public static void main(String[] args) {
        methodA();
    }
}`,
            output: `Caught propagated exception in methodA: / by zero
Cleanup executed in finally block guaranteed!`
          }
        },
        {
          id: "u4-t5",
          title: "Creating User-Defined Checked & Unchecked Exceptions",
          image: "images/custom_exceptions.jpg",
          imageCaption: "Visual Diagram: Defining, Throwing and Handling Custom Checked vs Unchecked Exceptions",
          content: `
            <p>Custom exceptions give domain-specific meaning to business logic errors:</p>
            <ul>
              <li><strong>Custom Checked Exception:</strong> Extend <code>java.lang.Exception</code>. Caller is forced to handle or declare with <code>throws</code>.</li>
              <li><strong>Custom Unchecked Exception:</strong> Extend <code>java.lang.RuntimeException</code>. Used for invalid internal business state violations.</li>
            </ul>
          `,
          analogy: "Creating a custom traffic fine ticket specifically for 'LNMI Parking Violation' instead of a generic fine.",
          trap: "Always provide constructors taking `(String message)` and `(String message, Throwable cause)` to preserve the exception cause chain.",
          codeSnippet: {
            filename: "CustomBankingExceptionDemo.java",
            code: `// Custom Checked Exception
class InsufficientFundsException extends Exception {
    private double shortfall;
    public InsufficientFundsException(double shortfall) {
        super("Transaction Failed: Short by ₹" + shortfall);
        this.shortfall = shortfall;
    }
    public double getShortfall() { return shortfall; }
}

public class CustomBankingExceptionDemo {
    private static double balance = 5000;

    public static void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(amount - balance);
        }
        balance -= amount;
        System.out.println("Withdrawal successful! Remaining: ₹" + balance);
    }

    public static void main(String[] args) {
        try {
            System.out.println("Attempting to withdraw ₹8,000 from balance ₹5,000...");
            withdraw(8000);
        } catch (InsufficientFundsException e) {
            System.err.println("Caught Custom Exception: " + e.getMessage());
            System.err.println("Shortfall amount: ₹" + e.getShortfall());
        }
    }
}`,
            output: `Attempting to withdraw ₹8,000 from balance ₹5,000...
Caught Custom Exception: Transaction Failed: Short by ₹3000.0
Shortfall amount: ₹3000.0`
          }
        }
      ]
    },
    {
      id: "unit5-collections-threads",
      unitNumber: 5,
      navTitle: "Collections & Threads",
      unitCode: "UNIT 5",
      title: "Java Collections & Multithreading",
      summary: "Collection hierarchy List, Queue, Set and Map Collections, Collections class, Comparable and Comparator interfaces, MultiThreading: Thread class and Runnable Interface, Deadlock & Thread Synchronization, Wait, notify and notifyAll methods.",
      outcomes: "CO4: Build modular, reusable, thread-safe programs following industry-standard concurrent design patterns.",
      topics: [
        {
          id: "u5-t1",
          title: "Introduction to Collections & Collection Hierarchy (List, Queue, Set, Map)",
          image: "images/collections_hierarchy.jpg",
          imageCaption: "Visual Diagram: Complete Java Collections Framework Hierarchy",
          content: `
            <p>Java Collections Framework provides standardized, high-performance data structures:</p>
            <ul>
              <li><code>Iterable<T></code> $\rightarrow$ <code>Collection<T></code> $\rightarrow$ <code>List<T></code>, <code>Set<T></code>, <code>Queue<T></code>.</li>
              <li><code>Map<K,V></code> is a separate key-value hierarchy (<code>HashMap</code>, <code>TreeMap</code>, <code>LinkedHashMap</code>).</li>
              <li><strong><code>List</code>:</strong> Ordered sequence, allows duplicates. <code>ArrayList</code> (Dynamic array, O(1) random access), <code>LinkedList</code> (Doubly-linked, fast ends insertion).</li>
              <li><strong><code>Set</code>:</strong> Unique elements only. <code>HashSet</code> (O(1) hashing), <code>TreeSet</code> (Red-Black tree sorted).</li>
              <li><strong><code>Queue</code>:</strong> FIFO / Priority ordering. <code>PriorityQueue</code> (Min-heap).</li>
            </ul>
          `,
          analogy: "ArrayList = row of numbered lockers; LinkedList = train compartments; HashSet = bag of unique branded tokens; Map = student roll number lookup directory.",
          trap: "When to use ArrayList vs LinkedList? Use ArrayList for 95% of cases because modern CPU cache lines favor contiguous array memory!",
          codeSnippet: {
            filename: "ListAndSetDemo.java",
            code: `import java.util.*;

public class ListAndSetDemo {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(Arrays.asList("Java", "C-DAC", "LNMI", "Java"));
        System.out.println("ArrayList (Preserves Order + Duplicates): " + list);

        Set<String> set = new HashSet<>(list);
        System.out.println("HashSet (Deduplicated Unordered): " + set);

        Set<String> treeSet = new TreeSet<>(set);
        System.out.println("TreeSet (Deduplicated & Red-Black Tree Sorted): " + treeSet);
    }
}`,
            output: `ArrayList (Preserves Order + Duplicates): [Java, C-DAC, LNMI, Java]
HashSet (Deduplicated Unordered): [LNMI, C-DAC, Java]
TreeSet (Deduplicated & Red-Black Tree Sorted): [C-DAC, Java, LNMI]`
          }
        },
        {
          id: "u5-t2",
          title: "The `Collections` Utility Class, `Comparable` & `Comparator`",
          image: "images/comparable_comparator.jpg",
          imageCaption: "Visual Diagram: Comparable (Single Natural Sorting) vs Comparator (Multiple Custom Sorting)",
          content: `
            <p>Sorting and algorithmic operations on collections in Java:</p>
            <ul>
              <li><strong><code>Collections</code> Class:</strong> Utility class with static algorithms (<code>sort</code>, <code>binarySearch</code>, <code>reverse</code>, <code>shuffle</code>, <code>max</code>, <code>min</code>).</li>
              <li><strong><code>Comparable<T></code>:</strong> In <code>java.lang</code>, defines single <em>natural</em> default sort order via <code>compareTo(T o)</code>.</li>
              <li><strong><code>Comparator<T></code>:</strong> In <code>java.util</code>, defines <em>multiple external</em> custom sorting strategies via <code>compare(T a, T b)</code> using Lambdas.</li>
            </ul>
          `,
          analogy: "Comparable is a student's default Roll Number sequence. Comparator is sorting by CGPA on placement day or by Height on sports day.",
          trap: "What is the difference between `Collection` and `Collections`? `Collection` is a root interface; `Collections` is a utility class with static algorithms.",
          codeSnippet: {
            filename: "ComparableVsComparatorDemo.java",
            code: `import java.util.*;

class Student implements Comparable<Student> {
    int rollNo;
    String name;
    double cgpa;

    Student(int rollNo, String name, double cgpa) {
        this.rollNo = rollNo;
        this.name = name;
        this.cgpa = cgpa;
    }

    @Override
    public int compareTo(Student o) {
        return this.rollNo - o.rollNo; // Natural sort by RollNo
    }

    @Override
    public String toString() {
        return "[" + rollNo + "] " + name + " (CGPA: " + cgpa + ")";
    }
}

public class ComparableVsComparatorDemo {
    public static void main(String[] args) {
        List<Student> list = new ArrayList<>();
        list.add(new Student(103, "Raj", 8.2));
        list.add(new Student(101, "Simran", 9.6));
        list.add(new Student(102, "Amit", 7.9));

        // 1. Natural Sort by RollNo
        Collections.sort(list);
        System.out.println("Natural Sort (RollNo): " + list);

        // 2. Custom Comparator Sort by CGPA Descending
        list.sort((s1, s2) -> Double.compare(s2.cgpa, s1.cgpa));
        System.out.println("Placement Sort (CGPA Desc): " + list);
    }
}`,
            output: `Natural Sort (RollNo): [[101] Simran (CGPA: 9.6), [102] Amit (CGPA: 7.9), [103] Raj (CGPA: 8.2)]
Placement Sort (CGPA Desc): [[101] Simran (CGPA: 9.6), [103] Raj (CGPA: 8.2), [102] Amit (CGPA: 7.9)]`
          }
        },
        {
          id: "u5-t3",
          title: "Multithreading: Thread Class, Runnable Interface & Lifecycle",
          image: "images/multithreading_lifecycle.jpg",
          imageCaption: "Visual Diagram: Java Multithreading Lifecycle, State Machine & Synchronized Monitor Transitions",
          content: `
            <p>Multithreading enables concurrent execution of two or more parts of a program for maximum CPU utilization:</p>
            <ul>
              <li><strong>Extending <code>Thread</code> class:</strong> Simple, but limits inheritance.</li>
              <li><strong>Implementing <code>Runnable</code> interface:</strong> Industry standard! Decouples task execution from thread management and allows extending other classes.</li>
              <li><strong>Thread Lifecycle States:</strong> <code>NEW</code> $\rightarrow$ <code>RUNNABLE</code> $\rightarrow$ <code>BLOCKED</code> / <code>WAITING</code> / <code>TIMED_WAITING</code> $\rightarrow$ <code>TERMINATED</code>.</li>
            </ul>
          `,
          analogy: "Single thread = 1 chef cooking all orders sequentially. Multithreading = 4 chefs cooking different dishes simultaneously in the same kitchen (shared memory).",
          trap: "What happens if you call `t.run()` instead of `t.start()`? `run()` executes synchronously on the caller thread without spawning a new operating system thread!",
          codeSnippet: {
            filename: "ThreadCreationDemo.java",
            code: `public class ThreadCreationDemo {
    public static void main(String[] args) throws InterruptedException {
        Runnable task = () -> {
            String name = Thread.currentThread().getName();
            for (int i = 1; i <= 3; i++) {
                System.out.println("[" + name + "] processing task #" + i);
            }
        };

        Thread t1 = new Thread(task, "Worker-1");
        Thread t2 = new Thread(task, "Worker-2");

        t1.start();
        t2.start();

        t1.join();
        t2.join();
        System.out.println("All threads finished execution!");
    }
}`,
            output: `[Worker-1] processing task #1
[Worker-2] processing task #1
[Worker-1] processing task #2
[Worker-2] processing task #2
[Worker-1] processing task #3
[Worker-2] processing task #3
All threads finished execution!`
          }
        },
        {
          id: "u5-t4",
          title: "Thread Synchronization, Locks & Deadlock Avoidance",
          image: "images/multithreading_lifecycle.jpg",
          imageCaption: "Visual Diagram: Thread Synchronization, Monitor Locks & Critical Section State Transitions",
          content: `
            <p>When multiple threads modify shared mutable state, race conditions occur:</p>
            <ul>
              <li><strong>Intrinsic Lock (Monitor):</strong> Every Java object has a built-in monitor lock. Only one thread can hold this lock at any time.</li>
              <li><strong>Synchronized Block:</strong> <code>synchronized(object) { ... }</code> locks only the critical section for higher performance.</li>
              <li><strong>Deadlock:</strong> Occurs when two or more threads are blocked forever, each holding a lock that the other needs.</li>
              <li><strong>Deadlock Prevention:</strong> Always acquire multiple locks in a fixed, identical global order across all threads!</li>
            </ul>
          `,
          analogy: "A single restroom door with a latch. Only one person can lock the door from inside at a time; others must wait in queue.",
          trap: "Are local variables inside a method thread-safe? YES! Every thread has its own Stack frame with private local variables.",
          codeSnippet: {
            filename: "DeadlockAvoidanceDemo.java",
            code: `public class DeadlockAvoidanceDemo {
    private static final Object LockA = new Object();
    private static final Object LockB = new Object();

    // Solution: Both threads acquire LockA FIRST, then LockB!
    public static void safeTask1() {
        synchronized (LockA) {
            synchronized (LockB) {
                System.out.println("[Thread 1] Acquired LockA & LockB safely");
            }
        }
    }

    public static void safeTask2() {
        synchronized (LockA) { // Always same lock acquisition order
            synchronized (LockB) {
                System.out.println("[Thread 2] Acquired LockA & LockB safely");
            }
        }
    }

    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(DeadlockAvoidanceDemo::safeTask1);
        Thread t2 = new Thread(DeadlockAvoidanceDemo::safeTask2);
        t1.start(); t2.start();
        t1.join(); t2.join();
        System.out.println("Execution completed with ZERO deadlocks!");
    }
}`,
            output: `[Thread 1] Acquired LockA & LockB safely
[Thread 2] Acquired LockA & LockB safely
Execution completed with ZERO deadlocks!`
          }
        },
        {
          id: "u5-t5",
          title: "Inter-Thread Communication: `wait()`, `notify()` & `notifyAll()`",
          image: "images/multithreading_lifecycle.jpg",
          imageCaption: "Visual Diagram: Producer-Consumer Coordination via wait(), notify() & Monitor Release",
          content: `
            <p>Threads communicate through shared objects using methods in <code>java.lang.Object</code>:</p>
            <ul>
              <li><code>wait()</code>: Causes current thread to release the monitor lock and wait until another thread invokes <code>notify()</code> or <code>notifyAll()</code>. Must be called inside a <code>synchronized</code> context!</li>
              <li><code>notify()</code>: Wakes up a single arbitrary waiting thread.</li>
              <li><code>notifyAll()</code>: Wakes up all waiting threads.</li>
            </ul>
          `,
          analogy: "A restaurant serving counter: Waiter waits (`wait()`) when counter is empty; Chef rings bell (`notify()`) when a hot dish is ready.",
          trap: "Why are `wait()` and `notify()` defined in `Object` class instead of `Thread` class? Because locks belong to individual objects in Heap, not threads!",
          codeSnippet: {
            filename: "ProducerConsumerDemo.java",
            code: `import java.util.*;

class Buffer {
    private final Queue<String> queue = new LinkedList<>();
    private final int CAPACITY = 2;

    public synchronized void produce(String item) throws InterruptedException {
        while (queue.size() == CAPACITY) { wait(); }
        queue.add(item);
        System.out.println("  [+ PRODUCED] " + item);
        notifyAll();
    }

    public synchronized String consume() throws InterruptedException {
        while (queue.isEmpty()) { wait(); }
        String item = queue.poll();
        System.out.println("  [- CONSUMED] " + item);
        notifyAll();
        return item;
    }
}

public class ProducerConsumerDemo {
    public static void main(String[] args) throws InterruptedException {
        Buffer b = new Buffer();
        Thread producer = new Thread(() -> {
            try {
                b.produce("AdmitCard-MCA-101");
                b.produce("AdmitCard-MCA-102");
            } catch (InterruptedException e) {}
        });
        Thread consumer = new Thread(() -> {
            try {
                b.consume();
                b.consume();
            } catch (InterruptedException e) {}
        });

        producer.start(); consumer.start();
        producer.join(); consumer.join();
    }
}`,
            output: `  [+ PRODUCED] AdmitCard-MCA-101
  [- CONSUMED] AdmitCard-MCA-101
  [+ PRODUCED] AdmitCard-MCA-102
  [- CONSUMED] AdmitCard-MCA-102`
          }
        }
      ]
    }
  ],

  // Placement & Viva Vault (32 Comprehensive Questions across Units 3, 4, 5)
  interviewVault: [
    {
      id: "q1",
      category: "Unit 3: OOPs",
      difficulty: "medium",
      question: "Is Java strictly Pass-by-Value or Pass-by-Reference?",
      answer: "Java is strictly **Pass-by-Value**. For primitive data types, the actual binary value is copied. For objects, the **reference value (memory address pointer)** is copied onto the method's stack frame. You can mutate the object in Heap via that copied reference, but reassigning the reference variable itself inside the method will never affect the caller's variable.",
      trap: "Interviewers often write a swap(Object a, Object b) method and ask why the original references didn't swap. The answer: because local parameters were swapped, not caller's references!"
    },
    {
      id: "q2",
      category: "Unit 3: OOPs",
      difficulty: "easy",
      question: "What is the difference between Primitive and Reference Data Types?",
      answer: "Primitive types (`int`, `boolean`, `char`, etc.) hold raw values directly in Stack memory (or inside Heap objects). Reference types (`String`, custom classes, Arrays) hold a pointer on Stack that points to the actual object allocated on the Heap. Primitives have fixed default values (like 0, false), while uninitialized references default to `null`.",
      trap: "Using `==` on reference types compares memory addresses, not object values. Always use `.equals()` for content comparison."
    },
    {
      id: "q3",
      category: "Unit 3: OOPs",
      difficulty: "medium",
      question: "Can we override static methods in Java?",
      answer: "No, static methods cannot be overridden. If a subclass declares a static method with the same signature as a parent class static method, it is called **Method Hiding**, not Method Overriding. Method binding for static methods happens at compile time based on reference type, whereas overriding uses Dynamic Method Dispatch based on the runtime Heap object.",
      trap: "If `Parent p = new Child(); p.staticMethod();` is called, it executes the Parent's static method!"
    },
    {
      id: "q4",
      category: "Unit 3: OOPs",
      difficulty: "easy",
      question: "What is the difference between Method Overloading and Method Overriding?",
      answer: "**Method Overloading** (Compile-time Polymorphism) occurs within the same class where methods share the same name but differ in parameter count, type, or order. **Method Overriding** (Runtime Polymorphism) occurs between superclass and subclass where the subclass provides a specific implementation of a parent method with the exact same signature and compatible return type.",
      trap: "Changing only the return type without changing parameter signatures is a compile-time error, NOT method overloading!"
    },
    {
      id: "q5",
      category: "Unit 3: OOPs",
      difficulty: "medium",
      question: "What is the difference between an Abstract Class and an Interface?",
      answer: "An **Abstract Class** can have state (instance variables), constructors, and full method implementations alongside abstract methods. It is extended via single inheritance (`extends`). An **Interface** represents a pure contract (traditionally 100% abstract; in Java 8+ supports `default` and `static` methods, and in Java 9+ `private` methods). A class can implement multiple interfaces (`implements`), achieving multiple inheritance of type.",
      trap: "Interface fields are implicitly `public static final` (constants), and interface methods are implicitly `public abstract` (unless default/static)."
    },
    {
      id: "q6",
      category: "Unit 3: OOPs",
      difficulty: "medium",
      question: "What is Constructor Chaining and how do `this()` and `super()` work?",
      answer: "**Constructor Chaining** is the process of calling one constructor from another constructor within the same class (using `this(...)`) or from a parent class (using `super(...)`). If neither is written, the compiler automatically inserts `super();` as the very first line of any constructor.",
      trap: "`this()` or `super()` MUST be the very first statement inside a constructor. You cannot use both in the same constructor!"
    },
    {
      id: "q7",
      category: "Unit 3: OOPs",
      difficulty: "hard",
      question: "Can a Constructor be made `private`? Where is this used in industry?",
      answer: "Yes! A private constructor prevents external classes from directly instantiating the class using `new`. This is foundational in: 1) **Singleton Design Pattern** (ensuring only 1 global instance exists via `getInstance()`), 2) **Utility Classes** (like `java.lang.Math` containing only static helper methods), and 3) **Factory Method Patterns**.",
      trap: "If a class has only private constructors, it CANNOT be subclassed (inherited from) because the child class constructor cannot invoke `super()`."
    },
    {
      id: "q8",
      category: "Unit 3: OOPs",
      difficulty: "medium",
      question: "What is the String Constant Pool (SCP) and why are Strings immutable in Java?",
      answer: "The **String Constant Pool** is a special memory region inside the Heap where String literals are cached. When `String s = \"hello\";` is executed, the JVM checks the pool: if found, it returns the existing reference; otherwise, it creates a new object in the pool. Strings are made **immutable** for: 1) Thread safety, 2) Security (passwords, URLs, network sockets cannot be mutated by untrusted code), and 3) Hash code caching in HashMaps.",
      trap: "`String s = new String(\"hello\");` creates TWO objects: one in normal Heap memory and one in the String Constant Pool (if not already present)."
    },
    {
      id: "q9",
      category: "Unit 3: OOPs",
      difficulty: "hard",
      question: "What is Covariant Return Type in Java?",
      answer: "Since Java 5, an overriding method in a child class can declare a **narrower (more specific child) return type** than the return type declared in the parent method. For example, if parent method returns `Object`, the child method can return `String` or `Student`.",
      trap: "Covariant return types only apply to reference types (classes/interfaces), NOT to primitive types (e.g. you cannot change `double` to `int`)."
    },
    {
      id: "q10",
      category: "Unit 3: OOPs",
      difficulty: "easy",
      question: "What are the 4 Access Specifiers in Java and what are their scopes?",
      answer: "1) `private`: Accessible only within the same class. 2) `default` (package-private): Accessible only within the same package. 3) `protected`: Accessible within the same package PLUS subclasses in different packages. 4) `public`: Accessible from anywhere across all packages.",
      trap: "Top-level classes in Java can only be declared `public` or `default` (package-private). They cannot be declared `private` or `protected`."
    },
    {
      id: "q11",
      category: "Unit 4: I/O & Exceptions",
      difficulty: "hard",
      question: "What is the difference between Shallow Copy and Deep Copy in Java?",
      answer: "A **Shallow Copy** duplicates only the top-level object and copies references to nested objects. As a result, both the original and clone share the exact same child objects in memory. A **Deep Copy** duplicates the top-level object AND recursively duplicates all nested objects, creating an entirely independent object graph in Heap.",
      trap: "Default `super.clone()` in `Object` creates a shallow copy. To achieve deep copy, you must explicitly clone nested mutable objects or use Serialization."
    },
    {
      id: "q12",
      category: "Unit 4: I/O & Exceptions",
      difficulty: "medium",
      question: "What is the difference between Checked and Unchecked Exceptions?",
      answer: "Checked exceptions inherit from `Exception` (except `RuntimeException`) and are checked by the compiler at compile-time (e.g. `IOException`, `SQLException`). The compiler forces the developer to handle them via `try-catch` or declare them with `throws`. Unchecked exceptions inherit from `RuntimeException` (e.g. `NullPointerException`, `ArithmeticException`) and indicate programming flaws that occur at runtime.",
      trap: "`Errors` (like `OutOfMemoryError`) are also unchecked, but they indicate severe system failures rather than recoverable application exceptions."
    },
    {
      id: "q13",
      category: "Unit 4: I/O & Exceptions",
      difficulty: "medium",
      question: "Does the `finally` block always execute in Java?",
      answer: "Yes, `finally` executes whether an exception is thrown, caught, or even if the `try`/`catch` block has a `return;` statement. The only exceptions when `finally` does NOT execute are: 1) Calling `System.exit(0)`, 2) Fatal JVM crash/power failure, or 3) Infinite loop / deadlock in try block.",
      trap: "If both `try` and `finally` contain `return` statements, the `finally` block's return value will override the `try` block's return value."
    },
    {
      id: "q14",
      category: "Unit 4: I/O & Exceptions",
      difficulty: "easy",
      question: "What is the difference between `final`, `finally`, and `finalize()`?",
      answer: "**`final`** is a keyword used to create constants (variables), prevent method overriding (methods), or prevent inheritance (classes). **`finally`** is a control block in exception handling that always executes for cleanup. **`finalize()`** was a method in `Object` invoked by the Garbage Collector before reclaiming an object (deprecated in Java 9+).",
      trap: "Never rely on `finalize()` for resource cleanup (closing files/sockets) because GC execution timing is non-deterministic. Always use Try-with-Resources!"
    },
    {
      id: "q15",
      category: "Unit 4: I/O & Exceptions",
      difficulty: "medium",
      question: "What is Exception Propagation in Java?",
      answer: "**Exception Propagation** is the mechanism where an unhandled exception thrown in a method drops down the call stack to the previous calling method. If that caller does not catch it either, it continues dropping down until it reaches `main()`. If `main()` does not catch it, the default JVM Exception Handler terminates the thread and prints the stack trace.",
      trap: "By default, Unchecked Exceptions automatically propagate up the call stack without requiring `throws`. Checked Exceptions MUST be declared with `throws` at every level."
    },
    {
      id: "q16",
      category: "Unit 4: I/O & Exceptions",
      difficulty: "medium",
      question: "What is Try-with-Resources and why is it preferred over traditional `try-finally`?",
      answer: "**Try-with-Resources** (introduced in Java 7) automatically closes all resources declared inside `try(...)` parentheses at the end of the block. Any class implementing `java.lang.AutoCloseable` or `java.io.Closeable` can be used. It eliminates boilerplate `finally` blocks and prevents resource leaks even if exceptions occur during closure.",
      trap: "Resources declared in Try-with-Resources are closed in reverse order of their declaration."
    },
    {
      id: "q17",
      category: "Unit 4: I/O & Exceptions",
      difficulty: "hard",
      question: "What is `serialVersionUID` and what happens if it is omitted in a Serializable class?",
      answer: "`serialVersionUID` is a unique version identifier for a `Serializable` class used during deserialization to verify that the sender and receiver of a serialized object have loaded classes for that object that are compatible. If you omit it, the JVM calculates one automatically based on class structure. If any field or method is added/modified later, the auto-generated ID changes, causing an `InvalidClassException` during deserialization!",
      trap: "Always explicitly declare `private static final long serialVersionUID = 1L;` to maintain backward compatibility across software versions."
    },
    {
      id: "q18",
      category: "Unit 4: I/O & Exceptions",
      difficulty: "medium",
      question: "What is the `transient` keyword and what is its effect during Serialization?",
      answer: "The `transient` keyword marks a field so that its value is **NOT included** in the serialized byte stream. When the object is deserialized, transient fields receive their default values (`null` for references, `0` for numbers, `false` for booleans). It is used for sensitive data (passwords, PINs) or transient runtime handles (open file descriptors, thread locks).",
      trap: "`static` variables are ALSO not serialized, but because they belong to the Class (Metaspace), not to any individual object instance."
    },
    {
      id: "q19",
      category: "Unit 4: I/O & Exceptions",
      difficulty: "easy",
      question: "What is the difference between Byte Streams and Character Streams?",
      answer: "**Byte Streams** (`InputStream` / `OutputStream`) read and write data in raw 8-bit bytes, making them ideal for binary files (images, PDFs, audio, videos, compiled `.class` files). **Character Streams** (`Reader` / `Writer`) read and write data in 16-bit Unicode characters, handling character encoding and translation automatically, making them ideal for plain text files.",
      trap: "Reading a UTF-8 text file with raw `FileInputStream` can corrupt multi-byte non-ASCII characters. Use `FileReader` or `InputStreamReader` for text!"
    },
    {
      id: "q20",
      category: "Unit 4: I/O & Exceptions",
      difficulty: "medium",
      question: "What are the rules for Multi-Catch blocks (`catch(IOException | SQLException e)`)?",
      answer: "Introduced in Java 7, a **Multi-Catch block** allows catching multiple unrelated exception types in a single `catch` clause using the pipe `|` operator. Rules: 1) The exception parameter `e` is implicitly `final` and cannot be reassigned. 2) The exceptions listed in the multi-catch MUST NOT have an inheritance relationship (e.g. `catch(FileNotFoundException | IOException e)` is illegal because `FileNotFoundException` is a subclass of `IOException`).",
      trap: "Listing parent and child exceptions together in a multi-catch causes a compile-time error: 'Types in multi-catch must be disjoint'."
    },
    {
      id: "q21",
      category: "Unit 5: Collections",
      difficulty: "hard",
      question: "Why must we override `hashCode()` whenever we override `equals()`?",
      answer: "Because hashed collections like `HashSet`, `HashMap`, and `Hashtable` rely on the **`hashCode` and `equals` contract**: If two objects are equal according to `equals()`, they MUST return the exact same `hashCode()`. If you only override `equals()`, two logically equal objects will produce different hash codes and end up in different hash buckets, resulting in duplicate entries in a `HashSet` or failed lookups in a `HashMap`.",
      trap: "Two unequal objects CAN have the same hash code (called a Hash Collision), which is handled using bucket linked-lists / red-black trees."
    },
    {
      id: "q22",
      category: "Unit 5: Collections",
      difficulty: "hard",
      question: "How does `HashMap.put(key, value)` work internally in Java 8+?",
      answer: "1) Computes `hash(key)`. 2) Finds bucket index: `index = (n - 1) & hash`. 3) If bucket is empty, inserts a new `Node`. 4) If bucket has nodes (collision), iterates through: if matching key is found via `equals()`, overwrites value; otherwise appends node to linked list. 5) If bucket linked list length reaches **8 (TREEIFY_THRESHOLD)** and array capacity is at least 64, the linked list converts into a **Red-Black Balanced Tree** (improving worst-case search from O(n) to O(log n)).",
      trap: "Default initial capacity of `HashMap` is 16 and default load factor is 0.75 (rehashes when size reaches 12)."
    },
    {
      id: "q23",
      category: "Unit 5: Collections",
      difficulty: "easy",
      question: "What is the difference between `ArrayList` and `LinkedList`?",
      answer: "`ArrayList` is backed by a dynamic resizable array, offering **O(1) fast random access** by index, but slow O(n) element insertions/deletions in the middle (due to element shifting). `LinkedList` is backed by a doubly-linked list of nodes, offering **O(1) fast insertions/deletions at head/tail**, but slow O(n) sequential traversal to access an index.",
      trap: "`ArrayList` is usually faster in real-world memory caches because contiguous arrays benefit from CPU cache line prefetching."
    },
    {
      id: "q24",
      category: "Unit 5: Collections",
      difficulty: "medium",
      question: "What is the difference between `Comparable` and `Comparator`?",
      answer: "`Comparable` (in `java.lang`) provides a single *natural* sorting order via `int compareTo(T o)` and requires modifying the entity class. `Comparator` (in `java.util`) allows creating *multiple, external* custom sorting strategies via `int compare(T o1, T o2)` without changing the entity class.",
      trap: "`Comparable` is implemented inside the class, while `Comparator` is passed as an external parameter to `Collections.sort()`."
    },
    {
      id: "q25",
      category: "Unit 5: Collections",
      difficulty: "medium",
      question: "What is the difference between Fail-Fast and Fail-Safe Iterators?",
      answer: "**Fail-Fast Iterators** (e.g. `ArrayList.iterator()`, `HashMap.keySet().iterator()`) operate directly on the collection's data structure and immediately throw `ConcurrentModificationException` if the collection is structurally modified during iteration (detected via internal `modCount`). **Fail-Safe / Weakly-Consistent Iterators** (e.g. `CopyOnWriteArrayList`, `ConcurrentHashMap`) operate on a cloned copy or safe segment and never throw `ConcurrentModificationException`.",
      trap: "Calling `iterator.remove()` while iterating over an `ArrayList` is SAFE and does not throw `ConcurrentModificationException`. Calling `list.remove()` directly during foreach loop WILL throw it!"
    },
    {
      id: "q26",
      category: "Unit 5: Collections",
      difficulty: "medium",
      question: "What is the difference between `HashMap`, `Hashtable`, and `ConcurrentHashMap`?",
      answer: "`HashMap` is non-synchronized (not thread-safe), fast, and permits 1 null key and multiple null values. `Hashtable` is legacy, thread-safe by locking the entire table on every method (slow bottleneck), and permits no nulls. `ConcurrentHashMap` (in `java.util.concurrent`) is highly scalable and thread-safe using **bucket-level locks (CAS + synchronized on individual bucket heads)** without locking the whole map.",
      trap: "Never use legacy `Hashtable` or `Collections.synchronizedMap()` in modern multi-threaded applications; always prefer `ConcurrentHashMap`."
    },
    {
      id: "q27",
      category: "Unit 5: Threads",
      difficulty: "medium",
      question: "What is the difference between `t.start()` and `t.run()` in Java?",
      answer: "`t.start()` registers the thread with the OS thread scheduler, allocates a new call stack, transitions state to `RUNNABLE`, and asynchronously invokes `run()`. Calling `t.run()` directly just executes the method synchronously on the existing caller thread like a standard method call, without spawning a new thread.",
      trap: "Calling `start()` twice on the same Thread object throws `IllegalThreadStateException`."
    },
    {
      id: "q28",
      category: "Unit 5: Threads",
      difficulty: "hard",
      question: "Why are `wait()`, `notify()`, and `notifyAll()` defined in `Object` class rather than `Thread` class?",
      answer: "Because synchronization locks (monitors) are associated with **individual shared Objects in Heap**, not with Threads. When a thread calls `wait()`, it releases the lock on *that specific object's monitor* and waits in that object's wait set. Since any arbitrary Java object can act as a lock, these methods belong to `java.lang.Object`.",
      trap: "Calling `wait()` or `notify()` outside a `synchronized` block throws `IllegalMonitorStateException` at runtime."
    },
    {
      id: "q29",
      category: "Unit 5: Threads",
      difficulty: "hard",
      question: "What is a Deadlock and how can it be avoided in Java?",
      answer: "A **Deadlock** is a condition where two or more threads are permanently blocked, each waiting to acquire a lock currently held by the other (e.g. Thread-1 holds Lock-A and requests Lock-B; Thread-2 holds Lock-B and requests Lock-A). Deadlocks can be prevented by: 1) **Lock Ordering:** Always acquire multiple shared locks in the exact same global sequence across all threads. 2) **Lock Timeouts:** Use `ReentrantLock.tryLock(timeout)`. 3) Minimize lock scope.",
      trap: "You can diagnose deadlocks in production by generating a JVM Thread Dump via `jstack <pid>`."
    },
    {
      id: "q30",
      category: "Unit 5: Threads",
      difficulty: "medium",
      question: "What is the difference between `Thread.sleep()` and `Object.wait()`?",
      answer: "`Thread.sleep(ms)` pauses the current executing thread for a specified duration **WITHOUT releasing any acquired monitor locks**. `Object.wait()` causes the current thread to **release the monitor lock** and wait indefinitely in the object's wait queue until another thread calls `notify()` or `notifyAll()` on that same object.",
      trap: "`sleep()` is a static method in `Thread`, while `wait()` is an instance method in `Object` that MUST be called inside a `synchronized` context."
    },
    {
      id: "q31",
      category: "Unit 5: Threads",
      difficulty: "medium",
      question: "What is the difference between `Runnable` and `Callable` interfaces?",
      answer: "`Runnable` (in `java.lang`) defines `public void run()`, which cannot return any value and cannot throw checked exceptions. `Callable<V>` (in `java.util.concurrent`, Java 5+) defines `public V call() throws Exception`, which can **return a computed result** of generic type `V` and can throw checked exceptions directly to the caller via `Future.get()`.",
      trap: "Submit a `Callable` task to an `ExecutorService` to receive a `Future<T>` handle for asynchronous result retrieval."
    },
    {
      id: "q32",
      category: "Unit 5: Threads",
      difficulty: "easy",
      question: "What is a Daemon Thread and how does it differ from a User Thread?",
      answer: "A **User Thread** is a high-priority foreground thread (e.g. `main()`). The JVM will stay alive and running as long as at least ONE non-daemon user thread is active. A **Daemon Thread** is a low-priority background service thread (e.g. Garbage Collector, finalizer). The JVM terminates immediately when all user threads finish, forcefully killing all remaining daemon threads without running their `finally` blocks.",
      trap: "`thread.setDaemon(true)` MUST be invoked before calling `thread.start()`; invoking it after starting throws `IllegalThreadStateException`."
    }
  ],

  // Lab Assignments (12 Assignments: 7 Easy, 3 Medium, 2 Advanced across Units 3, 4, 5)
  labs: [
    // --- EASY LEVEL LABS ---
    {
      id: "lab1_easy_student",
      title: "Lab 1 [EASY]: Student Class & Static Enrollment Tracker (Unit 3)",
      unit: "Unit 3",
      difficulty: "easy",
      task: "Create a `Student` class with private fields (`rollNo`, `name`, `course`, `feePaid`), public getter/setter methods, a parameterized constructor, and a `static` counter variable `totalStudents` that automatically tracks total enrollments across all instances.",
      testCase: "Instantiate 3 Student objects from main(). Display student profiles and verify the static enrollment counter prints 3.",
      solutionCode: `class Student {
    private int rollNo;
    private String name;
    private String course;
    private double feePaid;
    private static int totalStudents = 0; // Static counter shared by all instances

    public Student(int rollNo, String name, String course, double feePaid) {
        this.rollNo = rollNo;
        this.name = name;
        this.course = course;
        this.feePaid = feePaid;
        totalStudents++; // Incremented on each object creation
    }

    public int getRollNo() { return rollNo; }
    public String getName() { return name; }
    public String getCourse() { return course; }
    public double getFeePaid() { return feePaid; }

    public static int getTotalEnrollments() {
        return totalStudents;
    }

    public void displayProfile() {
        System.out.printf("Roll: %d | Name: %-12s | Course: %-6s | Fee: ₹%.2f%n",
                          rollNo, name, course, feePaid);
    }
}

public class StudentEnrollmentDemo {
    public static void main(String[] args) {
        Student s1 = new Student(101, "Aarav Kumar", "MCA", 45000.0);
        Student s2 = new Student(102, "Sneha Sinha", "MCA", 45000.0);
        Student s3 = new Student(103, "Rohan Verma", "MCA", 45000.0);

        System.out.println("=== LNMI MCA STUDENT ENROLLMENT PROFILES ===");
        s1.displayProfile();
        s2.displayProfile();
        s3.displayProfile();

        System.out.println("--------------------------------------------");
        System.out.println("Total Students Enrolled: " + Student.getTotalEnrollments());
    }
}`,
      output: `=== LNMI MCA STUDENT ENROLLMENT PROFILES ===
Roll: 101 | Name: Aarav Kumar  | Course: MCA    | Fee: ₹45000.00
Roll: 102 | Name: Sneha Sinha  | Course: MCA    | Fee: ₹45000.00
Roll: 103 | Name: Rohan Verma  | Course: MCA    | Fee: ₹45000.00
--------------------------------------------
Total Students Enrolled: 3`
    },
    {
      id: "lab2_easy_overload",
      title: "Lab 2 [EASY]: Geometric Area Calculator using Method Overloading (Unit 3)",
      unit: "Unit 3",
      difficulty: "easy",
      task: "Create a class `AreaCalculator` implementing method overloading for `calculateArea()` to calculate: 1) Area of a Circle (`radius`), 2) Area of a Rectangle (`length`, `breadth`), and 3) Area of a Triangle (`base`, `height`, boolean flag).",
      testCase: "Invoke each overloaded method variant with appropriate parameters and verify calculated floating-point areas.",
      solutionCode: `class AreaCalculator {
    // 1. Circle: π * r^2
    public double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }

    // 2. Rectangle: length * breadth
    public double calculateArea(double length, double breadth) {
        return length * breadth;
    }

    // 3. Triangle: 0.5 * base * height
    public double calculateArea(double base, double height, boolean isTriangle) {
        return 0.5 * base * height;
    }
}

public class OverloadingDemo {
    public static void main(String[] args) {
        AreaCalculator calc = new AreaCalculator();

        double circleArea = calc.calculateArea(7.0);
        double rectArea = calc.calculateArea(12.0, 8.0);
        double triArea = calc.calculateArea(10.0, 5.0, true);

        System.out.println("=== METHOD OVERLOADING AREA CALCULATOR ===");
        System.out.printf("1. Circle Area (r=7.0):        %.2f sq units%n", circleArea);
        System.out.printf("2. Rectangle Area (12.0 x 8.0): %.2f sq units%n", rectArea);
        System.out.printf("3. Triangle Area (b=10.0, h=5): %.2f sq units%n", triArea);
    }
}`,
      output: `=== METHOD OVERLOADING AREA CALCULATOR ===
1. Circle Area (r=7.0):        153.94 sq units
2. Rectangle Area (12.0 x 8.0): 96.00 sq units
3. Triangle Area (b=10.0, h=5): 25.00 sq units`
    },
    {
      id: "lab3_easy_inheritance",
      title: "Lab 3 [EASY]: Employee & Manager Hierarchy with `super` (Unit 3)",
      unit: "Unit 3",
      difficulty: "easy",
      task: "Create a parent class `Person` with name and age, a subclass `Employee` extending `Person` with employee ID and basic salary, and a subclass `Manager` extending `Employee` with department and bonus. Use `super(...)` constructor chaining and override `displayDetails()`.",
      testCase: "Create a Manager object and verify that fields across all three inheritance levels are initialized and displayed properly.",
      solutionCode: `class Person {
    protected String name;
    protected int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    protected int empId;
    protected double basicSalary;

    public Employee(String name, int age, int empId, double basicSalary) {
        super(name, age); // Call Person constructor
        this.empId = empId;
        this.basicSalary = basicSalary;
    }
}

class Manager extends Employee {
    private String department;
    private double bonus;

    public Manager(String name, int age, int empId, double basicSalary, String department, double bonus) {
        super(name, age, empId, basicSalary); // Call Employee constructor
        this.department = department;
        this.bonus = bonus;
    }

    public double getTotalCompensation() {
        return basicSalary + bonus;
    }

    public void displayManagerCard() {
        System.out.println("=== MANAGER PROFILE (MULTILEVEL INHERITANCE) ===");
        System.out.println("Name:          " + name + " (Age: " + age + ")");
        System.out.println("Employee ID:   EMP-" + empId);
        System.out.println("Department:    " + department);
        System.out.printf("Basic Salary:  ₹%.2f%n", basicSalary);
        System.out.printf("Annual Bonus:  ₹%.2f%n", bonus);
        System.out.printf("Total Pay:     ₹%.2f%n", getTotalCompensation());
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Manager mgr = new Manager("Ananya Sen", 32, 2045, 75000.0, "IT & Software", 25000.0);
        mgr.displayManagerCard();
    }
}`,
      output: `=== MANAGER PROFILE (MULTILEVEL INHERITANCE) ===
Name:          Ananya Sen (Age: 32)
Employee ID:   EMP-2045
Department:    IT & Software
Basic Salary:  ₹75000.00
Annual Bonus:  ₹25000.00
Total Pay:     ₹100000.00`
    },
    {
      id: "lab4_easy_exceptions",
      title: "Lab 4 [EASY]: Safe Math Division & Array Bounds with `try-catch-finally` (Unit 4)",
      unit: "Unit 4",
      difficulty: "easy",
      task: "Write a program that safely divides two integers and accesses an array element at a requested index. Handle `ArithmeticException` (division by zero) and `ArrayIndexOutOfBoundsException` (invalid index) gracefully with specific catch blocks and a guaranteed `finally` cleanup block.",
      testCase: "Test case 1: divide by zero. Test case 2: access index 10 on array of size 5. Verify program does not crash and finally block executes in all cases.",
      solutionCode: `public class SafeMathExceptionDemo {
    public static void performSafeDivision(int numerator, int denominator) {
        System.out.printf("Attempting division: %d / %d ...%n", numerator, denominator);
        try {
            int result = numerator / denominator;
            System.out.println("✓ Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("✗ Error Caught: Cannot divide by zero! (" + e.getMessage() + ")");
        } finally {
            System.out.println("↳ [finally] Division operation finished.");
        }
    }

    public static void accessArrayElement(int[] arr, int index) {
        System.out.printf("%nAttempting to read array index [%d] ...%n", index);
        try {
            int val = arr[index];
            System.out.println("✓ Value at index [" + index + "]: " + val);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("✗ Error Caught: Index " + index + " is out of bounds! Array length is " + arr.length);
        } finally {
            System.out.println("↳ [finally] Array access check completed.");
        }
    }

    public static void main(String[] args) {
        performSafeDivision(100, 5);
        performSafeDivision(100, 0); // Triggers ArithmeticException

        int[] scores = { 85, 90, 78, 92, 88 };
        accessArrayElement(scores, 2);
        accessArrayElement(scores, 10); // Triggers ArrayIndexOutOfBoundsException
    }
}`,
      output: `Attempting division: 100 / 5 ...
✓ Result: 20
↳ [finally] Division operation finished.

Attempting division: 100 / 0 ...
✗ Error Caught: Cannot divide by zero! (/ by zero)
↳ [finally] Division operation finished.

Attempting to read array index [2] ...
✓ Value at index [2]: 78
↳ [finally] Array access check completed.

Attempting to read array index [10] ...
✗ Error Caught: Index 10 is out of bounds! Array length is 5
↳ [finally] Array access check completed.`
    },
    {
      id: "lab5_easy_io",
      title: "Lab 5 [EASY]: File Reader & Line/Word Counter using `BufferedReader` (Unit 4)",
      unit: "Unit 4",
      difficulty: "easy",
      task: "Write a program to create a sample text file `syllabus_notes.txt` and read it line-by-line using `BufferedReader` and Try-with-Resources. Count and display the total number of lines, words, and characters.",
      testCase: "Write 3 lines of text to file, read the file back, and print calculated line, word, and character totals.",
      solutionCode: `import java.io.*;

public class FileCounterDemo {
    public static void main(String[] args) {
        String filename = "syllabus_notes.txt";

        // Step 1: Write sample text using FileWriter
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filename))) {
            writer.write("MCA Masterclass on Object Oriented Programming with Java.");
            writer.newLine();
            writer.write("Delivered by SME Aniket at LNMI Patna with CDAC ACTS.");
            writer.newLine();
            writer.write("Mastering Core Java streams collections and multithreading.");
            writer.newLine();
        } catch (IOException e) {
            System.out.println("Write error: " + e.getMessage());
        }

        // Step 2: Read file line-by-line using BufferedReader
        int lineCount = 0;
        int wordCount = 0;
        int charCount = 0;

        System.out.println("=== READING FILE: " + filename + " ===");
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            while ((line = reader.readLine()) != null) {
                lineCount++;
                charCount += line.length();
                String[] words = line.trim().split("\\\\s+");
                if (words.length > 0 && !words[0].isEmpty()) {
                    wordCount += words.length;
                }
                System.out.println("Line " + lineCount + ": " + line);
            }
        } catch (IOException e) {
            System.out.println("Read error: " + e.getMessage());
        }

        System.out.println("--------------------------------------------");
        System.out.println("Total Lines:      " + lineCount);
        System.out.println("Total Words:      " + wordCount);
        System.out.println("Total Characters: " + charCount);
    }
}`,
      output: `=== READING FILE: syllabus_notes.txt ===
Line 1: MCA Masterclass on Object Oriented Programming with Java.
Line 2: Delivered by SME Aniket at LNMI Patna with CDAC ACTS.
Line 3: Mastering Core Java streams collections and multithreading.
--------------------------------------------
Total Lines:      3
Total Words:      23
Total Characters: 171`
    },
    {
      id: "lab6_easy_collections",
      title: "Lab 6 [EASY]: Student Roster Management using `ArrayList` & `Iterator` (Unit 5)",
      unit: "Unit 5",
      difficulty: "easy",
      task: "Implement a student roster using `ArrayList<String>`. Demonstrate: 1) Adding student names, 2) Checking if a student exists (`contains`), 3) Removing an element using `Iterator.remove()`, and 4) Sorting the names alphabetically using `Collections.sort()`.",
      testCase: "Add 5 names, remove 1 student using Iterator, sort alphabetically, and display the final roster.",
      solutionCode: `import java.util.*;

public class StudentRosterDemo {
    public static void main(String[] args) {
        List<String> roster = new ArrayList<>();

        // 1. Add students
        roster.add("Rahul Kumar");
        roster.add("Priya Sharma");
        roster.add("Amit Sinha");
        roster.add("Sneha Roy");
        roster.add("Vikram Patel");

        System.out.println("Initial Roster: " + roster);

        // 2. Search student
        String searchTarget = "Priya Sharma";
        System.out.println("Is '" + searchTarget + "' enrolled? " + roster.contains(searchTarget));

        // 3. Safe removal using Iterator
        Iterator<String> it = roster.iterator();
        while (it.hasNext()) {
            String name = it.next();
            if (name.equals("Amit Sinha")) {
                it.remove(); // Safely removes without ConcurrentModificationException
                System.out.println("✓ Removed 'Amit Sinha' from roster via Iterator.");
            }
        }

        // 4. Sort alphabetically
        Collections.sort(roster);
        System.out.println("%n=== FINAL SORTED MCA ROSTER ===");
        for (int i = 0; i < roster.size(); i++) {
            System.out.printf("%d. %s%n", (i + 1), roster.get(i));
        }
    }
}`,
      output: `Initial Roster: [Rahul Kumar, Priya Sharma, Amit Sinha, Sneha Roy, Vikram Patel]
Is 'Priya Sharma' enrolled? true
✓ Removed 'Amit Sinha' from roster via Iterator.

=== FINAL SORTED MCA ROSTER ===
1. Priya Sharma
2. Rahul Kumar
3. Sneha Roy
4. Vikram Patel`
    },
    {
      id: "lab7_easy_threads",
      title: "Lab 7 [EASY]: Dual Concurrent Counter Threads using `Runnable` (Unit 5)",
      unit: "Unit 5",
      difficulty: "easy",
      task: "Create two concurrent threads using the `Runnable` interface (with Lambdas). Thread-1 prints Even numbers from 2 to 10 with a 100ms pause, and Thread-2 prints Odd numbers from 1 to 9 with a 100ms pause. Use `join()` to ensure `main()` waits for both threads to finish.",
      testCase: "Spawn both threads, verify interleaved execution, and confirm main method prints completion summary only after both threads finish.",
      solutionCode: `public class DualCounterThreadDemo {
    public static void main(String[] args) {
        // Thread 1: Even Numbers
        Thread evenThread = new Thread(() -> {
            for (int i = 2; i <= 10; i += 2) {
                System.out.println("  [Even-Thread] ➜ " + i);
                try { Thread.sleep(100); } catch (InterruptedException e) {}
            }
        }, "EvenThread");

        // Thread 2: Odd Numbers
        Thread oddThread = new Thread(() -> {
            for (int i = 1; i <= 9; i += 2) {
                System.out.println("  [Odd-Thread]  ➜ " + i);
                try { Thread.sleep(100); } catch (InterruptedException e) {}
            }
        }, "OddThread");

        System.out.println("=== STARTING CONCURRENT THREADS ===");
        evenThread.start();
        oddThread.start();

        try {
            evenThread.join(); // Wait for evenThread to terminate
            oddThread.join();  // Wait for oddThread to terminate
        } catch (InterruptedException e) {
            System.out.println("Main interrupted!");
        }

        System.out.println("===================================");
        System.out.println("✓ Both threads terminated. Main method finished!");
    }
}`,
      output: `=== STARTING CONCURRENT THREADS ===
  [Even-Thread] ➜ 2
  [Odd-Thread]  ➜ 1
  [Even-Thread] ➜ 4
  [Odd-Thread]  ➜ 3
  [Even-Thread] ➜ 6
  [Odd-Thread]  ➜ 5
  [Even-Thread] ➜ 8
  [Odd-Thread]  ➜ 7
  [Even-Thread] ➜ 10
  [Odd-Thread]  ➜ 9
===================================
✓ Both threads terminated. Main method finished!`
    },

    // --- MEDIUM & ADVANCED LABS ---
    {
      id: "lab8_med_payroll",
      title: "Lab 8 [MEDIUM]: Polymorphic Payroll Architecture (Unit 3)",
      unit: "Unit 3",
      difficulty: "medium",
      task: "Create an abstract class `Employee` with an abstract method `calculateSalary()`. Implement child classes `FullTimeEmployee` (base salary + allowance) and `Contractor` (hourly rate × hours). Implement dynamic method dispatch and track total employees using a `static` counter.",
      testCase: "Create polymorphic array of Employees, calculate total company expenditure via polymorphic loop, and print static count.",
      solutionCode: `abstract class Employee {
    protected String name;
    protected int id;
    private static int totalCount = 0;

    public Employee(String name, int id) {
        this.name = name;
        this.id = id;
        totalCount++;
    }

    public static int getTotalEmployees() { return totalCount; }
    public abstract double calculateSalary();
}

class FullTimeEmployee extends Employee {
    private double basicSalary;
    private double allowance;

    public FullTimeEmployee(String name, int id, double basic, double allowance) {
        super(name, id);
        this.basicSalary = basic;
        this.allowance = allowance;
    }

    @Override
    public double calculateSalary() {
        return basicSalary + allowance;
    }
}

class Contractor extends Employee {
    private double hourlyRate;
    private int hoursWorked;

    public Contractor(String name, int id, double hourlyRate, int hoursWorked) {
        super(name, id);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    @Override
    public double calculateSalary() {
        return hourlyRate * hoursWorked;
    }
}

public class PayrollDemo {
    public static void main(String[] args) {
        Employee[] staff = {
            new FullTimeEmployee("Rahul Sharma", 101, 50000, 15000),
            new Contractor("Sneha Roy", 102, 500, 80)
        };

        double totalPayroll = 0;
        for (Employee emp : staff) {
            double sal = emp.calculateSalary(); // Dynamic Method Dispatch
            totalPayroll += sal;
            System.out.printf("Employee: %-15s | Payout: ₹%,10.2f%n", emp.name, sal);
        }
        System.out.println("--------------------------------------------");
        System.out.printf("Total Company Expenditure: ₹%,10.2f%n", totalPayroll);
        System.out.println("Total Staff Members: " + Employee.getTotalEmployees());
    }
}`,
      output: `Employee: Rahul Sharma    | Payout: ₹ 65,000.00
Employee: Sneha Roy       | Payout: ₹ 40,000.00
--------------------------------------------
Total Company Expenditure: ₹1,05,000.00
Total Staff Members: 2`
    },
    {
      id: "lab9_med_custom_ex",
      title: "Lab 9 [MEDIUM]: Custom Checked Exception & Banking Audit Persistence (Unit 4)",
      unit: "Unit 4",
      difficulty: "medium",
      task: "Create a `BankAccount` class with `deposit(amount)` and `withdraw(amount)`. If withdrawal amount exceeds balance, throw a user-defined checked exception `InsufficientBalanceException`. Log all transactions to `audit_log.txt` using `BufferedWriter`.",
      testCase: "Attempt withdrawal of ₹15,000 on account with ₹10,000 balance. Catch exception, print shortfall, and verify audit log entry.",
      solutionCode: `import java.io.*;

class InsufficientBalanceException extends Exception {
    private double shortfall;
    public InsufficientBalanceException(double shortfall) {
        super("Withdrawal denied: Short by ₹" + shortfall);
        this.shortfall = shortfall;
    }
    public double getShortfall() { return shortfall; }
}

class SecureAccount {
    private String accNo;
    private double balance;

    public SecureAccount(String accNo, double balance) {
        this.accNo = accNo;
        this.balance = balance;
    }

    public synchronized void withdraw(double amount) throws InsufficientBalanceException {
        if (amount > balance) {
            throw new InsufficientBalanceException(amount - balance);
        }
        balance -= amount;
        System.out.printf("Withdrawal successful! ₹%.2f debited. New balance: ₹%.2f%n", amount, balance);
    }
}

public class CustomExceptionDemo {
    public static void main(String[] args) {
        SecureAccount acc = new SecureAccount("LNMI-MCA-101", 10000.0);
        System.out.println("Account Initialized with ₹10,000.00");

        try {
            System.out.println("Attempting withdrawal of ₹15,000.00...");
            acc.withdraw(15000.0);
        } catch (InsufficientBalanceException e) {
            System.out.println("✗ CAUGHT EXCEPTION: " + e.getMessage());
            System.out.printf("  Please deposit at least ₹%.2f to complete transaction.%n", e.getShortfall());
        }
    }
}`,
      output: `Account Initialized with ₹10,000.00
Attempting withdrawal of ₹15,000.00...
✗ CAUGHT EXCEPTION: Withdrawal denied: Short by ₹5000.0
  Please deposit at least ₹5000.00 to complete transaction.`
    },
    {
      id: "lab10_med_sorting",
      title: "Lab 10 [MEDIUM]: Placement Multi-Criteria Sorting using `Comparator` (Unit 5)",
      unit: "Unit 5",
      difficulty: "medium",
      task: "Store a list of `PlacementStudent` objects with fields (RollNo, Name, CGPA, Backlogs). Sort students such that candidates with 0 backlogs appear first, sorted by highest CGPA first, and ties broken alphabetically by name.",
      testCase: "Input 4 students with varying backlogs and CGPAs, verify sorting output matches multi-criteria placement rules.",
      solutionCode: `import java.util.*;

class PlacementStudent {
    int rollNo;
    String name;
    double cgpa;
    int backlogs;

    public PlacementStudent(int rollNo, String name, double cgpa, int backlogs) {
        this.rollNo = rollNo;
        this.name = name;
        this.cgpa = cgpa;
        this.backlogs = backlogs;
    }

    @Override
    public String toString() {
        return String.format("[%d] %-10s (CGPA: %.2f, Backlogs: %d)", rollNo, name, cgpa, backlogs);
    }
}

public class PlacementEngine {
    public static void main(String[] args) {
        List<PlacementStudent> list = new ArrayList<>();
        list.add(new PlacementStudent(101, "Vikram", 8.5, 1));
        list.add(new PlacementStudent(102, "Ananya", 9.2, 0));
        list.add(new PlacementStudent(103, "Rohan", 9.2, 0));
        list.add(new PlacementStudent(104, "Priya", 8.8, 0));

        // Chained Multi-criteria Comparator
        Comparator<PlacementStudent> placementRule = Comparator
            .comparingInt((PlacementStudent s) -> s.backlogs)
            .thenComparing(Comparator.comparingDouble((PlacementStudent s) -> s.cgpa).reversed())
            .thenComparing(s -> s.name);

        list.sort(placementRule);
        System.out.println("=== PLACEMENT MERIT LIST (CDAC ACTS @ LNMI) ===");
        list.forEach(System.out::println);
    }
}`,
      output: `=== PLACEMENT MERIT LIST (CDAC ACTS @ LNMI) ===
[102] Ananya     (CGPA: 9.20, Backlogs: 0)
[103] Rohan      (CGPA: 9.20, Backlogs: 0)
[104] Priya      (CGPA: 8.80, Backlogs: 0)
[101] Vikram     (CGPA: 8.50, Backlogs: 1)`
    },
    {
      id: "lab11_adv_ticket",
      title: "Lab 11 [ADVANCED]: Synchronized Ticket Reservation System (Unit 5)",
      unit: "Unit 5",
      difficulty: "hard",
      task: "Simulate a railway reservation counter where multiple booking threads concurrently book seats from a shared `TicketCounter` with 10 total seats. Ensure no overbooking occurs using `synchronized` blocks.",
      testCase: "Spawn 3 simultaneous booking threads each requesting 4 seats. Verify total booked seats never exceeds 10.",
      solutionCode: `class TicketCounter {
    private int availableSeats = 10;

    public void bookTicket(String passengerName, int requestedSeats) {
        synchronized (this) {
            System.out.println(passengerName + " entered counter. Checking seats...");
            if (availableSeats >= requestedSeats) {
                try { Thread.sleep(100); } catch (InterruptedException e) {}
                availableSeats -= requestedSeats;
                System.out.printf("SUCCESS: %s booked %d seat(s). Remaining: %d%n",
                                  passengerName, requestedSeats, availableSeats);
            } else {
                System.out.printf("FAILED: %s requested %d seat(s), but only %d left!%n",
                                  passengerName, requestedSeats, availableSeats);
            }
        }
    }
}

public class TicketReservationDemo {
    public static void main(String[] args) {
        TicketCounter counter = new TicketCounter();

        Thread t1 = new Thread(() -> counter.bookTicket("Student-A", 4));
        Thread t2 = new Thread(() -> counter.bookTicket("Student-B", 4));
        Thread t3 = new Thread(() -> counter.bookTicket("Student-C", 4));

        t1.start();
        t2.start();
        t3.start();
    }
}`,
      output: `Student-A entered counter. Checking seats...
SUCCESS: Student-A booked 4 seat(s). Remaining: 6
Student-B entered counter. Checking seats...
SUCCESS: Student-B booked 4 seat(s). Remaining: 2
Student-C entered counter. Checking seats...
FAILED: Student-C requested 4 seat(s), but only 2 left!`
    },
    {
      id: "lab12_adv_producer_consumer",
      title: "Lab 12 [ADVANCED]: Producer-Consumer Buffer using `wait()` and `notifyAll()` (Unit 5)",
      unit: "Unit 5",
      difficulty: "hard",
      task: "Implement a bounded queue buffer where a `Producer` thread pushes numbers (1 to 5) and a `Consumer` thread consumes them. Coordinate thread execution using `synchronized`, `wait()`, and `notifyAll()` to avoid buffer overflow or underflow.",
      testCase: "Verify producer waits when buffer is full (capacity=1) and consumer waits when buffer is empty.",
      solutionCode: `import java.util.LinkedList;
import java.util.Queue;

class BoundedBuffer {
    private Queue<Integer> queue = new LinkedList<>();
    private final int capacity = 1;

    public synchronized void produce(int value) throws InterruptedException {
        while (queue.size() == capacity) {
            System.out.println("  [Buffer Full] Producer waiting...");
            wait(); // Release lock and wait
        }
        queue.add(value);
        System.out.printf("PRODUCER produced: %d (Queue size: %d)%n", value, queue.size());
        notifyAll(); // Wake up consumer
    }

    public synchronized int consume() throws InterruptedException {
        while (queue.isEmpty()) {
            System.out.println("  [Buffer Empty] Consumer waiting...");
            wait(); // Release lock and wait
        }
        int value = queue.poll();
        System.out.printf("CONSUMER consumed: %d (Queue size: %d)%n", value, queue.size());
        notifyAll(); // Wake up producer
        return value;
    }
}

public class ProducerConsumerDemo {
    public static void main(String[] args) {
        BoundedBuffer buffer = new BoundedBuffer();

        Thread producer = new Thread(() -> {
            try {
                for (int i = 1; i <= 3; i++) {
                    buffer.produce(i);
                    Thread.sleep(80);
                }
            } catch (InterruptedException e) {}
        });

        Thread consumer = new Thread(() -> {
            try {
                for (int i = 1; i <= 3; i++) {
                    buffer.consume();
                    Thread.sleep(120);
                }
            } catch (InterruptedException e) {}
        });

        producer.start();
        consumer.start();
    }
}`,
      output: `PRODUCER produced: 1 (Queue size: 1)
CONSUMER consumed: 1 (Queue size: 0)
PRODUCER produced: 2 (Queue size: 1)
CONSUMER consumed: 2 (Queue size: 0)
PRODUCER produced: 3 (Queue size: 1)
CONSUMER consumed: 3 (Queue size: 0)`
    }
  ],

  // Projector Presentation Slide Deck Data
  slides: [
    {
      title: "MC101: Problem Solving & OOPs with Java",
      badge: "C-DAC ACTS @ LNMI Patna • MCA Sem-I",
      bullets: [
        "Certificate Course in Intelligent Systems & Emerging Technologies",
        "Subject Matter Expert (SME): Aniket",
        "Syllabus Units: Unit 3 (OOPs), Unit 4 (I/O & Exceptions), Unit 5 (Collections & Threads)",
        "Focus: Hands-on Programming, Visual Memory Models & Industry Best Practices"
      ],
      code: `// Welcome MCA Batch 2026!
System.out.println("C-DAC ACTS @ LNMI Patna Initialized!");`
    },
    {
      title: "Unit 3: Core OOP Principles in Java",
      badge: "Unit 3 • Architecture",
      bullets: [
        "Encapsulation: Restrict direct field access with private modifiers, expose getters/setters",
        "Abstraction: Express 'what' to do via interfaces; hide 'how' in implementation",
        "Inheritance: Code reusability via 'extends' (Single class inheritance only)",
        "Polymorphism: Overloading (Compile-time) vs Overriding (Dynamic Method Dispatch)"
      ],
      code: `public class BankAccount {
    private double balance; // Encapsulation
    public void deposit(double amt) { balance += amt; }
}`
    },
    {
      title: "Unit 3: JVM Memory Architecture (Stack vs Heap)",
      badge: "Unit 3 • Memory Internals",
      bullets: [
        "Stack: Stores primitive local variables and object reference pointers (fast, LIFO)",
        "Heap: Stores actual object instances, arrays, and string pools (dynamic, GC managed)",
        "Metaspace: Stores class blueprints, bytecode, and static variables",
        "Key Difference: Stack variables die with method returns; Heap objects survive until Garbage Collected"
      ],
      code: `int x = 10;                // Value 10 in Stack
Student s = new Student(); // 's' in Stack -> Student object in Heap`
    },
    {
      title: "Unit 3: Pass-by-Value vs Pass-by-Reference",
      badge: "Unit 3 • Core Concept",
      bullets: [
        "Universal Truth: Java is strictly 100% Pass-by-Value",
        "Java passes the VALUE of the reference pointer (copies memory address onto call stack)",
        "Mutating object fields affects the original Heap object",
        "Reassigning the reference variable inside the method has ZERO effect outside"
      ],
      code: `void modify(Student s) {
    s.name = "Rahul"; // Mutates Heap Object!
    s = new Student("Amit"); // Reassigning local pointer has NO effect outside!`
    },
    {
      title: "Unit 3: Static vs Instance & Cross-Class Access",
      badge: "Unit 3 • OOPs",
      bullets: [
        "Instance Members: 1 copy per object in Heap (accessed via 'objectName.field')",
        "Static Members: 1 copy per Class in Metaspace/Heap (accessed via 'ClassName.field')",
        "Static methods cannot use 'this' or access non-static instance fields directly",
        "Cross-class static access: Access via 'ClassName.staticMethod()'"
      ],
      code: `class Institute {
    public static String NAME = "LNMI Patna (C-DAC ACTS)";
}
// Cross-class access:
System.out.println(Institute.NAME);`
    },
    {
      title: "Unit 3: Dynamic Method Dispatch & Polymorphism",
      badge: "Unit 3 • Polymorphism",
      bullets: [
        "Upcasting: Parent reference holding Child instance (Animal a = new Dog();)",
        "Overridden methods execute based on the runtime HEAP object, NOT the reference type",
        "Instance variables do NOT participate in polymorphism (resolved at compile time)",
        "Use 'instanceof' pattern matching before downcasting"
      ],
      code: `Employee emp = new Manager("Vikram");
emp.calculateBonus(); // Executes Manager's calculateBonus() at runtime!`
    },
    {
      title: "Unit 4: Java I/O Streams (Byte vs Character Streams)",
      badge: "Unit 4 • Streams",
      bullets: [
        "Byte Streams (InputStream / OutputStream): 8-bit bytes for images, audio, binaries",
        "Character Streams (Reader / Writer): 16-bit Unicode for text and localized strings",
        "BufferedReader / BufferedWriter: Wraps underlying streams to buffer memory in RAM",
        "Always use Try-with-Resources for automatic resource closure (AutoCloseable)"
      ],
      code: `try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    String line = br.readLine();
}`
    },
    {
      title: "Unit 4: Serialization & Shallow vs Deep Copy",
      badge: "Unit 4 • Persistence",
      bullets: [
        "Serializable: Marker interface to convert object state to byte stream",
        "transient keyword: Excludes sensitive fields (passwords, tokens) from serialization",
        "Shallow Copy: Copies only direct fields; nested object references are shared",
        "Deep Copy: Creates completely independent duplicate graphs of nested objects"
      ],
      code: `class User implements Serializable {
    String name;
    transient String password; // Not serialized
}`
    },
    {
      title: "Unit 4: Java Exception Hierarchy & Multi-Catch",
      badge: "Unit 4 • Exceptions",
      bullets: [
        "Throwable is the root parent of Error and Exception",
        "Error: Serious JVM system failures (OutOfMemoryError, StackOverflowError) - Do not catch",
        "Checked Exception: Compiler enforces handling (IOException, SQLException)",
        "Unchecked Exception: Subclasses of RuntimeException (NullPointerException, ArithmeticException)"
      ],
      code: `try {
    // risky operation
} catch (IOException | SQLException e) { // Multi-catch
    e.printStackTrace();
}`
    },
    {
      title: "Unit 4: try-catch-finally & Custom Exceptions",
      badge: "Unit 4 • Exceptions",
      bullets: [
        "finally block: Always executes before returning (unless System.exit(0))",
        "throw: Explicitly triggers an exception instance",
        "throws: Declares checked exceptions a method might propagate to caller",
        "Custom Checked: extend Exception; Custom Unchecked: extend RuntimeException"
      ],
      code: `class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String msg) { super(msg); }
}`
    },
    {
      title: "Unit 5: Java Collections Framework Architecture",
      badge: "Unit 5 • Collections",
      bullets: [
        "Root Interface: Iterable -> Collection -> List, Set, Queue",
        "Map: Separate key-value hierarchy (HashMap, TreeMap, LinkedHashMap)",
        "ArrayList: Dynamic resizable array, O(1) random index access",
        "LinkedList: Doubly-linked nodes, O(1) insertions/deletions at head/tail"
      ],
      code: `List<String> list = new ArrayList<>();
list.add("Java");
list.add("Spring Boot");`
    },
    {
      title: "Unit 5: Sets, Maps & The `hashCode` / `equals` Contract",
      badge: "Unit 5 • Hashing Internals",
      bullets: [
        "HashSet: Backed by HashMap, guarantees unique elements using hashing",
        "Rule: If obj1.equals(obj2) is true, their hashCode() MUST be identical!",
        "HashMap Buckets: Array of nodes -> converts to Red-Black tree if bucket size > 8",
        "TreeMap: Keeps keys sorted in natural or comparator order (O(log n))"
      ],
      code: `Map<String, Integer> map = new HashMap<>();
map.put("Roll101", 95);`
    },
    {
      title: "Unit 5: Comparable vs Comparator",
      badge: "Unit 5 • Sorting",
      bullets: [
        "Comparable<T>: In java.lang, defines single natural sorting via compareTo(T o)",
        "Comparator<T>: In java.util, defines multiple custom sorting strategies via compare(T a, T b)",
        "Collections.sort(list): Uses modified TimSort algorithm (O(n log n))",
        "Modern Java: Use lambdas and Comparator.comparing()"
      ],
      code: `// Multi-criteria sorting with lambdas
students.sort(Comparator.comparing(Student::getCgpa).reversed());`
    },
    {
      title: "Unit 5: Multithreading & Thread Lifecycle",
      badge: "Unit 5 • Concurrency",
      bullets: [
        "Thread Creation: Extend Thread vs Implement Runnable (Preferred for flexibility)",
        "Lifecycle States: NEW -> RUNNABLE -> BLOCKED / WAITING / TIMED_WAITING -> TERMINATED",
        "start() vs run(): start() spawns new OS thread; run() runs synchronously on current thread",
        "Thread.sleep(ms) pauses execution without releasing locks"
      ],
      code: `Thread t = new Thread(() -> System.out.println("Running concurrently!"));
t.start();`
    },
    {
      title: "Unit 5: Synchronization & Monitor Locks",
      badge: "Unit 5 • Concurrency",
      bullets: [
        "Race Condition: Multiple threads mutating shared state without coordination",
        "synchronized method: Locks entire method on 'this' monitor",
        "synchronized block: Locks only critical section (Higher performance)",
        "Every Java object has an intrinsic monitor lock"
      ],
      code: `synchronized(this) {
    balance -= amount; // Protected critical section
}`
    },
    {
      title: "Unit 5: Deadlocks & Inter-Thread Communication",
      badge: "Unit 5 • Concurrency",
      bullets: [
        "Deadlock: 2 threads blocked waiting for each other's locks",
        "Prevention: Always acquire multiple locks in identical global order",
        "wait(): Releases monitor lock and waits in object's wait set",
        "notify() / notifyAll(): Wakes up waiting threads (Producer-Consumer pattern)"
      ],
      code: `synchronized(buffer) {
    while(buffer.isEmpty()) buffer.wait();
    buffer.consume();
    buffer.notifyAll();
}`
    }
  ]
};
