const earth = document.getElementById('earth');
let positionX = 0;

// গতি নিয়ন্ত্রণ করার ভ্যারিয়েবল (কমাতে বা বাড়াতে পারেন)
const speed = 0.4; 

function rotate() {
    // ব্যাকগ্রাউন্ড ইমেজকে প্রতিনিয়ত বামে সরিয়ে ঘূর্ণন তৈরি করা হচ্ছে
    positionX -= speed;
    earth.style.backgroundPositionX = positionX + 'px';
    
    // ব্রাউজারের রিফ্রেশ রেটের সাথে সামঞ্জস্য রেখে স্মুথ অ্যানিমেশন
    requestAnimationFrame(rotate);
}

// অ্যানিমেশন শুরু করার জন্য ফাংশনটি কল করা হলো
rotate();
