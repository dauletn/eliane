import { createFileRoute } from "@tanstack/react-router";

import {
  Adornment,
  Collection,
  Correspondence,
  Dunes,
  House,
  HousePlate,
  HouseSheet,
  Nav,
  Notes,
  Threshold,
} from "../components/eliane/sections";

export const Route = createFileRoute("/")({
  // No title/description here on purpose: the home page inherits the page
  // metadata from app-meta.json (title / description / favicon / og).
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-cream">
      <Nav />
      <main>
        <Threshold />
        <House />
        <Collection />
        <HousePlate />
        <Adornment />
        <Notes />
        <Dunes />
        <HouseSheet />
      </main>
      <Correspondence />
    </div>
  );
}
