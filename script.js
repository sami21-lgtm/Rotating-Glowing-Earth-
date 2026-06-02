document.addEventListener('DOMContentLoaded', () => {
  const mapTexture = document.querySelector('.map-texture');
  const earthWrapper = document.querySelector('.earth-wrapper');

  // Interactive Hover: Slows down on hover for a premium feels
  earthWrapper.addEventListener('mouseenter', () => {
    mapTexture.style.animationDuration = '35s';
  });

  earthWrapper.addEventListener('mouseleave', () => {
    mapTexture.style.animationDuration = '20s';
  });
});
