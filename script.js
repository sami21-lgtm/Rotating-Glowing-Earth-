const earthPic = document.getElementById('earth-pic');
let currentAngle = 0;

// ঘোরার স্পিড (ধীরে বা জোরে ঘোরাতে চাইলে ০.১৫ পরিবর্তন করতে পারেন)
const speed = 0.15; 

function rotateEarth() {
    currentAngle += speed;
    
    // শুধু নিচের ইমেজটিকে ঘোরানো হচ্ছে, ওপরের আলোর প্রলেপটি স্থির থাকবে
    earthPic.style.transform = `rotate(${currentAngle}deg)`;
    
    // মাখনের মতো স্মুথ অ্যানিমেশনের জন্য ব্রাউজার ফ্রেম রিকোয়েস্ট
    requestAnimationFrame(rotateEarth);
}

// অ্যানিমেশন চালু করা হলো
rotateEarth();
