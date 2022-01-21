import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

import vertexShaderParticles from "./vertexShaderParticles";
import fragmentShaderParticles from "./fragmentShaderParticles";
import { useControls } from "leva";

const Particles = () => {
  const ref = useRef(null);

  const { wave, speed } = useControls({
    scene: {
      options: ["top", "front"],
    },
    speed: { value: 0.5, min: 0, max: 1, step: 0.01 },
    wave: { value: 0.5, min: 0, max: 1, step: 0.01 },
    camera: { value: { x: 0, z: 0 }, joystick: "invertY" },
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const playhead = time * speed;
    ref.current.material.uniforms.time.value = playhead;
    ref.current.material.uniforms.walk.value = [playhead, playhead];
    ref.current.material.uniforms.wave.value = wave;
  });

  const uniforms = {
    wave: { value: 0.5 },
    time: { value: 1.0 },
    walk: { value: [0.0, 0.0], type: "v2" },
  };

  return (
    <points ref={ref} rotation={[Math.PI * 0.58, 0, 0.1]} position={[0, 0, 1]}>
      <planeBufferGeometry attach="geometry" args={[12, 8, 256, 128]} />
      <shaderMaterial
        attach="material"
        transparent
        uniforms={uniforms}
        fragmentShader={fragmentShaderParticles}
        vertexShader={vertexShaderParticles}
      />
    </points>
  );
};

export const Hero = (props) => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        height: "100vh",
        width: "100vw",
      }}
    >
      <PerspectiveCamera
        position={[0, 0, 5]}
        scale={1}
        rotation={[0, 0, 0]}
        makeDefault
        near={0.1}
        far={1000}
        fov={75}
        {...props}
      />
      <Particles />
    </Canvas>
  );
};
