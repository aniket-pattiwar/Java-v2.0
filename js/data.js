/**
 * Course Code: MC101 - Problem Solving & Programming Concepts using Java
 * Program: MCA (Master of Computer Applications) - Semester I
 */

const COURSE_DATA = {
  program: "MCA (Master of Computer Applications) - Semester I",
  courseTitle: "Problem Solving & Programming Concepts using Java",
  courseCode: "MC101",

  // Reference Textbooks from Syllabus
  references: [
    "Core Java : Volume 1 - Fundamentals by Cay S. Horstmann (Prentice Hall)",
    "Core Java : Volume 2 - Advanced Features by Cay S. Horstmann (Prentice Hall)",
    "Core and Advanced Java Black Book (Dreamtech Press)",
    "Programming in Java by Sachin Malhotra, Saurabh Choudhary (Oxford University Press)",
    "NPTEL E-Resources (http://nptel.ac.in/)"
  ],

  // Complete Syllabus Modules (Units 1 to 5)
  modules: [
    {
      id: "unit1-problem-solving",
      unitNumber: 1,
      navTitle: "Problem Solving & Numbers",
      unitCode: "UNIT 1",
      title: "Problem Solving & Number System",
      summary: "Logical thinking, Problem-solving Process, Flowchart & Algorithm, Pseudo Code, Number Systems (Binary, Octal, Decimal, Hexadecimal), Positional Notation, Number Base Conversions, Binary Arithmetic, Signed & Unsigned Number Representations, Computer Arithmetic.",
      outcomes: "CO1: Apply problem-solving techniques to analyze requirements and develop efficient algorithmic solutions for real-world problems.",
      topics: [
        {
          id: "u1-t1",
          title: "Problem-Solving Process, Flowcharts, Algorithms & Pseudocode",
          image: "images/unit1_flowcharts_algorithms.jpg",
          imageCaption: "Technical Diagram: Standard Flowchart Symbols & Euclidean GCD Logic Execution Flow",
          analogyImages: [
            {
              src: "images/unit1_algorithm_recipe_navigation_analogy.jpg",
              caption: "Real-World Mental Models: 1) Master Chef's Recipe (Sequential Ingredients & Steps), 2) GPS Turn-by-Turn Navigation (Dynamic Decision Diamonds & Rerouting)"
            }
          ],
          content: `
            <p>Solving complex computational problems systematically requires structured methodologies before writing any Java code:</p>
            <ul>
              <li><strong>1. Problem Analysis & Specification:</strong> Clearly understanding inputs, expected outputs, boundary edge-cases, and operational constraints.</li>
              <li><strong>2. Algorithmic Formulation:</strong> Developing an unambiguous, finite step-by-step sequence of computational instructions.</li>
              <li><strong>3. Flowchart Design:</strong> Graphically modeling the logic flow using standard ANSI/ISO visual symbols.</li>
              <li><strong>4. Pseudocode Drafting:</strong> Writing language-independent, human-readable structured logic using programming control constructs.</li>
              <li><strong>5. Coding & Verification:</strong> Implementing the solution in Java and verifying with boundary test vectors.</li>
            </ul>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">Standard Flowchart Geometric Symbols</h4>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Geometric Shape</th>
                    <th>Functional Purpose in Flowcharting</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Terminal</strong></td>
                    <td>Oval / Rounded Rectangle</td>
                    <td>Indicates the start (<code>Start</code>) or termination (<code>End</code> / <code>Stop</code>) of a program.</td>
                  </tr>
                  <tr>
                    <td><strong>Input / Output</strong></td>
                    <td>Parallelogram</td>
                    <td>Reading input data from user (<code>Read N</code>) or displaying output (<code>Print Result</code>).</td>
                  </tr>
                  <tr>
                    <td><strong>Process</strong></td>
                    <td>Rectangle</td>
                    <td>Arithmetic computation or data assignment (e.g. <code>sum = a + b</code>, <code>i = i + 1</code>).</td>
                  </tr>
                  <tr>
                    <td><strong>Decision</strong></td>
                    <td>Diamond (Rhombus)</td>
                    <td>Conditional branch test (e.g. <code>is b == 0?</code>) yielding two output paths: <strong>Yes / True</strong> and <strong>No / False</strong>.</td>
                  </tr>
                  <tr>
                    <td><strong>Connector</strong></td>
                    <td>Small Circle</td>
                    <td>Connects fragmented flowlines without crossing intersecting lines.</td>
                  </tr>
                  <tr>
                    <td><strong>Flow Line</strong></td>
                    <td>Arrowed Line (→)</td>
                    <td>Indicates the sequential direction of program execution flow.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">5 Essential Properties of a Valid Algorithm</h4>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Criterion</th>
                    <th>Formal Definition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Finiteness</strong></td><td>Must terminate after a countable, finite number of steps for all valid inputs.</td></tr>
                  <tr><td><strong>Definiteness</strong></td><td>Every step must be precisely defined and completely unambiguous (no contradictory logic).</td></tr>
                  <tr><td><strong>Input</strong></td><td>Accepts 0 or more well-defined external inputs.</td></tr>
                  <tr><td><strong>Output</strong></td><td>Produces at least 1 well-defined output related to the input requirements.</td></tr>
                  <tr><td><strong>Effectiveness</strong></td><td>Every operation must be basic enough to be carried out exactly in a finite duration.</td></tr>
                </tbody>
              </table>
            </div>
          `,
          analogy: "An Algorithm is a chef's exact culinary recipe; a Flowchart is the visual kitchen assembly diagram; Pseudocode is the plain-English prep instructions before baking it in the Java compiler.",
          trap: "Is Pseudocode programming-language specific? No! Pseudocode is strictly language-agnostic. Using Java-specific syntax like 'public static void main' in pseudocode violates universal design standards.",
          codeSnippet: {
            filename: "FlowchartAndAlgorithmsDemo.java",
            code: `public class FlowchartAndAlgorithmsDemo {
    // 1. Euclidean Algorithm for GCD: O(log(min(a,b)))
    // Flowchart: [Start] -> [Read a,b] -> <is b==0?> --Yes--> [Return a]
    //                                         |--No--> [rem=a%b, a=b, b=rem] (Loop)
    public static int computeGcd(int a, int b) {
        while (b != 0) {
            int remainder = a % b;
            a = b;
            b = remainder;
        }
        return a;
    }

    // 2. Primality Test: O(sqrt(N))
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for (int i = 5; (long) i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        int x = 72, y = 120;
        System.out.println("GCD(" + x + ", " + y + ") = " + computeGcd(x, y));
        System.out.println("Is 97 Prime? -> " + isPrime(97));
    }
}`,
            output: `GCD(72, 120) = 24
Is 97 Prime? -> true`
          },
          mcqs: [
            {
              id: "u1_t1_mcq1",
              question: "Which geometric symbol is universally designated in flowchart standards for conditional branching and decision making?",
              options: [
                "Parallelogram",
                "Diamond (Rhombus)",
                "Rectangle",
                "Oval"
              ],
              correct: 1,
              explanation: "In flowchart standards (ISO/ANSI), a Diamond (Rhombus) represents a Decision/Conditional check with two or more exiting flowlines (e.g. True/False), whereas Parallelogram is for I/O, Rectangle is for Processing, and Oval is for Terminals (Start/Stop)."
            },
            {
              id: "u1_t1_mcq2",
              question: "Which algorithm property dictates that every instruction must be clear, unambiguous, and have only one possible interpretation?",
              options: [
                "Finiteness",
                "Definiteness",
                "Effectiveness",
                "Generality"
              ],
              correct: 1,
              explanation: "Definiteness requires that each algorithmic step must be clearly and unambiguously defined. Finiteness ensures the algorithm terminates, while Effectiveness guarantees steps are fundamentally feasible."
            }
          ]
        },
        {
          id: "u1-t2",
          title: "Number Systems & Positional Notation (Binary, Octal, Decimal, Hexadecimal)",
          image: "images/unit1_number_systems_positional.jpg",
          imageCaption: "Technical Diagram: Number Base Radices (Base 2, 8, 10, 16) & Mathematical Positional Notation Formula",
          analogyImages: [
            {
              src: "images/unit1_number_system_abacus_odometer_analogy.jpg",
              caption: "Real-World Mental Models: Mechanical Car Odometer & Wooden Bead Abacus (Modular Base Increments & Place-Value Carrying)"
            }
          ],
          content: `
            <p>A <strong>Number System</strong> is a mathematical framework for representing numerical quantities using a consistent set of symbols (digits) and rules.</p>
            
            <h4 style="margin-top:1rem; margin-bottom:0.5rem; color:var(--text-primary);">Positional Weighting Principle</h4>
            <p>In a positional number system with base (radix) <code>r</code>, the total value <code>N</code> of any number is determined by the sum of its digits multiplied by their positional weights:</p>
            <div style="background:var(--bg-surface-secondary); padding:1rem; border-radius:var(--radius-md); font-family:var(--font-mono); font-size:0.95rem; margin:0.75rem 0; border:1px solid var(--border-subtle);">
              N = (d<sub>n-1</sub> · r<sup>n-1</sup>) + ... + (d<sub>1</sub> · r<sup>1</sup>) + (d<sub>0</sub> · r<sup>0</sup>) + (d<sub>-1</sub> · r<sup>-1</sup>) + ... + (d<sub>-m</sub> · r<sup>-m</sup>)
            </div>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">The 4 Fundamental Computing Number Systems</h4>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Number System</th>
                    <th>Base (Radix)</th>
                    <th>Allowed Digits / Symbols</th>
                    <th>Bit Grouping</th>
                    <th>Primary Use in Computer Science</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Binary</strong></td>
                    <td><code>2</code></td>
                    <td><code>0, 1</code></td>
                    <td>1 bit</td>
                    <td>Physical digital electronics (transistor ON/OFF voltage states).</td>
                  </tr>
                  <tr>
                    <td><strong>Octal</strong></td>
                    <td><code>8</code></td>
                    <td><code>0, 1, 2, 3, 4, 5, 6, 7</code></td>
                    <td>3 bits (2<sup>3</sup> = 8)</td>
                    <td>Compact representation of 3-bit Unix file permissions (<code>chmod 755</code>).</td>
                  </tr>
                  <tr>
                    <td><strong>Decimal</strong></td>
                    <td><code>10</code></td>
                    <td><code>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</code></td>
                    <td>—</td>
                    <td>Human readable counting and arithmetic.</td>
                  </tr>
                  <tr>
                    <td><strong>Hexadecimal</strong></td>
                    <td><code>16</code></td>
                    <td><code>0-9, A, B, C, D, E, F</code> (A=10...F=15)</td>
                    <td>4 bits / 1 nibble (2<sup>4</sup> = 16)</td>
                    <td>Memory addresses (e.g. <code>0x7FFEE4</code>), IPv6, color hex codes (<code>#FF5733</code>), bytecode.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `,
          analogy: "Counting in Decimal is like using ₹10 and ₹100 denomination notes. Binary is like a room with single on/off light switches. Hexadecimal is a shorthand way for humans to read 4 binary switches at a single glance.",
          trap: "What is the maximum allowed single digit value in base r? Always (r - 1)! For example, an Octal number can NEVER contain the digit '8' or '9'. Writing 078 in Java throws a compilation error!",
          codeSnippet: {
            filename: "PositionalNotationDemo.java",
            code: `public class PositionalNotationDemo {
    public static void main(String[] args) {
        // Decimal 254 represented in different Java integer literal bases
        int dec = 254;
        int binLit = 0b11111110;  // 0b prefix for Binary
        int octLit = 0376;        // 0  prefix for Octal
        int hexLit = 0xFE;        // 0x prefix for Hexadecimal

        System.out.println("Decimal Value        : " + dec);
        System.out.println("Binary Literal 0b... : " + binLit);
        System.out.println("Octal Literal  0...  : " + octLit);
        System.out.println("Hex Literal    0x... : " + hexLit);
        System.out.println("Are all literals equal in memory? -> " + (dec == binLit && binLit == octLit && octLit == hexLit));
    }
}`,
            output: `Decimal Value        : 254
Binary Literal 0b... : 254
Octal Literal  0...  : 254
Hex Literal    0x... : 254
Are all literals equal in memory? -> true`
          },
          mcqs: [
            {
              id: "u1_t2_mcq1",
              question: "How many binary bits (binary digits) are directly represented by a single Hexadecimal digit?",
              options: [
                "2 bits",
                "3 bits",
                "4 bits (1 Nibble)",
                "8 bits (1 Byte)"
              ],
              correct: 2,
              explanation: "Since 16 = 2^4, exactly 4 binary bits (one nibble) map 1-to-1 to a single hexadecimal digit (e.g., binary 1111 = Hex F = Decimal 15)."
            },
            {
              id: "u1_t2_mcq2",
              question: "What is the decimal equivalent of the Octal number (347)₈ using positional expansion?",
              options: [
                "231",
                "256",
                "215",
                "347"
              ],
              correct: 0,
              explanation: "(347)₈ = (3 × 8²) + (4 × 8¹) + (7 × 8⁰) = (3 × 64) + (4 × 8) + (7 × 1) = 192 + 32 + 7 = 231₁₀."
            }
          ]
        },
        {
          id: "u1-t3",
          title: "Number Base Conversions (Decimal ↔ Binary ↔ Octal ↔ Hexadecimal)",
          image: "images/unit1_base_conversions_grouping.jpg",
          imageCaption: "Technical Diagram: Repeated Division Algorithm, Fractional Multiplication & 3-bit/4-bit Direct Grouping",
          analogyImages: [
            {
              src: "images/unit1_base_conversion_color_currency_analogy.jpg",
              caption: "Real-World Mental Models: Web Design 24-bit RGB Hex Color Codes (#FF5733) & International Currency Conversion Counters"
            }
          ],
          content: `
            <p>Inter-base conversions follow rigorous mathematical algorithms depending on source and destination radices:</p>

            <h4 style="margin-top:1rem; margin-bottom:0.5rem; color:var(--text-primary);">1. Decimal to Any Target Base (r)</h4>
            <ul>
              <li><strong>Integer Part:</strong> Repeated Division by <code>r</code>. Record remainders from bottom-to-top (Last remainder is Most Significant Digit).</li>
              <li><strong>Fractional Part:</strong> Repeated Multiplication by <code>r</code>. Record generated integer parts from top-to-bottom.</li>
            </ul>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">2. Any Base (r) to Decimal</h4>
            <p>Multiply each digit by its positional power <code>r<sup>i</sup></code> and calculate the algebraic sum.</p>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">3. Direct 3-Bit and 4-Bit Grouping (Binary ↔ Octal / Hexadecimal)</h4>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Conversion Rule</th>
                    <th>Grouping Strategy</th>
                    <th>Example Walkthrough</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Binary → Octal</strong></td>
                    <td>Group bits into <strong>3-bit sets</strong> starting from the right (radix point). Pad leading zeros on left if needed.</td>
                    <td><code>(11010110)₂</code> → <code>[011][010][110]</code> → <code>(326)₈</code></td>
                  </tr>
                  <tr>
                    <td><strong>Binary → Hexadecimal</strong></td>
                    <td>Group bits into <strong>4-bit sets</strong> (nibbles) starting from the right. Pad leading zeros on left.</td>
                    <td><code>(11010110)₂</code> → <code>[1101][0110]</code> → <code>(D6)₁₆</code></td>
                  </tr>
                  <tr>
                    <td><strong>Octal → Hexadecimal</strong></td>
                    <td>Convert Octal digits to 3-bit binary, concatenate, then regroup into 4-bit nibbles.</td>
                    <td><code>(376)₈</code> → <code>011 111 110</code> → <code>[1111][1110]</code> → <code>(FE)₁₆</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          `,
          analogy: "Direct grouping conversion is like currency exchange: instead of converting coins one-by-one through decimal, 3 binary bits package directly into 1 Octal unit (2³ = 8) and 4 binary bits package into 1 Hex unit (2⁴ = 16).",
          trap: "When converting a fractional binary number like 0.1011₂ to Hexadecimal, group by 4 bits starting from LEFT to RIGHT after the point and pad trailing zeros (0.1011₂ = 0.B₁₆), NOT from the right!",
          codeSnippet: {
            filename: "NumberBaseConversionsDemo.java",
            code: `public class NumberBaseConversionsDemo {
    // 1. Repeated Division Algorithm (Decimal -> Any Base)
    public static String decimalToBase(long num, int base) {
        if (num == 0) return "0";
        char[] digits = "0123456789ABCDEF".toCharArray();
        StringBuilder sb = new StringBuilder();
        while (num > 0) {
            sb.append(digits[(int)(num % base)]);
            num /= base;
        }
        return sb.reverse().toString();
    }

    // 2. Positional Expansion (Any Base -> Decimal)
    public static long baseToDecimal(String s, int base) {
        long result = 0;
        for (char ch : s.toUpperCase().toCharArray()) {
            int val = (ch >= '0' && ch <= '9') ? (ch - '0') : (10 + ch - 'A');
            result = result * base + val;
        }
        return result;
    }

    public static void main(String[] args) {
        long val = 254;
        System.out.println("254 in Binary (Base 2)  : " + decimalToBase(val, 2));
        System.out.println("254 in Octal  (Base 8)  : " + decimalToBase(val, 8));
        System.out.println("254 in Hex    (Base 16) : " + decimalToBase(val, 16));
        System.out.println("Reverse Check FE_16     : " + baseToDecimal("FE", 16));
    }
}`,
            output: `254 in Binary (Base 2)  : 11111110
254 in Octal  (Base 8)  : 376
254 in Hex    (Base 16) : FE
Reverse Check FE_16     : 254`
          },
          mcqs: [
            {
              id: "u1_t3_mcq1",
              question: "What is the binary representation of the Hexadecimal number (2B.4)₁₆?",
              options: [
                "00101011.0100",
                "00101010.0100",
                "01001011.0010",
                "00101100.0100"
              ],
              correct: 0,
              explanation: "Convert each hex digit to a 4-bit nibble: 2 -> 0010, B (11) -> 1011, and 4 -> 0100. Concatenating gives 00101011.0100₂."
            },
            {
              id: "u1_t3_mcq2",
              question: "What is the result of converting the Decimal fraction 0.625₁₀ to Binary?",
              options: [
                "0.101₂",
                "0.110₂",
                "0.011₂",
                "0.111₂"
              ],
              correct: 0,
              explanation: "Successive multiplication by 2: (0.625 × 2 = 1.25 -> int 1, frac 0.25), (0.25 × 2 = 0.5 -> int 0, frac 0.5), (0.5 × 2 = 1.0 -> int 1, frac 0.0). Reading integers from top to bottom gives 0.101₂."
            }
          ]
        },
        {
          id: "u1-t4",
          title: "Binary Arithmetic, Signed/Unsigned Numbers & 1's / 2's Complement",
          image: "images/unit1_binary_arithmetic_twos_complement.jpg",
          imageCaption: "Technical Diagram: 8-Bit 2's Complement Pipeline, Sign Bit, Hardware Subtraction & Circular Boundary Wrap-Around",
          analogyImages: [
            {
              src: "images/unit1_twos_complement_clock_analogy.jpg",
              caption: "Real-World Mental Models: Circular 12-Hour Wall Clock Modular Subtraction & Mechanical Speedometer Mileage Overflow"
            }
          ],
          content: `
            <p>Modern computer processors (ALUs) perform all arithmetic computations using binary addition circuits. Subtraction, negative numbers, and logic are handled via <strong>Complements</strong>.</p>

            <h4 style="margin-top:1rem; margin-bottom:0.5rem; color:var(--text-primary);">1. Binary Addition Rules</h4>
            <div style="background:var(--bg-surface-secondary); padding:0.75rem 1rem; border-radius:var(--radius-md); font-family:var(--font-mono); font-size:0.9rem; margin-bottom:1rem; border:1px solid var(--border-subtle);">
              0 + 0 = 0 (Carry 0)<br>
              0 + 1 = 1 (Carry 0)<br>
              1 + 0 = 1 (Carry 0)<br>
              1 + 1 = 0 (Carry 1)  -> (10₂)<br>
              1 + 1 + 1 = 1 (Carry 1) -> (11₂)
            </div>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">2. Signed Number Representations in Hardware</h4>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Representation</th>
                    <th>Method to Negate a Value</th>
                    <th>Range (n-bit word)</th>
                    <th>Flaws / Engineering Issues</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Sign-Magnitude</strong></td>
                    <td>Set MSB (Sign bit) = 1 (0 = positive, 1 = negative).</td>
                    <td>-(2<sup>n-1</sup> - 1) to +(2<sup>n-1</sup> - 1)</td>
                    <td>Two representations of zero (<code>+0</code> and <code>-0</code>); requires separate subtractor hardware.</td>
                  </tr>
                  <tr>
                    <td><strong>1's Complement</strong></td>
                    <td>Invert (flip) every bit (<code>~x</code>: 0 becomes 1, 1 becomes 0).</td>
                    <td>-(2<sup>n-1</sup> - 1) to +(2<sup>n-1</sup> - 1)</td>
                    <td>Still has dual zeros (<code>00000000</code> and <code>11111111</code>); requires end-around carry addition.</td>
                  </tr>
                  <tr>
                    <td><strong>2's Complement (Industry Standard)</strong></td>
                    <td>Invert all bits and add 1 (<code>2's Comp = 1's Comp + 1</code>).</td>
                    <td><strong>-2<sup>n-1</sup> to +(2<sup>n-1</sup> - 1)</strong></td>
                    <td><strong>Zero is unique (00000000).</strong> Allows subtraction using standard binary addition circuits (<code>A - B = A + 2'sComp(B)</code>).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">3. Computer Arithmetic Overflow & Bitwise Shifts</h4>
            <p>An <strong>Arithmetic Overflow</strong> occurs when the result of an arithmetic operation exceeds the fixed bit capacity of the data type (e.g. an 8-bit signed byte exceeding +127 wraps around into negative territory: <code>127 + 1 = -128</code>).</p>
            <ul>
              <li><code>&lt;&lt;</code> (Arithmetic Left Shift): Multiplies integer by 2<sup>k</sup> by shifting bits left and inserting trailing 0s.</li>
              <li><code>&gt;&gt;</code> (Signed Arithmetic Right Shift): Divides by 2<sup>k</sup> while <strong>preserving the sign bit (MSB)</strong>.</li>
              <li><code>&gt;&gt;&gt;</code> (Unsigned Logical Right Shift): Shifts bits right and <strong>always fills left MSB with 0</strong> regardless of sign.</li>
            </ul>
          `,
          analogy: "An automobile odometer rolling over from 999999 to 000000 is identical to fixed 8-bit byte overflow wrapping from +127 to -128 in computer memory.",
          trap: "Why can an 8-bit signed byte store -128 to +127 (asymmetric range)? Because zero (00000000) takes up one of the positive bit combinations (0 to 127 = 128 positive/zero states), leaving all 128 negative states (10000000 to 11111111 = -128 to -1)!",
          codeSnippet: {
            filename: "BinaryArithmeticAndComplementsDemo.java",
            code: `public class BinaryArithmeticAndComplementsDemo {
    public static void main(String[] args) {
        int a = 25; // 00011001
        int b = 14; // 00001110

        // Subtraction using 2's Complement: A - B = A + (~B + 1)
        int twosCompB = (-b) & 0xFF; // 8-bit mask
        int result = (a + twosCompB) & 0xFF;

        System.out.printf("A = 25 (Binary)              : %8s%n", Integer.toBinaryString(a));
        System.out.printf("B = 14 (Binary)              : %8s%n", Integer.toBinaryString(b));
        System.out.printf("2's Complement of B (-14)    : %8s%n", Integer.toBinaryString(twosCompB));
        System.out.printf("Binary Addition (25 + (-14)) : %8s = %d%n%n", Integer.toBinaryString(result), (byte)result);

        // Hardware Overflow in Java byte (8-bit signed)
        byte maxByte = 127;
        byte overflow = (byte)(maxByte + 1);
        System.out.println("Max Byte Value (127) + 1     : " + overflow + " (Wraps to Byte.MIN_VALUE!)");
    }
}`,
            output: `A = 25 (Binary)              :    11001
B = 14 (Binary)              :     1110
2's Complement of B (-14)    : 11110010
Binary Addition (25 + (-14)) :     1011 = 11

Max Byte Value (127) + 1     : -128 (Wraps to Byte.MIN_VALUE!)`
          },
          mcqs: [
            {
              id: "u1_t4_mcq1",
              question: "What is the 2's complement representation of the decimal number -19 in an 8-bit signed binary format?",
              options: [
                "11101101₂",
                "11101100₂",
                "10010011₂",
                "11110011₂"
              ],
              correct: 0,
              explanation: "+19 in 8-bit binary is 00010011₂. Step 1 (1's complement): flip all bits -> 11101100₂. Step 2 (add 1): 11101100₂ + 1 = 11101101₂."
            },
            {
              id: "u1_t4_mcq2",
              question: "In Java, what is the key difference between the right shift operators `>>` and `>>>`?",
              options: [
                "`>>` is for floating-point numbers, while `>>>` is for integer data types.",
                "`>>` preserves the sign bit (sign-extension), while `>>>` always fills the highest-order bits with zeros (logical zero-fill).",
                "`>>>` rotates bits cyclically, while `>>` discards shifted bits.",
                "`>>` divides by 4, while `>>>` divides by 2."
              ],
              correct: 1,
              explanation: "`>>` is the signed/arithmetic right shift operator which copies the MSB (sign bit) to preserve negative numbers. `>>>` is the unsigned/logical right shift operator which always inserts 0 into the leftmost bit position."
            }
          ]
        }
      ]
    },
    {
      id: "unit2-java-basics",
      unitNumber: 2,
      navTitle: "Java Basics",
      unitCode: "UNIT 2",
      title: "Java Basics",
      summary: "Introduction to Java, Features of Java, JVM / JRE / JDK Architecture & JIT Compiler, Data Types, Type Casting & Promotion, Operators, Control Statements, Arrays (1D, 2D, Jagged) and Strings (Immutability, SCP, StringBuilder).",
      outcomes: "CO3: Develop Java applications using control structures, arrays, methods, exception handling, and file handling to create robust software solutions.",
      topics: [
        {
          id: "u2-t1",
          title: "Introduction to Java, Language Features & JVM / JRE / JDK Architecture",
          image: "images/unit2_jvm_architecture.jpg",
          imageCaption: "Technical Architecture: JDK vs JRE vs JVM Hierarchy, Bytecode Compilation & HotSpot JIT Execution Engine",
          analogyImages: [
            {
              src: "images/unit2_jvm_orchestra_analogy.jpg",
              caption: "Real-World Mental Models: Universal Sheet Music (Bytecode) played across Grand Piano, Guitar & Synthesizer (Cross-Platform Execution)"
            }
          ],
          content: `
            <p>Developed by James Gosling at Sun Microsystems in 1995 (now Oracle), Java was designed with the core philosophy: <em>\"Write Once, Run Anywhere\"</em> (WORA).</p>

            <h4 style="margin-top:1rem; margin-bottom:0.5rem; color:var(--text-primary);">Key Architectural Features of Java</h4>
            <ul>
              <li><strong>Platform Independent:</strong> Java source code (<code>.java</code>) is compiled into platform-neutral Bytecode (<code>.class</code>), which runs on any OS equipped with a Java Virtual Machine (JVM).</li>
              <li><strong>Robust & Safe:</strong> Eliminates error-prone manual memory pointers, provides automatic Garbage Collection (GC), and strictly enforces type safety at compile and runtime.</li>
              <li><strong>Secure:</strong> Operates inside a JVM sandbox with a Bytecode Verifier ensuring no illegal memory accesses occur.</li>
              <li><strong>High Performance:</strong> Uses HotSpot Just-In-Time (JIT) compilation to dynamically compile frequently executed bytecode (hotspots) into native CPU machine instructions.</li>
              <li><strong>Multithreaded:</strong> Native language-level support for concurrent execution via the <code>Thread</code> class and <code>synchronized</code> keyword.</li>
            </ul>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">JDK vs. JRE vs. JVM Architecture</h4>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Full Name</th>
                    <th>What It Contains</th>
                    <th>Target Audience</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>JDK</strong></td>
                    <td>Java Development Kit</td>
                    <td>JRE + Development Tools (<code>javac</code> compiler, <code>jar</code> packager, <code>javadoc</code>, <code>jdb</code> debugger).</td>
                    <td>Software Developers writing and compiling Java applications.</td>
                  </tr>
                  <tr>
                    <td><strong>JRE</strong></td>
                    <td>Java Runtime Environment</td>
                    <td>JVM + Core Java Class Libraries (<code>java.base</code>, <code>rt.jar</code>) + Supporting runtime files.</td>
                    <td>End users who only need to run existing compiled Java programs.</td>
                  </tr>
                  <tr>
                    <td><strong>JVM</strong></td>
                    <td>Java Virtual Machine</td>
                    <td>ClassLoader Subsystem + JVM Memory Areas + Execution Engine (Interpreter, JIT, GC).</td>
                    <td>Abstract computing machine that physically executes Java Bytecode.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">JVM Internal Subsystems & Memory Areas</h4>
            <ul>
              <li><strong>ClassLoader Subsystem:</strong> Loads, Links (Verifies, Prepares, Resolves), and Initializes <code>.class</code> files.</li>
              <li><strong>Method Area / Metaspace:</strong> Stores class metadata, bytecode instructions, static variables, and constant pool.</li>
              <li><strong>Heap Memory:</strong> Runtime data area where all Class instances (Objects) and Arrays are dynamically allocated.</li>
              <li><strong>Java Thread Stack:</strong> Stores Stack Frames (local variables, operand stacks, partial results) created per thread per method invocation.</li>
              <li><strong>PC (Program Counter) Registers:</strong> Keeps track of the address of the currently executing JVM instruction per thread.</li>
              <li><strong>Execution Engine:</strong> Contains the Bytecode Interpreter, JIT Compiler, and Automatic Garbage Collector.</li>
            </ul>
          `,
          analogy: "JDK is the complete workshop with blueprints, hammer, and saw; JRE is the finished construction site; JVM is the engine that powers the machinery.",
          trap: "Is the JVM platform-independent? NO! Java Bytecode (.class) is platform-independent, but the JVM itself is platform-dependent (there are distinct JVM binaries for Windows, Linux, and macOS).",
          codeSnippet: {
            filename: "JvmArchitectureDemo.java",
            code: `public class JvmArchitectureDemo {
    public static void main(String[] args) {
        System.out.println("=== JVM Environment Information ===");
        System.out.println("Java Version      : " + System.getProperty("java.version"));
        System.out.println("JVM Architecture  : " + System.getProperty("os.arch"));
        System.out.println("Operating System  : " + System.getProperty("os.name"));
        System.out.println("Available Cores   : " + Runtime.getRuntime().availableProcessors());
        System.out.println("Total JVM Memory  : " + (Runtime.getRuntime().totalMemory() / (1024 * 1024)) + " MB");
        System.out.println("Max Memory Limit  : " + (Runtime.getRuntime().maxMemory() / (1024 * 1024)) + " MB");
    }
}`,
            output: `=== JVM Environment Information ===
Java Version      : 17.0.20.1
JVM Architecture  : amd64
Operating System  : Windows 11
Available Cores   : 8
Total JVM Memory  : 256 MB
Max Memory Limit  : 4096 MB`
          },
          mcqs: [
            {
              id: "u2_t1_mcq1",
              question: "Which component of the Java execution environment is responsible for dynamically converting frequently executed bytecode into native machine code at runtime?",
              options: [
                "The Java Compiler (javac)",
                "The ClassLoader Subsystem",
                "The Just-In-Time (JIT) Compiler",
                "The Bytecode Verifier"
              ],
              correct: 2,
              explanation: "The Just-In-Time (JIT) compiler, part of the JVM execution engine, analyzes execution 'hotspots' and compiles frequently called bytecode into native machine instructions to achieve near-native performance."
            },
            {
              id: "u2_t1_mcq2",
              question: "Which memory area in the JVM is shared across all concurrent application threads and stores all allocated Objects and Arrays?",
              options: [
                "Java Thread Stack",
                "Program Counter (PC) Register",
                "Heap Memory",
                "Native Method Stack"
              ],
              correct: 2,
              explanation: "Heap Memory is the universal, shared memory area in the JVM where all objects and arrays reside. In contrast, Stack Memory and PC Registers are private to each individual thread."
            }
          ]
        },
        {
          id: "u2-t2",
          title: "Data Types, Literals, Type Casting & Operators",
          image: "images/unit2_datatypes_typecasting.jpg",
          imageCaption: "Technical Diagram: 8 Java Primitives Memory Hierarchy, Widening vs Narrowing Type Casting & Short-Circuit Gates",
          analogyImages: [
            {
              src: "images/unit2_typecasting_water_buckets_analogy.jpg",
              caption: "Real-World Mental Models: Pouring Liquid from Small Cup into Large Pitcher (Safe Widening) vs Oversized Water into Espresso Cup (Overflow / Data Truncation)"
            }
          ],
          content: `
            <p>Java is a <strong>strongly typed</strong> language. Every variable, literal, and expression has a strict type evaluated at compile-time.</p>

            <h4 style="margin-top:1rem; margin-bottom:0.5rem; color:var(--text-primary);">The 8 Java Primitive Data Types</h4>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Size (Memory)</th>
                    <th>Default Value</th>
                    <th>Value Range / Representation</th>
                    <th>Wrapper Class</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>byte</code></td><td>1 byte (8 bits)</td><td><code>0</code></td><td>-128 to +127 (-2<sup>7</sup> to 2<sup>7</sup>-1)</td><td><code>java.lang.Byte</code></td></tr>
                  <tr><td><code>short</code></td><td>2 bytes (16 bits)</td><td><code>0</code></td><td>-32,768 to +32,767 (-2<sup>15</sup> to 2<sup>15</sup>-1)</td><td><code>java.lang.Short</code></td></tr>
                  <tr><td><code>int</code></td><td>4 bytes (32 bits)</td><td><code>0</code></td><td>-2,147,483,648 to +2,147,483,647 (-2<sup>31</sup> to 2<sup>31</sup>-1)</td><td><code>java.lang.Integer</code></td></tr>
                  <tr><td><code>long</code></td><td>8 bytes (64 bits)</td><td><code>0L</code></td><td>-2<sup>63</sup> to +2<sup>63</sup>-1 (Suffix: <code>L</code> or <code>l</code>)</td><td><code>java.lang.Long</code></td></tr>
                  <tr><td><code>float</code></td><td>4 bytes (32 bits)</td><td><code>0.0f</code></td><td>IEEE 754 floating point (Suffix: <code>F</code> or <code>f</code>)</td><td><code>java.lang.Float</code></td></tr>
                  <tr><td><code>double</code></td><td>8 bytes (64 bits)</td><td><code>0.0d</code></td><td>IEEE 754 double precision (Default for decimals)</td><td><code>java.lang.Double</code></td></tr>
                  <tr><td><code>char</code></td><td>2 bytes (16 bits)</td><td><code>'\\u0000'</code></td><td>0 to 65,535 (Unicode UTF-16 code units)</td><td><code>java.lang.Character</code></td></tr>
                  <tr><td><code>boolean</code></td><td>JVM-dependent (~1 bit)</td><td><code>false</code></td><td><code>true</code> or <code>false</code> (Cannot be cast to int!)</td><td><code>java.lang.Boolean</code></td></tr>
                </tbody>
              </table>
            </div>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">Type Casting & Numeric Promotion Rules</h4>
            <ul>
              <li><strong>Widening Conversion (Implicit / Automatic):</strong> Safe conversion from smaller to larger data type without data loss:<br>
              <code>byte → short → int → long → float → double</code></li>
              <li><strong>Narrowing Conversion (Explicit / Manual):</strong> Requires cast operator <code>(target_type)</code> and can cause bit truncation / wrap-around:<br>
              <code>double → float → long → int → short → byte</code></li>
              <li><strong>Binary Numeric Promotion:</strong> When performing arithmetic on smaller types (<code>byte</code>, <code>short</code>, <code>char</code>), Java automatically promotes operands to <code>int</code> before computation.</li>
            </ul>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">Java Operators Taxonomy</h4>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Operators</th>
                    <th>Behavior / Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Arithmetic</strong></td><td><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (Modulus)</td><td><code>/</code> performs integer truncation division unless one operand is float/double.</td></tr>
                  <tr><td><strong>Relational</strong></td><td><code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code></td><td>Returns a <code>boolean</code> result (<code>true</code> / <code>false</code>).</td></tr>
                  <tr><td><strong>Short-Circuit Logical</strong></td><td><code>&amp;&amp;</code> (AND), <code>||</code> (OR), <code>!</code> (NOT)</td><td>Short-circuits evaluation if first operand determines final outcome (prevents NPEs).</td></tr>
                  <tr><td><strong>Bitwise & Shift</strong></td><td><code>&amp;</code>, <code>|</code>, <code>^</code> (XOR), <code>~</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code>, <code>&gt;&gt;&gt;</code></td><td>Operates bit-by-bit on integer representations.</td></tr>
                  <tr><td><strong>Conditional / Ternary</strong></td><td><code>condition ? expr1 : expr2</code></td><td>Compact inline replacement for simple <code>if-else</code> blocks.</td></tr>
                  <tr><td><strong>Assignment</strong></td><td><code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code></td><td>Compound assignment (e.g. <code>b += 1</code>) performs automatic implicit type casting!</td></tr>
                </tbody>
              </table>
            </div>
          `,
          analogy: "Type Casting is like transferring liquids between containers: Pouring a small cup into a large bucket (Widening) never spills; pouring a large bucket into a small cup (Narrowing) spills data unless you intentionally force it.",
          trap: "Why does 'byte b = 10; b = b + 1;' fail to compile, but 'b++' and 'b += 1' succeed? Because the expression 'b + 1' automatically promotes operands to int! 'b++' and compound assignments like 'b += 1' have built-in implicit casting: b = (byte)(b + 1).",
          codeSnippet: {
            filename: "DataTypesAndTypeCastingDemo.java",
            code: `public class DataTypesAndTypeCastingDemo {
    public static void main(String[] args) {
        // 1. Implicit Widening: byte -> int -> double
        byte b = 42;
        int i = b;
        double d = i;
        System.out.println("Widened byte to double: " + d);

        // 2. Explicit Narrowing (Data Loss / Wrap-around)
        int largeInt = 130;
        byte narrowed = (byte) largeInt; // 130 - 256 = -126
        System.out.println("Narrowed 130 to byte : " + narrowed + " (Wrapped around 8-bit bound!)");

        // 3. Short-Circuit Evaluation Guarding Null Reference
        String str = null;
        if (str != null && str.length() > 0) {
            System.out.println("Valid string");
        } else {
            System.out.println("Short-circuit prevented NullPointerException!");
        }

        // 4. Ternary Operator
        int score = 85;
        String grade = (score >= 90) ? "A+" : (score >= 75) ? "A" : "B";
        System.out.println("Score " + score + " -> Grade: " + grade);
    }
}`,
            output: `Widened byte to double: 42.0
Narrowed 130 to byte : -126 (Wrapped around 8-bit bound!)
Short-circuit prevented NullPointerException!
Score 85 -> Grade: A`
          },
          mcqs: [
            {
              id: "u2_t2_mcq1",
              question: "What is the output of the expression `System.out.println(10 + 20 + \"JAVA\" + 10 + 20);` in Java?",
              options: [
                "60JAVA",
                "30JAVA1020",
                "30JAVA30",
                "1020JAVA1020"
              ],
              correct: 1,
              explanation: "Java evaluates `+` left-to-right: `10 + 20` evaluates to integer `30`. Then `30 + \"JAVA\"` converts to String `\"30JAVA\"`. From that point on, subsequent `+` operations become string concatenations: `\"30JAVA\" + 10` -> `\"30JAVA10\"` + 20 -> `\"30JAVA1020\"`."
            },
            {
              id: "u2_t2_mcq2",
              question: "Which primitive data type in Java is 16-bit unsigned and used to store Unicode characters?",
              options: [
                "byte",
                "short",
                "char",
                "int"
              ],
              correct: 2,
              explanation: "In Java, `char` is a 16-bit unsigned integer data type (0 to 65,535) capable of representing Unicode UTF-16 characters."
            }
          ]
        },
        {
          id: "u2-t3",
          title: "Control Flow Statements (Selection, Iteration & Jump Statements)",
          image: "images/unit2_control_flow_switch.jpg",
          imageCaption: "Technical Diagram: Java Decision Branching, Loops Pipeline (for/while/do-while) & Java 14+ Enhanced Switch Expressions",
          analogyImages: [
            {
              src: "images/unit2_control_flow_railway_analogy.svg",
              caption: "Real-World Mental Models: Railway Track Switch Junction (O(1) Direct Case Routing) & Express Toll Plaza Flyover (Labeled Break/Continue)"
            }
          ],
          content: `
            <p>Control flow statements govern the order in which individual statements and instructions are executed in a Java program.</p>

            <h4 style="margin-top:1rem; margin-bottom:0.5rem; color:var(--text-primary);">1. Selection Statements (Decision Making)</h4>
            <ul>
              <li><strong><code>if</code> / <code>if-else</code> / <code>if-else-if</code> Ladder:</strong> Evaluates boolean expressions sequentially until a <code>true</code> branch is found.</li>
              <li><strong>Traditional <code>switch</code>:</strong> Multi-way branching based on discrete values. Supported types: <code>byte</code>, <code>short</code>, <code>char</code>, <code>int</code>, <code>String</code>, and <code>enum</code>. Requires <code>break</code> to prevent fall-through.</li>
              <li><strong>Modern Enhanced Switch Expressions (Java 14+):</strong> Uses arrow syntax <code>case X -> expr;</code> which eliminates fall-through bugs and supports yielding values.</li>
            </ul>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">2. Iteration Statements (Loops)</h4>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Loop Type</th>
                    <th>Evaluation Strategy</th>
                    <th>Minimum Executions</th>
                    <th>Best Used For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong><code>for</code> loop</strong></td>
                    <td>Entry-controlled (condition checked before loop body)</td>
                    <td>0 times</td>
                    <td>Known number of iterations with counter/index variable.</td>
                  </tr>
                  <tr>
                    <td><strong><code>while</code> loop</strong></td>
                    <td>Entry-controlled (condition checked before loop body)</td>
                    <td>0 times</td>
                    <td>Indefinite iterations where condition depends on external dynamic state.</td>
                  </tr>
                  <tr>
                    <td><strong><code>do-while</code> loop</strong></td>
                    <td>Exit-controlled (condition checked AFTER body execution)</td>
                    <td><strong>1 time guaranteed</strong></td>
                    <td>Menu-driven CLI programs, user input validation.</td>
                  </tr>
                  <tr>
                    <td><strong>Enhanced <code>for-each</code></strong></td>
                    <td>Implicit iterator traversal</td>
                    <td>0 times</td>
                    <td>Read-only traversal through Arrays and Collections without index management.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">3. Jump / Branching Statements</h4>
            <ul>
              <li><code>break</code>: Terminates the innermost loop or <code>switch</code> statement immediately.</li>
              <li><strong>Labeled <code>break</code>:</strong> Unconditionally breaks out of an outer nested loop construct (e.g. <code>break outerLoop;</code>).</li>
              <li><code>continue</code>: Skips the remainder of the current iteration and jumps directly to the next loop evaluation.</li>
              <li><code>return</code>: Exits the currently executing method and returns control (and optional value) to the caller.</li>
            </ul>
          `,
          analogy: "A 'while' loop is a cinema ticket check at the door (no ticket = no entry); a 'do-while' loop is a restaurant where you enter, eat first, and the bill check happens on your way out.",
          trap: "What happens if you omit the 'break' statement in a traditional switch case? Fall-through occurs: execution falls right through into all subsequent cases regardless of whether their condition matches until a break or end of switch is encountered!",
          codeSnippet: {
            filename: "ControlFlowStatementsDemo.java",
            code: `public class ControlFlowStatementsDemo {
    // Enhanced switch expression with arrow syntax
    public static String getSchedule(String day) {
        return switch (day.toUpperCase()) {
            case "MONDAY", "TUESDAY", "WEDNESDAY" -> "Core Java Theory & Lectures";
            case "THURSDAY", "FRIDAY" -> "Hands-on Practical Lab Sessions";
            case "SATURDAY", "SUNDAY" -> "Weekend Revision & Project Sprint";
            default -> "Unknown Day";
        };
    }

    public static void main(String[] args) {
        System.out.println("Monday -> " + getSchedule("Monday"));
        System.out.println("Friday -> " + getSchedule("Friday"));

        // Labeled Break in 2D Matrix Search
        int[][] matrix = {
            {10, 20, 30},
            {40, 50, 60},
            {70, 80, 90}
        };
        int target = 50;

        searchGrid:
        for (int r = 0; r < matrix.length; r++) {
            for (int c = 0; c < matrix[r].length; c++) {
                if (matrix[r][c] == target) {
                    System.out.println("Found " + target + " at [" + r + "][" + c + "]. Breaking outer loop!");
                    break searchGrid; // Breaks outer loop
                }
            }
        }
    }
}`,
            output: `Monday -> Core Java Theory & Lectures
Friday -> Hands-on Practical Lab Sessions
Found 50 at [1][1]. Breaking outer loop!`
          },
          mcqs: [
            {
              id: "u2_t3_mcq1",
              question: "Which of the following loops in Java is guaranteed to execute its loop body at least once, even if the condition is initially false?",
              options: [
                "Standard `for` loop",
                "Enhanced `for-each` loop",
                "`while` loop",
                "`do-while` loop"
              ],
              correct: 3,
              explanation: "`do-while` is an exit-controlled loop where the boolean test condition is evaluated at the bottom of the loop body, guaranteeing at least one execution."
            },
            {
              id: "u2_t3_mcq2",
              question: "Which data type is NOT supported as a selector expression in a traditional Java `switch` statement?",
              options: [
                "String",
                "float",
                "char",
                "enum"
              ],
              correct: 1,
              explanation: "Floating-point types (`float` and `double`) and `boolean` / `long` cannot be used in `switch` statements due to IEEE 754 precision rounding issues. Switch supports `byte`, `short`, `char`, `int`, `String`, and `enum`."
            }
          ]
        },
        {
          id: "u2-t4",
          title: "Arrays (1D, 2D, Jagged) & Strings (Immutability, SCP, StringBuilder)",
          image: "images/unit2_arrays_and_string_pool.svg",
          imageCaption: "Technical Diagram: 1D, 2D & Jagged Arrays in Heap vs String Constant Pool (SCP) Reference Equality (== vs .equals)",
          analogyImages: [
            {
              src: "images/unit2_arrays_realworld_analogy.svg",
              caption: "Real-World Mental Models: 1) Gym Lockers (1D Linear Array), 2) Classroom Desks / Chessboard (2D Regular Matrix), 3) Airplane Cabin Seating (Jagged Array with Variable Row Lengths)"
            },
            {
              src: "images/unit2_string_stone_whiteboard_analogy.svg",
              caption: "Real-World Mental Models: Engraved Stone Monument (Immutable String) vs Reusable Classroom Whiteboard (Mutable StringBuilder)"
            }
          ],
          content: `
            <p>Arrays and Strings are the two most fundamental contiguous data structures used in Java application programming.</p>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">1. Java Arrays Architecture (1D, 2D &amp; Jagged)</h4>
            <p>An array is an indexed, fixed-length container of homogeneous data elements dynamically allocated in <strong>Heap memory</strong>:</p>

            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.85rem 1rem; margin:0.75rem 0;">
              <h5 style="color:#4338ca; margin-bottom:0.35rem; font-size:0.92rem;">A. 1D Array (Linear Sequence)</h5>
              <p style="font-size:0.85rem; margin-bottom:0.4rem;">Elements stored consecutively in memory like a row of lockers:</p>
              <pre class="language-java" style="padding:0.5rem; font-size:0.82rem; background:#1e293b; color:#f8fafc; border-radius:6px;"><code>int[] marks = { 85, 92, 78, 90, 88 }; // length = 5
int first = marks[0]; // 85 (0-indexed instant access in O(1) time)</code></pre>
            </div>

            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.85rem 1rem; margin:0.75rem 0;">
              <h5 style="color:#059669; margin-bottom:0.35rem; font-size:0.92rem;">B. 2D Regular Matrix (Uniform Grid)</h5>
              <p style="font-size:0.85rem; margin-bottom:0.4rem;">Rectangular symmetric table where each row has equal columns (<code>R × C</code>):</p>
              <pre class="language-java" style="padding:0.5rem; font-size:0.82rem; background:#1e293b; color:#f8fafc; border-radius:6px;"><code>int[][] matrix = {
    { 10, 20, 30 },
    { 40, 50, 60 },
    { 70, 80, 90 }
}; // 3 rows x 3 columns</code></pre>
            </div>

            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.85rem 1rem; margin:0.75rem 0;">
              <h5 style="color:#7c3aed; margin-bottom:0.35rem; font-size:0.92rem;">C. Jagged / Ragged Array (Variable Row Lengths)</h5>
              <p style="font-size:0.85rem; margin-bottom:0.4rem;">Multi-dimensional array where each row has its own custom column length, eliminating wasted space:</p>
              <pre class="language-java" style="padding:0.5rem; font-size:0.82rem; background:#1e293b; color:#f8fafc; border-radius:6px;"><code>int[][] batches = new int[3][]; // Declare 3 rows
batches[0] = new int[]{ 95, 88 };             // Row 0 has 2 elements
batches[1] = new int[]{ 72, 85, 90, 94 };     // Row 1 has 4 elements
batches[2] = new int[]{ 60, 75, 80 };         // Row 2 has 3 elements</code></pre>
            </div>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">1D Array vs. 2D Regular Array vs. Jagged Array Comparison</h4>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Architecture Dimension</th>
                    <th>1D Array (Linear)</th>
                    <th>2D Regular Matrix (Uniform Grid)</th>
                    <th>Jagged / Ragged Array (Dynamic Row Columns)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Data Structure</strong></td>
                    <td>Single-dimensional linear sequence of homogeneous elements.</td>
                    <td>Symmetric rectangular matrix where every row has identical column lengths (<code>R × C</code>).</td>
                    <td>Multi-dimensional array where individual rows have differing, customized column capacities.</td>
                  </tr>
                  <tr>
                    <td><strong>Heap Memory Layout</strong></td>
                    <td>Single contiguous block of memory cells in Heap.</td>
                    <td>Primary array storing row reference pointers, pointing to equal-sized sub-arrays in Heap.</td>
                    <td>Primary array storing row reference pointers, pointing to independently sized sub-arrays in Heap.</td>
                  </tr>
                  <tr>
                    <td><strong>Declaration &amp; Instantiation</strong></td>
                    <td><code>int[] a = new int[5];</code></td>
                    <td><code>int[][] m = new int[3][4];</code></td>
                    <td><code>int[][] j = new int[3][];</code><br><code>j[0] = new int[2]; j[1] = new int[5];</code></td>
                  </tr>
                  <tr>
                    <td><strong>Row Length Uniformity</strong></td>
                    <td>Fixed length: <code>a.length</code></td>
                    <td>Uniform: <code>m[0].length == m[1].length</code></td>
                    <td>Variable: <code>j[0].length != j[1].length</code></td>
                  </tr>
                  <tr>
                    <td><strong>Memory Efficiency</strong></td>
                    <td>High (No overhead pointers).</td>
                    <td>May waste memory if table has varying data per row (sparse matrix).</td>
                    <td><strong>Maximum Efficiency</strong> (Allocates exact memory required per row, zero waste).</td>
                  </tr>
                  <tr>
                    <td><strong>Real-World Analogy</strong></td>
                    <td>Row of numbered gym lockers (indices 0 to N-1).</td>
                    <td>Uniform classroom seating grid or standard 8×8 chessboard.</td>
                    <td>Commercial airplane cabin seating (First Class 2 seats, Business 4, Economy 6).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">2. String Immutability &amp; String Constant Pool (SCP)</h4>
            <p>In Java, objects of <code>java.lang.String</code> are <strong>immutable</strong> (their state cannot be modified once constructed in Heap memory).</p>
            <ul>
              <li><strong>Why String is Immutable:</strong> Security (storing passwords/network ports), Thread-safety (stateless sharing), Caching (HashCode computed once), and String Constant Pool memory optimization.</li>
              <li><strong>String Constant Pool (SCP):</strong> A dedicated memory region inside Heap. When creating string literals (<code>String s = "Java";</code>), the JVM reuses existing pooled instances instead of allocating duplicate objects.</li>
              <li><strong><code>==</code> vs. <code>.equals()</code>:</strong> <code>==</code> compares Stack memory addresses (reference identity), whereas <code>.equals()</code> compares character-by-character text content.</li>
            </ul>

            <h4 style="margin-top:1.25rem; margin-bottom:0.5rem; color:var(--text-primary);">3. String vs. StringBuilder vs. StringBuffer</h4>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th><code>String</code></th>
                    <th><code>StringBuilder</code></th>
                    <th><code>StringBuffer</code></th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Mutability</strong></td><td><strong>Immutable</strong> (Creates new Heap object on edit)</td><td><strong>Mutable</strong> (Modifies in-place internal buffer)</td><td><strong>Mutable</strong> (Modifies in-place internal buffer)</td></tr>
                  <tr><td><strong>Thread Safety</strong></td><td>Thread-Safe (Stateless / Read-only)</td><td><strong>Not Thread-Safe</strong></td><td><strong>Thread-Safe</strong> (All methods <code>synchronized</code>)</td></tr>
                  <tr><td><strong>Performance</strong></td><td>Slow for repeated string concatenations</td><td><strong>Fastest</strong> (Recommended for single thread)</td><td>Slower due to lock acquisition overhead</td></tr>
                  <tr><td><strong>Introduction</strong></td><td>Java 1.0</td><td>Java 5.0</td><td>Java 1.0</td></tr>
                </tbody>
              </table>
            </div>
          `,
          analogy: "A 1D array is a row of gym lockers; a 2D array is a uniform classroom seating grid; a Jagged array is an airplane cabin with 2 VIP seats, 4 Business seats, and 6 Economy seats.",
          trap: "Why should you NEVER use String concatenation ('s += str') inside a large loop? Because String is immutable, each loop iteration instantiates a brand new intermediate String object in Heap, rapidly generating tons of garbage and triggering heavy GC pauses! Always use StringBuilder.",
          codeSnippet: {
            filename: "Arrays1D2DJaggedDemo.java",
            code: `public class Arrays1D2DJaggedDemo {
    public static void main(String[] args) {
        // 1. 1D ARRAY (Linear Storage)
        int[] marks = { 85, 92, 78, 90, 88 };
        int sum1D = 0;
        for (int i = 0; i < marks.length; i++) {
            System.out.println("  marks[" + i + "] = " + marks[i]);
            sum1D += marks[i];
        }
        System.out.printf("  -> Total: %d | Average: %.2f%n%n", sum1D, (double) sum1D / marks.length);

        // 2. 2D REGULAR ARRAY (Uniform 3x3 Matrix Grid)
        int[][] matrix = {
            { 10, 20, 30 },
            { 40, 50, 60 },
            { 70, 80, 90 }
        };
        int diagonalSum = 0;
        for (int r = 0; r < matrix.length; r++) {
            for (int c = 0; c < matrix[r].length; c++) {
                System.out.printf("[%d][%d]: %-3d  ", r, c, matrix[r][c]);
                if (r == c) diagonalSum += matrix[r][c]; // 10 + 50 + 90
            }
            System.out.println();
        }
        System.out.println("  -> Diagonal Sum = " + diagonalSum + "\\n");

        // 3. JAGGED ARRAY (Custom Column Capacities)
        int[][] batches = new int[3][];
        batches[0] = new int[]{ 95, 88 };             // Batch 1 (2 students)
        batches[1] = new int[]{ 72, 85, 90, 94 };     // Batch 2 (4 students)
        batches[2] = new int[]{ 60, 75, 80 };         // Batch 3 (3 students)

        for (int b = 0; b < batches.length; b++) {
            int batchTotal = 0, topScore = batches[b][0];
            System.out.printf("  Batch #%d (Size: %d) -> ", (b + 1), batches[b].length);
            for (int score : batches[b]) {
                System.out.print(score + " ");
                batchTotal += score;
                if (score > topScore) topScore = score;
            }
            System.out.printf("| Avg: %.2f | Top: %d%n", (double) batchTotal / batches[b].length, topScore);
        }
    }
}`,
            output: `  marks[0] = 85
  marks[1] = 92
  marks[2] = 78
  marks[3] = 90
  marks[4] = 88
  -> Total: 433 | Average: 86.60

[0][0]: 10   [0][1]: 20   [0][2]: 30  
[1][0]: 40   [1][1]: 50   [1][2]: 60  
[2][0]: 70   [2][1]: 80   [2][2]: 90  
  -> Diagonal Sum = 150

  Batch #1 (Size: 2) -> 95 88 | Avg: 91.50 | Top: 95
  Batch #2 (Size: 4) -> 72 85 90 94 | Avg: 85.25 | Top: 94
  Batch #3 (Size: 3) -> 60 75 80 | Avg: 71.67 | Top: 80`
          },
          mcqs: [
            {
              id: "u2_t4_mcq1",
              question: "What is the result of executing `String s1 = \"Java\"; String s2 = new String(\"Java\"); System.out.println(s1 == s2);`?",
              options: [
                "`true` because both strings hold identical characters.",
                "`false` because `s1` references the String Constant Pool while `s2` references a distinct Heap object.",
                "`true` because the compiler automatically interns all String instances.",
                "Compilation error because `==` cannot be applied to objects."
              ],
              correct: 1,
              explanation: "`s1` refers to the interned literal in the String Constant Pool (SCP), while `s2` explicitly creates a new object on the Heap. The `==` operator checks reference memory addresses, which are different, evaluating to `false`. To compare content, use `s1.equals(s2)`."
            },
            {
              id: "u2_t4_mcq2",
              question: "Which of the following classes is MUTABLE and NOT thread-safe, making it the fastest choice for heavy single-threaded string manipulations?",
              options: [
                "`java.lang.String`",
                "`java.lang.StringBuffer`",
                "`java.lang.StringBuilder`",
                "`java.lang.CharSequence`"
              ],
              correct: 2,
              explanation: "`StringBuilder` is mutable and unsynchronized (not thread-safe), making it significantly faster than `StringBuffer` for single-threaded string modification operations."
            }
          ]
        }
      ]
    },
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
          analogyImages: [
            {
              src: "images/oops_4pillars_realworld_analogy.jpg",
              caption: "Real-World Mental Models: 1) ATM Interface (Abstraction), 2) Medicine Capsule (Encapsulation), 3) Vehicle Lineage (Inheritance), 4) Universal Remote (Polymorphism)"
            }
          ],
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
        BankAccount acc = new BankAccount("ACC-MCA-101", 5000.0);
        System.out.println("Initial Balance: ₹" + acc.getBalance());
        acc.deposit(2500.0);
    }
}`,
            output: `Initial Balance: ₹5000.0
