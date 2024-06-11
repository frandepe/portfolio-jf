import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Fish from "../../public/Fish";

export const FishComponent = () => {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight position={0.5} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Fish scale={[0.3, 0.3, 0.3]} position={[-4, 0, -2]} />
        </Suspense>
        <Environment preset="park" />
        {/* <axesHelper args={[5]} /> */}
      </Canvas>
    </div>
  );
};
// sunset
// dawn
// night
// warehouse
// forest
// apartment
// studio
// city
// park
// lobby
