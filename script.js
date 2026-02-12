// script.js
// Handles interaction for the Valentine page. When the user hovers
// over or attempts to click the "No" button, it jumps to a random
// position on the screen and the "Yes" button slowly grows. Clicking
// "Yes" displays a celebratory message and showers the page with
// floating hearts.

document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesButton");
  const noBtn = document.getElementById("noButton");
  const hugImg = document.getElementById("hugImg");
  const kissImg = document.getElementById("kissImg");
  const textContainer = document.getElementById("textContainer");

  // Count how many times the No button has been clicked
  let noCount = 0;
  // Phrases to display on the No button as the user keeps refusing
  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "100% sure?",
    "Are you absolutely sure?",
    "Are you absolutely absolutely sure?",
    "I'm gonna cry...",
    "You're breaking my heart...",
    "Don't go breaking my heart...",
    "I guess no snake plants for you...",
  ];

  /**
   * Handle clicks on the No button. Each click increments the counter,
   * increases the Yes button's font size, and cycles through a series
   * of playful confirmations on the No button.
   */
  noBtn.addEventListener("click", () => {
    noCount += 1;
    // Increase Yes button font size by 20px per refusal, starting at 16px
    const newFontSize = 16 + noCount * 20;
    yesBtn.style.fontSize = `${newFontSize}px`;
    // Update No button text with the next phrase
    if (noCount < phrases.length) {
      noBtn.textContent = phrases[noCount];
    } else {
      noBtn.textContent = phrases[phrases.length - 1];
    }
  });

  /**
   * Handle clicks on the Yes button. When accepted, swap the hugging
   * image for the kissing image, update the text, and hide the buttons.
   */
  yesBtn.addEventListener("click", () => {
    // Hide the hugging bear, show the kissing bear
    hugImg.style.display = "none";
    kissImg.style.display = "block";
    // Update the heading text
    textContainer.textContent = "Yay!!!";
    // Hide buttons after acceptance
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  });
});