Deposited: ₹2500.0 | Balance: ₹7500.0`
          },
          mcqs: [
            {
              id: "u3_t1_mcq1",
              question: "Which statement accurately describes the core architectural difference between Abstraction and Encapsulation in Java?",
              options: [
                "Abstraction is achieved strictly through private fields, whereas Encapsulation is achieved exclusively via abstract classes and interfaces.",
                "Encapsulation enables compile-time method overloading, whereas Abstraction handles dynamic runtime polymorphism across inheritance trees.",
                "Abstraction focuses on exposing high-level functionality while hiding internal details, whereas Encapsulation binds data with methods and restricts direct state access.",
                "Abstraction prevents classes from being subclassed in memory, whereas Encapsulation allows multiple inheritance of state across hierarchies."
              ],
              correct: 2,
              explanation: "Abstraction addresses design by showing 'what' an entity does while hiding internal implementation details (e.g. interfaces, ATM interfaces). Encapsulation addresses implementation safety by bundling fields with methods into a cohesive unit and guarding state with access modifiers."
            },
            {
              id: "u3_t1_mcq2",
              question: "What occurs if an external class attempts to directly read or mutate a `private` instance variable of another class in standard Java code?",
              options: [
                "The Java compiler rejects the code with a compilation error stating the member has private access in the target class.",
                "The code compiles successfully but throws an `IllegalAccessException` when executed by the Java Virtual Machine.",
                "The code compiles successfully but throws a `NullPointerException` when the CPU attempts memory address resolution.",
                "The compiler automatically transforms the private member into a package-private field to allow seamless interoperability."
              ],
              correct: 0,
              explanation: "In Java, access control modifiers (private, package-private, protected, public) are enforced at compile time by `javac`. Direct access to private members from external classes fails compilation immediately."
            }
          ]
        },
        {
          id: "u3-t2",
          title: "Primitive vs Reference Data Types & Memory Allocation",
          image: "images/stack_vs_heap.jpg",
          imageCaption: "Visual Diagram: Stack Memory (Primitives & Reference Pointers) vs Heap Memory (Allocated Objects)",
          analogyImages: [
            {
              src: "images/primitive_vs_reference_analogy.jpg",
              caption: "Cash in Wallet (Primitive/Stack) vs Bank Locker Keycard pointing to Vault (Reference/Heap)"
            },
            {
              src: "images/reference_aliasing_house_analogy.jpg",
              caption: "Piggy Bank Value Copy (Primitive) vs Shared House Keys & Aliasing (Reference Pointers)"
            }
          ],
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
          },
          mcqs: [
            {
              id: "u3_t2_mcq1",
              question: "Where are local primitive variables (e.g., `int count = 5;`) of an executing method allocated versus instance primitive variables of an object?",
              options: [
                "Both local primitives and instance primitives are allocated exclusively inside the JVM Metaspace along with class definitions.",
                "Local primitive variables reside inside the Heap space, whereas instance primitives reside inside the calling thread's private Stack.",
                "Both local primitives and instance primitives are allocated within the String Constant Pool to conserve memory.",
                "Local primitives reside in the method's Stack frame, whereas instance primitives reside inside the object instance on the Heap."
              ],
              correct: 3,
              explanation: "Local variables declared inside method bodies reside inside the thread's Stack Frame and are destroyed when the method exits. Instance variables belong to an instantiated object and reside inside that object's Heap allocation."
            },
            {
              id: "u3_t2_mcq2",
              question: "Given `Integer a = new Integer(100); Integer b = new Integer(100);`, what do `(a == b)` and `(a.equals(b))` evaluate to in standard Java?",
              options: [
                "`true` and `true` because autoboxing automatically canonicalizes all Integer values between -128 and 127.",
                "`true` and `false` because memory pointer addresses match while overridden value comparison fails.",
                "`false` and `true` because `==` checks distinct Heap reference addresses while `.equals()` compares wrapped numeric values.",
                "`false` and `false` because explicit `new` instantiation disables both reference equality and semantic content equality."
              ],
              correct: 2,
              explanation: "The `==` operator checks reference identity (memory addresses on Stack). Because `new` creates two distinct objects at different Heap addresses, `a == b` is `false`. The `.equals()` method compares underlying numeric values (100 == 100), returning `true`."
            }
          ]
        },
        {
          id: "u3-t3",
          title: "Pass by Value v/s Pass by Reference (The Java Memory Truth)",
          image: "images/pass_by_value.jpg",
          imageCaption: "Visual Diagram: Step-by-Step Proof of Java's Strict Pass-by-Value Parameter Passing",
          analogyImages: [
            {
              src: "images/pass_by_value_googledoc_analogy.jpg",
              caption: "Physical Paper Photocopy (Primitive Pass-by-Value) vs Shared Google Doc URL Link & Local Pointer Reassignment (Object Reference Pass-by-Value)"
            }
          ],
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
          },
          mcqs: [
            {
              id: "u3_t3_mcq1",
              question: "Consider a method `void update(Student s) { s.name = \"Priya\"; s = new Student(\"Amit\"); }`. If called with `s1` (`name = \"Rahul\"`), what will `s1.name` be after the method returns?",
              options: [
                "`\"Priya\"` because field modification mutates the shared Heap object while local reference reassignment does not affect the caller.",
                "`\"Rahul\"` because all parameter variables in Java are completely isolated copies whose mutations never escape method scope.",
                "`\"Amit\"` because reassigning the parameter pointer automatically redirects the caller's reference variable to the new object.",
                "`null` because creating a second `Student` object inside the method invalidates previous Heap object references."
              ],
              correct: 0,
              explanation: "Java passes reference pointers by value. Mutating `s.name` affects the actual Heap object. However, assigning `s = new Student(\"Amit\")` merely changes the local pointer variable in the stack frame without affecting the caller's reference `s1`."
            },
            {
              id: "u3_t3_mcq2",
              question: "Why does writing a generic `swap(Object a, Object b)` method fail to swap two caller reference variables in Java?",
              options: [
                "Because Java objects become immutable once passed through any method parameter boundary.",
                "Because the Garbage Collector immediately reclaims object references that undergo binary pointer swapping.",
                "Because the Java type system prohibits methods from accepting multiple parameters of type `Object`.",
                "Because Java copies reference addresses onto the local stack frame, so swapping parameter variables only swaps local copies."
              ],
              correct: 3,
              explanation: "Java is strictly 100% pass-by-value. When objects are passed into `swap(a, b)`, copies of their reference pointers are stored in `swap()`'s stack frame. Swapping those parameters only swaps local copies; caller variables remain unchanged."
            }
          ]
        },
        {
          id: "u3-t4",
          title: "Static Variables/Methods, Cross-Class Access & Reference vs Static",
          image: "images/static_vs_instance.jpg",
          imageCaption: "Visual Diagram: Metaspace (1 Shared Static Variable) vs Heap Memory (Separate Instance Copies)",
          analogyImages: [
            {
              src: "images/static_vs_instance_noticeboard_analogy.jpg",
              caption: "College Central Hall Notice Board (1 Shared Static Variable in Metaspace) vs Student Personal Backpack Notebooks (Separate Instance Copies in Heap)"
            }
          ],
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
    public static String INSTITUTE_NAME = "MCA Postgraduate Department";
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
            output: `Center: MCA Postgraduate Department
Enrolled: Aman Verma | Total: 1
Enrolled: Sneha Roy | Total: 2`
          },
          mcqs: [
            {
              id: "u3_t4_mcq1",
              question: "What happens when a static method attempts to use the `this` keyword or access a non-static instance field directly?",
              options: [
                "The code compiles successfully and resolves the field against the most recently instantiated object in Heap memory.",
                "The code compiles cleanly but throws an `IllegalStateException` during runtime invocation by the JVM.",
                "The Java compiler produces an error because static contexts have no implicit `this` object reference available.",
                "The compiler automatically promotes the referenced non-static instance field into a global static variable."
              ],
              correct: 2,
              explanation: "Static members belong to the class blueprint and can execute without any instance existing in Heap memory. Because there is no current instance (`this`), referencing non-static members directly results in a compile-time error."
            },
            {
              id: "u3_t4_mcq2",
              question: "If class `Child extends Parent` defines a static method `print()` matching `Parent`'s static `print()`, what is executed by `Parent p = new Child(); p.print();`?",
              options: [
                "`Child`'s static method executes because runtime dynamic method dispatch always inspects the actual Heap instance.",
                "`Parent`'s static method executes because static methods undergo compile-time Method Hiding bound by reference type.",
                "A runtime `ClassCastException` is thrown because static methods cannot be invoked through polymorphic instance handles.",
                "Both `Parent` and `Child` static methods execute sequentially in hierarchical top-down order."
              ],
              correct: 1,
              explanation: "Static methods cannot be overridden dynamically at runtime. Subclasses hide superclass static methods (Method Hiding). Method calls are resolved at compile-time based on the declared reference type (`Parent p`), executing `Parent.print()`."
            }
          ]
        },
        {
          id: "u3-t5",
          title: "Inheritance & Polymorphism Implementation",
          image: "images/inheritance_polymorphism.jpg",
          imageCaption: "Visual Diagram: Inheritance, Overriding and Dynamic Method Dispatch (Runtime Polymorphism)",
          analogyImages: [
            {
              src: "images/polymorphism_payment_analogy.jpg",
              caption: "Universal Merchant Counter UPI QR Stand (Parent Reference Handle: Payment) dynamically triggering specific subclass payment execution routines (GPay, PhonePe, Card) at runtime"
            }
          ],
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
          },
          mcqs: [
            {
              id: "u3_t5_mcq1",
              question: "Given `class Parent { int x = 10; void show() { System.out.print(\"P\"); } }` and `class Child extends Parent { int x = 20; void show() { System.out.print(\"C\"); } }`, what is printed by `Parent obj = new Child(); System.out.print(obj.x); obj.show();`?",
              options: [
                "`20C` because both variable access and method execution are dynamically bound to the runtime Heap instance.",
                "`10P` because parent reference variables strictly execute parent members for both fields and methods.",
                "`20P` because child fields override parent fields while methods default to compile-time resolution.",
                "`10C` because field access is resolved at compile time by reference type while method calls use dynamic dispatch."
              ],
              correct: 3,
              explanation: "Instance variables are not polymorphic in Java—`obj.x` resolves at compile-time to `Parent.x` (10). Methods are polymorphic—`obj.show()` uses Dynamic Method Dispatch based on the runtime Heap instance (`Child`), printing 'C'. Output is '10C'."
            },
            {
              id: "u3_t5_mcq2",
              question: "Which of the following is a strict requirement for valid Method Overriding in standard Java?",
              options: [
                "The overriding method in the subclass must have the exact same name, parameter list, and a covariant or identical return type.",
                "The overriding method in the subclass must declare a more restrictive access modifier than the superclass method.",
                "The superclass method must be declared with both `final` and `synchronized` modifiers.",
                "The overriding subclass method must be declared with the `static` keyword to enable virtual method table lookups."
              ],
              correct: 0,
              explanation: "Method overriding requires matching method signature (name and parameter types), return type compatibility (covariant returns allowed), and cannot reduce visibility (e.g. public superclass method cannot become protected or private)."
            }
          ]
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
          analogyImages: [
            {
              src: "images/io_streams_analogy.jpg",
              caption: "Byte Droplets vs Character Blocks (Streams) & Spoon vs RAM Bucket (BufferedReader Batch Transfers)"
            }
          ],
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
        File file = new File("mca_students.txt");

        // 1. Character Stream: BufferedWriter with Try-With-Resources
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(file))) {
            writer.write("MCA Postgraduate Program - Advanced Java Batch 2026\\n");
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
            output: `Read: MCA Postgraduate Program - Advanced Java Batch 2026
Read: Course: MC101 - Problem Solving & Java`
          },
          mcqs: [
            {
              id: "u4_t1_mcq1",
              question: "Why is `FileReader` preferred over `FileInputStream` when reading plain text files containing international UTF-8/Unicode characters?",
              options: [
                "`FileInputStream` is deprecated in modern Java releases and replaced by memory-mapped buffers.",
                "`FileReader` decodes 16-bit Unicode characters per charset, preventing multi-byte character fragmentation across byte boundaries.",
                "`FileInputStream` cannot read files larger than 64 Kilobytes due to 8-bit stream buffer constraints.",
                "`FileReader` automatically executes file read operations asynchronously on the graphics processor."
              ],
              correct: 1,
              explanation: "`FileInputStream` reads raw 8-bit bytes. Multi-byte Unicode characters (like Hindi or symbols) span 2 to 4 bytes and can get split/corrupted across byte buffers. Character streams like `FileReader` decode bytes into proper 16-bit Unicode `char` values."
            },
            {
              id: "u4_t1_mcq2",
              question: "What is the primary architectural and performance benefit of wrapping a `FileReader` inside a `BufferedReader`?",
              options: [
                "It automatically encrypts the file stream using hardware-accelerated AES-256 encryption.",
                "It prevents other operating system threads from deleting or modifying the underlying file.",
                "It maintains an in-memory buffer in RAM, significantly reducing costly OS-level physical disk read cycles.",
                "It converts synchronous file reading into multi-threaded GPU parallel processing pipelines."
              ],
              correct: 2,
              explanation: "Reading character-by-character from disk incurs costly OS system calls. `BufferedReader` reads a block (default 8KB) into RAM in one system call, allowing fast in-memory reads via `readLine()`."
            }
          ]
        },
        {
          id: "u4-t2",
          title: "Serialization, Deserialization, Shallow Copy & Deep Copy",
          image: "images/serialization_cloning.jpg",
          imageCaption: "Visual Diagram: Java Object Serialization / Deserialization & Shallow vs Deep Copy Graphs",
          analogyImages: [
            {
              src: "images/serialization_shallow_deep_analogy.jpg",
              caption: "Disassembled Flat-Pack Furniture Shipment (Serialization) & Shared Hotel Keycard vs Duplicate House (Shallow vs Deep Copy)"
            }
          ],
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
        UserAccount user = new UserAccount("aniket_sme", "PIN#9944", new Address("Bengaluru"));

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
City: Bengaluru`
          },
          mcqs: [
            {
              id: "u4_t2_mcq1",
              question: "If a class implements `Serializable` and has a `transient int balance = 5000;` field, what will `balance` be immediately after deserializing the object?",
              options: [
                "`5000` because the JVM restores the original instance field initialization value from the classfile.",
                "`null` because transient fields are always restored as unallocated null references regardless of type.",
                "A `NotSerializableException` is thrown because transient fields cannot undergo byte stream reconstruction.",
                "`0` because transient fields are skipped during serialization and initialized to default primitive values on deserialization."
              ],
              correct: 3,
              explanation: "`transient` fields are excluded from the serialized byte stream. When the object is reconstituted during deserialization, transient fields receive default language values (`0` for `int`, `false` for `boolean`, `null` for references)."
            },
            {
              id: "u4_t2_mcq2",
              question: "What is the primary architectural consequence of performing a Shallow Copy on an object containing a mutable nested reference field?",
              options: [
                "Both the original and cloned objects share pointers to the same nested object in Heap, so mutating it in one affects both.",
                "The JVM throws a `CloneNotSupportedException` at runtime unless the nested field is marked `transient`.",
                "The cloned object creates an entirely independent recursive duplicate of the entire object graph.",
                "The original object's reference fields are automatically set to `null` to prevent memory aliasing."
              ],
              correct: 0,
              explanation: "A shallow copy copies reference pointers as-is without duplicating nested objects. Both instances point to the same nested object on Heap, causing mutations in one instance to reflect in the other."
            }
          ]
        },
        {
          id: "u4-t3",
          title: "Exception Hierarchy: Errors vs Checked vs Unchecked",
          image: "images/exception_hierarchy.jpg",
          imageCaption: "Visual Diagram: Complete Java Exception Hierarchy (Throwable -> Error & Exception)",
          analogyImages: [
            {
              src: "images/exception_hierarchy_airport_analogy.jpg",
              caption: "Airport System Runway Grounding (Error) vs Mandatory Security Gate Check (Checked Exception) vs In-Flight Coffee Spill (Unchecked Exception)"
            }
          ],
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
          },
          mcqs: [
            {
              id: "u4_t3_mcq1",
              question: "Which of the following exceptions is a **Checked Exception** that the Java compiler mandates you must catch or declare with `throws`?",
              options: [
                "`NullPointerException` which extends `RuntimeException` for uninitialized reference dereferences.",
                "`ArithmeticException` which extends `RuntimeException` for integer division-by-zero errors.",
                "`ClassNotFoundException` which directly extends `Exception` for dynamic class loading failures.",
                "`IllegalArgumentException` which extends `RuntimeException` for invalid method parameter values."
              ],
              correct: 2,
              explanation: "`ClassNotFoundException` extends `java.lang.Exception` directly (and is not under `RuntimeException`), making it a Checked Exception. The other options extend `RuntimeException` and are Unchecked."
            },
            {
              id: "u4_t3_mcq2",
              question: "What is the primary architectural difference between instances of `java.lang.Error` and `java.lang.Exception` in Java?",
              options: [
                "`Error` instances are checked by compiler; `Exception` instances are unchecked runtime events.",
                "`Error` represents catastrophic system failures that programs should not catch, whereas `Exception` represents recoverable conditions.",
                "`Error` is an interface implemented by native drivers, whereas `Exception` is an abstract class.",
                "`Error` can only be thrown by C++ native methods, whereas `Exception` can only be thrown by pure Java bytecode."
              ],
              correct: 1,
              explanation: "`Error` represents severe conditions like `OutOfMemoryError` or `StackOverflowError` where the JVM itself is compromised. `Exception` represents standard recoverable conditions that applications should handle gracefully."
            }
          ]
        },
        {
          id: "u4-t4",
          title: "Exception Propagation, try-catch-finally, throws & throw",
          image: "images/exception_propagation.jpg",
          imageCaption: "Visual Diagram: Exception Propagation down the Call Stack & try-catch-finally Flow",
          analogyImages: [
            {
              src: "images/exception_propagation_hotpotato_analogy.jpg",
              caption: "Team Hot Potato Escalation Chain (Call Stack Propagation) & Guaranteed Kitchen Stove Gas Safety Shutoff (finally Block)"
            }
          ],
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
          },
          mcqs: [
            {
              id: "u4_t4_mcq1",
              question: "Consider a method with `try { return 10; } catch (Exception e) { return 20; } finally { return 30; }`. What value does the method return when executed without errors?",
              options: [
                "`30` because the `finally` block executes before method completion and its return value overrides previous pending returns.",
                "`10` because the `try` block completes successfully and immediate return halts subsequent block execution.",
                "`20` because return statements inside `finally` blocks redirect execution flow to the catch handler.",
                "Compilation Error because Java prohibits placing `return` statements inside `finally` blocks."
              ],
              correct: 0,
              explanation: "A `finally` block is guaranteed to execute before the method exits. If `finally` contains a `return` statement, it discards and overrides any return value previously computed in `try` or `catch`."
            },
            {
              id: "u4_t4_mcq2",
              question: "Why does the multi-catch clause `catch (FileNotFoundException | IOException e)` fail to compile in Java?",
              options: [
                "Because multi-catch blocks in Java are strictly restricted to handling Unchecked RuntimeExceptions.",
                "Because the pipe operator `|` is only valid for bitwise logical arithmetic evaluations.",
                "Because the parameter variable `e` must be explicitly declared with the `volatile` modifier.",
                "Because `FileNotFoundException` is a subclass of `IOException`, violating the rule that multi-catch types must be disjoint."
              ],
              correct: 3,
              explanation: "In multi-catch syntax (`catch (A | B e)`), exception types must be disjoint (cannot have a subclass-superclass relationship). Since `FileNotFoundException` extends `IOException`, specifying both creates a compilation error."
            }
          ]
        },
        {
          id: "u4-t5",
          title: "Creating User-Defined Checked & Unchecked Exceptions",
          image: "images/custom_exceptions.jpg",
          imageCaption: "Visual Diagram: Defining, Throwing and Handling Custom Checked vs Unchecked Exceptions",
          analogyImages: [
            {
              src: "images/custom_exception_banking_analogy.jpg",
              caption: "Cryptic Vague System Error Code vs Context-Rich Custom Banking Alert Badge (InsufficientFundsException with shortfall amount)"
            }
          ],
          content: `
            <p>Custom exceptions give domain-specific meaning to business logic errors:</p>
            <ul>
              <li><strong>Custom Checked Exception:</strong> Extend <code>java.lang.Exception</code>. Caller is forced to handle or declare with <code>throws</code>.</li>
              <li><strong>Custom Unchecked Exception:</strong> Extend <code>java.lang.RuntimeException</code>. Used for invalid internal business state violations.</li>
            </ul>
          `,
          analogy: "Creating a specialized system alert specifically for 'LowBalanceViolation' instead of a generic exception.",
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
          },
          mcqs: [
            {
              id: "u4_t5_mcq1",
              question: "To create a custom **Checked Exception** that forces calling methods to explicitly handle it with `try-catch` or declare it with `throws`, your class must directly extend which class?",
              options: [
                "`java.lang.RuntimeException` or any of its standard derived unchecked subclasses.",
                "`java.lang.Exception` (or any subclass other than `RuntimeException`).",
                "`java.lang.Throwable` directly to bypass compiler exception classification rules.",
                "`java.lang.Error` to indicate domain business validation failures."
              ],
              correct: 1,
              explanation: "Classes extending `java.lang.Exception` (and not `RuntimeException`) are Checked Exceptions. The compiler enforces that callers must handle them with `try-catch` or declare them with `throws`."
            },
            {
              id: "u4_t5_mcq2",
              question: "When creating a custom exception class, why is it considered an essential best practice to provide a constructor accepting `(String message, Throwable cause)`?",
              options: [
                "It enables automatic serialization of stack frames across remote network endpoints.",
                "It converts unchecked exceptions into checked exceptions automatically at runtime.",
                "It enables Exception Chaining, preserving the underlying root-cause stack trace when wrapping low-level errors into domain exceptions.",
                "It allows the garbage collector to immediately deallocate caught exception instances."
              ],
              correct: 2,
              explanation: "Exception chaining (`super(message, cause)`) attaches the underlying root cause (e.g. low-level `SQLException`) to the domain exception (e.g. `UserNotFoundException`), ensuring complete diagnostic trace visibility in log files."
            }
          ]
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
          analogyImages: [
            {
              src: "images/collections_realworld_analogy.jpg",
              caption: "Numbered Delivery Lockers (List), Unique VIP Entry Wristbands (Set), Hospital Emergency Triage (Queue) & Student Roll No Directory (Map)"
            }
          ],
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
        List<String> list = new ArrayList<>(Arrays.asList("Java", "Spring", "Docker", "Java"));
        System.out.println("ArrayList (Preserves Order + Duplicates): " + list);

        Set<String> set = new HashSet<>(list);
        System.out.println("HashSet (Deduplicated Unordered): " + set);

        Set<String> treeSet = new TreeSet<>(set);
        System.out.println("TreeSet (Deduplicated & Red-Black Tree Sorted): " + treeSet);
    }
}`,
            output: `ArrayList (Preserves Order + Duplicates): [Java, Spring, Docker, Java]
HashSet (Deduplicated Unordered): [Docker, Java, Spring]
TreeSet (Deduplicated & Red-Black Tree Sorted): [Docker, Java, Spring]`
          },
          mcqs: [
            {
              id: "u5_t1_mcq1",
              question: "Why does `HashSet` rely on both `hashCode()` and `equals()` methods when storing custom objects, and what bug occurs if only `equals()` is overridden?",
              options: [
                "`HashSet` fails to compile because the Java compiler enforces explicit `hashCode()` implementation on all Set elements.",
                "`HashSet` automatically converts itself into a `TreeSet` and sorts elements using default reflection comparators.",
                "The JVM throws an `IllegalStateException` whenever two objects evaluate to equal under the `equals()` method.",
                "Equal objects may yield different hash codes and land in different hash buckets, causing `HashSet` to store duplicate entries."
              ],
              correct: 3,
              explanation: "When storing an element in `HashSet`, `hashCode()` determines its bucket location. If two logically equal objects produce different hash codes, they land in different buckets where `equals()` is never invoked, allowing duplicates into the Set."
            },
            {
              id: "u5_t1_mcq2",
              question: "In what scenario is `LinkedList` theoretically faster than `ArrayList`, yet why is `ArrayList` preferred in almost all modern enterprise Java applications?",
              options: [
                "`LinkedList` provides O(1) insertions/deletions at ends, but `ArrayList` provides CPU cache-friendly contiguous memory with fast O(1) index access.",
                "`LinkedList` uses less heap memory per node, but `ArrayList` is inherently thread-safe without synchronization locks.",
                "`LinkedList` can store unboxed primitive types directly, whereas `ArrayList` requires wrapper class conversions.",
                "`LinkedList` cannot be iterated with enhanced foreach loops due to lack of random access markers."
              ],
              correct: 0,
              explanation: "`LinkedList` allows O(1) pointer updates at the ends, but each node has pointer overhead scattered in Heap. `ArrayList` uses contiguous internal array memory, making it cache-friendly for CPU prefetching and offering O(1) indexed lookup (`get(i)`)."
            }
          ]
        },
        {
          id: "u5-t2",
          title: "The `Collections` Utility Class, `Comparable` & `Comparator`",
          image: "images/comparable_comparator.jpg",
          imageCaption: "Visual Diagram: Comparable (Single Natural Sorting) vs Comparator (Multiple Custom Sorting)",
          analogyImages: [
            {
              src: "images/comparable_comparator_analogy.jpg",
              caption: "Classroom Natural Roll Number Sequence (Comparable / Inherent) vs Flexible CGPA / Sports Ranking Strategies (Comparator / External Lambdas)"
            }
          ],
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
          },
          mcqs: [
            {
              id: "u5_t2_mcq1",
              question: "What is the key architectural difference between `Comparable<T>` and `Comparator<T>` interfaces in Java?",
              options: [
                "`Comparable` is in `java.util` for multiple sorting strategies, while `Comparator` is in `java.lang` for default natural ordering.",
                "`Comparable` can only sort numeric primitives, while `Comparator` is strictly reserved for sorting String arrays.",
                "`Comparable` defines single natural ordering within the class via `compareTo`, while `Comparator` is an external strategy via `compare` for multiple sorting criteria.",
                "`Comparable` uses lambda expressions, while `Comparator` requires anonymous inner classes exclusively."
              ],
              correct: 2,
              explanation: "`Comparable` (in `java.lang`) modifies the class itself to define its intrinsic default natural ordering via `compareTo(T o)`. `Comparator` (in `java.util`) creates standalone sorting strategies via `compare(T o1, T o2)` without modifying the target class."
            },
            {
              id: "u5_t2_mcq2",
              question: "What will `Collections.binarySearch(list, key)` return if the specified list has NOT been sorted beforehand according to the natural ordering or supplied comparator?",
              options: [
                "It automatically sorts the list first and returns the correct index position.",
                "The return value is undefined and may produce incorrect indices or negative insertion points.",
                "It throws a checked `NotSortedException` at runtime before evaluating elements.",
                "It always returns `-1` immediately without inspecting list elements."
              ],
              correct: 1,
              explanation: "Binary search algorithms require the list to be sorted. If the list is unsorted, the binary division logic fails to eliminate search halves correctly, producing undefined results (e.g. wrong indices or failing to find existing items)."
            }
          ]
        },
        {
          id: "u5-t3",
          title: "Multithreading: Thread Class, Runnable Interface & Lifecycle",
          image: "images/multithreading_lifecycle.jpg",
          imageCaption: "Visual Diagram: Java Multithreading Lifecycle, State Machine & Synchronized Monitor Transitions",
          analogyImages: [
            {
              src: "images/multithreading_kitchen_analogy.svg",
              caption: "Single Lone Chef Bottleneck (Sequential) vs 4 Specialized Chefs in Shared Kitchen (Concurrent Multithreading & Thread Lifecycle States)"
            }
          ],
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
          },
          mcqs: [
            {
              id: "u5_t3_mcq1",
              question: "What is the critical behavioral difference between invoking `thread.start()` versus invoking `thread.run()` on a Java `Thread` instance?",
              options: [
                "`start()` allocates OS resources and executes the task asynchronously on a new thread, while `run()` executes synchronously on the caller thread.",
                "`start()` can only be called once, but `run()` throws an `IllegalThreadStateException` if invoked more than once.",
                "`start()` executes tasks with higher OS thread priority, while `run()` assigns minimal background priority.",
                "`run()` is deprecated in modern Java releases and replaced exclusively by virtual thread executor services."
              ],
              correct: 0,
              explanation: "`start()` registers the thread with the OS/JVM scheduler to execute `run()` asynchronously on a separate thread stack. Calling `run()` directly merely invokes the method synchronously on the current calling thread like any normal Java method."
            },
            {
              id: "u5_t3_mcq2",
              question: "When a thread is waiting to acquire an intrinsic monitor lock held by another thread, what is its lifecycle state in `java.lang.Thread.State`?",
              options: [
                "`WAITING` because the thread is waiting indefinitely for an explicit notify signal from another thread.",
                "`TIMED_WAITING` because monitor lock acquisition automatically times out after a JVM timeout interval.",
                "`TERMINATED` because threads that fail monitor acquisition are deallocated and recreated by the scheduler.",
                "`BLOCKED` because the thread is suspended waiting specifically to acquire a monitor lock to enter or re-enter a synchronized block."
              ],
              correct: 3,
              explanation: "A thread enters the `BLOCKED` state specifically when waiting to acquire a monitor lock for a `synchronized` block/method. `WAITING` is entered when calling `wait()` or `join()`."
            }
          ]
        },
        {
          id: "u5-t4",
          title: "Thread Synchronization, Locks & Deadlock Avoidance",
          image: "images/multithreading_lifecycle.jpg",
          imageCaption: "Visual Diagram: Thread Synchronization, Monitor Locks & Critical Section State Transitions",
          analogyImages: [
            {
              src: "images/thread_synchronization_deadlock_analogy.svg",
              caption: "Airplane Restroom Door Lock (Synchronized Monitor) & 2 Chefs Circular Wait vs Strict Lock Acquisition Order (Deadlock Avoidance)"
            }
          ],
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
          },
          mcqs: [
            {
              id: "u5_t4_mcq1",
              question: "Which architectural practice is essential and sufficient to completely prevent Deadlocks between multiple concurrent threads accessing shared resources?",
              options: [
                "Declaring all shared class instance variables with the `volatile` modifier.",
                "Enforcing a strict, identical global hierarchical order of lock acquisition across all concurrent threads.",
                "Setting all executing worker threads to `Thread.MAX_PRIORITY` before acquiring locks.",
                "Wrapping every method inside the application with the `synchronized` keyword."
              ],
              correct: 1,
              explanation: "A deadlock requires a circular wait condition (Thread 1 holds A and waits for B, while Thread 2 holds B and waits for A). Enforcing a global lock acquisition order (always Lock A before Lock B) breaks circular wait, making deadlocks mathematically impossible."
            },
            {
              id: "u5_t4_mcq2",
              question: "Why are local variables declared inside a method intrinsically thread-safe in Java without requiring the `synchronized` keyword?",
              options: [
                "Local variables are automatically stored in the JVM Metaspace along with immutable class definitions.",
                "The Java compiler wraps all local primitive variables in atomic thread-safe wrappers under the hood.",
                "Each thread allocates its own private Stack frame where local variables reside independently of other threads.",
                "Local variables are marked immutable by default and cannot be modified after initial assignment."
              ],
              correct: 2,
              explanation: "Every thread in Java possesses its own private execution Stack. When a method is called, a private Stack Frame is pushed containing that thread's local variables. Since other threads cannot access another thread's stack frame, local variables are inherently thread-safe."
            }
          ]
        },
        {
          id: "u5-t5",
          title: "Inter-Thread Communication: `wait()`, `notify()` & `notifyAll()`",
          image: "images/multithreading_lifecycle.jpg",
          imageCaption: "Visual Diagram: Producer-Consumer Coordination via wait(), notify() & Monitor Release",
          analogyImages: [
            {
              src: "images/interthread_producer_consumer_analogy.svg",
              caption: "Restaurant Serving Counter Producer-Consumer Coordination via wait(), notify() and notifyAll() on the Shared Buffer Monitor"
            }
          ],
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
          },
          mcqs: [
            {
              id: "u5_t5_mcq1",
              question: "Why must `wait()`, `notify()`, and `notifyAll()` be invoked exclusively from within a `synchronized` block or method on the object monitor?",
              options: [
                "Because the Java type system requires all Object methods to be invoked inside synchronized blocks.",
                "Because `wait()` and `notify()` spawn new operating system threads that require synchronization locks.",
                "To prevent the Garbage Collector from finalizing the object while threads are communicating.",
                "Because the calling thread must hold the object's monitor lock before releasing it or signaling waiting threads, otherwise JVM throws `IllegalMonitorStateException`."
              ],
              correct: 3,
              explanation: "`wait()` suspends the thread and releases the monitor lock so other threads can proceed. `notify()` signals waiting threads on that monitor. If the thread does not hold the lock on that object, the JVM throws `IllegalMonitorStateException`."
            },
            {
              id: "u5_t5_mcq2",
              question: "Why is it an established concurrency best practice to always call `wait()` inside a `while (condition)` loop rather than an `if (condition)` statement?",
              options: [
                "To protect against Spurious Wakeups and race conditions where another thread consumes the resource before the awakened thread re-acquires the lock.",
                "Because `while` loops execute significantly faster in JVM bytecode than `if` conditional branches.",
                "Because `if` blocks cannot catch or propagate `InterruptedException` thrown by `wait()`.",
                "Because `notifyAll()` can only wake up threads that are suspended inside iterative loop constructs."
              ],
              correct: 0,
              explanation: "Threads can wake up spuriously without receiving a signal, or another thread may reacquire the monitor first and consume the condition. Testing in a `while` loop forces the awakened thread to re-check the condition before proceeding."
            }
          ]
        }
      ]
    }
  ],

  // Placement & Viva Vault (40 Comprehensive Questions across Units 1 to 5)
  interviewVault: [
    {
      id: "u1_q1",
      category: "Unit 1: Problem Solving",
      difficulty: "easy",
      question: "What is the structural difference between an Algorithm, a Flowchart, and Pseudocode?",
      answer: "An **Algorithm** is an abstract, language-independent finite sequence of well-defined computational instructions. A **Flowchart** is the formal graphical / visual representation of an algorithm using standard ANSI/ISO geometric symbols (rectangles for processing, diamonds for decisions, parallelograms for I/O). **Pseudocode** is an informal, high-level textual representation that mimics structured programming constructs (IF-ELSE, WHILE) without getting bound to specific compiler syntax.",
      trap: "Writing executable compiler keywords like 'public static void main' in pseudocode is an academic anti-pattern. Pseudocode must remain language-agnostic."
    },
    {
      id: "u1_q2",
      category: "Unit 1: Number Systems",
      difficulty: "medium",
      question: "Why do modern computer processors use 2's Complement for negative integer representation?",
      answer: "2's Complement provides two decisive hardware advantages: 1) **Unique Zero Representation:** Unlike Sign-Magnitude and 1's Complement which produce redundant `+0` and `-0`, 2's Complement has exactly one unique zero (`00000000`). 2) **Hardware Simplicity:** Subtraction is implemented as standard binary addition: `A - B = A + (2's Complement of B)`. This allows ALUs to reuse existing binary adder circuits without requiring separate subtractor hardware.",
      trap: "Interviewers often ask: 'What is the 2's complement of 0 in an 8-bit word?' Inverting gives 11111111, adding 1 gives 100000000. Truncating the 9th carry bit yields 00000000, proving 0 is unique!"
    },
    {
      id: "u1_q3",
      category: "Unit 1: Number Systems",
      difficulty: "medium",
      question: "Why does adding 1 to a byte variable holding 127 evaluate to -128 in Java?",
      answer: "In Java, `byte` is an 8-bit signed integer using 2's complement representation with a valid range of **-128 to +127**. Binary for +127 is `01111111`. Adding 1 results in `10000000`. In 2's complement, an MSB of `1` signifies a negative number, and `10000000` corresponds precisely to the lowest boundary: `-128`. This is standard **hardware integer overflow wrap-around**.",
      trap: "In Java, expressions like `b = b + 1` fail to compile because `b + 1` promotes to `int`. You must cast `(byte)(b + 1)` or use `b++` / `b += 1` to witness this wrap-around."
    },
    {
      id: "u1_q4",
      category: "Unit 1: Number Systems",
      difficulty: "hard",
      question: "What is the technical difference between `>>` (Signed Right Shift) and `>>>` (Unsigned Right Shift) in Java?",
      answer: "The `>>` operator performs an **arithmetic right shift**, copying the Most Significant Bit (sign bit) into the vacated leftmost positions to preserve the number's sign (e.g. `-16 >> 2` remains `-4`). The `>>>` operator performs a **logical unsigned right shift**, always inserting zeros into the vacated leftmost bit positions regardless of whether the original number was positive or negative (e.g. `-16 >>> 2` becomes a huge positive number: `1073741820`).",
      trap: "`>>>` is only meaningful for integer types (`int` and `long`). Applying it to `byte` or `short` causes automatic promotion to 32-bit `int` before shifting!"
    },
    {
      id: "u2_q1",
      category: "Unit 2: Java Basics",
      difficulty: "easy",
      question: "What is the fundamental architectural distinction between JDK, JRE, and JVM?",
      answer: "**JVM (Java Virtual Machine)** is the abstract execution engine that loads, verifies, and executes Java Bytecode (`.class`). **JRE (Java Runtime Environment)** = JVM + Core Class Libraries (`rt.jar` / `java.base`) required to run existing programs. **JDK (Java Development Kit)** = JRE + Development Tools (`javac` compiler, `jar`, `javadoc`, `jdb`) required by developers to write and compile source code.",
      trap: "Bytecode is platform independent, but the JVM implementation itself is strictly platform-dependent (different native C/C++ builds for Windows, Linux, macOS)."
    },
    {
      id: "u2_q2",
      category: "Unit 2: Java Basics",
      difficulty: "medium",
      question: "Why are String objects immutable in Java, and what is the role of the String Constant Pool (SCP)?",
      answer: "Strings are immutable (state cannot change after creation) for four key reasons: 1) **Security:** String parameters for database URLs, file paths, and network sockets cannot be maliciously altered. 2) **Thread Safety:** Stateless, read-only instances can be safely shared across concurrent threads without locks. 3) **Caching:** `hashCode()` is calculated once on creation and cached. 4) **String Constant Pool (SCP):** The JVM saves Heap memory by reusing identical string literals from the SCP rather than allocating duplicate objects.",
      trap: "Using `new String(\"ABC\")` creates TWO objects if \"ABC\" wasn't in SCP already: one in the String Constant Pool and one in regular Heap memory!"
    },
    {
      id: "u2_q3",
      category: "Unit 2: Java Basics",
      difficulty: "hard",
      question: "Explain the difference between `==` and `.equals()` when comparing Java Strings and Wrapper Objects.",
      answer: "The `==` operator performs **reference comparison** (checks whether two variable pointers point to the exact same memory address in Stack/Heap). The `.equals()` method performs **content comparison** (checks whether the sequence of characters or values are identical). For String literals, `s1 == s2` is `true` because both point to the same pooled SCP address; for `new String()`, `s1 == s3` is `false` because they occupy distinct Heap memory locations, but `s1.equals(s3)` is `true`.",
      trap: "Integer caching (-128 to 127) causes `Integer a = 100, b = 100; a == b` to be `true`, but `Integer c = 200, d = 200; c == d` to be `false`! Always use `.equals()`."
    },
    {
      id: "u2_q4",
      category: "Unit 2: Java Basics",
      difficulty: "medium",
      question: "What are Jagged Arrays in Java and how are they stored in Heap memory?",
      answer: "A **Jagged (or Ragged) Array** is a multi-dimensional array where each individual row array can have a different length / column dimension. In Java, multi-dimensional arrays are represented as *arrays of array references*. The outer array holds pointers to distinct single-dimensional array objects on the Heap, allowing dynamic allocation of rows with differing sizes (e.g., `int[][] jagged = new int[3][]; jagged[0] = new int[2]; jagged[1] = new int[5];`).",
      trap: "If you declare `int[][] arr = new int[3][];` and try to access `arr[0][0]` before initializing `arr[0] = new int[2];`, it throws a `NullPointerException` because `arr[0]` is initialized to `null`!"
    },
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
      trap: "Never rely on `finalize()` for resource cleanup (closing files/sockets) because GC execution is non-deterministic. Always use Try-with-Resources!"
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

  // Lab Assignments (16 Comprehensive Assignments across Units 1 to 5)
  labs: [
    {
      id: "lab_u1_base_converter",
      title: "Lab 1A [EASY]: Universal Positional Number Base Converter (Unit 1)",
      unit: "Unit 1",
      difficulty: "easy",
      task: "Implement a universal base conversion utility that converts any positive decimal integer into Binary (Base 2), Octal (Base 8), and Hexadecimal (Base 16) using the Repeated Division Algorithm from scratch (without using built-in methods like Integer.toBinaryString). Also implement the reverse conversion using Positional Polynomial Expansion.",
      testCase: "Input Decimal: 254 -> Convert to Base 2, 8, 16. Verify output produces '11111110', '376', and 'FE'. Reverse convert 'FE' to verify 254.",
      solutionCode: `public class BaseConverterLab {
    private static final char[] DIGITS = "0123456789ABCDEF".toCharArray();

    // Repeated division by base
    public static String decimalToBase(long num, int base) {
        if (num == 0) return "0";
        StringBuilder sb = new StringBuilder();
        while (num > 0) {
            sb.append(DIGITS[(int)(num % base)]);
            num /= base;
        }
        return sb.reverse().toString();
    }

    // Positional expansion: Sum(d_i * base^i)
    public static long baseToDecimal(String str, int base) {
        long result = 0;
        for (char ch : str.toUpperCase().toCharArray()) {
            int val = (ch >= '0' && ch <= '9') ? (ch - '0') : (10 + ch - 'A');
            result = result * base + val;
        }
        return result;
    }

    public static void main(String[] args) {
        long decimalInput = 254;
        System.out.println("=== Universal Number Base Converter ===");
        System.out.println("Decimal Input : " + decimalInput);
        System.out.println("Binary  (Base 2)  : " + decimalToBase(decimalInput, 2));
        System.out.println("Octal   (Base 8)  : " + decimalToBase(decimalInput, 8));
        System.out.println("Hex     (Base 16) : " + decimalToBase(decimalInput, 16));

        String hexInput = "FE";
        System.out.println("Reverse Check: Hex '" + hexInput + "' -> Decimal: " + baseToDecimal(hexInput, 16));
    }
}`,
      output: `=== Universal Number Base Converter ===
Decimal Input : 254
Binary  (Base 2)  : 11111110
Octal   (Base 8)  : 376
Hex     (Base 16) : FE
Reverse Check: Hex 'FE' -> Decimal: 254`
    },
    {
      id: "lab_u1_twos_complement",
      title: "Lab 1B [MEDIUM]: 2's Complement Subtraction & Overflow Engine (Unit 1)",
      unit: "Unit 1",
      difficulty: "medium",
      task: "Simulate 8-bit signed ALU hardware subtraction using 2's Complement addition: A - B = A + (~B + 1). Display the 8-bit binary representation at every step. Also demonstrate computer arithmetic overflow by adding 1 to Byte.MAX_VALUE (127).",
      testCase: "Perform (25 - 14) and (14 - 25). Show binary steps. Show 127 + 1 wraps to -128.",
      solutionCode: `public class TwosComplementLab {
    public static String to8Bit(int val) {
        String s = Integer.toBinaryString(val & 0xFF);
        return String.format("%8s", s).replace(' ', '0');
    }

    public static void subtractUsingTwosComp(int a, int b) {
        int twosCompB = (-b) & 0xFF; // ~B + 1
        int sum = (a + twosCompB) & 0xFF;
        byte result = (byte) sum;

        System.out.printf("Computing %d - %d via 2's Complement:%n", a, b);
        System.out.printf("  A (%2d)               : %s%n", a, to8Bit(a));
        System.out.printf("  B (%2d)               : %s%n", b, to8Bit(b));
        System.out.printf("  2's Comp of B (-%2d)   : %s%n", b, to8Bit(twosCompB));
        System.out.printf("  Sum [A + 2'sComp(B)] : %s = %d%n%n", to8Bit(sum), result);
    }

    public static void main(String[] args) {
        System.out.println("=== 2's Complement ALU Simulator ===");
        subtractUsingTwosComp(25, 14); // Positive Result
        subtractUsingTwosComp(14, 25); // Negative Result

        // Hardware Overflow
        byte max = 127;
        byte overflow = (byte)(max + 1);
        System.out.println("Overflow Test: 127 + 1 = " + overflow + " (Binary: " + to8Bit(overflow) + ")");
    }
}`,
      output: `=== 2's Complement ALU Simulator ===
Computing 25 - 14 via 2's Complement:
  A (25)               : 00011001
  B (14)               : 00001110
  2's Comp of B (-14)   : 11110010
  Sum [A + 2'sComp(B)] : 00001011 = 11

Computing 14 - 25 via 2's Complement:
  A (14)               : 00001110
  B (25)               : 00011001
  2's Comp of B (-25)   : 11100111
  Sum [A + 2'sComp(B)] : 11110101 = -11

Overflow Test: 127 + 1 = -128 (Binary: 10000000)`
    },
    {
      id: "lab_u2_easy_arrays",
      title: "Lab 2A [EASY]: Hands-On 1D, 2D Matrix & Jagged Array Fundamentals (Unit 2)",
      unit: "Unit 2",
      difficulty: "easy",
      task: "Develop a beginner-friendly Java program that demonstrates all three array architectures: 1) 1D Array: Store 5 student subject marks, compute their total and average, 2) 2D Regular Array (Matrix): Create a 3x3 matrix, display it in a clean grid format, and calculate the sum of its main diagonal elements, and 3) Jagged Array: Create a jagged array to store test scores for 3 project teams with variable member counts (Team 1 has 2, Team 2 has 3, Team 3 has 4), printing each team's score list, team average, and highest individual score.",
      testCase: "1D marks [78, 85, 92, 88, 95] -> Total: 438, Avg: 87.60. 2D 3x3 diagonal sum: 1 + 5 + 9 = 15. Jagged teams: Team 1 max = 92, Team 2 max = 89, Team 3 max = 96.",
      solutionCode: `public class ArraysFundamentalsLab {
    public static void main(String[] args) {
        // Part 1: 1D Array (Student Marks)
        System.out.println("=== 1. 1D Array Analysis ===");
        int[] marks = { 78, 85, 92, 88, 95 };
        int sum = 0;
        for (int m : marks) sum += m;
        System.out.printf("Marks: %s | Total: %d | Average: %.2f%n%n",
                java.util.Arrays.toString(marks), sum, (double) sum / marks.length);

        // Part 2: 2D Regular Array (3x3 Grid & Diagonal Sum)
        System.out.println("=== 2. 2D Regular Matrix (3x3) ===");
        int[][] matrix = {
            { 1, 2, 3 },
            { 4, 5, 6 },
            { 7, 8, 9 }
        };
        int diagSum = 0;
        for (int r = 0; r < matrix.length; r++) {
            System.out.print("  | ");
            for (int c = 0; c < matrix[r].length; c++) {
                System.out.printf("%d ", matrix[r][c]);
                if (r == c) diagSum += matrix[r][c]; // 1 + 5 + 9
            }
            System.out.println("|");
        }
        System.out.println("Main Diagonal Sum = " + diagSum + "\\n");

        // Part 3: Jagged Array (3 Project Teams)
        System.out.println("=== 3. Jagged Array (Project Teams) ===");
        int[][] teams = new int[3][];
        teams[0] = new int[]{ 88, 92 };             // Team 1: 2 members
        teams[1] = new int[]{ 75, 84, 89 };         // Team 2: 3 members
        teams[2] = new int[]{ 90, 82, 96, 91 };     // Team 3: 4 members

        for (int i = 0; i < teams.length; i++) {
            int teamSum = 0, maxScore = teams[i][0];
            for (int score : teams[i]) {
                teamSum += score;
                if (score > maxScore) maxScore = score;
            }
            double teamAvg = (double) teamSum / teams[i].length;
            System.out.printf("Team #%d (Size: %d, Scores: %s) -> Top: %d | Avg: %.2f%n",
                    (i + 1), teams[i].length, java.util.Arrays.toString(teams[i]), maxScore, teamAvg);
        }
    }
}`,
      output: `=== 1. 1D Array Analysis ===
Marks: [78, 85, 92, 88, 95] | Total: 438 | Average: 87.60

=== 2. 2D Regular Matrix (3x3) ===
  | 1 2 3 |
  | 4 5 6 |
  | 7 8 9 |
Main Diagonal Sum = 15

=== 3. Jagged Array (Project Teams) ===
Team #1 (Size: 2, Scores: [88, 92]) -> Top: 92 | Avg: 90.00
Team #2 (Size: 3, Scores: [75, 84, 89]) -> Top: 89 | Avg: 82.67
Team #3 (Size: 4, Scores: [90, 82, 96, 91]) -> Top: 96 | Avg: 89.75`
    },
    {
      id: "lab_u2_matrix_jagged",
      title: "Lab 2B [MEDIUM]: 2D Matrix Multiplication & Jagged Array Batch Tracker (Unit 2)",
      unit: "Unit 2",
      difficulty: "medium",
      task: "Develop a Java program to: 1) Multiply two 2x2 integer matrices using nested control loops, and 2) Create a Jagged (Ragged) Array to store exam scores for 3 student batches with differing numbers of students (3, 2, and 4), calculating the average score per batch.",
      testCase: "Matrix A = [[1,2],[3,4]], B = [[5,6],[7,8]]. Product = [[19,22],[43,50]]. Compute averages for jagged batches.",
      solutionCode: `import java.util.Arrays;

public class MatrixAndJaggedLab {
    public static int[][] multiply(int[][] a, int[][] b) {
        int rA = a.length, cA = a[0].length, cB = b[0].length;
        int[][] res = new int[rA][cB];
        for (int i = 0; i < rA; i++) {
            for (int j = 0; j < cB; j++) {
                for (int k = 0; k < cA; k++) {
                    res[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return res;
    }

    public static void main(String[] args) {
        // 1. Matrix Multiplication
        int[][] A = {{1, 2}, {3, 4}};
        int[][] B = {{5, 6}, {7, 8}};
        int[][] C = multiply(A, B);
        System.out.println("=== 2D Matrix Multiplication (A x B) ===");
        for (int[] row : C) System.out.println("  " + Arrays.toString(row));

        // 2. Jagged Array
        System.out.println("\\n=== Jagged Array Batch Score Analysis ===");
        int[][] batches = new int[3][];
        batches[0] = new int[]{85, 90, 78};     // Batch 1 (3 students)
        batches[1] = new int[]{92, 88};         // Batch 2 (2 students)
        batches[2] = new int[]{76, 81, 95, 89}; // Batch 3 (4 students)

        for (int i = 0; i < batches.length; i++) {
            int sum = 0;
            for (int score : batches[i]) sum += score;
            double avg = (double) sum / batches[i].length;
            System.out.printf("Batch #%d (Size: %d, Scores: %s) -> Average: %.2f%n",
                    (i + 1), batches[i].length, Arrays.toString(batches[i]), avg);
        }
    }
}`,
      output: `=== 2D Matrix Multiplication (A x B) ===
  [19, 22]
  [43, 50]

=== Jagged Array Batch Score Analysis ===
Batch #1 (Size: 3, Scores: [85, 90, 78]) -> Average: 84.33
Batch #2 (Size: 2, Scores: [92, 88]) -> Average: 90.00
Batch #3 (Size: 4, Scores: [76, 81, 95, 89]) -> Average: 85.25`
    },
    {
      id: "lab_u2_string_evaluator",
      title: "Lab 2C [EASY]: String Palindrome & StringBuilder Anagram Evaluator (Unit 2)",
      unit: "Unit 2",
      difficulty: "easy",
      task: "Create a Java text processing application that: 1) Checks if a string is a Palindrome (ignoring case and whitespace), 2) Checks if two strings are Anagrams, and 3) Uses `StringBuilder` to perform efficient in-place reversal and formatting without creating intermediate heap garbage.",
      testCase: "Test 'Madam' (Palindrome -> true), 'listen' vs 'silent' (Anagrams -> true), and reverse 'Java MCA'.",
      solutionCode: `import java.util.Arrays;

public class StringEvaluatorLab {
    public static boolean isPalindrome(String s) {
        String clean = s.replaceAll("\\\\s+", "").toLowerCase();
        int left = 0, right = clean.length() - 1;
        while (left < right) {
            if (clean.charAt(left++) != clean.charAt(right--)) return false;
        }
        return true;
    }

    public static boolean areAnagrams(String s1, String s2) {
        char[] a1 = s1.toLowerCase().toCharArray();
        char[] a2 = s2.toLowerCase().toCharArray();
        Arrays.sort(a1);
        Arrays.sort(a2);
        return Arrays.equals(a1, a2);
    }

    public static void main(String[] args) {
        System.out.println("=== String & StringBuilder Evaluator ===");
        String word = "Madam";
        System.out.printf("Is '%s' a Palindrome? -> %b%n", word, isPalindrome(word));

        String w1 = "listen", w2 = "silent";
        System.out.printf("Are '%s' and '%s' Anagrams? -> %b%n", w1, w2, areAnagrams(w1, w2));

        // StringBuilder in-place operations
        StringBuilder sb = new StringBuilder("Java MCA");
        sb.append(" - Advanced 2026");
        System.out.println("Appended   : " + sb.toString());
        System.out.println("Reversed   : " + sb.reverse().toString());
    }
}`,
      output: `=== String & StringBuilder Evaluator ===
Is 'Madam' a Palindrome? -> true
Are 'listen' and 'silent' Anagrams? -> true
Appended   : Java MCA - Advanced 2026
Reversed   : 6202 decnavdA - ACM avaJ`
    },
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

        System.out.println("=== MCA STUDENT ENROLLMENT PROFILES ===");
        s1.displayProfile();
        s2.displayProfile();
        s3.displayProfile();

        System.out.println("--------------------------------------------");
        System.out.println("Total Students Enrolled: " + Student.getTotalEnrollments());
    }
}`,
      output: `=== MCA STUDENT ENROLLMENT PROFILES ===
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
            writer.write("Enterprise Java Masterclass - MCA Professional Curriculum.");
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
Line 2: Enterprise Java Masterclass - MCA Professional Curriculum.
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
      task: "Create an abstract class `Employee` with an abstract method `calculateSalary()`. Implement child classes `FullTimeEmployee` (base salary + allowance) and `Contractor` (daily rate × days worked). Implement dynamic method dispatch and track total employees using a `static` counter.",
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
    private double dailyRate;
    private int daysWorked;

    public Contractor(String name, int id, double dailyRate, int daysWorked) {
        super(name, id);
        this.dailyRate = dailyRate;
        this.daysWorked = daysWorked;
    }

    @Override
    public double calculateSalary() {
        return dailyRate * daysWorked;
    }
}

