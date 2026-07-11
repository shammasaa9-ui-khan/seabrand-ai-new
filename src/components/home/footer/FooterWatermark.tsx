// 



export default function FooterWatermark() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none z-0 leading-none">
      <svg
        className="w-full h-auto text-white/[0.04] fill-current block"
        // Tăng chiều cao của viewBox để tạo khoảng trống (gap)
        viewBox="0 0 1000 130" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <text
          x="0"
          // Điều chỉnh y để căn chỉnh vị trí chữ trong viewBox mới
          y="120" 
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          className="uppercase font-sans"
          style={{
            fontSize: "140px",
            fontWeight: 900,
            fontFamily: "Inter",
          }}
        >
          SEABRAND-AI
        </text>
      </svg>
    </div>
  );
}