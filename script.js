// ======== IMAGE SLIDER + DARK/LIGHT MODE + PAGE BRIGHTNESS ========

// Slider Elements
const sliderTrack = document.querySelector('.slider-track');
const images = document.querySelectorAll('.slider-track img');
const totalImages = images.length;
const visibleImages = 3;
const imageWidth = images[0].clientWidth + 10;

let currentIndex = 0;

// ======== Navigation Buttons ========
function updateSlider() {
  sliderTrack.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

document.getElementById('nextOne').addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > totalImages - visibleImages) currentIndex = 0;
  updateSlider();
});

document.getElementById('prevOne').addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = totalImages - visibleImages;
  updateSlider();
});

document.getElementById('nextThree').addEventListener('click', () => {
  currentIndex += 3;
  if (currentIndex > totalImages - visibleImages) currentIndex = 0;
  updateSlider();
});

document.getElementById('prevThree').addEventListener('click', () => {
  currentIndex -= 3;
  if (currentIndex < 0) currentIndex = totalImages - visibleImages;
  updateSlider();
});

// ======== Dark / Light Mode ========
document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ======== Page Brightness (Text + Background Only) ========
const increaseBrightness = document.getElementById('increaseBrightness');
const decreaseBrightness = document.getElementById('decreaseBrightness');
const brightnessLevelText = document.getElementById('brightnessLevel');

let pageBrightness = 1;

// Instead of body filter, adjust background color + text color only
function applyPageBrightness() {
  // Adjust background lightness without touching images
  const brightnessPercent = Math.round(pageBrightness * 100);
  brightnessLevelText.textContent = `${brightnessPercent}%`;

  // We simply set the body's background using rgba overlay
  document.body.style.backgroundColor =
    document.body.classList.contains('dark')
      ? `rgba(18,18,18,${pageBrightness})`
      : `rgba(255,255,255,${pageBrightness})`;
}

increaseBrightness.addEventListener('click', () => {
  if (pageBrightness < 1.5) {
    pageBrightness += 0.1;
    applyPageBrightness();
  }
});

decreaseBrightness.addEventListener('click', () => {
  if (pageBrightness > 0.4) {
    pageBrightness -= 0.1;
    applyPageBrightness();
  }
});

applyPageBrightness();
