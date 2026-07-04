export function HeroParticles() {
  return (
    <div
      className="hero-ambient pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="hero-ambient__glow hero-ambient__glow--gold" />
      <div className="hero-ambient__glow hero-ambient__glow--teal" />
      <div className="hero-ambient__glow hero-ambient__glow--warm" />

      <svg
        className="hero-ambient__mesh"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--gold-light)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <circle
          cx="620"
          cy="280"
          r="140"
          fill="none"
          stroke="url(#hero-ring-grad)"
          strokeWidth="1"
          strokeDasharray="12 18"
          className="hero-ambient__ring hero-ambient__ring--a"
        />
        <circle
          cx="180"
          cy="420"
          r="110"
          fill="none"
          stroke="url(#hero-ring-grad)"
          strokeWidth="0.75"
          strokeDasharray="8 14"
          className="hero-ambient__ring hero-ambient__ring--b"
        />
        <ellipse
          cx="480"
          cy="120"
          rx="160"
          ry="90"
          fill="none"
          stroke="var(--well-teal)"
          strokeWidth="0.5"
          strokeOpacity="0.35"
          className="hero-ambient__ring hero-ambient__ring--c"
        />
      </svg>

      <div className="hero-ambient__float hero-ambient__float--1" />
      <div className="hero-ambient__float hero-ambient__float--2" />
      <div className="hero-ambient__float hero-ambient__float--3" />
      <div className="hero-ambient__float hero-ambient__float--4" />

      <div className="hero-ambient__grid" />
    </div>
  );
}
