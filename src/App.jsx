import { useEffect, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const mouseGlowRef = useRef(null);
  const canvasRef = useRef(null);
  const rafMouseRef = useRef(false);

  const throttledMouseMove = useCallback((e) => {
    if (rafMouseRef.current) return;
    rafMouseRef.current = true;
    requestAnimationFrame(() => {
      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.left = e.clientX + 'px';
        mouseGlowRef.current.style.top = e.clientY + 'px';
      }
      rafMouseRef.current = false;
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) =>
      observer.observe(el)
    );

    window.addEventListener('mousemove', throttledMouseMove);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let animationId;
      let particles = [];

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize();
      window.addEventListener('resize', resize);

      class Particle {
        constructor() {
          this.reset();
        }
        reset() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2 + 0.5;
          this.speedX = (Math.random() - 0.5) * 0.3;
          this.speedY = (Math.random() - 0.5) * 0.3;
          this.opacity = Math.random() * 0.5 + 0.1;
          this.pulse = Math.random() * Math.PI * 2;
        }
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          this.pulse += 0.015;
          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
          const o = this.opacity * (0.6 + Math.sin(this.pulse) * 0.4);
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 229, 255, ${o})`;
          ctx.fill();
        }
      }

      const count = Math.min(45, Math.floor(window.innerWidth / 30));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }

      const GRID_SIZE = 150;
      const drawLines = () => {
        const cols = Math.ceil(canvas.width / GRID_SIZE) + 1;
        const rows = Math.ceil(canvas.height / GRID_SIZE) + 1;
        const grid = new Map();

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const cx = Math.floor(p.x / GRID_SIZE);
          const cy = Math.floor(p.y / GRID_SIZE);
          const key = cx + ',' + cy;
          if (!grid.has(key)) grid.set(key, []);
          grid.get(key).push(i);
        }

        const checked = new Set();
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const cx = Math.floor(p.x / GRID_SIZE);
          const cy = Math.floor(p.y / GRID_SIZE);

          for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
              const nkey = (cx + dx) + ',' + (cy + dy);
              const neighbors = grid.get(nkey);
              if (!neighbors) continue;

              for (const j of neighbors) {
                if (j <= i) continue;
                const pairKey = i * 1000 + j;
                if (checked.has(pairKey)) continue;
                checked.add(pairKey);

                const dx2 = p.x - particles[j].x;
                const dy2 = p.y - particles[j].y;
                const distSq = dx2 * dx2 + dy2 * dy2;
                if (distSq < GRID_SIZE * GRID_SIZE) {
                  const dist = Math.sqrt(distSq);
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(particles[j].x, particles[j].y);
                  ctx.strokeStyle = `rgba(0, 229, 255, ${0.06 * (1 - dist / GRID_SIZE)})`;
                  ctx.lineWidth = 0.5;
                  ctx.stroke();
                }
              }
            }
          }
        }
      };

      let isVisible = true;
      const handleVisibility = () => {
        isVisible = !document.hidden;
        if (isVisible && !animationId) animate();
      };
      document.addEventListener('visibilitychange', handleVisibility);

      const animate = () => {
        if (!isVisible) { animationId = null; return; }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => { p.update(); p.draw(); });
        drawLines();
        animationId = requestAnimationFrame(animate);
      };
      animate();

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', throttledMouseMove);
        document.removeEventListener('visibilitychange', handleVisibility);
        observer.disconnect();
      };
    }

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      observer.disconnect();
    };
  }, [throttledMouseMove]);

  return (
    <>
      <div className="particle-bg">
        <canvas ref={canvasRef}></canvas>
      </div>

      <div className="mouse-glow" ref={mouseGlowRef}></div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
