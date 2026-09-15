"use client";

import { useEffect, useRef } from "react";

export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let animationFrame = 0;

    async function createScene() {
      const THREE = await import("three");
      if (disposed || !mountRef.current) return;

      const mount = mountRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0.2, 7.8);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.1, 2),
        new THREE.MeshPhysicalMaterial({ color: 0x7cffcb, emissive: 0x123f4a, emissiveIntensity: 1.2, roughness: 0.24, metalness: 0.8, wireframe: true, transparent: true, opacity: 0.82 })
      );
      group.add(core);

      const shell = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.38, 1),
        new THREE.MeshBasicMaterial({ color: 0x6ea8fe, wireframe: true, transparent: true, opacity: 0.22 })
      );
      group.add(shell);

      const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xb967ff, transparent: true, opacity: 0.72 });
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.012, 8, 96), ringMaterial);
      ring.rotation.x = Math.PI / 2.5;
      group.add(ring);

      const particleCount = 260;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let index = 0; index < particleCount; index += 1) {
        const radius = 2.1 + Math.random() * 1.7;
        const angle = Math.random() * Math.PI * 2;
        particlePositions[index * 3] = Math.cos(angle) * radius;
        particlePositions[index * 3 + 1] = (Math.random() - 0.5) * 3.6;
        particlePositions[index * 3 + 2] = Math.sin(angle) * radius;
      }
      const particles = new THREE.Points(
        new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(particlePositions, 3)),
        new THREE.PointsMaterial({ color: 0x7cffcb, size: 0.025, transparent: true, opacity: 0.7 })
      );
      scene.add(particles);

      const ambient = new THREE.AmbientLight(0x8fb8ff, 1.8);
      const keyLight = new THREE.PointLight(0x7cffcb, 18, 12);
      keyLight.position.set(3, 3, 4);
      scene.add(ambient, keyLight);

      const resize = () => {
        const width = mount.clientWidth || 480;
        const height = mount.clientHeight || 520;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };
      resize();
      const observer = new ResizeObserver(resize);
      observer.observe(mount);

      const pointer = { x: 0, y: 0 };
      const onPointerMove = (event: PointerEvent) => {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
        pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("pointermove", onPointerMove, { passive: true });

      const animate = (time: number) => {
        group.rotation.y += 0.0035;
        group.rotation.x = Math.sin(time * 0.00045) * 0.12 + pointer.y * 0.08;
        group.position.x += (pointer.x * 0.22 - group.position.x) * 0.035;
        shell.rotation.y -= 0.002;
        ring.rotation.z += 0.004;
        particles.rotation.y -= 0.0007;
        renderer.render(scene, camera);
        animationFrame = window.requestAnimationFrame(animate);
      };
      animationFrame = window.requestAnimationFrame(animate);

      return () => {
        window.cancelAnimationFrame(animationFrame);
        window.removeEventListener("pointermove", onPointerMove);
        observer.disconnect();
        core.geometry.dispose();
        core.material.dispose();
        shell.geometry.dispose();
        shell.material.dispose();
        ring.geometry.dispose();
        ring.material.dispose();
        particles.geometry.dispose();
        particles.material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }

    let cleanup: (() => void) | undefined;
    createScene().then((dispose) => {
      cleanup = dispose;
    });

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return <div className="hero-scene" ref={mountRef} aria-hidden="true" />;
}
