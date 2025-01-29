const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
const fireflies = [];
const numFireflies = 100; // Number of fireflies

// Firefly class
class Firefly {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 1; // Random size
    this.alpha = Math.random() * 0.6 + 0.3; // Transparency (0.3 to 0.9)
    this.dx = Math.random() * 1 - 0.5; // Horizontal speed
    this.dy = Math.random() * 1 - 0.5; // Vertical speed
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 150, ${this.alpha})`; // Soft yellow glow
    ctx.fill();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    // Flicker effect by slightly varying transparency
    this.alpha += Math.random() * 0.02 - 0.01;
    if (this.alpha > 0.9) this.alpha = 0.9;
    if (this.alpha < 0.3) this.alpha = 0.3;

    // Wrap around screen edges
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  }
}

// Initialize fireflies
for (let i = 0; i < numFireflies; i++) {
  fireflies.push(new Firefly());
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireflies.forEach((firefly) => {
    firefly.update();
    firefly.draw();
  });
  requestAnimationFrame(animate);
}

animate();

