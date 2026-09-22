/**
 * Interactive Concept Visualizers for Java SME Masterclass
 * 1. Stack vs Heap & Pass-by-Value Simulator
 * 2. Collection Framework Hierarchy Explorer
 * 3. Thread Lifecycle State Machine
 * 4. Exception Hierarchy & Propagation Simulator
 */

const Visualizers = {
  // 1. Stack vs Heap Simulation State
  memoryStep: 0,
  memorySteps: [
    {
      title: "Step 1: Main Method Starts",
      desc: "Stack frame for <code>main()</code> is created. Primitive variable <code>age = 21</code> is allocated directly inside the stack frame.",
      stack: [
        { name: "main() Frame: age", val: "21 (int value)", highlight: true }
      ],
      heap: []
    },
    {
      title: "Step 2: Object Creation (`s1 = new Student(\"Rahul\");`)",
      desc: "A new <code>Student</code> object is allocated on the Heap at address <code>@0x7A</code>. The reference variable <code>s1</code> on the Stack stores the address <code>@0x7A</code>.",
      stack: [
        { name: "main() Frame: age", val: "21 (int)" },
        { name: "main() Frame: s1", val: "@0x7A (Pointer)", highlight: true }
      ],
      heap: [
        { id: "@0x7A", label: "Student Object", fields: "name: \"Rahul\", cgpa: 8.5", highlight: true }
      ]
    },
    {
      title: "Step 3: Calling `modifyStudent(s1)` - Reference Value Copied!",
      desc: "A new stack frame for <code>modifyStudent(Student s)</code> is created. The pointer <code>@0x7A</code> is <strong>copied</strong> into parameter <code>s</code>. Both <code>s1</code> and <code>s</code> now point to the same Heap object!",
      stack: [
        { name: "main(): age", val: "21" },
        { name: "main(): s1", val: "@0x7A" },
        { name: "modifyStudent(): s", val: "@0x7A (Copied pointer)", highlight: true }
      ],
      heap: [
        { id: "@0x7A", label: "Student Object", fields: "name: \"Rahul\", cgpa: 8.5", highlight: true }
      ]
    },
    {
      title: "Step 4: Field Mutation (`s.name = \"Priya\";`)",
      desc: "Modifying <code>s.name</code> follows pointer <code>@0x7A</code> to Heap and changes the string field. Since <code>s1</code> points to the same object, <code>s1.name</code> is now also updated.",
      stack: [
        { name: "main(): age", val: "21" },
        { name: "main(): s1", val: "@0x7A" },
        { name: "modifyStudent(): s", val: "@0x7A" }
      ],
      heap: [
        { id: "@0x7A", label: "Student Object", fields: "name: \"Priya\" (Mutated!)", highlight: true }
      ]
    },
    {
      title: "Step 5: Reference Reassignment (`s = new Student(\"Amit\");`)",
      desc: "Creating a new object allocates <code>@0x8B</code> on Heap. Parameter <code>s</code> now points to <code>@0x8B</code>. <strong>Notice that `s1` in `main()` still points to `@0x7A`! Reassigning reference does NOT affect caller!</strong>",
      stack: [
        { name: "main(): age", val: "21" },
        { name: "main(): s1", val: "@0x7A (Untouched!)", highlight: true },
        { name: "modifyStudent(): s", val: "@0x8B (New Pointer)", highlight: true }
      ],
      heap: [
        { id: "@0x7A", label: "Student Object", fields: "name: \"Priya\"" },
        { id: "@0x8B", label: "Student Object", fields: "name: \"Amit\"", highlight: true }
      ]
    },
    {
      title: "Step 6: Method Returns & Stack Frame Destroyed",
      desc: "<code>modifyStudent()</code> finishes execution. Its stack frame is popped off. The object <code>@0x8B</code> is now eligible for Garbage Collection.",
      stack: [
        { name: "main(): age", val: "21" },
        { name: "main(): s1", val: "@0x7A (name = \"Priya\")", highlight: true }
      ],
      heap: [
        { id: "@0x7A", label: "Student Object", fields: "name: \"Priya\"" },
        { id: "@0x8B", label: "Student Object (Orphaned)", fields: "name: \"Amit\" [GC Ready]", highlight: true }
      ]
    }
  ],

  renderMemoryVisualizer: function() {
    const step = this.memorySteps[this.memoryStep];
    const container = document.getElementById("memory-visualizer-stage");
    if (!container) return;

    let stackHtml = step.stack.map(item => `
      <div class="mem-item mem-item-stack ${item.highlight ? 'mem-item-highlight' : ''}">
        <span>${item.name}</span>
        <strong>${item.val}</strong>
      </div>
    `).join("");

    let heapHtml = step.heap.map(item => `
      <div class="mem-item mem-item-heap ${item.highlight ? 'mem-item-highlight' : ''}">
        <div>
          <span style="font-size:0.7rem; color:#7c3aed; font-weight:bold;">${item.id}</span>
          <div style="font-weight:700;">${item.label}</div>
        </div>
        <div style="font-size:0.75rem; text-align:right;">${item.fields}</div>
      </div>
    `).join("");

    container.innerHTML = `
      <div style="margin-bottom: 1rem;">
        <h4 style="color: var(--primary-700); margin-bottom: 0.25rem;">${step.title}</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">${step.desc}</p>
      </div>
      <div class="memory-grid">
        <div class="memory-pane stack-pane">
          <div class="memory-pane-header">
            <span>Call Stack Memory</span>
            <span style="font-size: 0.7rem; background:#dbeafe; padding:2px 6px; border-radius:4px;">LIFO Frames</span>
          </div>
          <div class="memory-items">
            ${stackHtml}
          </div>
        </div>
        <div class="memory-pane heap-pane">
          <div class="memory-pane-header">
            <span>JVM Heap Memory</span>
            <span style="font-size: 0.7rem; background:#f3e8ff; padding:2px 6px; border-radius:4px;">Dynamic Allocation</span>
          </div>
          <div class="memory-items">
            ${heapHtml.length > 0 ? heapHtml : '<div style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:2rem;">Heap is currently empty</div>'}
          </div>
        </div>
      </div>
    `;

    // Update step label
    const label = document.getElementById("memory-step-indicator");
    if (label) {
      label.innerText = `Step ${this.memoryStep + 1} of ${this.memorySteps.length}`;
    }
  },

  nextMemoryStep: function() {
    if (this.memoryStep < this.memorySteps.length - 1) {
      this.memoryStep++;
      this.renderMemoryVisualizer();
    }
  },

  prevMemoryStep: function() {
    if (this.memoryStep > 0) {
      this.memoryStep--;
      this.renderMemoryVisualizer();
    }
  },

  resetMemoryStep: function() {
    this.memoryStep = 0;
    this.renderMemoryVisualizer();
  },

  // 2. Collection Hierarchy Explorer Data
  collectionInfo: {
    "ArrayList": {
      category: "List Interface",
      structure: "Dynamic Resizable Array",
      access: "O(1) Random Access",
      insertion: "O(n) at index, O(1) amortized at end",
      duplicates: "Allowed",
      nulls: "Allowed",
      bestFor: "Read-heavy scenarios, indexing, sorting."
    },
    "LinkedList": {
      category: "List & Deque Interface",
      structure: "Doubly Linked List",
      access: "O(n) Traversal",
      insertion: "O(1) at head/tail once node is located",
      duplicates: "Allowed",
      nulls: "Allowed",
      bestFor: "Frequent insertions/deletions at ends, Queue/Deque implementations."
    },
    "HashSet": {
      category: "Set Interface",
      structure: "Hash Table (Backed by HashMap)",
      access: "O(1) average lookup",
      insertion: "O(1) average",
      duplicates: "NOT Allowed (Unique elements only)",
      nulls: "Single null allowed",
      bestFor: "Deduplication, fast uniqueness checking (requires hashCode/equals)."
    },
    "TreeSet": {
      category: "NavigableSet / SortedSet",
      structure: "Red-Black Balanced Binary Search Tree",
      access: "O(log n)",
      insertion: "O(log n)",
      duplicates: "NOT Allowed",
      nulls: "No nulls allowed",
      bestFor: "Maintaining sorted order of elements continuously."
    },
    "HashMap": {
      category: "Map Interface",
      structure: "Array of Buckets (Nodes / Red-Black Tree in Java 8+)",
      access: "O(1) average key lookup",
      insertion: "O(1) average",
      duplicates: "Keys Unique; Values can duplicate",
      nulls: "1 null key, multiple null values",
      bestFor: "Fast key-value cache, dictionaries, ID-based lookups."
    },
    "TreeMap": {
      category: "NavigableMap / SortedMap",
      structure: "Red-Black Balanced Tree",
      access: "O(log n)",
      insertion: "O(log n)",
      duplicates: "Keys Unique (Sorted)",
      nulls: "No null keys allowed",
      bestFor: "Range queries (subMap, headMap) and sorted key traversals."
    }
  },

  selectCollectionNode: function(name) {
    const info = this.collectionInfo[name];
    const detailsContainer = document.getElementById("collection-node-details");
    if (!info || !detailsContainer) return;

    // Highlight button
    document.querySelectorAll(".interactive-node").forEach(el => el.classList.remove("active"));
    const activeBtn = document.querySelector(`[data-node="${name}"]`);
    if (activeBtn) activeBtn.classList.add("active");

    detailsContainer.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
        <h4 style="font-size:1.2rem; color:var(--primary-700);">${name}</h4>
        <span class="tab-badge" style="background:var(--primary-100); color:var(--primary-700);">${info.category}</span>
      </div>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; font-size:0.875rem;">
        <div><strong>Underlying Structure:</strong> ${info.structure}</div>
        <div><strong>Random Access Time:</strong> <code style="color:#059669; font-weight:bold;">${info.access}</code></div>
        <div><strong>Insertion/Deletion:</strong> <code style="color:#2563eb; font-weight:bold;">${info.insertion}</code></div>
        <div><strong>Duplicates & Nulls:</strong> ${info.duplicates}; ${info.nulls}</div>
      </div>
      <div style="margin-top:0.75rem; padding:0.6rem; background:var(--primary-50); border-radius:6px; font-size:0.85rem; color:var(--primary-800);">
        <strong>💡 Ideal Use Case:</strong> ${info.bestFor}
      </div>
    `;
  },

  // 3. Thread Lifecycle States
  threadStates: {
    "NEW": {
      desc: "A thread has been created (`Thread t = new Thread(r)`) but its `start()` method has not yet been invoked.",
      allowedTransitions: "Transition to <code>RUNNABLE</code> when <code>t.start()</code> is called."
    },
    "RUNNABLE": {
      desc: "The thread is currently executing on CPU or is ready in the OS thread queue waiting for CPU time slice.",
      allowedTransitions: "Transitions to <code>BLOCKED</code> (waiting for monitor lock), <code>WAITING</code> (wait()), <code>TIMED_WAITING</code> (sleep()), or <code>TERMINATED</code> (run() finishes)."
    },
    "BLOCKED": {
      desc: "The thread is blocked waiting to acquire an intrinsic monitor lock to enter or re-enter a `synchronized` method/block.",
      allowedTransitions: "Transitions back to <code>RUNNABLE</code> when the lock is released by the holding thread."
    },
    "WAITING": {
      desc: "The thread is waiting indefinitely for another thread to perform a specific action (e.g. calling `object.wait()` or `thread.join()`).",
      allowedTransitions: "Transitions to <code>BLOCKED/RUNNABLE</code> when another thread calls <code>notify()</code> or <code>notifyAll()</code>."
    },
    "TIMED_WAITING": {
      desc: "The thread is waiting for a specified duration (e.g. `Thread.sleep(1000)`, `object.wait(5000)`, or `thread.join(2000)`).",
      allowedTransitions: "Transitions to <code>RUNNABLE</code> automatically when time expires or when interrupted."
    },
    "TERMINATED": {
      desc: "The thread has finished executing its `run()` method or terminated due to an uncaught exception. A terminated thread CANNOT be restarted.",
      allowedTransitions: "Dead state. No further transitions."
    }
  },

  selectThreadState: function(stateName) {
    const state = this.threadStates[stateName];
    const detailsContainer = document.getElementById("thread-state-details");
    if (!state || !detailsContainer) return;

    document.querySelectorAll(".thread-state-pill").forEach(el => el.classList.remove("active"));
    const activePill = document.querySelector(`[data-state="${stateName}"]`);
    if (activePill) activePill.classList.add("active");

    detailsContainer.innerHTML = `
      <div style="background: white; border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem;">
        <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
          <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:var(--accent-emerald);"></span>
          <h4 style="font-size:1.15rem; color:var(--text-primary);">Thread State: <code>${stateName}</code></h4>
        </div>
        <p style="font-size:0.925rem; color:var(--text-secondary); margin-bottom:0.75rem;">${state.desc}</p>
        <div style="padding:0.6rem 0.8rem; background:var(--accent-blue-bg); border:1px solid #bfdbfe; border-radius:6px; font-size:0.85rem; color:#1e40af;">
          <strong>🔄 State Transitions:</strong> ${state.allowedTransitions}
        </div>
      </div>
    `;
  },

  // 4. Animated Anime-Style OOP 4-Pillars Simulator
  currentOOPPillar: "abstraction",
  atmAmount: 5000,
  isWithdrawing: false,
  capsuleBalance: 50000,

  setATMAmount: function(amt) {
    if (this.isWithdrawing) return;
    this.atmAmount = amt;
    document.querySelectorAll(".atm-amt-btn").forEach(b => b.classList.remove("active"));
    const activeBtn = document.querySelector(`[data-amt="${amt}"]`);
    if (activeBtn) activeBtn.classList.add("active");

    const screen = document.getElementById("atmStatusText");
    const ifaceCode = document.getElementById("atmInterfaceCode");
    if (screen) screen.innerHTML = `Selected: <span style="color:#fbbf24;">₹${amt.toLocaleString('en-IN')}</span>. Press [ EXECUTE WITHDRAWAL ]`;
    if (ifaceCode) ifaceCode.innerHTML = `Interface Call: <code>atm.withdraw(${amt});</code>`;
  },

  selectOOPPillar: function(pillar) {
    this.currentOOPPillar = pillar;
    document.querySelectorAll(".pillar-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-pillar") === pillar);
    });

    const stages = document.querySelectorAll(".anime-oop-container");
    stages.forEach(stage => {
      this.renderPillarContent(stage, pillar);
    });
  },

  renderPillarContent: function(stage, pillar) {
    if (!stage) return;

    if (pillar === "abstraction") {
      stage.innerHTML = `
        <div class="atm-stage">
          <!-- Left Panel: Public Interface (User Perspective) -->
          <div class="atm-panel">
            <div class="atm-panel-title">
              <span>👤 1. Abstraction: Compact Public Interface</span>
              <span class="college-tag">Public User View</span>
            </div>
            <div class="atm-screen-mock" id="atmMockScreen">
              <div style="font-size:0.75rem; color:#94a3b8; margin-bottom:0.35rem; display:flex; justify-content:space-between;">
                <span>[ BANK OF LNMI // ATM TERMINAL ]</span>
                <span style="color:#22c55e;">● ONLINE</span>
              </div>
              <div id="atmStatusText" style="font-size:1rem; font-weight:bold; color:#38bdf8; min-height:45px; display:flex; align-items:center;">
                Ready for withdrawal. Select amount:
              </div>
              <div id="atmInterfaceCode" style="font-size:0.75rem; color:#64748b; margin-top:0.35rem; font-family:var(--font-mono); border-top:1px dashed #334155; padding-top:0.35rem;">
                Interface Call: <code>atm.withdraw(5000);</code>
              </div>
            </div>

            <!-- Amount Selection Buttons -->
            <div style="font-size:0.75rem; font-weight:700; color:var(--text-secondary); margin-bottom:0.35rem;">Select Quick Amount:</div>
            <div class="atm-btn-row">
              <button class="atm-amt-btn" data-amt="500" onclick="Visualizers.setATMAmount(500)">₹500</button>
              <button class="atm-amt-btn" data-amt="2000" onclick="Visualizers.setATMAmount(2000)">₹2,000</button>
              <button class="atm-amt-btn active" data-amt="5000" onclick="Visualizers.setATMAmount(5000)">₹5,000</button>
              <button class="atm-amt-btn" data-amt="10000" onclick="Visualizers.setATMAmount(10000)">₹10,000</button>
            </div>

            <button class="atm-action-btn" id="atmWithdrawBtn" onclick="Visualizers.triggerATMWithdraw()">
              <span>🏧 [ EXECUTE WITHDRAWAL ]</span>
            </button>

            <div class="cash-dispense-slot" id="cashDispenseSlot"></div>
          </div>

          <!-- Right Panel: Hidden Complex Machinery -->
          <div class="atm-panel">
            <div class="atm-panel-title">
              <span>⚙️ Deep Machinery Hidden Behind Abstraction</span>
              <span class="college-tag" style="background:#fee2e2; color:#991b1b;">100% Abstracted</span>
            </div>
            <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.75rem;">
              The caller executes <strong>1 single line</strong>. All 4 mission-critical hardware & network subsystems below are completely abstracted away:
            </p>
            <ul class="hidden-gear-list">
              <li class="gear-item" id="gear1">
                <span style="font-size:1.2rem;">🔐</span>
                <div>
                  <strong>1. Cryptographic Security Engine</strong>
                  <div style="font-size:0.75rem; color:var(--text-muted);">2048-bit RSA Hardware PIN Decryption & HSM Auth</div>
                </div>
              </li>
              <li class="gear-item" id="gear2">
                <span style="font-size:1.2rem;">🌐</span>
                <div>
                  <strong>2. Core Banking Switch Routing</strong>
                  <div style="font-size:0.75rem; color:var(--text-muted);">ISO-8583 Gateway Handshake with Central Bank Server</div>
                </div>
              </li>
              <li class="gear-item" id="gear3">
                <span style="font-size:1.2rem;">💵</span>
                <div>
                  <strong>3. Optical Bill Dispenser & Sensor Motor</strong>
                  <div style="font-size:0.75rem; color:var(--text-muted);">Optical thickness scanning & roller count verification</div>
                </div>
              </li>
              <li class="gear-item" id="gear4">
                <span style="font-size:1.2rem;">📝</span>
                <div>
                  <strong>4. ACID Transaction Ledger Audit</strong>
                  <div style="font-size:0.75rem; color:var(--text-muted);">Atomic Balance Debit, Audit Logging & SMS Trigger</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      `;
    } else if (pillar === "encapsulation") {
      stage.innerHTML = `
        <div class="atm-stage">
          <!-- Left: Cyber Vault Simulation -->
          <div class="atm-panel">
            <div class="atm-panel-title">
              <span>🛡️ 2. Encapsulation: Data Vault Capsule</span>
              <span class="college-tag" style="background:#fef3c7; color:#92400e;">private state</span>
            </div>
            
            <div class="capsule-vault" id="capsuleVault">
              <div id="capsuleShield" class="capsule-status-shield shield-verified">
                🛡️ ACTIVE DEFENSE: Fields Sealed Inside Capsule
              </div>
              <div style="font-size:0.8rem; color:#94a3b8; font-family:var(--font-mono);">Current Capsule Balance:</div>
              <div id="vaultBalanceDisplay" style="font-size:1.75rem; font-weight:800; color:#34d399; font-family:var(--font-mono); margin:0.35rem 0;">
                ₹${this.capsuleBalance.toLocaleString('en-IN')}.00
              </div>
              <div id="capsuleLog" style="font-size:0.75rem; color:#cbd5e1; font-family:var(--font-mono); min-height:38px; border-top:1px solid #334155; padding-top:0.4rem;">
                Awaiting method invocation...
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:0.5rem;">
              <button class="btn btn-secondary" style="border-color:#fca5a5; color:#b91c1c; font-size:0.8rem; justify-content:flex-start;" onclick="Visualizers.testEncapsulationDirectHack()">
                ❌ Attack: <code>account.balance = -999999;</code>
              </button>
              <button class="btn btn-secondary" style="border-color:#86efac; color:#15803d; font-size:0.8rem; justify-content:flex-start;" onclick="Visualizers.testEncapsulationDeposit()">
                ✅ Safe Deposit: <code>account.deposit(5000);</code>
              </button>
              <button class="btn btn-secondary" style="border-color:#93c5fd; color:#1d4ed8; font-size:0.8rem; justify-content:flex-start;" onclick="Visualizers.testEncapsulationWithdraw()">
                ✅ Safe Withdraw: <code>account.withdraw(12000);</code>
              </button>
              <button class="btn btn-secondary" style="border-color:#fde047; color:#854d0e; font-size:0.8rem; justify-content:flex-start;" onclick="Visualizers.testEncapsulationOverdraw()">
                ⚠️ Overdraft: <code>account.withdraw(999999);</code>
              </button>
            </div>
          </div>

          <!-- Right: Principle Explanation -->
          <div class="atm-panel">
            <div class="atm-panel-title">
              <span>🔒 Why Encapsulation Matters</span>
              <span class="college-tag">Data Security</span>
            </div>
            <div style="background:#f8fafc; border:1px solid var(--border-medium); border-radius:8px; padding:1rem; font-size:0.85rem; line-height:1.6; margin-bottom:1rem;">
              <strong style="color:var(--primary-700);">Core Rules of Encapsulation:</strong>
              <ol style="margin-left:1.25rem; margin-top:0.35rem; display:flex; flex-direction:column; gap:0.35rem;">
                <li>Declare all instance variables as <code>private</code> to prevent arbitrary external corruption.</li>
                <li>Expose <code>public</code> Getter and Setter methods that act as security guards validating business rules.</li>
                <li>Maintains class invariants and prevents negative balances or illegal state changes.</li>
              </ol>
            </div>
            <div style="background:#1e293b; color:#f8fafc; padding:0.85rem; border-radius:8px; font-family:var(--font-mono); font-size:0.8rem;">
              <span style="color:#64748b;">// Encapsulation Blueprint</span><br>
              <span style="color:#ec4899;">public class</span> <span style="color:#38bdf8;">BankAccount</span> {<br>
              &nbsp;&nbsp;<span style="color:#f43f5e;">private double</span> balance; <span style="color:#64748b;">// Guarded!</span><br>
              &nbsp;&nbsp;<span style="color:#ec4899;">public void</span> <span style="color:#34d399;">deposit</span>(<span style="color:#f43f5e;">double</span> amt) {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ec4899;">if</span> (amt &gt; 0) balance += amt;<br>
              &nbsp;&nbsp;}<br>
              }
            </div>
          </div>
        </div>
      `;
    } else if (pillar === "inheritance") {
      stage.innerHTML = `
        <div class="atm-stage">
          <div class="atm-panel" style="grid-column: 1 / -1;">
            <div class="atm-panel-title">
              <span>🚗 3. Inheritance: Blueprint Hierarchy & Code Reusability</span>
              <span class="college-tag">Superclass ➔ Subclass</span>
            </div>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1rem;">
              The parent class <code>Vehicle</code> provides common mechanics once. Subclasses inherit all parent methods and extend specialized features:
            </p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem;">
              <!-- Superclass Card -->
              <div style="background:#eef2ff; border:2px solid #6366f1; border-radius:10px; padding:1.15rem;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <h4 style="color:#4338ca; font-size:1rem;">🏛️ Superclass: Vehicle</h4>
                  <span class="college-tag" style="background:#e0e7ff; color:#3730a3;">Base Class</span>
                </div>
                <div style="font-size:0.8rem; color:#3730a3; margin-top:0.5rem; line-height:1.6;">
                  <strong>Inherited Attributes:</strong> <code>speed</code>, <code>fuelLevel</code><br>
                  <strong>Inherited Methods:</strong><br>
                  • <code>startEngine()</code><br>
                  • <code>applyBrakes()</code>
                </div>
              </div>

              <!-- Subclass 1 -->
              <div style="background:#ecfdf5; border:2px solid #059669; border-radius:10px; padding:1.15rem;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <h4 style="color:#065f46; font-size:1rem;">🏎️ SportsCar</h4>
                  <span class="college-tag" style="background:#d1fae5; color:#065f46;">extends Vehicle</span>
                </div>
                <div style="font-size:0.8rem; color:#047857; margin-top:0.5rem; line-height:1.6;">
                  ✓ Inherits <code>startEngine()</code><br>
                  ✓ Inherits <code>applyBrakes()</code><br>
                  🔥 <strong>Subclass Extension:</strong> <code>turboBoost()</code>
                </div>
                <button class="btn btn-secondary" style="width:100%; margin-top:0.75rem; font-size:0.75rem; padding:0.4rem;" onclick="Visualizers.testDriveVehicle('SportsCar')">
                  Test Drive SportsCar ➔
                </button>
              </div>

              <!-- Subclass 2 -->
              <div style="background:#fef3c7; border:2px solid #d97706; border-radius:10px; padding:1.15rem;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <h4 style="color:#92400e; font-size:1rem;">⚡ ElectricCar</h4>
                  <span class="college-tag" style="background:#fef3c7; color:#92400e;">extends Vehicle</span>
                </div>
                <div style="font-size:0.8rem; color:#78350f; margin-top:0.5rem; line-height:1.6;">
                  ✓ Inherits <code>startEngine()</code><br>
                  ✓ Inherits <code>applyBrakes()</code><br>
                  🔋 <strong>Subclass Extension:</strong> <code>regenerativeCharge()</code>
                </div>
                <button class="btn btn-secondary" style="width:100%; margin-top:0.75rem; font-size:0.75rem; padding:0.4rem;" onclick="Visualizers.testDriveVehicle('ElectricCar')">
                  Test Drive ElectricCar ➔
                </button>
              </div>
            </div>

            <!-- Vehicle Test Output Console -->
            <div id="vehicleTestConsole" style="margin-top:1rem; background:#0f172a; color:#38bdf8; font-family:var(--font-mono); font-size:0.8rem; padding:0.85rem; border-radius:8px; min-height:42px; display:flex; align-items:center;">
              Click 'Test Drive' on any subclass above to inspect method execution trace.
            </div>
          </div>
        </div>
      `;
    } else if (pillar === "polymorphism") {
      stage.innerHTML = `
        <div class="atm-stage">
          <div class="atm-panel" style="grid-column: 1 / -1;">
            <div class="atm-panel-title">
              <span>💳 4. Polymorphism: Universal Dynamic Method Dispatch</span>
              <span class="college-tag">Runtime Polymorphism</span>
            </div>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1rem;">
              The caller invokes <strong>one uniform interface call</strong>: <code>payment.processPayment(3500)</code>. The JVM determines which subclass implementation to execute at runtime:
            </p>

            <!-- Dynamic Selector Buttons -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:0.75rem; margin-bottom:1rem;">
              <button class="atm-amt-btn active" id="polyBtnUPI" onclick="Visualizers.testPolyPayment('UPI')">
                <span style="font-size:1.2rem;">📱</span><br><strong>UPI Payment</strong>
              </button>
              <button class="atm-amt-btn" id="polyBtnCard" onclick="Visualizers.testPolyPayment('Card')">
                <span style="font-size:1.2rem;">💳</span><br><strong>Credit Card</strong>
              </button>
              <button class="atm-amt-btn" id="polyBtnMetro" onclick="Visualizers.testPolyPayment('Metro')">
                <span style="font-size:1.2rem;">🚇</span><br><strong>Metro SmartCard</strong>
              </button>
              <button class="atm-amt-btn" id="polyBtnCrypto" onclick="Visualizers.testPolyPayment('Crypto')">
                <span style="font-size:1.2rem;">₿</span><br><strong>Crypto Lightning</strong>
              </button>
            </div>

            <!-- Morphing POS Terminal Screen -->
            <div style="background:#090d16; border:2px solid #1e293b; border-radius:10px; padding:1.25rem; font-family:var(--font-mono); color:#38bdf8;" id="posScreen">
              <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#94a3b8; margin-bottom:0.5rem; border-bottom:1px dashed #334155; padding-bottom:0.35rem;">
                <span>[ UNIVERSAL POS TERMINAL // DYNAMIC DISPATCH ]</span>
                <span style="color:#a855f7;">Method: invokevirtual</span>
              </div>
              <div id="posDynamicOutput" style="font-size:0.9rem; line-height:1.6; color:#f8fafc;">
                <span style="color:#38bdf8;">▶ Target Interface:</span> <code>PaymentMethod p = new UPIPayment();</code><br>
                <span style="color:#34d399;">▶ Runtime Execution:</span> Generating dynamic UPI QR Code... Routed through NPCI IMPS Switch!
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  triggerATMWithdraw: function() {
    if (this.isWithdrawing) return;
    this.isWithdrawing = true;

    const btn = document.getElementById("atmWithdrawBtn");
    const status = document.getElementById("atmStatusText");
    const slot = document.getElementById("cashDispenseSlot");
    const g1 = document.getElementById("gear1");
    const g2 = document.getElementById("gear2");
    const g3 = document.getElementById("gear3");
    const g4 = document.getElementById("gear4");

    if (btn) btn.disabled = true;
    if (slot) slot.innerHTML = "";

    // Reset gears
    [g1, g2, g3, g4].forEach(g => g && g.classList.remove("active"));

    if (status) status.innerHTML = `<span style="color:#fbbf24;">🔐 Step 1: Encrypting PIN with 2048-bit RSA...</span>`;
    if (g1) g1.classList.add("active");

    setTimeout(() => {
      if (status) status.innerHTML = `<span style="color:#38bdf8;">🌐 Step 2: Routing ISO-8583 Packet to Central Banking Switch...</span>`;
      if (g2) g2.classList.add("active");
    }, 600);

    setTimeout(() => {
      if (status) status.innerHTML = `<span style="color:#a855f7;">💵 Step 3: Spinning Optical Note Rollers (Counting ₹${this.atmAmount.toLocaleString('en-IN')})...</span>`;
      if (g3) g3.classList.add("active");
    }, 1200);

    setTimeout(() => {
      if (status) status.innerHTML = `<span style="color:#34d399;">✅ Step 4: ACID Ledger Balance Updated & Cash Dispensed!</span>`;
      if (g4) g4.classList.add("active");
      if (slot) {
        slot.innerHTML = `<div class="cash-note-anim">💵 ₹${this.atmAmount.toLocaleString('en-IN')} CASH DISPENSED!</div>`;
      }
    }, 1800);

    setTimeout(() => {
      if (btn) btn.disabled = false;
      this.isWithdrawing = false;
    }, 2400);
  },

  testEncapsulationDirectHack: function() {
    const shield = document.getElementById("capsuleShield");
    const log = document.getElementById("capsuleLog");
    if (shield) {
      shield.className = "capsule-status-shield shield-locked";
      shield.innerHTML = "⛔ SECURITY SHIELD ACTIVATED: COMPILATION BLOCKED!";
    }
    if (log) {
      log.innerHTML = `<span style="color:#f87171;">java: balance has private access in BankAccount.<br>Direct mutation blocked at compile time! Data is safe.</span>`;
    }
  },

  testEncapsulationDeposit: function() {
    this.capsuleBalance += 5000;
    const shield = document.getElementById("capsuleShield");
    const balance = document.getElementById("vaultBalanceDisplay");
    const log = document.getElementById("capsuleLog");
    if (shield) {
      shield.className = "capsule-status-shield shield-verified";
      shield.innerHTML = "✅ AUTHORIZED METHOD: deposit(5000) Executed";
    }
    if (balance) balance.innerText = `₹${this.capsuleBalance.toLocaleString('en-IN')}.00`;
    if (log) {
      log.innerHTML = `<span style="color:#34d399;">Validation passed: amount &gt; 0 verified! ₹5,000 credited securely to vault.</span>`;
    }
  },

  testEncapsulationWithdraw: function() {
    if (this.capsuleBalance >= 12000) {
      this.capsuleBalance -= 12000;
      const shield = document.getElementById("capsuleShield");
      const balance = document.getElementById("vaultBalanceDisplay");
      const log = document.getElementById("capsuleLog");
      if (shield) {
        shield.className = "capsule-status-shield shield-verified";
        shield.innerHTML = "✅ AUTHORIZED METHOD: withdraw(12000) Executed";
      }
      if (balance) balance.innerText = `₹${this.capsuleBalance.toLocaleString('en-IN')}.00`;
      if (log) {
        log.innerHTML = `<span style="color:#38bdf8;">Validation passed: amount &lt;= balance verified! ₹12,000 debited securely.</span>`;
      }
    }
  },

  testEncapsulationOverdraw: function() {
    const shield = document.getElementById("capsuleShield");
    const log = document.getElementById("capsuleLog");
    if (shield) {
      shield.className = "capsule-status-shield shield-warning";
      shield.innerHTML = "⚠️ BUSINESS RULE BLOCKED: Insufficient Balance";
    }
    if (log) {
      log.innerHTML = `<span style="color:#fbbf24;">Validation check failed: Requested ₹9,99,999 exceeds current balance. Transaction rejected!</span>`;
    }
  },

  testDriveVehicle: function(type) {
    const consoleEl = document.getElementById("vehicleTestConsole");
    if (!consoleEl) return;
    if (type === "SportsCar") {
      consoleEl.innerHTML = `
        <div>
          <span style="color:#60a5fa;">[Superclass Vehicle]</span> ➔ <code>startEngine();</code> (Combustion initialized)<br>
          <span style="color:#34d399;">[Subclass SportsCar]</span> ➔ <code>turboBoost();</code> (Nitrous injected! Speed +140 km/h)
        </div>
      `;
    } else if (type === "ElectricCar") {
      consoleEl.innerHTML = `
        <div>
          <span style="color:#60a5fa;">[Superclass Vehicle]</span> ➔ <code>applyBrakes();</code> (Hydraulic calipers engaged)<br>
          <span style="color:#fbbf24;">[Subclass ElectricCar]</span> ➔ <code>regenerativeCharge();</code> (Kinetic energy recovered into battery: +15 kWh)
        </div>
      `;
    }
  },

  testPolyPayment: function(type) {
    document.querySelectorAll(".atm-amt-btn").forEach(b => b.classList.remove("active"));
    const out = document.getElementById("posDynamicOutput");
    if (!out) return;

    if (type === "UPI") {
      const b = document.getElementById("polyBtnUPI");
      if (b) b.classList.add("active");
      out.innerHTML = `
        <span style="color:#38bdf8;">▶ Target Object:</span> <code>PaymentMethod p = new UPIPayment();</code><br>
        <span style="color:#34d399;">▶ Runtime Execution:</span> Generating dynamic UPI QR Code... Routed through NPCI IMPS Switch!
      `;
    } else if (type === "Card") {
      const b = document.getElementById("polyBtnCard");
      if (b) b.classList.add("active");
      out.innerHTML = `
        <span style="color:#38bdf8;">▶ Target Object:</span> <code>PaymentMethod p = new CreditCardPayment();</code><br>
        <span style="color:#fbbf24;">▶ Runtime Execution:</span> Reading EMV 3D-Secure Chip... Authorizing with Visa/Mastercard Network!
      `;
    } else if (type === "Metro") {
      const b = document.getElementById("polyBtnMetro");
      if (b) b.classList.add("active");
      out.innerHTML = `
        <span style="color:#38bdf8;">▶ Target Object:</span> <code>PaymentMethod p = new MetroSmartCard();</code><br>
        <span style="color:#c084fc;">▶ Runtime Execution:</span> Contactless 13.56MHz RFID Tap Detected! Gate turnstile opened & balance deducted.
      `;
    } else if (type === "Crypto") {
      const b = document.getElementById("polyBtnCrypto");
      if (b) b.classList.add("active");
      out.innerHTML = `
        <span style="color:#38bdf8;">▶ Target Object:</span> <code>PaymentMethod p = new CryptoPayment();</code><br>
        <span style="color:#f472b6;">▶ Runtime Execution:</span> P2P Node Handshake established! 0.0001 BTC settled across Lightning Network channel.
      `;
    }
  }
};
