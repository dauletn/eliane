import type { CSSProperties } from "react";

import {
  BuildLines,
  Eyebrow,
  FilmPlate,
  HeroInvitation,
  LetterInvitation,
  Monogram,
  NavInvitation,
  Plate,
  Shell,
  SpecimenLabel,
  Star,
  Wordmark,
} from "./chrome";

const CONTACT = "mailto:hello@eliane.house";

const COLLECTION = [
  {
    num: "01",
    kind: "Eau de parfum",
    name: "Eau de Parfum",
    note: "Lavender absolute, white flower and gold leaf suspended in the glass. Fifty millilitres, drawn slowly.",
    plate: "/assets/model-perfume.jpg",
    alt: "A model in a cream blazer holding the ELIANE eau de parfum bottle against a lavender wall",
  },
  {
    num: "02",
    kind: "Radiance cream",
    name: "Radiance Cream",
    note: "Whipped cream with lavender water and the faintest shimmer of gold. Sixty millilitres, morning and night.",
    plate: "/assets/product-trio.jpg",
    alt: "The three ELIANE objects photographed together on cream silk with lavender and gold leaf",
  },
  {
    num: "03",
    kind: "Lip colour",
    name: "Lip Colour",
    note: "A dusty rose that holds. Brushed gold case with lavender pressed into the lid and the EL monogram on top.",
    plate: "/assets/lipstick-duo.jpg",
    alt: "The ELIANE lip colour in its gold case beside its cap on a plain cream background",
  },
];

const NOTES = [
  { num: "01", name: "Lavender absolute", note: "Cut at dusk, when the field is quiet." },
  { num: "02", name: "White flower accord", note: "Soft, close to the skin, slow to leave." },
  { num: "03", name: "Gold leaf", note: "One flake per bottle, for the light it catches." },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 md:h-20 md:px-12">
        <a href="#top" className="el-fade-mount">
          <Wordmark />
        </a>
        <nav className="flex items-center gap-8">
          <span className="hidden items-baseline gap-8 md:flex">
            <a className="el-cta-nav" href="#house">
              The house
            </a>
            <a className="el-cta-nav" href="#collection">
              The collection
            </a>
            <a className="el-cta-nav" href="#sheet">
              The house sheet
            </a>
          </span>
          <NavInvitation href={CONTACT}>Get in touch</NavInvitation>
        </nav>
      </div>
    </header>
  );
}

export function Threshold() {
  return (
    <section id="top" className="relative border-b border-hairline">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-x-10 gap-y-14 px-6 pt-16 pb-20 md:grid-cols-12 md:px-12 md:pt-24 md:pb-28">
        <div className="md:col-span-6 lg:col-span-5">
          <p className="el-fade-mount text-sm text-ink-faint">
            Maison de beaute. Three objects, made in small batches.
          </p>
          <h1 className="mt-7">
            <BuildLines
              lines={["Dreamy.", "Radiant.", "Eternal."]}
              className="text-[2.9rem] leading-[1.02] tracking-[-0.01em] uppercase text-ink sm:text-6xl lg:text-[4.6rem]"
            />
          </h1>
          <p className="el-fade-mount mt-8 max-w-[42ch] text-base leading-relaxed text-ink-soft">
            A lavender eau de parfum, a cream that holds the light, and a lip colour that stays until
            morning.
          </p>
          <div className="el-fade-mount mt-10" style={{ "--i": 4 } as CSSProperties}>
            <HeroInvitation href={CONTACT}>Get in touch</HeroInvitation>
          </div>
        </div>
        <div className="flex md:col-span-6 md:justify-end lg:col-span-7">
          <FilmPlate
            className="w-full md:w-auto"
            src="/assets/film-01.mp4"
            poster="/assets/film-01-poster.jpg"
            label="ELIANE lip colour film"
            linkLabel="Film 01, Lip Colour"
            href="#film-one"
          />
        </div>
      </div>
    </section>
  );
}

export function House() {
  return (
    <Shell id="house" className="py-24 md:py-36">
      <div className="border-t border-hairline pt-10">
        <BuildLines
          lines={["Everything here is", "made to be kept."]}
          className="max-w-[26ch] text-[2rem] leading-[1.12] uppercase tracking-[-0.01em] text-ink sm:text-4xl md:text-5xl"
        />
        <p className="el-fade-mount mt-10 max-w-[54ch] text-base leading-relaxed text-ink-soft">
          ELIANE began with one lavender field at dusk and three objects worth keeping. We work in
          batches small enough to count, we press the flowers by hand, and we do not rush a single
          bottle.
        </p>
      </div>
    </Shell>
  );
}

