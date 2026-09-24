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

  init: function () {
    this.renderCurriculum();
    this.renderInterviewVault();
    this.renderLabs();
    this.highlightAllCodeBlocks();
    this.setupEventListeners();
    this.setupSlideDeck();
    this.setupImageLightbox();
    this.setupTopZoomAndMagnifier();
    this.setupSearchEngine();
    this.setupScrollSpy();
    Visualizers.updateNumberConverter("42");
    Visualizers.selectOOPPillar("abstraction");
    Visualizers.renderMemoryVisualizer();
    Visualizers.selectCollectionNode("ArrayList");
    Visualizers.selectThreadState("RUNNABLE");

    if (window.location.hash) {
      const hashId = window.location.hash.substring(1);
      setTimeout(() => {
        this.handleInitialHash(hashId);
      }, 150);
    }
  },

  // 1. Render Curriculum Modules
  renderCurriculum: function () {
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

          ${topic.analogyImages && topic.analogyImages.length > 0 ? `
            <div class="analogy-gallery-wrapper" style="margin: 1.25rem 0;">
              <div style="font-size: 0.95rem; font-weight: 700; color: var(--primary-700); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
                <span>🌍 Real-World Mental Models & Analogies:</span>
              </div>
              <div class="analogy-gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1.15rem;">
                ${topic.analogyImages.map(imgObj => `
                  <div class="concept-visual-container" style="margin: 0; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm);">
                    <img src="${imgObj.src}" alt="${imgObj.caption || 'Real-World Example Analogy'}" class="concept-diagram-img" loading="lazy" style="border-radius: 0; border: none; width: 100%;">
                    <div class="concept-caption" style="background: #f8fafc; color: #1e293b; font-weight: 600; padding: 0.65rem 1rem; border-top: 1px solid #e2e8f0; font-size: 0.85rem;">
                      💡 ${imgObj.caption}
                    </div>
                  </div>
                `).join('')}
              </div>
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
             <div><strong>Example:</strong> ${topic.analogy}</div>
            </div>
          ` : ''}

          ${topic.trap ? `
            <div class="callout callout-trap">
             <div><strong>Q&A:</strong> ${topic.trap}</div>
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
                  <pre class="code-content-inner language-java"><code>${App.highlightJava(topic.codeSnippet.code)}</code></pre>
                </div>
                <div class="output-pane">
                  <div class="pane-header" style="color:#34d399;">⚡ Terminal Output</div>
                  <pre class="output-content-inner"><code>${App.escapeHtml(topic.codeSnippet.output || "// Output will appear here upon execution")}</code></pre>
                </div>
              </div>
            </div>
          ` : ''}

          ${topic.mcqs && topic.mcqs.length > 0 ? `
            <div class="concept-mcq-wrapper">
              <div class="mcq-header-bar">
                  <span class="college-tag" style="margin-left:0; margin-bottom:0.25rem;">📝 MCQ's</span>
              </div>
              <div class="mcqs-container">
                ${topic.mcqs.map((mcq, mIdx) => `
                  <div class="mcq-card" id="mcq-${topic.id}-${mIdx}">
                    <div class="mcq-question-text">
                      <span style="color:var(--primary-600); margin-right:0.35rem;">Q${mIdx + 1}.</span>
                      ${mcq.question.replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                    </div>
                    <div class="mcq-options-list">
                      ${mcq.options.map((opt, oIdx) => {
        const optChar = String.fromCharCode(65 + oIdx);
        return `
                          <button class="mcq-opt-btn" onclick="App.checkMCQ('${topic.id}', ${mIdx}, ${oIdx}, this)">
                            <span class="mcq-opt-key">${optChar}</span>
                            <span>${opt.replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</span>
                          </button>
                        `;
      }).join('')}
                    </div>
                    <div class="mcq-explanation-box" id="exp-${topic.id}-${mIdx}">
                      <div style="font-weight:700; margin-bottom:0.35rem; display:flex; justify-content:space-between; align-items:center;">
                        <span class="exp-status-text">💡 Explanation:</span>
                        <button onclick="App.resetMCQ('${topic.id}', ${mIdx}, this)" style="background:none; border:none; color:var(--primary-600); cursor:pointer; font-size:0.75rem; font-weight:600; text-decoration:underline;">🔄 Reset / Try Again</button>
                      </div>
                      <div class="exp-content">${mcq.explanation.replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </section>
      `).join("");

      // Render Sidebar Navigation for this module
      let navListHtml = mod.topics.map((t, idx) => `
        <li>
          <a href="#${t.id}" class="topic-nav-link ${idx === 0 ? 'active' : ''}" data-topic-id="${t.id}" onclick="App.scrollToTopic('${t.id}', event)">
            <span class="topic-nav-num">${String(idx + 1).padStart(2, '0')}</span>
            <span class="topic-nav-text">${t.title}</span>
            <span class="topic-nav-active-dot"></span>
          </a>
        </li>
      `).join("");

      container.innerHTML = `
        <div class="curriculum-grid">
          <aside class="sidebar-syllabus">
            <div class="sidebar-sticky">
              <div class="sidebar-header">
                <div class="sidebar-title">Module Topics</div>
                <span class="sidebar-count">${mod.topics.length} Concepts</span>
              </div>
              <div class="sidebar-scroll-area">
                <ul class="topic-nav-list">
                  ${navListHtml}
                </ul>
              </div>
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
  renderInterviewVault: function () {
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
              <div><strong>Q&A:</strong> ${item.trap}</div>
            </div>
          ` : ''}
        </div>
      </div>
    `).join("");
  },

  filterInterview: function (difficulty, btnEl) {
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

  filterInterviewCategory: function (category, btnEl) {
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
  renderLabs: function () {
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
       <!-- <button class="solution-toggle-btn" onclick="App.toggleSolution(this)">
          <span>👁️ Reveal Model Solution</span>
        </button> --!>
        <div class="solution-box">
          <div class="code-output-split-wrapper" style="margin-top:0.75rem;">
            <div class="split-top-bar">
              <span class="split-filename"><span class="split-badge">JAVA</span> Solution.java</span>
              <button class="copy-btn" onclick="App.copyCode(this)">📋 Copy Solution</button>
            </div>
            <div class="code-output-grid">
              <div class="code-pane">
                <div class="pane-header">📄 Solution Code</div>
                <pre class="code-content-inner language-java"><code>${App.highlightJava(lab.solutionCode)}</code></pre>
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

  filterLabs: function (difficulty, btnEl) {
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

  filterLabsUnit: function (unit, btnEl) {
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

  // toggleAllSolutions: function(show) {
  //   document.querySelectorAll("#labs-container .lab-card").forEach(card => {
  //     const box = card.querySelector(".solution-box");
  //     const btn = card.querySelector(".solution-toggle-btn");
  //     if (box && btn) {
  //       box.classList.toggle("active", show);
  //       // btn.innerHTML = show ? "<span>🙈 Hide Model Solution</span>" : "<span>👁️ Reveal Model Solution</span>";
  //     }
  //   });
  // },

  // 4. Slide Deck Controller
  setupSlideDeck: function () {
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

  openSlideDeck: function (slideIdx = 0) {
    this.currentSlideIndex = slideIdx;
    this.renderCurrentSlide();
    document.getElementById("slideDeckModal").classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeSlideDeck: function () {
    document.getElementById("slideDeckModal").classList.remove("active");
    document.body.style.overflow = "auto";
  },

  renderCurrentSlide: function () {
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

  nextSlide: function () {
    if (this.currentSlideIndex < COURSE_DATA.slides.length - 1) {
      this.currentSlideIndex++;
      this.renderCurrentSlide();
    }
  },

  prevSlide: function () {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      this.renderCurrentSlide();
    }
  },

  // 5. General Event Listeners
  setupEventListeners: function () {
    document.querySelectorAll(".nav-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const tabTarget = tab.getAttribute("data-tab");
        this.switchTab(tabTarget);
      });
    });
  },

  switchTab: function (tabId) {
    this.activeTab = tabId;
    this._currentActiveTopicId = null;
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.style.display = "none");

    const activeTabBtn = document.querySelector(`[data-tab="${tabId}"]`);
    const activePane = document.getElementById(`tab-${tabId}`);

    if (activeTabBtn) activeTabBtn.classList.add("active");
    if (activePane) {
      activePane.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Highlight any static or dynamically revealed code blocks in this pane
      this.highlightAllCodeBlocks();

      // Refresh ScrollSpy for newly visible module
      setTimeout(() => {
        this.setupScrollSpy();
      }, 60);
    }
  },

  // Smooth Topic Jump Navigation & Target Highlight
  scrollToTopic: function (topicId, e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const targetEl = document.getElementById(topicId);
    if (!targetEl) return;

    // Immediately update active status in sidebar
    this.setActiveTopic(topicId);

    // Calculate precise offset to accommodate sticky header
    const headerOffset = 90;
    const elementPosition = targetEl.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth"
    });

    // Add glowing pulse animation to destination card
    document.querySelectorAll(".topic-section").forEach(s => s.classList.remove("topic-highlight-active"));
    targetEl.classList.add("topic-highlight-active");
    setTimeout(() => {
      targetEl.classList.remove("topic-highlight-active");
    }, 2000);

    // Update URL hash quietly
    if (window.history && window.history.pushState) {
      window.history.pushState(null, null, `#${topicId}`);
    }
  },

  // Switch between Windows / macOS / Linux in Eclipse IDE Setup Handbook
  selectEclipseOS: function (os) {
    document.querySelectorAll(".os-tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".os-guide-pane").forEach(pane => pane.style.display = "none");

    const activeBtn = document.getElementById(`btn-os-${os}`);
    const activePane = document.getElementById(`pane-os-${os}`);

    if (activeBtn) activeBtn.classList.add("active");
    if (activePane) activePane.style.display = "block";
  },

  // Switch between Code Masterclass tabs (Arrays / Strings / FirstProgram) in Eclipse Guide
  switchEclipseCodeTab: function (tab) {
    document.querySelectorAll(".code-tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".eclipse-code-pane-wrapper").forEach(pane => pane.style.display = "none");

    const activeBtn = document.getElementById(`btn-code-tab-${tab}`);
    const activePane = document.getElementById(`eclipse-code-${tab}`);

    if (activeBtn) activeBtn.classList.add("active");
    if (activePane) {
      activePane.style.display = "grid";
      this.highlightAllCodeBlocks();
    }
  },

  // Print or Export Eclipse Installation Handbook as PDF
  printEclipseHandbook: function () {
    this.switchTab("eclipse-guide");
    window.print();
  },

  // Smooth Scroll to any element ID
  scrollToElement: function (id, e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  },

  // Dynamic ScrollSpy to track currently running / in-view concept
  setupScrollSpy: function () {
    if (this._scrollHandler) {
      window.removeEventListener("scroll", this._scrollHandler);
    }

    const handleScroll = () => {
      if (this._scrollTicking) return;
      this._scrollTicking = true;

      window.requestAnimationFrame(() => {
        this._scrollTicking = false;
        const activePane = document.getElementById(`tab-${this.activeTab}`);
        if (!activePane || activePane.style.display === "none") return;

        const sections = Array.from(activePane.querySelectorAll(".topic-section"));
        if (sections.length === 0) return;

        const scrollPos = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        // If scrolled to bottom of document, activate the last visible section
        if (scrollPos + windowHeight >= docHeight - 60) {
          const lastSection = sections[sections.length - 1];
          if (lastSection) {
            this.setActiveTopic(lastSection.id);
            return;
          }
        }

        // Active topic detection point (below sticky header/nav)
        const triggerPoint = 140;
        let currentActiveId = sections[0].id;

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const rect = section.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            currentActiveId = section.id;
          }
        }

        this.setActiveTopic(currentActiveId);
      });
    };

    this._scrollHandler = handleScroll;
    window.addEventListener("scroll", this._scrollHandler, { passive: true });
    handleScroll();
  },

  setActiveTopic: function (topicId) {
    if (this._currentActiveTopicId === topicId) return;
    this._currentActiveTopicId = topicId;

    const activePane = document.getElementById(`tab-${this.activeTab}`);
    if (!activePane) return;

    const navLinks = activePane.querySelectorAll(".topic-nav-link");
    let activeLink = null;

    navLinks.forEach(link => {
      if (link.getAttribute("data-topic-id") === topicId) {
        link.classList.add("active");
        activeLink = link;
      } else {
        link.classList.remove("active");
      }
    });

    // Auto-scroll sidebar list so active item is always visible
    if (activeLink) {
      const scrollArea = activeLink.closest(".sidebar-scroll-area");
      if (scrollArea) {
        const linkRect = activeLink.getBoundingClientRect();
        const areaRect = scrollArea.getBoundingClientRect();

        if (linkRect.top < areaRect.top || linkRect.bottom > areaRect.bottom) {
          activeLink.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    }
  },

  handleInitialHash: function (hashId) {
    if (!hashId) return;
    for (const mod of COURSE_DATA.modules) {
      const topic = mod.topics.find(t => t.id === hashId);
      if (topic) {
        this.switchTab(mod.id);
        setTimeout(() => {
          this.scrollToTopic(hashId);
        }, 200);
        return;
      }
    }
  },

  toggleQA: function (headerEl) {
    const card = headerEl.closest(".qa-card");
    if (card) {
      card.classList.toggle("open");
    }
  },

  // toggleSolution: function(btnEl) {
  //   const solutionBox = btnEl.nextElementSibling;
  //   if (solutionBox) {
  //     solutionBox.classList.toggle("open");
  //     btnEl.innerHTML = solutionBox.classList.contains("open") 
  //       ? "<span>🙈 Hide Solution</span>" 
  //       : "<span>👁️ Reveal Model Solution</span>";
  //   }
  // },

  // High-Precision Java Syntax Highlighting Engine
  highlightJava: function (code) {
    if (!code) return "";

    const rules = [
      { type: "comment", regex: /\/\*[\s\S]*?\*\/|\/\/[^\r\n]*/y },
      { type: "string", regex: /"(?:\\.|[^"\\\r\n])*"/y },
      { type: "char", regex: /'(?:\\.|[^'\\\r\n])'/y },
      { type: "annotation", regex: /@[A-Za-z0-9_]+/y },
      { type: "number", regex: /\b(?:0x[0-9a-fA-F]+|\d+(?:\.\d+)?(?:[fFdDlL])?)\b/y },
      { type: "boolean", regex: /\b(?:true|false|null)\b/y },
      { type: "keyword", regex: /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while|record|yield|var|sealed|permits|non-sealed)\b/y },
      { type: "function", regex: /\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\()/y },
      { type: "class-name", regex: /\b[A-Z][a-zA-Z0-9_$]*\b/y },
      { type: "operator", regex: /==|!=|<=|>=|&&|\|\||->|::|\+=|-=|\*=|\/=|%=|<<|>>|\+\+|--|[+\-*/%=<>!&|^~?:]/y },
      { type: "punctuation", regex: /[{}\[\]();,.]/y },
      { type: "plain", regex: /[a-z_$][a-zA-Z0-9_$]*|\s+|[^\s\w]/y }
    ];

    let result = "";
    let pos = 0;
    const len = code.length;

    while (pos < len) {
      let matched = false;
      for (let i = 0; i < rules.length; i++) {
        rules[i].regex.lastIndex = pos;
        const m = rules[i].regex.exec(code);
        if (m && m.index === pos) {
          const text = m[0];
          pos += text.length;
          matched = true;
          if (rules[i].type === "plain") {
            result += App.escapeHtml(text);
          } else {
            result += `<span class="token ${rules[i].type}">${App.escapeHtml(text)}</span>`;
          }
          break;
        }
      }
      if (!matched) {
        result += App.escapeHtml(code[pos]);
        pos++;
      }
    }

    return result;
  },

  // Colorize all code blocks across the website
  highlightAllCodeBlocks: function () {
    const codeElements = document.querySelectorAll(
      "pre.code-content-inner code, pre.language-java code, .code-pane pre code, .code-block-wrapper pre code"
    );
    codeElements.forEach(el => {
      // Don't re-highlight if already contains token spans
      if (el.querySelector(".token")) return;
      
      const rawCode = el.textContent || el.innerText;
      if (rawCode && rawCode.trim().length > 0) {
        el.innerHTML = this.highlightJava(rawCode);
      }
    });
  },

  copyCode: function (btn) {
    const wrapper = btn.closest(".code-output-split-wrapper") || btn.closest(".code-output-container") || btn.closest(".code-block-container") || btn.closest(".code-pane") || btn.parentElement;
    const codeEl = wrapper ? wrapper.querySelector(".code-content-inner code, .code-content-inner, pre code, code") : null;
    const codeText = codeEl ? (codeEl.innerText || codeEl.textContent) : "";
    if (!codeText) return;

    navigator.clipboard.writeText(codeText.trim()).then(() => {
      const originalText = btn.innerHTML;
      btn.classList.add("copied");
      btn.innerHTML = "<span>✅ Copied!</span>";
      setTimeout(() => {
        btn.classList.remove("copied");
        btn.innerHTML = originalText;
      }, 2000);
    }).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = codeText.trim();
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      const originalText = btn.innerHTML;
      btn.classList.add("copied");
      btn.innerHTML = "<span>✅ Copied!</span>";
      setTimeout(() => {
        btn.classList.remove("copied");
        btn.innerHTML = originalText;
      }, 2000);
    });
  },

  // -------------------------------------------------------------
  // Top Website Page Zoom & Webpage Magnifier System
  // -------------------------------------------------------------
  pageZoomLevel: 100,
  pageMagnifierActive: false,

  zoomPageIn: function () {
    const nextLevels = [80, 90, 100, 110, 120, 130, 140, 150];
    const curr = this.pageZoomLevel;
    const next = nextLevels.find(l => l > curr) || 150;
    this.setPageZoom(next);
  },

  zoomPageOut: function () {
    const prevLevels = [150, 140, 130, 120, 110, 100, 90, 80];
    const curr = this.pageZoomLevel;
    const prev = prevLevels.find(l => l < curr) || 80;
    this.setPageZoom(prev);
  },

  resetPageZoom: function () {
    this.setPageZoom(100);
  },

  setPageZoom: function (level) {
    this.pageZoomLevel = level;
    document.body.style.zoom = level / 100;
    const indicator = document.getElementById("pageZoomIndicator");
    if (indicator) {
      indicator.textContent = `${level}%`;
    }
  },

  togglePageMagnifier: function () {
    this.pageMagnifierActive = !this.pageMagnifierActive;
    const btn = document.getElementById("btnPageMagnifier");
    const lens = document.getElementById("pageMagnifierLens");

    if (this.pageMagnifierActive) {
      if (btn) btn.classList.add("active");
      if (lens) lens.style.display = "flex";
    } else {
      if (btn) btn.classList.remove("active");
      if (lens) lens.style.display = "none";
    }
  },

  setupTopZoomAndMagnifier: function () {
    const lens = document.getElementById("pageMagnifierLens");
    const lensContent = document.getElementById("pageLensContent");

    // Keyboard Shortcuts: Alt + M to toggle page magnifier, Esc to exit
    document.addEventListener("keydown", (e) => {
      if (e.altKey && e.key.toLowerCase() === "m") {
        this.togglePageMagnifier();
      } else if (e.key === "Escape" && this.pageMagnifierActive) {
        this.togglePageMagnifier();
      }
    });

    // Move page magnifier lens and capture preview
    window.addEventListener("mousemove", (e) => {
      if (!this.pageMagnifierActive || !lens) return;

      lens.style.left = `${e.clientX}px`;
      lens.style.top = `${e.clientY}px`;

      // Find element directly under cursor
      lens.style.pointerEvents = "none";
      const targetEl = document.elementFromPoint(e.clientX, e.clientY);
      if (targetEl && lensContent) {
        const closestCard = targetEl.closest(".topic-section, .qa-card, .lab-card, .comparison-table-wrapper, .concept-visual-container, .code-terminal-grid, .site-header, .brand-wrapper") || targetEl;
        if (closestCard) {
          const headerText = closestCard.querySelector("h3, h4, h2, strong")?.innerText || "";
          const pText = closestCard.querySelector("p, code, pre, .topic-description")?.innerText || closestCard.innerText || "";
          lensContent.innerHTML = `
            <div style="padding: 16px 12px; font-size: 0.9rem; color: #0f172a; line-height: 1.45; transform: scale(1.12); transform-origin: top left;">
              ${headerText ? `<div style="font-weight:800; color:#4338ca; margin-bottom:4px; font-size:0.95rem;">${App.escapeHtml(headerText.slice(0, 65))}</div>` : ''}
              <div style="font-size:0.82rem; color:#334155;">${App.escapeHtml(pText.slice(0, 200))}...</div>
            </div>
          `;
        }
      }
    });
  },

  // -------------------------------------------------------------
  // Global Real-Time Search Engine with Live Dropdown & Navigation
  // -------------------------------------------------------------
  searchIndex: [],

  buildSearchIndex: function () {
    const index = [];

    // 1. Index all curriculum topics across 5 units
    COURSE_DATA.modules.forEach(mod => {
      mod.topics.forEach(t => {
        index.push({
          type: "topic",
          category: "📘 Curriculum Concept",
          unitId: mod.id,
          unitTitle: mod.title,
          targetId: t.id,
          title: t.title,
          content: `${t.title} ${t.content || ''} ${t.analogy || ''} ${t.trap || ''} ${t.codeSnippet?.code || ''}`,
          badge: mod.unitCode || "UNIT"
        });
      });
    });

    // 2. Index all interview questions
    if (COURSE_DATA.interviewQuestions) {
      COURSE_DATA.interviewQuestions.forEach(q => {
        index.push({
          type: "qa",
          category: "❓ Interview Viva & Traps",
          unitId: "interview-vault",
          unitTitle: "Viva & Interview Vault",
          targetId: q.id,
          title: q.q,
          content: `${q.q} ${q.a || ''} ${q.tags?.join(' ') || ''} ${q.company || ''}`,
          badge: q.company ? `🏢 ${q.company}` : "VIVA"
        });
      });
    }

    // 3. Index all practical labs
    if (COURSE_DATA.labs) {
      COURSE_DATA.labs.forEach(l => {
        index.push({
          type: "lab",
          category: "🧪 Practical Lab Assignment",
          unitId: "lab-assignments",
          unitTitle: "Practical Lab Exercises",
          targetId: l.id,
          title: l.title,
          content: `${l.title} ${l.task || ''} ${l.hints || ''} ${l.solutionCode || ''}`,
          badge: l.unit || "LAB"
        });
      });
    }

    // 4. Index Eclipse IDE Setup Guide
    const eclipseTopics = [
      {
        targetId: "eclipse-trust-fix",
        title: "Fix Eclipse Trust Artifacts / Expired Signers Certificate Dialog",
        content: "How to fix Trust Artifacts dialog in Eclipse Installer: check Remember selected signers, click Select All, click Trust Selected button to continue installation. Eclipse Foundation Inc. DigiCert SHA2 Assured ID Code Signing CA expired certificate fix.",
        badge: "FIX"
      },
      {
        targetId: "pane-os-windows",
        title: "Install Eclipse IDE on Windows 11 / 10",
        content: "Download eclipse-inst-jre-win64.exe from eclipse.org/downloads. Run installer, select Eclipse IDE for Java Developers, keep default installation path, click Install and Launch with workspace folder.",
        badge: "WINDOWS"
      },
      {
        targetId: "pane-os-macos",
        title: "Install Eclipse IDE on macOS (Apple Silicon M1 M2 M3 & Intel)",
        content: "Download eclipse-inst-mac-aarch64.dmg for Apple Silicon M1 M2 M3 or x86_64 for Intel. Drag to Applications, resolve Gatekeeper Privacy & Security if needed, select Eclipse IDE for Java Developers.",
        badge: "MACOS"
      },
      {
        targetId: "pane-os-linux",
        title: "Install Eclipse IDE on Linux (Ubuntu / Debian / Fedora / Arch / Snap)",
        content: "Extract tar.gz or run sudo snap install --classic eclipse. Launch eclipse-inst, select Eclipse IDE for Java Developers, configure workspace.",
        badge: "LINUX"
      },
      {
        targetId: "eclipse-first-program",
        title: "Create First Java Project & Class in Eclipse IDE",
        content: "File New Java Project, enter project name, right click src New Class, select public static void main, write System.out.println, press Ctrl+F11 to run.",
        badge: "QUICKSTART"
      },
      {
        targetId: "eclipse-shortcuts-card",
        title: "Essential Eclipse IDE Keyboard Shortcuts Cheatsheet",
        content: "Ctrl+Space Content Assist autocomplete sysout, Ctrl+Shift+F Auto Format source, Ctrl+Shift+O Organize Imports, Ctrl+F11 Run Program, F3 Open Declaration, Alt+Shift+S Source Menu.",
        badge: "SHORTCUTS"
      }
    ];

    eclipseTopics.forEach(et => {
      index.push({
        type: "eclipse",
        category: "🛠️ Eclipse IDE Setup Guide",
        unitId: "eclipse-guide",
        unitTitle: "Eclipse IDE Guide",
        targetId: et.targetId,
        title: et.title,
        content: `${et.title} ${et.content}`,
        badge: et.badge
      });
    });

    this.searchIndex = index;
  },

  setupSearchEngine: function () {
    this.buildSearchIndex();

    const searchInput = document.getElementById("globalSearchInput");
    const resultsDropdown = document.getElementById("globalSearchResults");
    const clearBtn = document.getElementById("searchClearBtn");

    if (!searchInput || !resultsDropdown) return;

    let debounceTimer = null;
    let selectedIndex = -1;

    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = query.length > 0 ? "flex" : "none";

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        this.executeSearch(query, resultsDropdown);
      }, 50);
    });

    searchInput.addEventListener("focus", () => {
      const query = searchInput.value.trim().toLowerCase();
      if (query.length > 0) {
        this.executeSearch(query, resultsDropdown);
      }
    });

    // Keyboard navigation in search dropdown
    searchInput.addEventListener("keydown", (e) => {
      const items = resultsDropdown.querySelectorAll(".search-result-item");
      if (!items.length || resultsDropdown.style.display === "none") return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        this.updateSearchSelection(items, selectedIndex);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        this.updateSearchSelection(items, selectedIndex);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedIndex >= 0 && items[selectedIndex]) {
          items[selectedIndex].click();
        } else if (items.length > 0) {
          items[0].click();
        }
      } else if (e.key === "Escape") {
        this.closeSearchDropdown();
      }
    });

    // Close dropdown on outside click
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-box")) {
        this.closeSearchDropdown();
      }
    });
  },

  executeSearch: function (query, dropdown) {
    if (!query || query.length < 1) {
      this.closeSearchDropdown();
      return;
    }

    const cleanQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const queryTokens = cleanQuery.split(/\s+/).filter(Boolean);
    const queryRegex = new RegExp(`(${queryTokens.join('|')})`, 'gi');

    // Score and filter results
    const matches = [];
    this.searchIndex.forEach(item => {
      const titleLower = item.title.toLowerCase();
      const contentLower = item.content.toLowerCase();

      let score = 0;
      let matchedTokens = 0;

      queryTokens.forEach(token => {
        if (titleLower.includes(token)) {
          score += 15;
          matchedTokens++;
        } else if (contentLower.includes(token)) {
          score += 3;
          matchedTokens++;
        }
      });

      if (matchedTokens > 0) {
        matches.push({ ...item, score });
      }
    });

    matches.sort((a, b) => b.score - a.score);
    const topResults = matches.slice(0, 10);

    if (topResults.length === 0) {
      dropdown.innerHTML = `
        <div class="search-empty-state">
          <span>🔍 No matching concepts found for "<strong>${App.escapeHtml(query)}</strong>"</span>
          <p style="font-size:0.75rem; color:#94a3b8; margin-top:4px;">Try searching for "arrays", "jagged", "polymorphism", "stringbuilder", or "locks"</p>
        </div>
      `;
      dropdown.style.display = "block";
      return;
    }

    // Group results by category
    const grouped = {};
    topResults.forEach(r => {
      if (!grouped[r.category]) grouped[r.category] = [];
      grouped[r.category].push(r);
    });

    let html = '';
    for (const [category, items] of Object.entries(grouped)) {
      html += `<div class="search-group-header">${category}</div>`;
      items.forEach(item => {
        const rawText = item.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
        const firstToken = queryTokens[0];
        const matchIdx = rawText.toLowerCase().indexOf(firstToken);
        const start = Math.max(0, matchIdx - 35);
        const end = Math.min(rawText.length, matchIdx + 110);
        let snippet = (start > 0 ? '...' : '') + rawText.substring(start, end) + (end < rawText.length ? '...' : '');

        const highlightedTitle = item.title.replace(queryRegex, '<mark>$1</mark>');
        const highlightedSnippet = App.escapeHtml(snippet).replace(queryRegex, '<mark>$1</mark>');

        html += `
          <div class="search-result-item" onclick="App.navigateToSearchResult('${item.type}', '${item.unitId}', '${item.targetId}')">
            <div class="search-result-top">
              <div class="search-result-title">${highlightedTitle}</div>
              <span class="search-result-badge">${item.badge}</span>
            </div>
            <div class="search-result-snippet">${highlightedSnippet}</div>
          </div>
        `;
      });
    }

    dropdown.innerHTML = html;
    dropdown.style.display = "block";
  },

  updateSearchSelection: function (items, index) {
    items.forEach((it, idx) => {
      it.classList.toggle("selected", idx === index);
      if (idx === index) {
        it.scrollIntoView({ block: "nearest" });
      }
    });
  },

  closeSearchDropdown: function () {
    const dropdown = document.getElementById("globalSearchResults");
    if (dropdown) dropdown.style.display = "none";
  },

  clearSearch: function () {
    const input = document.getElementById("globalSearchInput");
    const clearBtn = document.getElementById("searchClearBtn");
    if (input) {
      input.value = "";
      input.focus();
    }
    if (clearBtn) clearBtn.style.display = "none";
    this.closeSearchDropdown();
  },

  navigateToSearchResult: function (type, tabId, targetId) {
    this.closeSearchDropdown();
    this.switchTab(tabId);

    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });

        if (el.classList.contains("qa-card")) {
          el.classList.add("open");
        }

        el.classList.remove("search-target-highlight");
        void el.offsetWidth;
        el.classList.add("search-target-highlight");

        setTimeout(() => {
          el.classList.remove("search-target-highlight");
        }, 3200);
      }
    }, 180);
  },

  checkMCQ: function (topicId, mcqIdx, selectedOptIdx, btnEl) {
    const mcqCard = document.getElementById(`mcq-${topicId}-${mcqIdx}`);
    if (!mcqCard) return;

    // Find the MCQ in data
    let foundMCQ = null;
    for (const mod of COURSE_DATA.modules) {
      const topic = mod.topics.find(t => t.id === topicId);
      if (topic && topic.mcqs && topic.mcqs[mcqIdx]) {
        foundMCQ = topic.mcqs[mcqIdx];
        break;
      }
    }
    if (!foundMCQ) return;

    const optButtons = mcqCard.querySelectorAll(".mcq-opt-btn");
    optButtons.forEach(btn => btn.disabled = true);

    const isCorrect = selectedOptIdx === foundMCQ.correct;

    if (isCorrect) {
      btnEl.classList.add("correct");
    } else {
      btnEl.classList.add("incorrect");
      // Highlight correct option as well
      if (optButtons[foundMCQ.correct]) {
        optButtons[foundMCQ.correct].classList.add("correct");
      }
    }

    const expBox = document.getElementById(`exp-${topicId}-${mcqIdx}`);
    if (expBox) {
      const statusText = expBox.querySelector(".exp-status-text");
      if (statusText) {
        statusText.innerHTML = isCorrect
          ? '<span style="color:#059669; font-weight:800;">✅ Correct!</span>'
          : '<span style="color:#dc2626; font-weight:800;">❌ Incorrect.</span> <span style="color:#475569;">(Correct answer highlighted in green)</span>';
      }
      expBox.classList.add("active");
    }
  },

  resetMCQ: function (topicId, mcqIdx, btnEl) {
    const mcqCard = document.getElementById(`mcq-${topicId}-${mcqIdx}`);
    if (!mcqCard) return;

    const optButtons = mcqCard.querySelectorAll(".mcq-opt-btn");
    optButtons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove("correct", "incorrect");
    });

    const expBox = document.getElementById(`exp-${topicId}-${mcqIdx}`);
    if (expBox) {
      expBox.classList.remove("active");
    }
  },

  escapeHtml: function (str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  },

  // 6. Universal Image Zoom & Magnifier Lightbox Controller
  lightboxState: {
    isOpen: false,
    scale: 1,
    minScale: 0.5,
    maxScale: 5.0,
    posX: 0,
    posY: 0,
    isDragging: false,
    startX: 0,
    startY: 0,
    lensActive: false,
    lensZoomRatio: 2.5,
    currentSrc: ""
  },

  setupImageLightbox: function () {
    // A. Global click handler for all concept diagram images and visualizer photos across the whole website
    document.addEventListener("click", (e) => {
      const imgTarget = e.target.closest(".concept-diagram-img, .concept-visual-container img");
      if (imgTarget && !this.lightboxState.isOpen) {
        const src = imgTarget.getAttribute("src");
        const alt = imgTarget.getAttribute("alt") || "Technical Diagram";
        this.openImageLightbox(src, alt);
      }
    });

    const viewport = document.getElementById("lightboxViewport");
    const canvas = document.getElementById("lightboxCanvas");
    const imgEl = document.getElementById("lightboxImg");
    const lensEl = document.getElementById("lightboxLens");

    if (!viewport || !canvas || !imgEl || !lensEl) return;

    // B. Mouse Wheel Smooth Zooming (Centered toward cursor)
    viewport.addEventListener("wheel", (e) => {
      if (!this.lightboxState.isOpen) return;
      e.preventDefault();

      const rect = viewport.getBoundingClientRect();
      const pointerX = e.clientX - rect.left - rect.width / 2;
      const pointerY = e.clientY - rect.top - rect.height / 2;

      const zoomFactor = e.deltaY < 0 ? 1.2 : 0.833;
      const newScale = Math.min(Math.max(this.lightboxState.scale * zoomFactor, this.lightboxState.minScale), this.lightboxState.maxScale);

      if (newScale !== this.lightboxState.scale) {
        const scaleChange = newScale / this.lightboxState.scale;
        this.lightboxState.posX = pointerX - (pointerX - this.lightboxState.posX) * scaleChange;
        this.lightboxState.posY = pointerY - (pointerY - this.lightboxState.posY) * scaleChange;
        this.lightboxState.scale = newScale;
        this.applyLightboxTransform();
      }
    }, { passive: false });

    // C. Mouse Drag Panning
    viewport.addEventListener("mousedown", (e) => {
      if (!this.lightboxState.isOpen) return;
      if (this.lightboxState.lensActive) return;

      this.lightboxState.isDragging = true;
      this.lightboxState.startX = e.clientX - this.lightboxState.posX;
      this.lightboxState.startY = e.clientY - this.lightboxState.posY;
      viewport.classList.add("is-dragging");
    });

    window.addEventListener("mousemove", (e) => {
      if (!this.lightboxState.isOpen) return;

      if (this.lightboxState.isDragging) {
        this.lightboxState.posX = e.clientX - this.lightboxState.startX;
        this.lightboxState.posY = e.clientY - this.lightboxState.startY;
        this.applyLightboxTransform();
      }

      if (this.lightboxState.lensActive) {
        this.updateMagnifierLens(e);
      }
    });

    window.addEventListener("mouseup", () => {
      if (this.lightboxState.isDragging) {
        this.lightboxState.isDragging = false;
        viewport.classList.remove("is-dragging");
      }
    });

    // D. Double-Click Quick Zoom (Toggle 1x <-> 2.5x)
    viewport.addEventListener("dblclick", () => {
      if (!this.lightboxState.isOpen) return;
      if (this.lightboxState.scale > 1.2) {
        this.lightboxResetZoom();
      } else {
        this.lightboxSetScale(2.5);
      }
    });

    // E. Touch Gestures for Mobile & Tablets (Pinch Zoom & Drag Pan)
    let initialTouchDist = null;
    let initialTouchScale = 1;
    let touchStartX = 0, touchStartY = 0;

    viewport.addEventListener("touchstart", (e) => {
      if (!this.lightboxState.isOpen) return;
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX - this.lightboxState.posX;
        touchStartY = e.touches[0].clientY - this.lightboxState.posY;
        this.lightboxState.isDragging = true;
      } else if (e.touches.length === 2) {
        initialTouchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        initialTouchScale = this.lightboxState.scale;
      }
    }, { passive: true });

    viewport.addEventListener("touchmove", (e) => {
      if (!this.lightboxState.isOpen) return;
      if (e.touches.length === 1 && this.lightboxState.isDragging) {
        this.lightboxState.posX = e.touches[0].clientX - touchStartX;
        this.lightboxState.posY = e.touches[0].clientY - touchStartY;
        this.applyLightboxTransform();
      } else if (e.touches.length === 2 && initialTouchDist) {
        const currentDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const touchFactor = currentDist / initialTouchDist;
        const newScale = Math.min(Math.max(initialTouchScale * touchFactor, this.lightboxState.minScale), this.lightboxState.maxScale);
        this.lightboxState.scale = newScale;
        this.applyLightboxTransform();
      }
    }, { passive: true });

    viewport.addEventListener("touchend", () => {
      this.lightboxState.isDragging = false;
      initialTouchDist = null;
    });

    // F. Keyboard Controls for Zoom, Pan, Lens & Exit
    document.addEventListener("keydown", (e) => {
      if (!this.lightboxState.isOpen) return;

      if (e.key === "Escape") {
        this.closeImageLightbox();
      } else if (e.key === "+" || e.key === "=") {
        this.lightboxZoomIn();
      } else if (e.key === "-" || e.key === "_") {
        this.lightboxZoomOut();
      } else if (e.key === "0" || e.key.toLowerCase() === "r") {
        this.lightboxResetZoom();
      } else if (e.key.toLowerCase() === "m") {
        this.lightboxToggleLens();
      } else if (e.key === "ArrowUp") {
        this.lightboxState.posY += 40;
        this.applyLightboxTransform();
      } else if (e.key === "ArrowDown") {
        this.lightboxState.posY -= 40;
        this.applyLightboxTransform();
      } else if (e.key === "ArrowLeft") {
        this.lightboxState.posX += 40;
        this.applyLightboxTransform();
      } else if (e.key === "ArrowRight") {
        this.lightboxState.posX -= 40;
        this.applyLightboxTransform();
      }
    });
  },

  openImageLightbox: function (src, title = "Diagram Inspector") {
    const modal = document.getElementById("imageLightboxModal");
    const imgEl = document.getElementById("lightboxImg");
    const titleEl = document.getElementById("lightboxTitle");
    const lensEl = document.getElementById("lightboxLens");

    if (!modal || !imgEl) return;

    this.lightboxState.isOpen = true;
    this.lightboxState.scale = 1;
    this.lightboxState.posX = 0;
    this.lightboxState.posY = 0;
    this.lightboxState.lensActive = false;
    this.lightboxState.currentSrc = src;

    imgEl.src = src;
    if (titleEl) titleEl.textContent = title;
    if (lensEl) {
      lensEl.style.display = "none";
      lensEl.style.backgroundImage = `url("${src}")`;
    }

    const lensBtn = document.getElementById("btnToggleLens");
    const lensLabel = document.getElementById("lensBtnLabel");
    if (lensBtn) lensBtn.classList.remove("active");
    if (lensLabel) lensLabel.textContent = "🔎 Loupe Lens: OFF";

    const viewport = document.getElementById("lightboxViewport");
    if (viewport) viewport.classList.remove("lens-active");

    this.applyLightboxTransform();

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  },

  closeImageLightbox: function () {
    const modal = document.getElementById("imageLightboxModal");
    if (!modal) return;

    this.lightboxState.isOpen = false;
    this.lightboxState.lensActive = false;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  },

  lightboxZoomIn: function () {
    this.lightboxSetScale(Math.min(this.lightboxState.scale * 1.25, this.lightboxState.maxScale));
  },

  lightboxZoomOut: function () {
    this.lightboxSetScale(Math.max(this.lightboxState.scale * 0.8, this.lightboxState.minScale));
  },

  lightboxResetZoom: function () {
    this.lightboxState.scale = 1;
    this.lightboxState.posX = 0;
    this.lightboxState.posY = 0;
    this.applyLightboxTransform();
  },

  lightboxSetScale: function (newScale) {
    this.lightboxState.scale = Math.min(Math.max(newScale, this.lightboxState.minScale), this.lightboxState.maxScale);
    this.applyLightboxTransform();
  },

  applyLightboxTransform: function () {
    const canvas = document.getElementById("lightboxCanvas");
    const zoomText = document.getElementById("lightboxZoomLevel");

    if (canvas) {
      canvas.style.transform = `translate(${this.lightboxState.posX}px, ${this.lightboxState.posY}px) scale(${this.lightboxState.scale})`;
    }
    if (zoomText) {
      zoomText.textContent = `${Math.round(this.lightboxState.scale * 100)}%`;
    }
  },

  lightboxToggleLens: function () {
    this.lightboxState.lensActive = !this.lightboxState.lensActive;
    const lensEl = document.getElementById("lightboxLens");
    const lensBtn = document.getElementById("btnToggleLens");
    const lensLabel = document.getElementById("lensBtnLabel");
    const viewport = document.getElementById("lightboxViewport");

    if (this.lightboxState.lensActive) {
      this.lightboxResetZoom();
      if (lensEl) lensEl.style.display = "block";
      if (lensBtn) lensBtn.classList.add("active");
      if (lensLabel) lensLabel.textContent = "🔎 Loupe Lens: ON";
      if (viewport) viewport.classList.add("lens-active");
    } else {
      if (lensEl) lensEl.style.display = "none";
      if (lensBtn) lensBtn.classList.remove("active");
      if (lensLabel) lensLabel.textContent = "🔎 Loupe Lens: OFF";
      if (viewport) viewport.classList.remove("lens-active");
    }
  },

  updateMagnifierLens: function (e) {
    const imgEl = document.getElementById("lightboxImg");
    const lensEl = document.getElementById("lightboxLens");
    if (!imgEl || !lensEl) return;

    const imgRect = imgEl.getBoundingClientRect();
    const canvas = document.getElementById("lightboxCanvas");
    const canvasRect = canvas ? canvas.getBoundingClientRect() : imgRect;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (
      mouseX < imgRect.left - 30 ||
      mouseX > imgRect.right + 30 ||
      mouseY < imgRect.top - 30 ||
      mouseY > imgRect.bottom + 30
    ) {
      lensEl.style.display = "none";
      return;
    } else {
      lensEl.style.display = "block";
    }

    const relX = mouseX - imgRect.left;
    const relY = mouseY - imgRect.top;

    lensEl.style.left = `${mouseX - canvasRect.left}px`;
    lensEl.style.top = `${mouseY - canvasRect.top}px`;

    const zoomRatio = this.lightboxState.lensZoomRatio || 2.5;
    const bgWidth = imgRect.width * zoomRatio;
    const bgHeight = imgRect.height * zoomRatio;

    lensEl.style.backgroundSize = `${bgWidth}px ${bgHeight}px`;
    const bgX = relX * zoomRatio - lensEl.offsetWidth / 2;
    const bgY = relY * zoomRatio - lensEl.offsetHeight / 2;
    lensEl.style.backgroundPosition = `-${bgX}px -${bgY}px`;
  }
};
