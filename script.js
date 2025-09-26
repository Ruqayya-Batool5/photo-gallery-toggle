// ======== IMAGE SLIDER + DARK/LIGHT MODE + PAGE BRIGHTNESS ========

// Get all required elements
const sliderTrack = document.querySelector('.slider-track');
const toggleModeBtn = document.getElementById('toggleMode');
const increaseBrightness = document.getElementById('increaseBrightness');
const decreaseBrightness = document.getElementById('decreaseBrightness');
const brightnessLevelText = document.getElementById('brightnessLevel');

// Slider variables
let currentIndex = 0;
const visibleImages = 3;
const images = document.querySelectorAll('.slider-track img');
const totalImages = images.length;
const imageWidth = images[0].clientWidth + 10; // includes margin

// Page brightness (for the whole page)
let pageBrightness = 1; // 1 = 100%

// ======== Slider Movement ========
function updateSlider() {
  sliderTrack.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Move by 1 image
document.getElementById('nextOne').addEventListener('click', () => {
  if (currentIndex < totalImages - visibleImages) {
    currentIndex++;
    updateSlider();
  }
});
document.getElementById('prevOne').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Move by 3 images
document.getElementById('nextThree').addEventListener('click', () => {
  if (currentIndex < totalImages - visibleImages) {
    currentIndex = Math.min(currentIndex + 3, totalImages - visibleImages);
    updateSlider();
  }
});
document.getElementById('prevThree').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex = Math.max(currentIndex - 3, 0);
    updateSlider();
  }
});

// ======== Dark / Light Mode Toggle ========
toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ======== Page Brightness Control (Entire Page) ========
function applyPageBrightness() {
  // Apply brightness filter to the entire page
  document.body.style.filter = `brightness(${pageBrightness})`;
  // Update the display text
  brightnessLevelText.textContent = `${Math.round(pageBrightness * 100)}%`;
}

increaseBrightness.addEventListener('click', () => {
  if (pageBrightness < 1.5) { // Maximum 150%
    pageBrightness += 0.1;
    applyPageBrightness();
  }
});

decreaseBrightness.addEventListener('click', () => {
  if (pageBrightness > 0.4) { // Minimum 40%
    pageBrightness -= 0.1;
    applyPageBrightness();
  }
});

// Initialize brightness on page load
applyPageBrightness();
