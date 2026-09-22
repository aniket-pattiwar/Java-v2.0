/**
 * Java SME Masterclass - Application Controller
 * Handles Navigation, Slide Deck Presentation Mode, Search, Labs & Q&A
 * Renders Side-by-Side Code + Terminal Output Layout and Concept Diagrams
 */

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

const App = {
  currentSlideIndex: 0,
  activeTab: "overview",

  init: function() {
    this.renderCurriculum();
    this.renderInterviewVault();
    this.renderLabs();
    this.setupEventListeners();
    this.setupSlideDeck();
    Visualizers.selectOOPPillar("abstraction");
    Visualizers.renderMemoryVisualizer();
    Visualizers.selectCollectionNode("ArrayList");
    Visualizers.selectThreadState("RUNNABLE");
  },

  // 1. Render Curriculum Modules
  renderCurriculum: function() {
    COURSE_DATA.modules.forEach(mod => {
      const container = document.getElementById(`content-${mod.id}`);
      if (!container) return;

      let topicsHtml = mod.topics.map(topic => `
        <section class="topic-section" id="${topic.id}">
          <div class="topic-header">
            <div class="topic-title-area">
              <h3>${topic.title}</h3>
            </div>
          </div>

          ${topic.image ? `
            <div class="concept-visual-container">
              <img src="${topic.image}" alt="${topic.title}" class="concept-diagram-img" loading="lazy">
              ${topic.imageCaption ? `<div class="concept-caption">📊 ${topic.imageCaption}</div>` : ''}
            </div>
          ` : ''}

          <div class="topic-description">${topic.content}</div>

          ${topic.id === "u3-t1" ? `
            <!-- Anime-Style Interactive 4 Pillars Simulator Component Embedded in OOPs Concept -->
            <div class="anime-sim-card">
              <div class="anime-sim-header">
                <div>
                  <span class="college-tag" style="margin-left:0; margin-bottom:0.35rem;">🎬 Interactive 4 Pillars System</span>
                  <h4 style="font-size:1.15rem; color:var(--text-primary); margin:0;">Real-World Compact OOP Simulator (Anime & Motion Engine)</h4>
                  <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.25rem;">Explore all 4 pillars interactively — starting with real-world <strong>ATM Abstraction</strong>, cyber-capsule <strong>Encapsulation</strong>, <strong>Inheritance</strong>, and <strong>Polymorphism</strong>.</p>
                </div>
                <div class="anime-pillar-tabs">
                  <button class="pillar-tab-btn active" data-pillar="abstraction" onclick="Visualizers.selectOOPPillar('abstraction')">1. 🏧 Abstraction (ATM)</button>
                  <button class="pillar-tab-btn" data-pillar="encapsulation" onclick="Visualizers.selectOOPPillar('encapsulation')">2. 🛡️ Encapsulation</button>
                  <button class="pillar-tab-btn" data-pillar="inheritance" onclick="Visualizers.selectOOPPillar('inheritance')">3. 🚗 Inheritance</button>
                  <button class="pillar-tab-btn" data-pillar="polymorphism" onclick="Visualizers.selectOOPPillar('polymorphism')">4. 💳 Polymorphism</button>
                </div>
              </div>
              <div class="anime-oop-container"></div>
            </div>
          ` : ''}

          ${topic.analogy ? `
            <div class="callout callout-analogy">
              <div class="callout-icon">💡</div>
              <div><strong>Example:</strong> ${topic.analogy}</div>
            </div>
          ` : ''}

          ${topic.trap ? `
            <div class="callout callout-trap">
              <div class="callout-icon">⚠️</div>
              <div><strong>Interview:</strong> ${topic.trap}</div>
            </div>
          ` : ''}

          ${topic.codeSnippet ? `
            <div class="code-output-split-wrapper">
              <div class="split-top-bar">
                <span class="split-filename">
                  <span class="split-badge">JAVA</span>
                  ${topic.codeSnippet.filename}
                </span>
                <button class="copy-btn" onclick="App.copyCode(this)">
                  <span>📋 Copy Code</span>
                </button>
              </div>
              <div class="code-output-grid">
                <div class="code-pane">
                  <div class="pane-header">📄 Java Source Code</div>
                  <pre class="code-content-inner language-java"><code>${App.escapeHtml(topic.codeSnippet.code)}</code></pre>
                </div>
                <div class="output-pane">
                  <div class="pane-header" style="color:#34d399;">⚡ Terminal Output</div>
                  <pre class="output-content-inner"><code>${App.escapeHtml(topic.codeSnippet.output || "// Output will appear here upon execution")}</code></pre>
                </div>
              </div>
            </div>
          ` : ''}
        </section>
      `).join("");

      // Render Sidebar Navigation for this module
      let navListHtml = mod.topics.map((t, idx) => `
        <li>
          <a href="#${t.id}" class="topic-nav-link ${idx === 0 ? 'active' : ''}">
            <span>${t.title}</span>
          </a>
        </li>
      `).join("");

      container.innerHTML = `
        <div class="curriculum-grid">
          <aside class="sidebar-syllabus">
            <div class="sidebar-sticky">
              <div class="sidebar-title">Module Topics</div>
              <ul class="topic-nav-list">
                ${navListHtml}
              </ul>
            </div>
          </aside>
          <div class="topic-content-wrapper">
            <div class="hero-banner" style="padding: 1.5rem 2rem; margin-bottom: 0;">
              <div>
                <span class="college-tag" style="margin-left:0; margin-bottom:0.5rem;">${mod.unitCode}</span>
                <h3 style="font-size: 1.5rem; color: var(--text-primary);">${mod.title}</h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary);">${mod.summary}</p>
              </div>
            </div>
            ${topicsHtml}
          </div>
        </div>
      `;
    });
  },

  // 2. Render Interview Vault
  renderInterviewVault: function() {
    const container = document.getElementById("interview-vault-list");
    if (!container) return;

    container.innerHTML = COURSE_DATA.interviewVault.map((item, idx) => `
      <div class="qa-card" data-category="${item.category}" data-difficulty="${item.difficulty}" data-search="${item.question.toLowerCase()} ${item.answer.toLowerCase()}">
        <div class="qa-header" onclick="App.toggleQA(this)">
          <div class="qa-question">
            <span style="color:var(--primary-600); font-size:0.9rem;">Q${idx + 1}.</span>
            <span>${item.question}</span>
          </div>
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="qa-difficulty diff-${item.difficulty}">${item.difficulty.toUpperCase()}</span>
            <span class="qa-toggle-icon">▼</span>
          </div>
        </div>
        <div class="qa-body">
          <div style="margin-bottom:0.85rem; line-height:1.7;">
            ${item.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code>$1</code>')}
          </div>
          ${item.trap ? `
            <div class="callout callout-trap" style="margin-bottom:0;">
              <div class="callout-icon">🎯</div>
              <div><strong>Interview:</strong> ${item.trap}</div>
            </div>
          ` : ''}
        </div>
      </div>
    `).join("");
  },

  filterInterview: function(difficulty, btnEl) {
    if (btnEl) {
      btnEl.parentElement.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      btnEl.classList.add("active");
    }
    const cards = document.querySelectorAll("#interview-vault-list .qa-card");
    cards.forEach(card => {
      const cardDiff = card.getAttribute("data-difficulty");
      if (difficulty === "all" || cardDiff === difficulty) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  },

  filterInterviewCategory: function(category, btnEl) {
    if (btnEl) {
      btnEl.parentElement.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      btnEl.classList.add("active");
    }
    const cards = document.querySelectorAll("#interview-vault-list .qa-card");
    cards.forEach(card => {
      const cardCat = card.getAttribute("data-category");
      if (cardCat.includes(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  },

  // 3. Render Lab Exercises with Output beside code
  renderLabs: function() {
    const container = document.getElementById("labs-container");
    if (!container) return;

    container.innerHTML = COURSE_DATA.labs.map(lab => `
      <div class="lab-card" data-difficulty="${lab.difficulty}" data-unit="${lab.unit}">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
          <h4 style="font-size:1.15rem; color:var(--text-primary); margin:0;">${lab.title}</h4>
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="lab-level-badge level-${lab.difficulty}">${lab.difficulty.toUpperCase()}</span>
            <span class="college-tag" style="margin:0;">${lab.unit}</span>
          </div>
        </div>
        <p style="color:var(--text-secondary); margin-bottom:0.75rem;"><strong>Problem Statement:</strong> ${lab.task}</p>
        <div style="padding:0.6rem 0.8rem; background:var(--accent-blue-bg); border-radius:6px; font-size:0.85rem; color:#1e40af; margin-bottom:0.75rem;">
          <strong>🧪 Test Case / Verification:</strong> ${lab.testCase}
        </div>
        <button class="solution-toggle-btn" onclick="App.toggleSolution(this)">
          <span>👁️ Reveal Model Solution</span>
        </button>
        <div class="solution-box">
          <div class="code-output-split-wrapper" style="margin-top:0.75rem;">
            <div class="split-top-bar">
              <span class="split-filename"><span class="split-badge">JAVA</span> Solution.java</span>
              <button class="copy-btn" onclick="App.copyCode(this)">📋 Copy Solution</button>
            </div>
            <div class="code-output-grid">
              <div class="code-pane">
                <div class="pane-header">📄 Solution Code</div>
                <pre class="code-content-inner language-java"><code>${App.escapeHtml(lab.solutionCode)}</code></pre>
              </div>
              <div class="output-pane">
                <div class="pane-header" style="color:#34d399;">⚡ Expected Execution Output</div>
                <pre class="output-content-inner"><code>${App.escapeHtml(lab.output || "// Successful Execution")}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  },

  filterLabs: function(difficulty, btnEl) {
    if (btnEl) {
      btnEl.parentElement.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      btnEl.classList.add("active");
    }
    const cards = document.querySelectorAll("#labs-container .lab-card");
    cards.forEach(card => {
      const cardDiff = card.getAttribute("data-difficulty");
      if (difficulty === "all" || cardDiff === difficulty) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  },

  filterLabsUnit: function(unit, btnEl) {
    if (btnEl) {
      btnEl.parentElement.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      btnEl.classList.add("active");
    }
    const cards = document.querySelectorAll("#labs-container .lab-card");
    cards.forEach(card => {
      const cardUnit = card.getAttribute("data-unit");
      if (cardUnit === unit) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  },

  toggleAllSolutions: function(show) {
    document.querySelectorAll("#labs-container .lab-card").forEach(card => {
      const box = card.querySelector(".solution-box");
      const btn = card.querySelector(".solution-toggle-btn");
      if (box && btn) {
        box.classList.toggle("active", show);
        btn.innerHTML = show ? "<span>🙈 Hide Model Solution</span>" : "<span>👁️ Reveal Model Solution</span>";
      }
    });
  },

  // 4. Slide Deck Controller
  setupSlideDeck: function() {
    this.renderCurrentSlide();

    document.addEventListener("keydown", (e) => {
      const modal = document.getElementById("slideDeckModal");
      if (!modal.classList.contains("active")) return;

      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        this.nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        this.prevSlide();
      } else if (e.key === "Escape") {
        this.closeSlideDeck();
      }
    });
  },

  openSlideDeck: function(slideIdx = 0) {
    this.currentSlideIndex = slideIdx;
    this.renderCurrentSlide();
    document.getElementById("slideDeckModal").classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeSlideDeck: function() {
    document.getElementById("slideDeckModal").classList.remove("active");
    document.body.style.overflow = "auto";
  },

  renderCurrentSlide: function() {
    const slide = COURSE_DATA.slides[this.currentSlideIndex];
    const total = COURSE_DATA.slides.length;
    const container = document.getElementById("slideCanvas");
    const counter = document.getElementById("slideCounter");

    if (counter) {
      counter.innerText = `Slide ${this.currentSlideIndex + 1} / ${total}`;
    }

    if (container && slide) {
      container.innerHTML = `
        <div class="slide-card">
          <div>
            <span class="college-tag" style="margin-left:0; margin-bottom:0.75rem;">${slide.badge}</span>
            <div class="slide-main-content">
              <h2>${slide.title}</h2>
              <ul class="slide-bullets">
                ${slide.bullets.map(b => `<li>${b}</li>`).join("")}
              </ul>
            </div>
            ${slide.code ? `
              <div style="background:#1e293b; border-radius:8px; overflow:hidden; max-width:850px; margin-top:1.25rem; border:1px solid #334155;">
                <pre class="code-content-inner language-java" style="padding:0.75rem 1rem; font-size:0.9rem;"><code>${App.escapeHtml(slide.code)}</code></pre>
              </div>
            ` : ''}
          </div>
          <div class="slide-footer-nav">
            <button class="slide-nav-btn" onclick="App.prevSlide()" ${this.currentSlideIndex === 0 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
              ← Previous (Left Key)
            </button>
            <span style="font-size:0.85rem; color:var(--text-muted);">Press [ESC] to Exit Presenter Mode</span>
            <button class="slide-nav-btn" onclick="App.nextSlide()" ${this.currentSlideIndex === total - 1 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
              Next (Right Key / Space) →
            </button>
          </div>
        </div>
      `;
    }
  },

  nextSlide: function() {
    if (this.currentSlideIndex < COURSE_DATA.slides.length - 1) {
      this.currentSlideIndex++;
      this.renderCurrentSlide();
    }
  },

  prevSlide: function() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      this.renderCurrentSlide();
    }
  },

  // 5. General Event Listeners
  setupEventListeners: function() {
    document.querySelectorAll(".nav-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const tabTarget = tab.getAttribute("data-tab");
        this.switchTab(tabTarget);
      });
    });

    const searchInput = document.getElementById("globalSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        this.performSearch(query);
      });
    }
  },

  switchTab: function(tabId) {
    this.activeTab = tabId;
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.style.display = "none");

    const activeTabBtn = document.querySelector(`[data-tab="${tabId}"]`);
    const activePane = document.getElementById(`tab-${tabId}`);

    if (activeTabBtn) activeTabBtn.classList.add("active");
    if (activePane) {
      activePane.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },

  toggleQA: function(headerEl) {
    const card = headerEl.closest(".qa-card");
    if (card) {
      card.classList.toggle("open");
    }
  },

  toggleSolution: function(btnEl) {
    const solutionBox = btnEl.nextElementSibling;
    if (solutionBox) {
      solutionBox.classList.toggle("open");
      btnEl.innerHTML = solutionBox.classList.contains("open") 
        ? "<span>🙈 Hide Solution</span>" 
        : "<span>👁️ Reveal Model Solution</span>";
    }
  },

  copyCode: function(btn) {
    const wrapper = btn.closest(".code-output-split-wrapper") || btn.closest(".code-block-container");
    const code = wrapper.querySelector(".code-content-inner code, pre code").innerText;
    navigator.clipboard.writeText(code).then(() => {
      const originalText = btn.innerHTML;
      btn.classList.add("copied");
      btn.innerHTML = "<span>✅ Copied!</span>";
      setTimeout(() => {
        btn.classList.remove("copied");
        btn.innerHTML = originalText;
      }, 2000);
    });
  },

  performSearch: function(query) {
    if (!query) {
      document.querySelectorAll(".qa-card").forEach(c => c.style.display = "block");
      document.querySelectorAll(".topic-section").forEach(s => s.style.display = "block");
      return;
    }

    document.querySelectorAll(".qa-card").forEach(card => {
      const searchData = card.getAttribute("data-search") || "";
      if (searchData.includes(query)) {
        card.style.display = "block";
        card.classList.add("open");
      } else {
        card.style.display = "none";
      }
    });
  },

  escapeHtml: function(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
};
