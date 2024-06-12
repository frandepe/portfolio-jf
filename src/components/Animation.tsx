import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Overlay } from "./Overlay";
import Fish from "./Fish";
// import Fish from "../../public/Fish";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export const Animation = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1} />
        <ScrollControls pages={3} damping={0.25}>
          <Overlay />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Fish position={[2, 0, 0]} />
          </Suspense>
          <Environment preset="park" />
        </ScrollControls>
      </Canvas>
    </>
  );
};

// Modificar el tamaño del pez:
// 1 - Vamos a Fish.tsx
// 2 - Ajustamos todos los valores de scale={30} al numero que queramos
// Cada etiqueta group tiene un scale, hay q modificarlos todos.
// Ej:
// <group
// name="finPelvicB"
// rotation={[-Math.PI / 2, 0, 0]}
// scale={30}
// />
