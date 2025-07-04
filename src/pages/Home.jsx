import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Environment } from "@react-three/drei";
import { VikingShip } from "../components/Viking_Ship";
import Skills from "./Skills";

const Home = () => {
  //Content//
  return (
    <div className="home-page">
      <Canvas className="home" style={{ width: "97vw", height: "100vh" }}>
        <ScrollControls pages={4} damping={0.1}>
          <VikingShip scale={0.2} rotation={[0, 2, 0]} position={[2, -1, 2]} />
          <Environment preset="warehouse" />
          <Scroll html>
            <h1>My Skills</h1>
            <Skills />
          </Scroll>
        </ScrollControls>
        <ambientLight intensity={0.1} />
        <spotLight
          position={[0, 25, 0]}
          angle={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
      </Canvas>
    </div>
  );
};

export default Home;
