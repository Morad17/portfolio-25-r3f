import { Canvas } from "@react-three/fiber";
import React from "react";
import { Environment } from "@react-three/drei";
import { VikingShip } from "../components/Viking_Ship";

const Home = () => {
  return (
    <div className="home">
      <Canvas className="home" style={{ width: "100vw", height: "300px" }}>
        <Environment preset="warehouse" />
        <ambientLight intensity={0.1} />
        <spotLight
          position={[0, 25, 0]}
          angle={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <VikingShip scale={0.2} rotation={[0, 2, 0]} position={[2, -1, 2]} />
      </Canvas>
    </div>
  );
};

export default Home;
