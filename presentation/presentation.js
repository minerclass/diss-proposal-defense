(() => {
  "use strict";

  const shell = document.querySelector(".presentation-shell");
  const deck = document.getElementById("deck");
  const slides = Array.from(deck.querySelectorAll(".slide"));
  const previousButton = document.getElementById("previousButton");
  const nextButton = document.getElementById("nextButton");
  const overviewButton = document.getElementById("overviewButton");
  const notesButton = document.getElementById("notesButton");
  const fullscreenButton = document.getElementById("fullscreenButton");
  const closeNotesButton = document.getElementById("closeNotesButton");
  const notesDrawer = document.getElementById("notesDrawer");
  const notesTitle = document.getElementById("notesTitle");
  const notesContent = document.getElementById("notesContent");
  const slideNumber = document.getElementById("slideNumber");
  const slideTotal = document.getElementById("slideTotal");
  const sectionRail = document.getElementById("sectionRail");
  const sectionLabel = document.getElementById("sectionLabel");
  const slideTitle = document.getElementById("slideTitle");
  const slideAnnouncement = document.getElementById("slideAnnouncement");
  const keyboardHelp = document.getElementById("keyboardHelp");
  const closeHelpButton = document.getElementById("closeHelpButton");
  const materialsButton = document.getElementById("materialsButton");
  const materialsDialog = document.getElementById("materialsDialog");
  const closeMaterialsButton = document.getElementById("closeMaterialsButton");
  const timerButton = document.getElementById("timerButton");
  const timerReadout = document.getElementById("timerReadout");
  const rqButtons = Array.from(document.querySelectorAll(".rq-button"));
  const rqEvidence = document.getElementById("rqEvidence");
  const rqPanels = rqEvidence ? Array.from(rqEvidence.querySelectorAll(".rq-panel")) : [];
  const rqRest = rqEvidence ? rqEvidence.querySelector(".rq-rest") : null;
  const nodeButtons = Array.from(document.querySelectorAll(".node[data-node]"));
  const frameworkAside = document.getElementById("frameworkAside");
  const nodeDetails = frameworkAside ? Array.from(frameworkAside.querySelectorAll(".node-detail")) : [];
  const fieldNote = frameworkAside ? frameworkAside.querySelector(".field-note") : null;
  const frameworkField = document.querySelector(".framework-field");

  const stageButtons = Array.from(document.querySelectorAll(".stage-button"));

  // Keys 1-3 address whichever slide is showing.
  const nodeOrder = ["head", "room", "world"];

  let currentIndex = getIndexFromHash();
  let overviewOpen = false;
  let notesOpen = false;
  let touchStartX = null;
  let previousFocus = null;
  let openDialog = null;
  let activeRq = null;
  let activeNode = null;
  let activeStage = null;

  // Contiguous runs of slides that share a data-section become one rail
  // segment, so the rail is derived from the deck rather than duplicated.
  const sections = [];
  slides.forEach((slide, index) => {
    const name = slide.dataset.section || "Presentation";
    const last = sections[sections.length - 1];
    if (last && last.name === name) {
      last.end = index;
    } else {
      sections.push({ name, start: index, end: index });
    }
  });

  function getIndexFromHash() {
    const match = window.location.hash.match(/^#slide-(\d+)$/);
    if (!match) {
      return 0;
    }

    const index = Number.parseInt(match[1], 10) - 1;
    return Number.isInteger(index) && index >= 0 && index < slides.length ? index : 0;
  }

  function getSlideHeading(slide) {
    return slide.querySelector("h1, h2")?.textContent.trim() || `Slide ${currentIndex + 1}`;
  }

  function showSlide(index, announce = true, enterCompleted = false) {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));

    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === currentIndex;
      slide.classList.toggle("active", active);
      slide.setAttribute("aria-hidden", overviewOpen ? "false" : String(!active));
      if ("inert" in slide) {
        slide.inert = !overviewOpen && !active;
      }
      // Slides we are not on always sit in their finished state, so overview
      // and any direct jump show the complete argument.
      if (!active) {
        revealAll(slide);
      }
    });

    const currentSlide = slides[currentIndex];

    if (stepCount(currentSlide)) {
      setStep(currentSlide, enterCompleted ? stepCount(currentSlide) : 0);
    }

    const heading = getSlideHeading(currentSlide);
    const section = currentSlide.dataset.section || "Presentation";

    slideNumber.textContent = String(currentIndex + 1);
    slideTotal.textContent = String(slides.length);
    sectionLabel.textContent = section;
    slideTitle.textContent = heading;
    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
    window.history.replaceState(null, "", `#slide-${currentIndex + 1}`);

    // The shell tints itself by section so the argument's movement is felt
    // as well as read. Purely atmospheric; nothing depends on it.
    shell.dataset.section = section.toLowerCase();
    updateRail();
    playEnter(currentSlide);

    // Leaving a slide clears its selection so returning to it starts from the
    // whole picture rather than mid-answer.
    if (activeRq && !currentSlide.contains(rqEvidence)) {
      setRq(null);
    }

    if (activeNode && !currentSlide.contains(frameworkAside)) {
      setNode(null);
    }

    if (activeStage && activeStage.slide !== currentSlide) {
      setStage(activeStage.slide, null);
    }

    if (notesOpen) {
      updateNotes();
    }

    if (announce) {
      slideAnnouncement.textContent = `Slide ${currentIndex + 1} of ${slides.length}. ${heading}`;
    }
  }

  function stepCount(slide) {
    return Number.parseInt(slide.dataset.steps || "0", 10) || 0;
  }

  // Reveals are a pacing device. Content stays in the DOM and in the
  // accessibility tree; only opacity changes, so nothing reflows.
  function applySteps(slide, step) {
    slide.querySelectorAll("[data-step]").forEach((el) => {
      const at = Number.parseInt(el.dataset.step || "1", 10);
      el.classList.toggle("revealed", at <= step);
    });
  }

  function setStep(slide, step) {
    const max = stepCount(slide);
    const next = Math.max(0, Math.min(step, max));
    slide.dataset.currentStep = String(next);
    applySteps(slide, next);
    return next;
  }

  function revealAll(slide) {
    setStep(slide, stepCount(slide));
  }

  function announce(message) {
    slideAnnouncement.textContent = message;
  }

  // ---- Section rail -------------------------------------------------------
  // Replaces the flat progress bar. It shows where the argument is, names the
  // section, and lets a question during Q&A jump straight to the right part.
  function buildRail() {
    if (!sectionRail) {
      return;
    }

    sections.forEach((section) => {
      const count = section.end - section.start + 1;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "rail-segment";
      button.style.flexGrow = String(count);
      button.setAttribute("aria-label", count === 1
        ? `${section.name}, slide ${section.start + 1}`
        : `${section.name}, slides ${section.start + 1} to ${section.end + 1}`);

      const fill = document.createElement("span");
      fill.className = "rail-fill";
      fill.setAttribute("aria-hidden", "true");

      const name = document.createElement("span");
      name.className = "rail-name";
      name.textContent = section.name;

      button.append(fill, name);
      button.addEventListener("click", () => {
        if (overviewOpen) {
          toggleOverview(false);
        }
        showSlide(section.start);
      });

      section.button = button;
      section.fill = fill;
      sectionRail.append(button);
    });
  }

  function updateRail() {
    sections.forEach((section) => {
      if (!section.fill) {
        return;
      }

      const count = section.end - section.start + 1;
      let ratio = 0;
      if (currentIndex > section.end) {
        ratio = 1;
      } else if (currentIndex >= section.start) {
        ratio = (currentIndex - section.start + 1) / count;
      }

      const active = currentIndex >= section.start && currentIndex <= section.end;
      section.fill.style.transform = `scaleX(${ratio})`;
      section.button.classList.toggle("active", active);
      if (active) {
        section.button.setAttribute("aria-current", "true");
      } else {
        section.button.removeAttribute("aria-current");
      }
    });
  }

  // Restarting the animation requires dropping the class, forcing layout, and
  // re-adding it. Reduced-motion users get the same result with no movement,
  // because the keyframes collapse in the stylesheet.
  function playEnter(slide) {
    slide.classList.remove("is-entering");
    void slide.offsetWidth;
    slide.classList.add("is-entering");
  }

  // ---- Research-question evidence ----------------------------------------
  // The three questions stay on the slide at all times. Selecting one swaps a
  // fixed-height panel underneath, so nothing reflows and no question is
  // hidden from assistive technology.
  function setRq(id) {
    activeRq = id;

    rqButtons.forEach((button) => {
      const on = button.dataset.rq === id;
      button.classList.toggle("selected", on);
      button.setAttribute("aria-expanded", String(on));
    });

    rqPanels.forEach((panel) => {
      panel.hidden = panel.dataset.rqPanel !== id;
    });

    if (rqRest) {
      rqRest.hidden = Boolean(id);
    }
  }

  function toggleRq(id) {
    const next = activeRq === id ? null : id;
    setRq(next);
    announce(next
      ? `Research question ${next}. Showing who it draws on, what evidence answers it, and how that evidence is read.`
      : "Research question evidence closed.");
  }

  // ---- Framework nodes ----------------------------------------------------
  // Selecting a learner-facing form names the pressure it answers and lights
  // the infrastructural field it depends on. All three nodes stay in place and
  // in the accessibility tree; only the shared aside cell swaps.
  function setNode(id) {
    activeNode = id;

    nodeButtons.forEach((button) => {
      const on = button.dataset.node === id;
      button.classList.toggle("selected", on);
      button.setAttribute("aria-expanded", String(on));
    });

    nodeDetails.forEach((detail) => {
      detail.hidden = detail.dataset.nodeDetail !== id;
    });

    if (fieldNote) {
      fieldNote.hidden = Boolean(id);
    }

    if (frameworkField) {
      frameworkField.classList.toggle("node-active", Boolean(id));
    }
  }

  function toggleNode(id) {
    const next = activeNode === id ? null : id;
    setNode(next);

    if (!next) {
      announce("Framework detail closed.");
      return;
    }

    const detail = nodeDetails.find((d) => d.dataset.nodeDetail === next);
    const title = nodeButtons.find((b) => b.dataset.node === next)?.querySelector(".node-title")?.textContent || "";
    const pressure = detail?.querySelector(".detail-pressure")?.textContent || "";
    announce(`${title}. Answers ${pressure}. Sustained or constrained by infrastructural friction.`);
  }

  // ---- Timeline stages ----------------------------------------------------
  // Two slides use the timeline component, so this is scoped to a slide rather
  // than to the document. Only one timeline slide is ever visible at a time.
  function setStage(slide, id) {
    const aside = slide?.querySelector(".timeline-aside");
    if (!aside) {
      return;
    }

    slide.querySelectorAll(".stage-button").forEach((button) => {
      const on = Boolean(id) && button.dataset.stage === id;
      button.classList.toggle("selected", on);
      button.setAttribute("aria-expanded", String(on));
    });

    aside.querySelectorAll(".stage-detail").forEach((detail) => {
      detail.hidden = detail.dataset.stageDetail !== id;
    });

    const rest = aside.querySelector(".timeline-rest");
    if (rest) {
      rest.hidden = Boolean(id);
    }

    activeStage = id ? { slide, id } : null;
  }

  function toggleStage(slide, id) {
    const same = activeStage && activeStage.slide === slide && activeStage.id === id;
    setStage(slide, same ? null : id);

    if (same) {
      announce("Stage detail closed.");
      return;
    }

    const detail = slide.querySelector(`.stage-detail[data-stage-detail="${id}"]`);
    const label = detail?.querySelector(".stage-kicker")?.textContent || `Stage ${id}`;
    const body = detail?.querySelector(".stage-body")?.textContent || "";
    announce(`${label}. ${body}`);
  }

  // ---- Presentation timer -------------------------------------------------
  let timerRunning = false;
  let timerBase = 0;
  let timerStartedAt = 0;
  let timerTick = null;

  function timerElapsed() {
    return timerBase + (timerRunning ? Date.now() - timerStartedAt : 0);
  }

  function renderTimer() {
    if (!timerReadout) {
      return;
    }

    const total = Math.floor(timerElapsed() / 1000);
    const minutes = String(Math.floor(total / 60)).padStart(2, "0");
    const seconds = String(total % 60).padStart(2, "0");
    timerReadout.textContent = `${minutes}:${seconds}`;
  }

  function toggleTimer() {
    if (!timerButton) {
      return;
    }

    if (timerRunning) {
      timerBase = timerElapsed();
      timerRunning = false;
      window.clearInterval(timerTick);
      timerTick = null;
    } else {
      timerStartedAt = Date.now();
      timerRunning = true;
      timerTick = window.setInterval(renderTimer, 250);
    }

    timerButton.classList.toggle("running", timerRunning);
    timerButton.setAttribute("aria-label", timerRunning
      ? "Pause the presentation timer"
      : "Start the presentation timer");
    renderTimer();
    announce(timerRunning ? "Timer started." : `Timer paused at ${timerReadout.textContent}.`);
  }

  function resetTimer() {
    window.clearInterval(timerTick);
    timerTick = null;
    timerRunning = false;
    timerBase = 0;
    if (timerButton) {
      timerButton.classList.remove("running");
      timerButton.setAttribute("aria-label", "Start the presentation timer");
    }
    renderTimer();
    announce("Timer reset.");
  }

  // ---- Dialogs ------------------------------------------------------------
  function showDialog(dialog) {
    if (!dialog) {
      return;
    }

    if (openDialog && openDialog !== dialog) {
      openDialog.hidden = true;
    } else if (!openDialog) {
      previousFocus = document.activeElement;
    }

    openDialog = dialog;
    dialog.hidden = false;
    dialog.querySelector("button, a")?.focus();
  }

  function hideDialog() {
    if (!openDialog) {
      return;
    }

    openDialog.hidden = true;
    openDialog = null;
    if (previousFocus instanceof HTMLElement) {
      previousFocus.focus();
    }
  }

  function nextSlide() {
    const slide = slides[currentIndex];
    const max = stepCount(slide);
    const step = Number.parseInt(slide.dataset.currentStep || "0", 10);

    if (max && step < max) {
      const now = setStep(slide, step + 1);
      slideAnnouncement.textContent = `Step ${now} of ${max}.`;
      return;
    }

    if (currentIndex < slides.length - 1) {
      showSlide(currentIndex + 1);
    }
  }

  function previousSlide() {
    const slide = slides[currentIndex];
    const step = Number.parseInt(slide.dataset.currentStep || "0", 10);

    if (stepCount(slide) && step > 0) {
      const now = setStep(slide, step - 1);
      slideAnnouncement.textContent = `Step ${now} of ${stepCount(slide)}.`;
      return;
    }

    if (currentIndex > 0) {
      // Arriving backwards should land on a completed slide, not an empty one.
      showSlide(currentIndex - 1, true, true);
    }
  }

  function toggleOverview(force) {
    overviewOpen = typeof force === "boolean" ? force : !overviewOpen;
    deck.classList.toggle("overview", overviewOpen);
    shell.classList.toggle("overview-mode", overviewOpen);
    overviewButton.setAttribute("aria-pressed", String(overviewOpen));

    slides.forEach((slide, slideIndex) => {
      slide.setAttribute("aria-hidden", overviewOpen ? "false" : String(slideIndex !== currentIndex));
      if ("inert" in slide) {
        slide.inert = !overviewOpen && slideIndex !== currentIndex;
      }
      if (overviewOpen) {
        slide.tabIndex = 0;
      } else {
        slide.removeAttribute("tabindex");
      }
    });

    if (overviewOpen) {
      closeNotes();
      slides[currentIndex].scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      showSlide(currentIndex, false);
      document.getElementById("current-slide").focus({ preventScroll: true });
    }
  }

  function updateNotes() {
    const currentSlide = slides[currentIndex];
    const notes = currentSlide.querySelector(".speaker-notes");
    notesTitle.textContent = `Slide ${currentIndex + 1}: ${getSlideHeading(currentSlide)}`;
    notesContent.innerHTML = notes ? notes.innerHTML : "<p>No presenter notes for this slide.</p>";
  }

  function openNotes() {
    if (overviewOpen) {
      toggleOverview(false);
    }

    notesOpen = true;
    updateNotes();
    notesDrawer.classList.add("open");
    notesDrawer.setAttribute("aria-hidden", "false");
    notesDrawer.removeAttribute("inert");
    notesButton.setAttribute("aria-pressed", "true");
    closeNotesButton.focus();
  }

  function closeNotes(returnFocus = false) {
    notesOpen = false;
    notesDrawer.classList.remove("open");
    notesDrawer.setAttribute("aria-hidden", "true");
    notesDrawer.setAttribute("inert", "");
    notesButton.setAttribute("aria-pressed", "false");
    if (returnFocus) {
      notesButton.focus();
    }
  }

  function toggleNotes() {
    if (notesOpen) {
      closeNotes(true);
    } else {
      openNotes();
    }
  }

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      document.body.classList.toggle("fullscreen");
    }
  }

  function updateFullscreenState() {
    const fullscreen = Boolean(document.fullscreenElement);
    document.body.classList.toggle("fullscreen", fullscreen);
    fullscreenButton.setAttribute("aria-label", fullscreen ? "Exit fullscreen" : "Enter fullscreen");
    fullscreenButton.title = fullscreen ? "Exit fullscreen (F)" : "Enter fullscreen (F)";
  }

  // Typing keys must reach a real field. Buttons and links are different:
  // arrow keys do nothing to them natively, so letting arrows through keeps
  // navigation alive after the presenter clicks a rail segment or a question.
  function isTextEntryTarget(target) {
    return target instanceof HTMLElement &&
      Boolean(target.closest("input, textarea, select, [contenteditable='true']"));
  }

  function isActivatableTarget(target) {
    return target instanceof HTMLElement && Boolean(target.closest("button, a"));
  }

  previousButton.addEventListener("click", previousSlide);
  nextButton.addEventListener("click", nextSlide);
  overviewButton.addEventListener("click", () => toggleOverview());
  notesButton.addEventListener("click", toggleNotes);
  closeNotesButton.addEventListener("click", () => closeNotes(true));
  fullscreenButton.addEventListener("click", toggleFullscreen);
  closeHelpButton.addEventListener("click", hideDialog);
  document.addEventListener("fullscreenchange", updateFullscreenState);

  materialsButton?.addEventListener("click", () => showDialog(materialsDialog));
  closeMaterialsButton?.addEventListener("click", hideDialog);

  timerButton?.addEventListener("click", toggleTimer);

  rqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const slide = button.closest(".slide");
      if (overviewOpen && slide) {
        currentIndex = slides.indexOf(slide);
        toggleOverview(false);
        return;
      }

      // A question the presenter jumps to should also be revealed.
      if (slide && stepCount(slide)) {
        const step = Number.parseInt(button.dataset.rq || "0", 10);
        const current = Number.parseInt(slide.dataset.currentStep || "0", 10);
        if (step > current) {
          setStep(slide, step);
        }
      }

      toggleRq(button.dataset.rq);
    });
  });

  nodeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const slide = button.closest(".slide");
      if (overviewOpen && slide) {
        currentIndex = slides.indexOf(slide);
        toggleOverview(false);
        return;
      }

      toggleNode(button.dataset.node);
    });
  });

  stageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const slide = button.closest(".slide");
      if (overviewOpen && slide) {
        currentIndex = slides.indexOf(slide);
        toggleOverview(false);
        return;
      }

      toggleStage(slide, button.dataset.stage);
    });
  });

  [keyboardHelp, materialsDialog].forEach((dialog) => {
    dialog?.addEventListener("click", (event) => {
      if (event.target === dialog) {
        hideDialog();
      }
    });
  });

  slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      if (overviewOpen) {
        currentIndex = index;
        toggleOverview(false);
      }
    });
    slide.addEventListener("keydown", (event) => {
      if (overviewOpen && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        currentIndex = index;
        toggleOverview(false);
      }
    });
  });

  deck.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.screenX ?? null;
  }, { passive: true });

  deck.addEventListener("touchend", (event) => {
    if (touchStartX === null || overviewOpen) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.screenX ?? touchStartX;
    const distance = touchEndX - touchStartX;
    touchStartX = null;

    if (Math.abs(distance) < 45) {
      return;
    }

    if (distance < 0) {
      nextSlide();
    } else {
      previousSlide();
    }
  }, { passive: true });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (openDialog) {
        hideDialog();
        return;
      }
      if (notesOpen) {
        closeNotes(true);
        return;
      }
      if (activeRq) {
        toggleRq(activeRq);
        return;
      }
      if (activeNode) {
        toggleNode(activeNode);
        return;
      }
      if (activeStage) {
        toggleStage(activeStage.slide, activeStage.id);
        return;
      }
      if (overviewOpen) {
        toggleOverview(false);
        return;
      }
    }

    if (openDialog || isTextEntryTarget(event.target)) {
      return;
    }

    // Space and Enter belong to whatever button or link has focus.
    if ((event.key === " " || event.key === "Enter") && isActivatableTarget(event.target)) {
      return;
    }

    switch (event.key) {
      case "ArrowRight":
      case "PageDown":
        event.preventDefault();
        nextSlide();
        break;
      case "ArrowLeft":
      case "PageUp":
        event.preventDefault();
        previousSlide();
        break;
      case " ":
        event.preventDefault();
        if (!overviewOpen) {
          nextSlide();
        }
        break;
      case "Home":
        event.preventDefault();
        showSlide(0);
        break;
      case "End":
        event.preventDefault();
        showSlide(slides.length - 1);
        break;
      case "o":
      case "O":
        event.preventDefault();
        toggleOverview();
        break;
      case "n":
      case "N":
        event.preventDefault();
        toggleNotes();
        break;
      case "f":
      case "F":
        event.preventDefault();
        toggleFullscreen();
        break;
      case "m":
      case "M":
        event.preventDefault();
        showDialog(materialsDialog);
        break;
      case "t":
      case "T":
        event.preventDefault();
        if (event.shiftKey) {
          resetTimer();
        } else {
          toggleTimer();
        }
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5": {
        const slide = slides[currentIndex];
        const index = Number.parseInt(event.key, 10);

        if (rqButtons.length && slide.contains(rqEvidence)) {
          if (index > 3) {
            break;
          }
          event.preventDefault();
          if (stepCount(slide) && index > Number.parseInt(slide.dataset.currentStep || "0", 10)) {
            setStep(slide, index);
          }
          toggleRq(event.key);
        } else if (nodeButtons.length && slide.contains(frameworkAside)) {
          if (index > 3) {
            break;
          }
          event.preventDefault();
          toggleNode(nodeOrder[index - 1]);
        } else if (slide.querySelector(".stage-button")) {
          event.preventDefault();
          toggleStage(slide, event.key);
        }
        break;
      }
      case "?":
        event.preventDefault();
        showDialog(keyboardHelp);
        break;
      default:
        break;
    }
  });

  window.addEventListener("hashchange", () => {
    const hashIndex = getIndexFromHash();
    if (hashIndex !== currentIndex) {
      showSlide(hashIndex);
    }
  });

  slideTotal.textContent = String(slides.length);
  buildRail();
  renderTimer();
  setRq(null);
  setNode(null);
  slides.forEach((slide) => setStage(slide, null));
  showSlide(currentIndex, false);
})();
