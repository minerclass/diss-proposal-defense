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
  const progressBar = document.getElementById("progressBar");
  const sectionLabel = document.getElementById("sectionLabel");
  const slideTitle = document.getElementById("slideTitle");
  const slideAnnouncement = document.getElementById("slideAnnouncement");
  const keyboardHelp = document.getElementById("keyboardHelp");
  const closeHelpButton = document.getElementById("closeHelpButton");

  let currentIndex = getIndexFromHash();
  let overviewOpen = false;
  let notesOpen = false;
  let touchStartX = null;
  let previousFocus = null;

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

  function showSlide(index, announce = true) {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));

    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === currentIndex;
      slide.classList.toggle("active", active);
      slide.setAttribute("aria-hidden", overviewOpen ? "false" : String(!active));
      if ("inert" in slide) {
        slide.inert = !overviewOpen && !active;
      }
    });

    const currentSlide = slides[currentIndex];
    const heading = getSlideHeading(currentSlide);
    const section = currentSlide.dataset.section || "Presentation";
    const progress = ((currentIndex + 1) / slides.length) * 100;

    slideNumber.textContent = String(currentIndex + 1);
    slideTotal.textContent = String(slides.length);
    sectionLabel.textContent = section;
    slideTitle.textContent = heading;
    progressBar.style.width = `${progress}%`;
    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
    window.history.replaceState(null, "", `#slide-${currentIndex + 1}`);

    if (notesOpen) {
      updateNotes();
    }

    if (announce) {
      slideAnnouncement.textContent = `Slide ${currentIndex + 1} of ${slides.length}. ${heading}`;
    }
  }

  function nextSlide() {
    if (currentIndex < slides.length - 1) {
      showSlide(currentIndex + 1);
    }
  }

  function previousSlide() {
    if (currentIndex > 0) {
      showSlide(currentIndex - 1);
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

  function openKeyboardHelp() {
    previousFocus = document.activeElement;
    keyboardHelp.hidden = false;
    closeHelpButton.focus();
  }

  function closeKeyboardHelp() {
    keyboardHelp.hidden = true;
    if (previousFocus instanceof HTMLElement) {
      previousFocus.focus();
    }
  }

  function isInteractiveTarget(target) {
    return target instanceof HTMLElement &&
      Boolean(target.closest("button, a, input, textarea, select, [contenteditable='true']"));
  }

  previousButton.addEventListener("click", previousSlide);
  nextButton.addEventListener("click", nextSlide);
  overviewButton.addEventListener("click", () => toggleOverview());
  notesButton.addEventListener("click", toggleNotes);
  closeNotesButton.addEventListener("click", () => closeNotes(true));
  fullscreenButton.addEventListener("click", toggleFullscreen);
  closeHelpButton.addEventListener("click", closeKeyboardHelp);
  document.addEventListener("fullscreenchange", updateFullscreenState);

  keyboardHelp.addEventListener("click", (event) => {
    if (event.target === keyboardHelp) {
      closeKeyboardHelp();
    }
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
      if (!keyboardHelp.hidden) {
        closeKeyboardHelp();
        return;
      }
      if (notesOpen) {
        closeNotes(true);
        return;
      }
      if (overviewOpen) {
        toggleOverview(false);
        return;
      }
    }

    if (!keyboardHelp.hidden || isInteractiveTarget(event.target)) {
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
      case "?":
        event.preventDefault();
        openKeyboardHelp();
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
  showSlide(currentIndex, false);
})();
