import React from "react";

export default function BlueBackground() {
  return (
    <>
      {/* =====================================================
          MAIN BLUE + BLACK GRADIENT BACKGROUND
      ===================================================== */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              135deg,
              #00030a 0%,
              #020617 18%,
              #061633 35%,
              #0a2f68 50%,
              #061a3d 65%,
              #020617 82%,
              #00030a 100%
            )
          `,
        }}
      />

      {/* =====================================================
          CROSS / DIAGONAL BLUE GRADIENT
      ===================================================== */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              45deg,
              transparent 0%,
              transparent 28%,
              rgba(30, 64, 175, 0.08) 38%,
              rgba(37, 99, 235, 0.18) 48%,
              rgba(59, 130, 246, 0.10) 53%,
              rgba(30, 64, 175, 0.08) 62%,
              transparent 72%,
              transparent 100%
            )
          `,
        }}
      />

      {/* =====================================================
          SECOND DIAGONAL - CROSS EFFECT
      ===================================================== */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              135deg,
              transparent 0%,
              transparent 35%,
              rgba(15, 23, 42, 0.12) 44%,
              rgba(37, 99, 235, 0.08) 50%,
              rgba(15, 23, 42, 0.12) 56%,
              transparent 65%,
              transparent 100%
            )
          `,
        }}
      />

      {/* =====================================================
          SOFT CENTER BLUE GLOW
      ===================================================== */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse at 50% 45%,
              rgba(37, 99, 235, 0.10) 0%,
              rgba(30, 64, 175, 0.05) 30%,
              transparent 65%
            )
          `,
        }}
      />

      {/* =====================================================
          TOP BLUE GLOW
      ===================================================== */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[700px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(37, 99, 235, 0.10) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
    </>
  );
}
