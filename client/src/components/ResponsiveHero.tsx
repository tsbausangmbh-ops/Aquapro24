import { useState, useEffect } from "react";

const mobileBreakpoint = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < mobileBreakpoint : false
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

const heroDesktopMap: Record<string, () => Promise<{ default: string }>> = {
  hero_home: () => import("@assets/hero_webp/hero_home.webp"),
  hero_sanitaer: () => import("@assets/hero_webp/hero_sanitaer.webp"),
  hero_bad: () => import("@assets/hero_webp/hero_bad.webp"),
  hero_heizung: () => import("@assets/hero_webp/hero_heizung.webp"),
  hero_waermepumpe: () => import("@assets/hero_webp/hero_waermepumpe.webp"),
  hero_haustechnik: () => import("@assets/hero_webp/hero_haustechnik.webp"),
  hero_rohrreinigung: () => import("@assets/hero_webp/hero_rohrreinigung.webp"),
  hero_armaturen: () => import("@assets/hero_webp/hero_armaturen.webp"),
  hero_warmwasser: () => import("@assets/hero_webp/hero_warmwasser.webp"),
  hero_notdienst: () => import("@assets/hero_webp/hero_notdienst.webp"),
  hero_notdienst_muenchen: () => import("@assets/hero_webp/hero_notdienst_muenchen.webp"),
  hero_termin: () => import("@assets/hero_webp/hero_termin.webp"),
  hero_kontakt: () => import("@assets/hero_webp/hero_kontakt.webp"),
  hero_faq: () => import("@assets/hero_webp/hero_faq.webp"),
  hero_ratgeber: () => import("@assets/hero_webp/hero_ratgeber.webp"),
  hero_stadtteil: () => import("@assets/hero_webp/hero_stadtteil.webp"),
  hero_foerderung: () => import("@assets/hero_webp/hero_foerderung.webp"),
  hero_foerderantrag: () => import("@assets/hero_webp/hero_foerderantrag.webp"),
  hero_foerderantrag_heizung: () => import("@assets/hero_webp/hero_foerderantrag_heizung.webp"),
  hero_foerderrechner: () => import("@assets/hero_webp/hero_foerderrechner.webp"),
  hero_badsanierung: () => import("@assets/hero_webp/hero_badsanierung.webp"),
  hero_sanitaer_muenchen: () => import("@assets/hero_webp/hero_sanitaer_muenchen.webp"),
  hero_heizung_muenchen: () => import("@assets/hero_webp/hero_heizung_muenchen.webp"),
  hero_waermepumpe_muenchen: () => import("@assets/hero_webp/hero_waermepumpe_muenchen.webp"),
  hero_fussbodenheizung: () => import("@assets/hero_webp/hero_fussbodenheizung.webp"),
  hero_sanitaer_notdienst: () => import("@assets/hero_webp/hero_sanitaer_notdienst.webp"),
  hero_heizung_notdienst: () => import("@assets/hero_webp/hero_heizung_notdienst.webp"),
  hero_impressum: () => import("@assets/hero_webp/hero_impressum.webp"),
  hero_datenschutz: () => import("@assets/hero_webp/hero_datenschutz.webp"),
  hero_agb: () => import("@assets/hero_webp/hero_agb.webp"),
  hero_cookie: () => import("@assets/hero_webp/hero_cookie.webp"),
};

