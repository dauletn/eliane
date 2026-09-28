import type { CSSProperties, ReactNode } from "react";

/* ---------------------------------------------------------------------------
 * ELIANE chrome
 * Every piece of house furniture lives here. No shared button utility: each
 * call to action below is its own component with its own interaction identity.
 * ------------------------------------------------------------------------- */

type StyleVars = CSSProperties & { "--i"?: number };

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`el-star shrink-0 ${className}`}
      width="12"
      height="12"
    >
      <path
        d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12 7-1 11-5 12-12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`el-serif flex size-12 items-center justify-center rounded-full border border-gold text-sm tracking-[0.18em] text-ink ${className}`}
    >
      EL
    </span>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Star className="text-gold" />
      <span className="el-serif text-[0.95rem] tracking-[0.42em] text-ink">ELIANE</span>
    </span>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`el-eyebrow text-ink-faint ${className}`}>{children}</p>;
}

/* Headline lines rise from behind their own mask on mount. Transform only, so
 * the page is complete in a full page screenshot. */
export function BuildLines({
  lines,
  className = "",
  lineClassName = "",
  start = 0,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  start?: number;
}) {
  return (
    <span className={`el-serif block ${className}`}>
      {lines.map((line, index) => (
        <span key={line} className="el-build">
          <span className={lineClassName} style={{ "--i": start + index } as StyleVars}>
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}

export function SpecimenLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`el-label el-drift p-6 md:p-8 ${className}`}>
      <Star className="mb-5 text-gold" />
      {children}
    </div>
  );
}

/* A still gold frame; the picture inside is the only thing that moves. */
export function FilmPlate({
  src,
  poster,
  label,
  className = "",
  linkLabel,
  href,
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
  linkLabel?: string;
  href?: string;
}) {
  const picture = (
    <span className="el-frame relative block w-full overflow-hidden">
      <video
        className="el-frame-pic block h-full w-full scale-[1.02] object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
    </span>
  );

  return (
    <figure className={`m-0 ${className}`}>
      {href ? (
        <a href={href} className="el-frame-link block">
          {picture}
        </a>
      ) : (
        picture
      )}
      <figcaption className="el-eyebrow mt-4 flex items-center gap-3 text-ink-faint">
        <Star className="text-gold" />
        {linkLabel ?? label}
      </figcaption>
    </figure>
  );
}

/* A full bleed plate. The clip wipe is scroll linked and never touches opacity. */
export function Plate({
  src,
  alt,
  className = "",
  imgClassName = "",
  parallax = true,
  reveal = true,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  parallax?: boolean;
  reveal?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${reveal ? "el-plate" : ""} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`block h-full w-full object-cover ${parallax ? "el-parallax" : ""} ${imgClassName}`}
      />
    </div>
  );
}

/* --- the three call to action garments ----------------------------------- */

export function NavInvitation({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="el-cta-nav">
      {children}
    </a>
  );
}

export function HeroInvitation({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="el-cta-hero">
      <Star className="text-gold" />
      <span>{children}</span>
      <span className="el-cta-hero-line" />
    </a>
  );
}

export function LetterInvitation({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="el-cta-letter">
      <span className="el-serif text-lg tracking-[0.22em] md:text-xl">{children}</span>
      <Star className="text-gold" />
    </a>
  );
}

export function Shell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">{children}</div>
    </section>
  );
}
