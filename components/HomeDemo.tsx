import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useSpring } from "react-spring";

import { buttonGroup, folder, useControls } from "leva";

const ParticleShaderMaterial = {
  uniforms: {
    wave: { value: 0.5 },
    time: { value: 1.0 },
    walk: { value: [0.0, 0.0], type: "v2" },

    color_r: { value: 1.0 },
    color_g: { value: 0.0 },
    color_b: { value: 0.0 },
  },
  vertexShader: `
  uniform float time;
  uniform float wave;
  uniform vec2 walk;
  varying float vheight;
  
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  
  float snoise(vec3 v){ 
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  
  // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;
  
  // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
  
    //  x0 = x0 - 0. + 0.0 * C 
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;
  
  // Permutations
    i = mod(i, 289.0 ); 
    vec4 p = permute( permute( permute( 
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  
  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)
    float n_ = 1.0/7.0; // N=7
    vec3  ns = n_ * D.wyz - D.xzx;
  
    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)
  
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 
      * x_ );    // mod(j,N)
  
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
  
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
  
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
  
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
  
  //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
  
  // Mix final noise value
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return (wave * 200.0) * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                  dot(p2,x2), dot(p3,x3) ) );
  }
  
  void main() {
    float n = snoise(vec3(position.x - walk.x, position.z - walk.y, position.y)) * 0.4;
    vec4 modelViewPosition = modelViewMatrix *
      vec4(position.x, position.y, position.z + n, 1.0);
    gl_PointSize = 1.;
    vheight = position.y + n;
    gl_Position = projectionMatrix * modelViewPosition; 
  }
  `,
  fragmentShader: `
    varying float vheight;
    uniform float color_r;
    uniform float color_g;
    uniform float color_b;


    void main() {
      gl_FragColor = vec4(color_r, color_g, color_b, 1.);
    }
  `,
};

const Particles = ({ store }) => {
  const ref = useRef(null);
  const time = useRef(0);
  const { camera } = useThree();
  const [cameraAngle, setCameraAngle] = useState("side");

  const cameraPosRef = useRef({
    z: 0,
    x: 0,
    y: -4,
    rx: Math.PI * 0.5,
    ry: 0,
    rz: 0,
  });

  const cameraPositions = {
    top: { z: 5, x: 0, y: 0, rx: 0, ry: 0, rz: 0 },
    side: {
      z: 0,
      x: -6,
      y: 0,
      rx: 0,
      ry: -Math.PI * 0.5,
      rz: Math.PI * 0.5,
    },
    front: {
      z: 2,
      x: 0,
      y: -6,
      rx: Math.PI * 0.45,
      ry: 0,
      rz: 0,
    },
  };

  useSpring({
    to: cameraPositions[cameraAngle],
    onChange: ({ value }) => {
      const newRefValue = {
        z: value.z,
        x: value.x,
        y: value.y,
        rx: value.rx,
        ry: value.ry,
        rz: value.rz,
      };
      cameraPosRef.current = newRefValue;
    },
  });

  const [{ animate, density, color, wave, speed, dolly }, set] = useControls(
    () => ({
      motion: folder({
        animate: true,
        speed: { value: 0.5 },
        " ": buttonGroup({
          "0.1x": () => set({ speed: 0.03 }),
          "0.25x": () => set({ speed: 0.075 }),
          "0.5x": () => set({ speed: 0.15 }),
          "1x": () => set({ speed: 0.3 }),
          "2x": () => set({ speed: 0.6 }),
          "4x": () => set({ speed: 0.9 }),
        }),

        density: { value: 256, min: 64, max: 512, step: 1 },
        wave: { value: 1, min: 0.05, max: 10, step: 0.01 },
        color: { value: { r: 0, g: 123, b: 255 } },
      }),
      camera: folder({
        angle: {
          value: "side",
          options: ["top", "front", "side"],
          onChange: (angle) => {
            setCameraAngle(angle);
          },
        },
        dolly: { value: { x: 0, y: 0 }, joystick: "invertY" },
      }),
    }),
    { store: store }
  );

  useEffect(() => {
    const makeColor = (alpha) =>
      `rgba(${color.r},${color.g},${color.b}, ${alpha})`;

    document.documentElement.style.setProperty("--colors-accent", makeColor(1));
    document.documentElement.style.setProperty(
      "--leva-colors-accent1",
      makeColor(1)
    );
    document.documentElement.style.setProperty(
      "--leva-colors-accent2",
      makeColor(0.9)
    );
    document.documentElement.style.setProperty(
      "--leva-colors-accent3",
      makeColor(0.8)
    );
  }, [color]);

  useFrame(() => {
    const playhead = time.current;

    if (animate) {
      time.current = time.current + speed * 0.02;
    }
    ref.current.material.uniforms.time.value = playhead;
    ref.current.material.uniforms.walk.value = [playhead, playhead];
    ref.current.material.uniforms.wave.value = wave;

    ref.current.material.uniforms.color_r.value = color.r / 255;
    ref.current.material.uniforms.color_g.value = color.g / 255;
    ref.current.material.uniforms.color_b.value = color.b / 255;

    const dollyXKey =
      cameraAngle === "front" ? "x" : cameraAngle === "top" ? "x" : "y";
    const dollyYKey =
      cameraAngle === "front" ? "y" : cameraAngle === "top" ? "y" : "x";

    camera.position.x = cameraPosRef.current.x + dolly[dollyXKey] * 48;
    camera.position.y = cameraPosRef.current.y + dolly[dollyYKey] * 48;
    camera.position.z = cameraPosRef.current.z;
    camera.rotation.x = cameraPosRef.current.rx;
    camera.rotation.y = cameraPosRef.current.ry;
    camera.rotation.z = cameraPosRef.current.rz;
  });

  return (
    <>
      <points ref={ref} rotation={[0, 0, 0]} position={[0, 0, 0]} key="points">
        <planeBufferGeometry
          attach="geometry"
          args={[12, 12, density, density]}
          key="buffer"
        />
        <shaderMaterial
          key="shader"
          attach="material"
          transparent
          args={[ParticleShaderMaterial]}
        />
      </points>
    </>
  );
};

export const HomeDemo = ({ store, ...rest }) => {
  return (
    <Canvas
      key="canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Particles store={store} />;
    </Canvas>
  );
};
