// JavaScript use kora hoyeche interactive mouse effect or speed dynamically alter korar jonno (Optional)
document.addEventListener('DOMContentLoaded', () => {
  const mapTexture = document.querySelector('.map-texture');
  const earthWrapper = document.querySelector('.earth-wrapper');

  // Dynamic Hover effect: Earth er upor mouse over korle ghurar speed ektu slow/interactive hobe
  earthWrapper.addEventListener('mouseenter', () => {
    mapTexture.style.animationDuration = '35s'; // Soft rotation speed
  });

  earthWrapper.addEventListener('mouseleave', () => {
    mapTexture.style.animationDuration = '20s'; // Standard normal rotation speed
  });
});