public class PayrollDemo {
    public static void main(String[] args) {
        Employee[] staff = {
            new FullTimeEmployee("Rahul Sharma", 101, 50000, 15000),
            new Contractor("Sneha Roy", 102, 2000, 20)
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
        SecureAccount acc = new SecureAccount("ACC-MCA-101", 10000.0);
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
        System.out.println("=== PLACEMENT MERIT LIST (MCA COHORT) ===");
        list.forEach(System.out::println);
    }
}`,
      output: `=== PLACEMENT MERIT LIST (MCA COHORT) ===
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
      badge: "Problem Solving & Java Programming • MCA Sem-I",
      bullets: [
        "Master of Computer Applications (MCA) Program",
        "Subject Matter Expert (SME): Aniket",
        "Comprehensive 5-Unit Curriculum: Units 1 to 5",
        "Focus: Hands-on Programming, Visual Memory Models & Industry Best Practices"
      ],
      code: `// Welcome MCA Cohort!
System.out.println("Java Curriculum Masterclass Initialized!");`
    },
    {
      title: "Unit 1: Problem Solving & Number Systems",
      badge: "Unit 1 • Fundamentals",
      bullets: [
        "Problem-Solving Process: Analysis -> Algorithm -> Flowchart -> Pseudocode -> Java Implementation",
        "Number Bases: Binary (Base 2), Octal (Base 8), Decimal (Base 10), Hexadecimal (Base 16)",
        "Base Conversions: Repeated Division (Integers), Repeated Multiplication (Fractions)",
        "Direct Grouping: 3 bits <-> 1 Octal digit; 4 bits <-> 1 Hexadecimal digit"
      ],
      code: `// Number Literals in Java
int bin = 0b11111110; // Binary 254
int oct = 0376;       // Octal 254
int hex = 0xFE;       // Hex 254`
    },
    {
      title: "Unit 1: Binary Arithmetic & 2's Complement",
      badge: "Unit 1 • Computer Arithmetic",
      bullets: [
        "2's Complement: 1's Complement (~x) + 1 (Unique Zero & simplified hardware addition)",
        "Subtraction: A - B = A + (2's Complement of B)",
        "Signed Range (n-bit word): -2^(n-1) to +(2^(n-1) - 1)",
        "Hardware Overflow: 8-bit byte wraps around: 127 + 1 = -128"
      ],
      code: `byte b = 127;
b++; // Overflows to -128 (Byte.MIN_VALUE)`
    },
    {
      title: "Unit 2: Java Basics & JVM Architecture",
      badge: "Unit 2 • Architecture",
      bullets: [
        "Core Philosophy: 'Write Once, Run Anywhere' (WORA) via platform-neutral Bytecode (.class)",
        "JDK vs JRE vs JVM: JDK (Tools) -> JRE (Libraries) -> JVM (Execution Engine)",
        "JVM Memory: Method Area / Metaspace, Heap (Objects), Thread Stack (Frames), PC Registers",
        "Execution: HotSpot JIT compiler translates hotspot bytecode into native machine instructions"
      ],
      code: `// Java compilation & execution pipeline:
// MyProg.java -> [javac] -> MyProg.class (Bytecode) -> [JVM/JIT] -> Native CPU Code`
    },
    {
      title: "Unit 2: Data Types, Casting & Strings",
      badge: "Unit 2 • Syntax & Memory",
      bullets: [
        "8 Primitives: byte, short, int, long, float, double, char, boolean",
        "Casting: Implicit Widening (Safe) vs Explicit Narrowing (Possible truncation / wrap-around)",
        "String Immutability: Read-only instances stored in String Constant Pool (SCP)",
        "Reference (==) vs Content (.equals()): Use StringBuilder for high-performance string mutations"
      ],
      code: `String s1 = "Java";
String s2 = new String("Java");
System.out.println(s1 == s2);      // false (SCP vs Heap)
System.out.println(s1.equals(s2));  // true (Content match)`
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
    public static String NAME = "MCA Department";
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
