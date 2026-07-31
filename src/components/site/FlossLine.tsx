const flossPath =
  "M -35 102 C 160 24, 250 362, 478 382 C 548 390, 620 384, 670 370";

export function FlossLine() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
      viewBox="0 0 1000 640"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="floss-light-gradient"
          x1="-35"
          y1="102"
          x2="670"
          y2="370"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0799B6" />
          <stop offset="0.46" stopColor="#52D9EA" />
          <stop offset="0.72" stopColor="#F6FFFF" />
          <stop offset="1" stopColor="#0BB7D3" />
        </linearGradient>
      </defs>
      <path
        className="floss-path-glow"
        pathLength="1"
        d={flossPath}
        fill="none"
        stroke="#16C8E1"
        strokeLinecap="round"
        strokeWidth="8"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="floss-path"
        pathLength="1"
        d={flossPath}
        fill="none"
        stroke="url(#floss-light-gradient)"
        strokeLinecap="round"
        strokeWidth="2.75"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="floss-path-pulse"
        pathLength="1"
        d={flossPath}
        fill="none"
        stroke="url(#floss-light-gradient)"
        strokeLinecap="round"
        strokeWidth="4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
