import { Canvas } from "@react-three/fiber";
import React from "react";

const Home = () => {
  return (
    <Canvas className="home" style={{ width: "100%", height: "300px" }}>
      <ambientLight />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="skyblue" />
      </mesh>
    </Canvas>
  );
};

export default Home;
