import { siteConfig } from "@/lib/site-config";

export function HeroVideoBackground() {
  return (
    <div className="hero-video-bg pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <video
        className="hero-video-bg__media"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        tabIndex={-1}
      >
        <source src={siteConfig.heroVideo.src} type="video/mp4" />
      </video>

      <div className="hero-video-bg__scrim" />
      <div className="hero-video-bg__gold-glow" />
      <div className="hero-video-bg__light-leak" />
      <div className="hero-video-bg__vignette" />
      <div className="hero-video-bg__grain" />
    </div>
  );
}
