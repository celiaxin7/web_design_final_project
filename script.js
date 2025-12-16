// ============================
// SHARE PAGE INTERACTIVITY
// ============================

const promptBtn = document.getElementById("promptBtn");
const promptDisplay = document.getElementById("promptDisplay");
const thankYouMsg = document.getElementById("thankYouMsg");
const shareForm = document.querySelector(".share-form");

if (promptBtn && promptDisplay) {
  const prompts = [
    "Describe your ideal morning routine with a Daily Harvest blend.",
    "When do you usually grab Daily Harvest—before class, after the gym, or late at night?",
    "Tell us about a time Daily Harvest replaced a less healthy option.",
    "How does Daily Harvest help you feel more energized or balanced?",
    "What problem does Daily Harvest solve for you on your busiest days?"
  ];

  function showRandomPrompt() {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    promptDisplay.textContent = randomPrompt;
  }

  promptBtn.addEventListener("click", showRandomPrompt);
}

// Better accessibility: listen to the FORM submit (not button click)
if (shareForm && thankYouMsg) {
  function handleSubmit(event) {
    event.preventDefault();
    thankYouMsg.hidden = false;
    thankYouMsg.style.fontWeight = "600";
  }

  shareForm.addEventListener("submit", handleSubmit);
}

// ============================
// TIMELINE INTERACTIVITY
// ============================

const timelineItems = document.querySelectorAll(".timeline-item");

if (timelineItems.length > 0) {
  timelineItems.forEach((item) => {
    item.addEventListener("click", () => {
      timelineItems.forEach((other) => other.classList.remove("active"));
      item.classList.add("active");
    });

    // Keyboard support (nice for accessibility)
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        item.click();
      }
    });
  });
}
