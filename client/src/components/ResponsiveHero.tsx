const mobileBreakpoint = 768;

const heroDesktopGlob = import.meta.glob<{ default: string }>(
  "/attached_assets/hero_webp/*.webp",
  { eager: true }
);

const heroMobileGlob = import.meta.glob<{ default: string }>(
  "/attached_assets/hero_mobile/*.webp",
  { eager: true }
);

function resolveHeroUrl(
  glob: Record<string, { default: string }>,
  heroKey: string
): string {
  for (const path in glob) {
    if (path.includes(`/${heroKey}.webp`)) {
      return glob[path].default;
    }
  }
  if (import.meta.env.DEV) {
    console.warn(`[Hero] Kein Bild gefunden für heroKey: "${heroKey}"`);
  }
  return "";
}

const desktopCache: Record<string, string> = {};
const mobileCache: Record<string, string> = {};

function getDesktopUrl(heroKey: string): string {
  if (!desktopCache[heroKey]) {
    desktopCache[heroKey] = resolveHeroUrl(heroDesktopGlob, heroKey);
  }
  return desktopCache[heroKey];
}

function getMobileUrl(heroKey: string): string {
  if (!mobileCache[heroKey]) {
    mobileCache[heroKey] = resolveHeroUrl(heroMobileGlob, heroKey);
  }
  return mobileCache[heroKey];
}

export function useHeroImage(heroKey: string): string {
  if (typeof window === "undefined") return getDesktopUrl(heroKey);
  return window.innerWidth < mobileBreakpoint
    ? getMobileUrl(heroKey) || getDesktopUrl(heroKey)
    : getDesktopUrl(heroKey);
}

interface HeroPictureProps {
  heroKey: string;
  alt?: string;
}

export function HeroPicture({ heroKey, alt = "" }: HeroPictureProps) {
  const desktopSrc = getDesktopUrl(heroKey);
  const mobileSrc = getMobileUrl(heroKey);

  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{ backgroundColor: "#1a1a1a" }}
      data-testid="hero-picture"
    >
      {(desktopSrc || mobileSrc) && (
        <picture>
          {mobileSrc && (
            <source
              media={`(max-width: ${mobileBreakpoint - 1}px)`}
              srcSet={mobileSrc}
              type="image/webp"
            />
          )}
          <img
            src={desktopSrc || mobileSrc}
            alt={alt}
            role={alt ? undefined : "presentation"}
            loading="eager"
            decoding="async"
            {...{ fetchpriority: "high" } as any}
            width="1200"
            height="655"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </picture>
      )}
    </div>
  );
}

interface HeroBackgroundProps {
  heroKey: string;
  gradient?: string;
  className?: string;
  children: React.ReactNode;
}

export default function HeroBackground({ heroKey, gradient, className, children }: HeroBackgroundProps) {
  const defaultGradient = "bg-gradient-to-r from-black/85 via-black/70 to-black/50";

  return (
    <section className={`relative py-6 lg:py-8 overflow-hidden ${className || ""}`}>
      <HeroPicture heroKey={heroKey} />
      <div className={`absolute inset-0 ${gradient || defaultGradient}`} />
      {children}
    </section>
  );
}
