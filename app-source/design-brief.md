# ELIANE — design brief

## Design read
A private beauty house for collectors of scent and gold, not shoppers of ads. Emotional register: hushed, radiant, ceremonial. The visitor should feel they have been handed the key to a drawer, not served a catalogue.

## Concept spine
**The atelier drawer.** The page is laid out like the open contents of a perfumer's drawer on cream paper: every object arrives with its own specimen card, numbered by hand, and the drawer stays open the whole way down. Nothing shouts; things are placed.

## Delivery tier
`editorial` — user picked Non-animated at intake ("How should the ELIANE landing feel as you scroll?" → Non-animated). Typography and imagery carry the page, bespoke chrome, micro-motion only. Wow technique from the catalog: **W-CLIP-PLATE** (scroll-linked clip-path plate reveal on full-bleed imagery) plus **W-LABEL-DRIFT** (specimen label offsetting on scroll transform). Both are transform/clip only, never opacity to zero.

## Locked palette
Brand palette supplied by the user, kept exactly (this is the explicit-brand override of the beige/gold default ban):
- Cream ground `#F7F4ED`, deep cream tint `#EFEAE0`, warm ink `#221F1B` (never pure black)
- Lavender `#CDC2E3`, deep lavender `#8E7FB8`
- Gold `#D4AF37` as the single accent
Defense: the house is lavender, cream and gold by its own identity board. One accent (gold) is used page-wide; lavender is the secondary ground, never a second accent.

## Locked type
- Display: **Cinzel** (the brand's named primary typeface, from the identity board), used in caps, tight tracking.
- Secondary: **Montserrat Light** (the brand's named secondary typeface) for labels, body and spec lines.
Serif justification: the brand names its typeface, the house is editorial and luxury, and the identity board specifies both faces. Nothing else is introduced.

## Animation mode
`non-animated` — user picked Non-animated at intake.

## Section plan
1. Threshold (hero) — asymmetric split: type above, full-bleed lifestyle plate below. Family: **plate hero**.
2. The House (manifesto) — quiet full-width statement, wide cream field, one gold rule. Family: **text statement**.
3. The Collection — three numbered specimen rows with hairline dividers, product images offset alternately. Family: **specimen index**.
4. Film One — full-bleed vertical film band in a 9:16 gold-hairline plate. Family: **film band**.
5. Adornment (editorial spread) — full-bleed lavender plate with a cream specimen label. Family: **plate + label**.
6. Notes (ingredients) — two-column asymmetric: copy left, still-life right, counted notes. Family: **notes split** (single zigzag, no repeats).
7. Film Two — dune film band, mirrored composition of section 4. Family: **film band** (mirrored, once).
8. The House Sheet (brand) — framed identity document with live swatches and type specimen. Family: **document frame**.
9. Correspondence (footer) — quiet closing, monogram, single CTA.

Families used: 8 distinct for 9 sections. Eyebrow budget ceil(9/3) = 3; budget spent on sections 3, 6 and 8 only.

## Asset plan
User-supplied kit (all used): hero lifestyle plate, brand identity board, product trio still life, lipstick still, lavender-haired model portrait, perfume model portrait, film 01 (lipstick, 10s vertical), film 02 (perfume on dunes, 15s vertical).
Generated kit: three atmospheric plates in the locked palette (lavender field, cream silk with gold leaf, lavender dune dusk), plus the launch cover set and icon.

## CTA inventory
Single CTA intent page-wide: **Get in touch**. Garments, each its own component with its own interaction identity:
- Nav: a hairline gold rule that draws itself left to right under the word on hover.
- Hero: gold hairline underline that sweeps in and a small star that rotates in.
- Footer: a cream-on-ink block where the star travels right and a gold line fills from the left.
No shared button utility class anywhere.

## Motion inventory (micro)
- Plate hero: headline builds on mount (staggered, transform only).
- W-CLIP-PLATE: clip-path wipe on full-bleed plates, scroll-linked, transform/clip only.
- W-LABEL-DRIFT: specimen labels offset on scroll via transform.
- Hover: film plates scale inside a fixed gold frame; specimen rows lift on the printed number.
- All of it gated behind `prefers-reduced-motion` with static fallbacks.
