# 🌍 Rotating Glowing Earth Animation using HTML & CSS

A pixel-perfect, premium 3D globe rotation animation built entirely with semantic HTML, modern CSS keyframes, and vanilla JavaScript. This project accurately replicates the visual aesthetics of `image_55834a.png`, featuring a high-density atmospheric cyan glow, a vector outline world map, and a dynamic space background with a subtle ambient solar flare.

---

## ✨ Features

* **3D Sphere Shading Mask:** Uses advanced CSS `radial-gradient` masking to simulate realistic lighting from the top-left, casting a natural shadow over the rotating continents on the right side.
* **Cyan Atmospheric Glow:** Implements a layered glowing aura (`box-shadow` and `inset` shadows) around the planet, capturing the exact scientific/sci-fi aesthetic from the reference image.
* **Ambient Solar Light Flare:** Includes a dedicated, soft background light burst (`.sun-glow`) positioned behind the Earth's top-left horizon to provide cinematic environmental depth.
* **Seamless Vector Map Loop:** Features a transparent vector outline world map that shifts infinitely along the horizontal axis using hardware-accelerated CSS animations.
* **Interactive Speed Controls:** Features micro-interactions through JavaScript that subtly slow down the rotation speed on hover for a dynamic, smooth user experience.

---

## 📂 Project Structure

```text
├── index.html   # Component architecture & background layers
├── style.css    # 3D shading, custom atmospheric shadows, gradients, and loop keyframes
└── script.js    # Interactive mouse event handling and dynamic speed management
