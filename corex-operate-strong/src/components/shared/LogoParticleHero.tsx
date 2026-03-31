import { useEffect, useRef } from "react";

type Props = {
  logoSrc: string;          // "/corex-mark.webp"
  className?: string;
  density?: number;         // 1.0 default
};

type Pt = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
};

export default function LogoParticleHero({
  logoSrc,
  className,
  density = 1.0,
}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);

    let raf = 0;
    let pts: Pt[] = [];
    let maskData: Uint8ClampedArray | null = null;
    let maskW = 0;
    let maskH = 0;

    const mouse = { x: -1e9, y: -1e9, vx: 0, vy: 0, px: 0, py: 0, active: false };

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = logoSrc;

    const off = document.createElement("canvas");
    const offCtx = off.getContext("2d", { willReadFrequently: true });

    function resize() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);

      buildMask();
      seedParticles();
    }

    function buildMask() {
      if (!offCtx) return;
      if (!img.complete || !img.naturalWidth) return;

      const cw = canvas.width;
      const ch = canvas.height;

      const target = Math.min(cw, ch) * 0.78;
      const scale = target / Math.max(img.naturalWidth, img.naturalHeight);
      const w = Math.max(1, Math.floor(img.naturalWidth * scale));
      const h = Math.max(1, Math.floor(img.naturalHeight * scale));

      off.width = w;
      off.height = h;

      offCtx.clearRect(0, 0, w, h);
      offCtx.drawImage(img, 0, 0, w, h);

      const id = offCtx.getImageData(0, 0, w, h);
      maskData = id.data;
      maskW = w;
      maskH = h;
    }

    function insideMask(x: number, y: number) {
      if (!maskData) return false;

      const cx = canvas.width * 0.5;
      const cy = canvas.height * 0.5;

      const mx0 = cx - maskW * 0.5;
      const my0 = cy - maskH * 0.5;

      const mx = Math.floor(x - mx0);
      const my = Math.floor(y - my0);

      if (mx < 0 || my < 0 || mx >= maskW || my >= maskH) return false;

      const idx = (my * maskW + mx) * 4;
      const r = maskData[idx];
      const g = maskData[idx + 1];
      const b = maskData[idx + 2];
      const a = maskData[idx + 3];
      if (a < 16) return false;
      // COREX-02.png: dark steel ring on white background — detect dark pixels
      const brightness = (r + g + b) / 3;
      return brightness < 150;
    }

    function randomPointInMask() {
      for (let i = 0; i < 2000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        if (insideMask(x, y)) return { x, y };
      }
      return { x: canvas.width * 0.5, y: canvas.height * 0.5 };
    }

    function seedParticles() {
      if (!maskData) return;

      const area = canvas.width * canvas.height;
      const base = Math.floor((area / 9000) * density);
      const n = Math.max(250, Math.min(1400, base));

      pts = new Array(n).fill(0).map(() => {
        const p = randomPointInMask();
        return {
          x: p.x,
          y: p.y,
          vx: (Math.random() - 0.5) * 0.25 * dpr,
          vy: (Math.random() - 0.5) * 0.25 * dpr,
          r: (Math.random() * 2.8 + 1.4) * dpr,
          a: Math.random() * 0.65 + 0.35,
        };
      });
    }

    function onMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * dpr;
      const y = (e.clientY - rect.top) * dpr;

      mouse.vx = x - mouse.px;
      mouse.vy = y - mouse.py;
      mouse.px = x;
      mouse.py = y;
      mouse.x = x;
      mouse.y = y;
      mouse.active = true;
    }

    function onLeave() {
      mouse.active = false;
      mouse.x = -1e9;
      mouse.y = -1e9;
    }

    function step() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const g = ctx.createRadialGradient(
        canvas.width * 0.55,
        canvas.height * 0.45,
        0,
        canvas.width * 0.55,
        canvas.height * 0.45,
        Math.max(canvas.width, canvas.height) * 0.85
      );
      g.addColorStop(0, "rgba(255,255,255,0.03)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const influence = mouse.active ? 150 * dpr : 0;
      const influence2 = influence * influence;

      for (const p of pts) {
        p.vx *= 0.985;
        p.vy *= 0.985;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;

          if (d2 < influence2 && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const t = 1 - d / influence;
            const nx = dx / d;
            const ny = dy / d;

            const push = 0.55 * t;
            const swirl = 0.45 * t;

            p.vx += nx * push * dpr;
            p.vy += ny * push * dpr;
            p.vx += -ny * swirl * dpr;
            p.vy += nx * swirl * dpr;

            p.vx += mouse.vx * 0.0012 * t;
            p.vy += mouse.vy * 0.0012 * t;
          }
        }

        const nx = p.x + p.vx;
        const ny = p.y + p.vy;

        if (insideMask(nx, ny)) {
          p.x = nx;
          p.y = ny;
        } else {
          p.vx *= -0.6;
          p.vy *= -0.6;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    function start() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(step);
    }

    img.onload = () => {
      resize();
      start();
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove, { passive: true });
    canvas.addEventListener("pointerleave", onLeave, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [logoSrc, density]);

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
