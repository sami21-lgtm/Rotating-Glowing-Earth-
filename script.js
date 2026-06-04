const earth = document.getElementById('earth');
let currentAngle = 0;

// ঘোরার গতি (গতি বাড়াতে চাইলে ০.২ থেকে বাড়িয়ে ০.৫ বা ১ করতে পারেন)
const speed = 0.2; 

function spin() {
    currentAngle += speed;
    
    // ছবিটিকে ক্লকওয়াইজ (ডানে) ঘোরানো হচ্ছে
    earth.style.transform = `rotate(${currentAngle}deg)`;
    
    // স্মুথ ফ্রেম অ্যানিমেশন
    requestAnimationFrame(spin);
}

// অ্যানিমেশন শুরু করা হলো
spin();
