"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene").then((module) => module.HeroScene), {
  ssr: false,
  loading: () => <div className="scene-fallback" aria-hidden="true" />
});

export function HeroSceneLoader() {
  return <HeroScene />;
}
