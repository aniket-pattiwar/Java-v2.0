package day02_io_exceptions;

import java.io.*;

/**
 * Demo 1: Java I/O Streams (Byte Streams vs Character Streams) & Buffering
 * L.N. Mishra College of Business Management - Java SME Masterclass
 */
public class IOStreamsAndReadersDemo {

    public static void main(String[] args) {
        File dataFile = new File("college_records.txt");

        System.out.println("=== 1. Writing Text using Character Stream (BufferedWriter) ===");
        // Try-with-resources: Automatically closes streams and flushes buffers
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(dataFile))) {
            writer.write("L.N. Mishra College of Business Management\n");
            writer.write("MCA & MBA Batch: 2024-2026\n");
            writer.write("Subject: Advanced Java & Distributed Systems\n");
            writer.write("Location: Patna, Bihar\n");
            System.out.println("Data successfully written to " + dataFile.getAbsolutePath());
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        }

        System.out.println("\n=== 2. Reading Text using Character Stream (BufferedReader) ===");
        try (BufferedReader reader = new BufferedReader(new FileReader(dataFile))) {
            String currentLine;
            int lineNumber = 1;
            while ((currentLine = reader.readLine()) != null) {
                System.out.printf("Line %d: %s%n", lineNumber++, currentLine);
            }
        } catch (IOException e) {
            System.err.println("Error reading from file: " + e.getMessage());
        }

        System.out.println("\n=== 3. Binary Byte Streams Demonstration (FileInputStream / FileOutputStream) ===");
        File binaryFile = new File("sample_binary.dat");
        byte[] binaryData = { 0x4A, 0x41, 0x56, 0x41 }; // ASCII for "JAVA"

        try (FileOutputStream fos = new FileOutputStream(binaryFile)) {
            fos.write(binaryData);
            System.out.println("Wrote raw 4 bytes to " + binaryFile.getName());
        } catch (IOException e) {
            e.printStackTrace();
        }

        try (FileInputStream fis = new FileInputStream(binaryFile)) {
            int byteRead;
            System.out.print("Reading bytes: ");
            while ((byteRead = fis.read()) != -1) {
                System.out.print((char) byteRead + " ");
            }
            System.out.println();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