const heroMobileMap: Record<string, () => Promise<{ default: string }>> = {
  hero_home: () => import("@assets/hero_mobile/hero_home.webp"),
  hero_sanitaer: () => import("@assets/hero_mobile/hero_sanitaer.webp"),
  hero_bad: () => import("@assets/hero_mobile/hero_bad.webp"),
  hero_heizung: () => import("@assets/hero_mobile/hero_heizung.webp"),
  hero_waermepumpe: () => import("@assets/hero_mobile/hero_waermepumpe.webp"),
  hero_haustechnik: () => import("@assets/hero_mobile/hero_haustechnik.webp"),
  hero_rohrreinigung: () => import("@assets/hero_mobile/hero_rohrreinigung.webp"),
  hero_armaturen: () => import("@assets/hero_mobile/hero_armaturen.webp"),
  hero_warmwasser: () => import("@assets/hero_mobile/hero_warmwasser.webp"),
  hero_notdienst: () => import("@assets/hero_mobile/hero_notdienst.webp"),
  hero_notdienst_muenchen: () => import("@assets/hero_mobile/hero_notdienst_muenchen.webp"),
  hero_termin: () => import("@assets/hero_mobile/hero_termin.webp"),
  hero_kontakt: () => import("@assets/hero_mobile/hero_kontakt.webp"),
  hero_faq: () => import("@assets/hero_mobile/hero_faq.webp"),
  hero_ratgeber: () => import("@assets/hero_mobile/hero_ratgeber.webp"),
  hero_stadtteil: () => import("@assets/hero_mobile/hero_stadtteil.webp"),
  hero_foerderung: () => import("@assets/hero_mobile/hero_foerderung.webp"),
  hero_foerderantrag: () => import("@assets/hero_mobile/hero_foerderantrag.webp"),
  hero_foerderantrag_heizung: () => import("@assets/hero_mobile/hero_foerderantrag_heizung.webp"),
  hero_foerderrechner: () => import("@assets/hero_mobile/hero_foerderrechner.webp"),
  hero_badsanierung: () => import("@assets/hero_mobile/hero_badsanierung.webp"),
  hero_sanitaer_muenchen: () => import("@assets/hero_mobile/hero_sanitaer_muenchen.webp"),
  hero_heizung_muenchen: () => import("@assets/hero_mobile/hero_heizung_muenchen.webp"),
  hero_waermepumpe_muenchen: () => import("@assets/hero_mobile/hero_waermepumpe_muenchen.webp"),
  hero_fussbodenheizung: () => import("@assets/hero_mobile/hero_fussbodenheizung.webp"),
  hero_sanitaer_notdienst: () => import("@assets/hero_mobile/hero_sanitaer_notdienst.webp"),
  hero_heizung_notdienst: () => import("@assets/hero_mobile/hero_heizung_notdienst.webp"),
  hero_impressum: () => import("@assets/hero_mobile/hero_impressum.webp"),
  hero_datenschutz: () => import("@assets/hero_mobile/hero_datenschutz.webp"),
  hero_agb: () => import("@assets/hero_mobile/hero_agb.webp"),
  hero_cookie: () => import("@assets/hero_mobile/hero_cookie.webp"),
};

function useHeroImages(heroKey: string) {
  const [desktopSrc, setDesktopSrc] = useState<string>("");
  const [mobileSrc, setMobileSrc] = useState<string>("");

  useEffect(() => {
    const desktopLoader = heroDesktopMap[heroKey];
    const mobileLoader = heroMobileMap[heroKey];
    if (desktopLoader) {
      desktopLoader().then((mod) => setDesktopSrc(mod.default));
    }
    if (mobileLoader) {
      mobileLoader().then((mod) => setMobileSrc(mod.default));
    }
  }, [heroKey]);

  return { desktopSrc, mobileSrc };
}

export function useHeroImage(heroKey: string) {
  const isMobile = useIsMobile();
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    const map = isMobile ? heroMobileMap : heroDesktopMap;
    const loader = map[heroKey];
    if (loader) {
      loader().then((mod) => setSrc(mod.default));
    }
  }, [heroKey, isMobile]);

  return src;
}

interface HeroPictureProps {
  heroKey: string;
  alt?: string;
}

export function HeroPicture({ heroKey, alt = "" }: HeroPictureProps) {
  const { desktopSrc, mobileSrc } = useHeroImages(heroKey);

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
            width="1920"
            height="1080"
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
