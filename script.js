const earth = document.querySelector('.earth');
let isPaused = false;

// স্ক্রিনে ক্লিক করলে পৃথিবী থমকে যাবে বা আবার ঘুরবে
earth.addEventListener('click', () => {
    if (!isPaused) {
        earth.style.animationPlayState = 'paused';
        isPaused = true;
    } else {
        earth.style.animationPlayState = 'running';
        isPaused = false;
    }
});

// মাউস ওভার করলে ঘূর্ণন কিছুটা দ্রুত হবে (ইন্টারেক্টিভ ইফেক্ট)
earth.addEventListener('mouseenter', () => {
    if(!isPaused) {
        earth.style.animationDuration = '10s'; // স্পিড বাড়িয়ে ১০ সেকেন্ড করা হলো
    }
});

earth.addEventListener('mouseleave', () => {
    if(!isPaused) {
        earth.style.animationDuration = '20s'; // মাউস সরালে আগের স্বাভাবিক স্পিডে ফিরবে
    }
});
