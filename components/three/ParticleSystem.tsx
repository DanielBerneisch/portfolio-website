"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useMousePosition } from "@/components/three/useMousePosition";

function curlNoise(
  x: number,
  y: number,
  z: number,
  scale: number,
  variation: number,
  seed: number
) {
  const s = scale,
    v = variation,
    t = seed;
  return new THREE.Vector3(
    Math.sin(y * s + t) * v,
    Math.cos(z * s + t) * v,
    Math.sin(x * s + t) * v
  );
}

export default function ParticleSystem({ count = 2000, radius = 7 }) {
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouse3DRef = useRef<THREE.Vector3 | null>(null);
  const { camera, size } = useThree();
  const mousePosition = useMousePosition();
  const raycaster = useRef(new THREE.Raycaster());
  const plane = useRef(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0));

  const visualRadius = radius * 0.8;
  const escapeMargin = radius * 0.15;
  const physicsRadius = visualRadius + escapeMargin;

  const velocities = useRef<THREE.Vector3[]>(
    Array.from({ length: count }, () => new THREE.Vector3())
  );

  const originalPositions = useRef<THREE.Vector3[]>(
    Array.from({ length: count }, () => new THREE.Vector3())
  );

  useEffect(() => {
    const particles = particlesRef.current;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = visualRadius * Math.cbrt(Math.random());

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions.current[i].set(x, y, z);

      color.setHSL(0.6 + Math.random() * 0.1, 0.5, 0.7 + Math.random() * 0.2);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.2,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    if (particles) {
      particles.geometry = geometry;
      particles.material = material;
    }
  }, [count, visualRadius]);

  useFrame(() => {
    const particles = particlesRef.current;
    if (!particles || !particles.geometry) return;

    const positions = particles.geometry.attributes.position
      .array as Float32Array;
    const vels = velocities.current;

    let mouse3D = null;
    if (mousePosition) {
      const mouseNDC = new THREE.Vector2(
        (mousePosition.x / size.width) * 2 - 1,
        -(mousePosition.y / size.height) * 2 + 1
      );

      raycaster.current.setFromCamera(mouseNDC, camera);
      const intersection = new THREE.Vector3();
      raycaster.current.ray.intersectPlane(plane.current, intersection);
      mouse3D = intersection;
      mouse3DRef.current = intersection;
    } else {
      mouse3DRef.current = null;
    }

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      let px = positions[idx];
      let py = positions[idx + 1];
      let pz = positions[idx + 2];

      const orig = originalPositions.current[i];
      const vel = vels[i];

      if (mouse3D) {
        const dx = px - mouse3D.x;
        const dy = py - mouse3D.y;
        const dz = pz - mouse3D.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < physicsRadius && dist > 0.001) {
          const strength = (physicsRadius - dist) * 0.0004;
          vel.x += (dx / dist) * strength;
          vel.y += (dy / dist) * strength;
          vel.z += (dz / dist) * strength;
        }
      }

      const curl = curlNoise(px, py, pz, 6, 0.05, 1000);
      vel.x += curl.x * 0.05;
      vel.y += curl.y * 0.01;
      vel.z += curl.z * 0.01;

      vel.x += (Math.random() - 0.5) * 0.001;
      vel.y += (Math.random() - 0.5) * 0.001;
      vel.z += (Math.random() - 0.5) * 0.001;

      vel.x += (orig.x - px) * 0.003;
      vel.y += (orig.y - py) * 0.003;
      vel.z += (orig.z - pz) * 0.003;

      vel.multiplyScalar(0.92);
      px += vel.x;
      py += vel.y;
      pz += vel.z;

      const len = Math.sqrt(px * px + py * py + pz * pz);
      if (len > physicsRadius) {
        const scale = (physicsRadius * 0.98) / len;
        px *= scale;
        py *= scale;
        pz *= scale;
        vel.multiplyScalar(0.5);
      }

      positions[idx] = px;
      positions[idx + 1] = py;
      positions[idx + 2] = pz;
    }

    particles.geometry.attributes.position.needsUpdate = true;
  });

  return <points ref={particlesRef} />;
}
