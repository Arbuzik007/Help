// Unrelated to actual timer, it's just a colour thing
let root = document.documentElement;
const fontColourInput = document.getElementById('fontColour');
const bgColorInput = document.getElementById('bgColour');

fontColourInput.addEventListener('input', updateFontColour, false);
bgColorInput.addEventListener('input', updateBgColour, false);

function updateFontColour(event) {
  root.style.setProperty('--fontColour', event.target.value);
}

function updateBgColour(event) {
  root.style.setProperty('--bgColour', event.target.value);
}