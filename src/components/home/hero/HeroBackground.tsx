"use client";

import { useEffect, useRef } from "react";

interface SmartNode {
  id: number;
  text: string;
  tier: 1 | 2 | 3;
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  size: number;
  opacity: number;
}

export default function BackgroundAlphabets() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<SmartNode[]>([]);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isMounted = true;

    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const tier1Pool = ["AI"];
    const tier2Pool = ["Strategy", "Branding", "Startup", "Approach"];
    const tier3Pool = [
      "Curator",
      "Curation",
      "Entertainment",
      "Content",
    ];

    const createNode = (id: number, w: number, h: number): SmartNode => {
      const rand = Math.random();

      let text = "";
      let tier: 1 | 2 | 3 = 3;
      let size = 15;

      if (rand < 0.15) {
        text = tier1Pool[Math.floor(Math.random() * tier1Pool.length)];
        tier = 1;
        size = w < 640 ? 20 : 26;
      } else if (rand < 0.5) {
        text = tier2Pool[Math.floor(Math.random() * tier2Pool.length)];
        tier = 2;
        size = w < 640 ? 15 : 18;
      } else {
        text = tier3Pool[Math.floor(Math.random() * tier3Pool.length)];
        tier = 3;
        size = w < 640 ? 12 : 15;
      }

      return {
        id,
        text,
        tier,
        x: Math.random() * w,
        y: Math.random() * h,
        vx: 0,
        vy: 0,
        speed: 0.3 + Math.random() * 0.3,
        size,
        opacity: 0.2 + Math.random() * 0.2,
      };
    };

    const initNodes = () => {
      const count = window.innerWidth < 640 ? 12 : 20;
      nodesRef.current = Array.from({ length: count }, (_, i) =>
        createNode(i, window.innerWidth, window.innerHeight)
      );
    };

    initNodes();

    const mouse = { x: -9999, y: -9999 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", setCanvasSize);

    const animate = () => {
      if (!isMounted) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;

      for (const n of nodes) {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        const radius = window.innerWidth < 640 ? 90 : 150;

        if (dist < radius) {
          const force = (radius - dist) / radius;
          n.vx += (dx / dist) * force * 2;
          n.vy += (dy / dist) * force * 2;
        }

        n.vx *= 0.92;
        n.vy *= 0.92;

        n.x += n.vx;
        n.y += n.vy + n.speed;

        if (n.y > canvas.height + 50) {
          n.y = -50;
        }
      }

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const n of nodes) {
        ctx.globalAlpha = n.opacity;
        ctx.fillStyle = "#6748FE";
        ctx.font = `${n.tier === 1 ? "bold" : n.tier === 2 ? "600" : "500"} ${
          n.size
        }px sans-serif`;

        ctx.fillText(n.text, n.x, n.y);
      }

      ctx.globalAlpha = 1;

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isMounted = false;

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas className="absolute inset-0 w-full h-full pointer-events-none" ref={canvasRef} />
  );
}