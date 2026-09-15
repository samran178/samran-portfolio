"use client";

import { useEffect, useRef } from "react";

type SceneVariant = "capabilities" | "experience" | "contact";

const palettes: Record<SceneVariant, { main: number; accent: number }> = {
  capabilities: { main: 0x7cffcb, accent: 0x6ea8fe },
  experience: { main: 0x6ea8fe, accent: 0xb967ff },
  contact: { main: 0xffc857, accent: 0x7cffcb }
};

export function SectionScene({ variant }: { variant: SceneVariant }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let frame = 0;
    let cleanup: (() => void) | undefined;

    async function mountScene() {
      const THREE = await import("three");
      if (disposed || !mountRef.current) return;
      const mount = mountRef.current;
      const colors = palettes[variant];
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
      camera.position.z = 6.5;
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
      renderer.setClearColor(0, 0);
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);
      const material = new THREE.MeshBasicMaterial({ color: colors.main, wireframe: true, transparent: true, opacity: .8 });
      const accentMaterial = new THREE.MeshBasicMaterial({ color: colors.accent, wireframe: true, transparent: true, opacity: .6 });
      const shape = variant === "capabilities"
        ? new THREE.BoxGeometry(1.65, 1.65, 1.65)
        : variant === "experience"
          ? new THREE.TorusKnotGeometry(1.15, .25, 96, 14)
          : new THREE.OctahedronGeometry(1.35, 1);
      const object = new THREE.Mesh(shape, material);
      group.add(object);

      const halo = new THREE.Mesh(new THREE.SphereGeometry(1.8, 12, 12), accentMaterial);
      group.add(halo);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.05, .018, 8, 96), accentMaterial);
      ring.rotation.x = Math.PI / 2;
      group.add(ring);

      const resize = () => {
        const width = mount.clientWidth || 400;
        const height = mount.clientHeight || 300;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };
      resize();
      const observer = new ResizeObserver(resize);
      observer.observe(mount);

      const animate = (time: number) => {
        object.rotation.x = time * .00025;
        object.rotation.y = time * .00042;
        halo.rotation.y = -time * .00018;
        ring.rotation.z = time * .0003;
        group.position.y = Math.sin(time * .001) * .12;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);

      cleanup = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        shape.dispose();
        material.dispose();
        halo.geometry.dispose();
        halo.material.dispose();
        ring.geometry.dispose();
        ring.material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }

    mountScene();
    return () => { disposed = true; cleanup?.(); };
  }, [variant]);

  return <div className={`section-scene section-scene-${variant}`} ref={mountRef} aria-hidden="true" />;
}