export function Collection() {
  return (
    <Shell id="collection" className="border-t border-hairline py-24 md:py-32">
      <Eyebrow>The collection</Eyebrow>
      <h2 className="el-serif mt-6 max-w-[22ch] text-[1.75rem] leading-[1.15] uppercase tracking-[-0.01em] text-ink sm:text-3xl md:text-4xl">
        Three objects, kept open.
      </h2>

      <div className="mt-16 md:mt-20">
        {COLLECTION.map((item, index) => (
          <article
            key={item.num}
            className="el-row grid grid-cols-1 items-center gap-x-10 gap-y-8 border-t border-hairline py-12 last:border-b md:grid-cols-12 md:py-14"
          >
            <div
              className={`flex items-baseline gap-4 md:col-span-2 md:flex-col md:gap-1 ${
                index % 2 === 1 ? "md:order-3" : ""
              }`}
            >
              <span className="el-row-num el-serif text-2xl text-gold md:text-3xl">{item.num}</span>
              <span className="el-eyebrow text-ink-faint">{item.kind}</span>
            </div>
            <div
              className={`md:col-span-5 ${index % 2 === 1 ? "md:order-2" : ""} ${
                index % 2 === 1 ? "md:pl-2" : "md:pl-6"
              }`}
            >
              <h3 className="el-serif text-2xl uppercase tracking-[0.02em] text-ink md:text-3xl">
                {item.name}
              </h3>
              <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-ink-soft">
                {item.note}
              </p>
            </div>
            <div
              className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1" : "md:flex md:justify-end"}`}
            >
              <div className={`el-row-plate w-full max-w-[300px] ${index % 2 === 1 ? "" : "md:ml-auto"}`}>
                <Plate
                  src={item.plate}
                  alt={item.alt}
                  parallax={false}
                  className="aspect-[3/4] w-full"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Shell>
  );
}

export function HousePlate() {
  return (
    <section id="film-one" className="pt-8 pb-24 md:pt-12 md:pb-32">
      <Plate
        src="/assets/hero-lifestyle.jpg"
        alt="A model resting against cream drapery beside the ELIANE eau de parfum, radiance cream and lip colour"
        className="aspect-[4/5] w-full sm:aspect-[16/9] md:aspect-[21/9]"
      />
      <div className="mx-auto mt-6 w-full max-w-[1440px] px-6 md:px-12">
        <p className="max-w-[60ch] text-sm leading-relaxed text-ink-faint">
          The house, laid out. Perfume, cream and colour on cream silk, with the flowers they came
          from.
        </p>
      </div>
    </section>
  );
}

export function Adornment() {
  return (
    <section className="bg-lavender-soft py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-end gap-y-8 md:grid-cols-12">
          <div className="md:col-span-7 lg:col-span-6">
            <Plate
              src="/assets/model-lipstick.jpg"
              alt="A model with lavender tinted hair holding the ELIANE lip colour in a gold case"
              className="aspect-[3/4] w-full sm:aspect-[4/5]"
            />
          </div>
          <div className="md:col-span-5 md:-ml-16 lg:col-span-5 lg:-ml-24">
            <SpecimenLabel>
              <h2 className="el-serif text-2xl uppercase tracking-[0.02em] text-ink md:text-3xl">
                Adornment
              </h2>
              <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-ink-soft">
                Light on the lip, gold in the hand. The colour is made to be looked at from close
                range, not from across a room.
              </p>
              <p className="el-eyebrow mt-6 text-ink-faint">Specimen 03, lip colour</p>
            </SpecimenLabel>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Notes() {
  return (
    <Shell id="notes" className="border-t border-hairline py-24 md:py-32">
      <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <Eyebrow>The notes</Eyebrow>
          <h2 className="el-serif mt-6 max-w-[20ch] text-[1.75rem] leading-[1.15] uppercase tracking-[-0.01em] text-ink sm:text-3xl md:text-4xl">
            Three notes, counted.
          </h2>
          <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-ink-soft">
            Every bottle carries the same three notes and one flake of gold. Nothing else is added
            to them.
          </p>
          <dl className="mt-12">
            {NOTES.map((note) => (
              <div
                key={note.num}
                className="flex items-baseline gap-6 border-t border-hairline py-6 last:border-b"
              >
                <dt className="el-serif w-8 shrink-0 text-sm tracking-[0.18em] text-gold">
                  {note.num}
                </dt>
                <dd className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
                  <span className="el-serif text-base uppercase tracking-[0.06em] text-ink sm:w-56">
                    {note.name}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-soft">{note.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <Plate
            src="/assets/plate-lavender.jpg"
            alt="Lavender flowers in soft focus at dusk, dissolving into cream light"
            className="aspect-[4/5] w-full"
          />
        </div>
      </div>
    </Shell>
  );
}

export function Dunes() {
  return (
    <section className="relative pb-24 md:pb-32">
      <Plate
        src="/assets/plate-dune.jpg"
        alt="Rippled sand dunes under a pale lavender sky at dusk"
        className="aspect-[4/5] w-full sm:aspect-[16/9] md:aspect-[21/9]"
      />
      <div className="mx-auto -mt-20 w-full max-w-[1440px] px-6 md:-mt-28 md:px-12">
        <div className="grid grid-cols-1 items-end gap-x-12 gap-y-8 md:grid-cols-12">
          <FilmPlate
            className="w-full max-w-[260px] md:col-span-3 md:max-w-none"
            src="/assets/film-02.mp4"
            poster="/assets/film-02-poster.jpg"
            label="ELIANE eau de parfum film shot on the dunes at dusk"
            linkLabel="Film 02, Eau de Parfum"
          />
          <div className="md:col-span-6 md:col-start-6">
            <p className="max-w-[46ch] text-base leading-relaxed text-ink-soft">
              The second film follows the eau de parfum onto the dunes at dusk, where the light is
              lowest and the lavender reads almost grey.
            </p>
            <p className="el-eyebrow mt-6 text-ink-faint">Shot on location, fifteen seconds</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const SWATCHES = [
  { name: "Lavender", hex: "#CDC2E3", swatchClass: "bg-lavender" },
  { name: "Cream", hex: "#F7F4ED", swatchClass: "bg-cream" },
  { name: "Gold", hex: "#D4AF37", swatchClass: "bg-gold" },
];

export function HouseSheet() {
  return (
    <Shell id="sheet" className="border-t border-hairline py-24 md:py-32">
      <Eyebrow>The house sheet</Eyebrow>
      <h2 className="el-serif mt-6 max-w-[24ch] text-[1.75rem] leading-[1.15] uppercase tracking-[-0.01em] text-ink sm:text-3xl md:text-4xl">
        The identity, on one page.
      </h2>
      <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-ink-soft">
        One serif, one sans, three colours, one star. Everything the house prints follows this page.
      </p>

      <div className="mt-14 border border-gold p-2 md:p-3">
        <img
          src="/assets/brand-board.jpg"
          alt="The ELIANE identity board: wordmark, EL monogram, lavender cream and gold palette, typography and brand elements"
          loading="lazy"
          decoding="async"
          className="block h-auto w-full border border-hairline"
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-12">
        <div className="grid grid-cols-3 gap-4 md:col-span-5">
          {SWATCHES.map((swatch) => (
            <div key={swatch.name}>
              <div className={`${swatch.swatchClass} h-24 w-full border border-hairline`} />
              <p className="el-eyebrow mt-3 text-ink">{swatch.name}</p>
              <p className="mt-1 text-xs tracking-[0.12em] text-ink-faint">{swatch.hex}</p>
            </div>
          ))}
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="el-eyebrow text-ink-faint">Cinzel, primary</p>
          <p className="el-serif mt-3 text-lg tracking-[0.08em] text-ink">
            A B C D E F G H I J K L M
          </p>
          <p className="el-eyebrow mt-8 text-ink-faint">Montserrat Light, secondary</p>
          <p className="mt-3 text-lg tracking-[0.08em] text-ink-soft">A B C D E F G H I J K L M</p>
        </div>
      </div>
    </Shell>
  );
}

export function Correspondence() {
  return (
    <footer className="border-t border-hairline">
      <Plate
        src="/assets/plate-silk.jpg"
        alt="Cream silk with folds, scattered with gold leaf and two dried lavender sprigs"
        className="aspect-[3/2] w-full sm:aspect-[21/9] md:aspect-[3/1]"
      />
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-12 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Monogram />
          <div className="max-w-[40ch]">
            <p className="el-serif text-xl uppercase tracking-[0.06em] text-ink md:text-2xl">
              Dreamy. Radiant. Eternal.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Write to the house about the collection, a refill, or a private order. Replies come
              from the atelier, usually within a day.
            </p>
          </div>
        </div>
        <div className="mt-14 max-w-[560px]">
          <LetterInvitation href={CONTACT}>Get in touch</LetterInvitation>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-3">
            <Star className="text-gold" />
            <span className="text-xs tracking-[0.2em] text-ink-faint uppercase">
              ELIANE, Maison de Beaute
            </span>
          </span>
          <a className="el-cta-nav text-xs" href={CONTACT}>
            hello@eliane.house
          </a>
        </div>
      </div>
    </footer>
  );
}
