export function FlossLine() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible opacity-95 [filter:drop-shadow(0_0_8px_rgb(8_183_211_/_0.48))]"
      viewBox="0 0 1000 640"
      preserveAspectRatio="none"
    >
      <path
        className="floss-path"
        pathLength="1"
        d="M -35 102 C 160 24, 250 362, 478 382 C 548 390, 620 384, 670 370"
        fill="none"
        stroke="rgb(8 183 211 / 0.9)"
        strokeLinecap="round"
        strokeWidth="2.5"
        vectorEffect="non-scaling-stroke"
      />
      <circle
        className="floss-tip-halo"
        cx="670"
        cy="370"
        r="15"
        fill="none"
        stroke="#A5E7F0"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <circle className="floss-tip" cx="670" cy="370" r="4.5" fill="#F8FFFF" />
    </svg>
  );
}
