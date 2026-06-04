const earth = document.getElementById('rotating-earth');
let angle = 0;

function animate() {
    angle += 0.2; // ঘূর্ণন গতি কমাতে চাইলে এই মান আরও কমান
    earth.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(animate);
}

animate();
