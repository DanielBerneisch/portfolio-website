import { OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ParticleSystem from "./ParticleSystem";

export default function CustomScene() {
  return (
    <Canvas className="rounded-full aspect-square">
      <group position={[0, 0, 0]} scale={1.2}>
        <ParticleSystem count={1000} />
      </group>

      <directionalLight
        position={[200, 300, 300]}
        intensity={0.7}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-1000}
        shadow-camera-right={1000}
        shadow-camera-top={1000}
        shadow-camera-bottom={-1000}
      />
      <hemisphereLight intensity={0.75} color="#eaeaea" />

      <OrthographicCamera
        makeDefault
        far={10000}
        near={-50000}
        position={[0, 0, 500]}
        zoom={50}
      />
    </Canvas>
  );
}
