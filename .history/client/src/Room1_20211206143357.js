import React, { Suspense, useRef, useState, useEffect } from 'react';
import { OrbitControls, FirstPersonControls, PointerLockControls } from '@react-three/drei';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import Model from './components/Three/Wall';
import Painting1 from './components/Three/Painting1';
import Floor from './components/Three/Floor';
import Painting2 from './components/Three/Painting2';
import Frame from './components/Three/Frame';
import Newspaper from './components/Three/Newspaper';
import TV from './components/Three/Television';
import Key from './components/Three/Key';
import Door from './components/Three/Door';
import Radio from './components/Three/Radio';
import Painting3 from './components/Three/Painting3';
import Clock from './components/Three/Clock';
import Boots from './components/Three/Boot';
import { EffectComposer, Outline } from '@react-three/postprocessing'
// import Map from './components/Map.js';

import RustedKey from './components/Three/RustedKey';
import Camera from './components/Three/Camera';
import Rose from './components/Three/Rose';
import Gramophone from './components/Three/Gramophone';
import Telephone from './components/Three/Telephone';
import Notes from './components/Three/Notes';
import Notebook from './components/Three/Notebook';
import Mirror1 from './components/Three/Mirror1';
import Mirror2 from './components/Three/Mirror2';
import Cabinet from './components/Three/Cabinet';
import MetalDesk from './components/Three/MetalDesk';
import Table2 from './components/Three/Table2';
import Box from './components/Three/Box';
import Door2 from './components/Three/Door2';
import T from './components/Three/T';
const Room1 = () => {
  const [hovered, onHover] = useState(null)
  const selected = hovered ? [hovered] : undefined
  function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };
    // Add event listeners
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
  }
  return(
    <>
        <ambientLight intensity={0.4}/>
        <Suspense fallback={null}>
          <RustedKey position={[0, 1, 2]} scale={[0.015, 0.015, 0.015]}/>
          <Camera position={[2.2, 1.2, 0.7]} scale={[0.5, 0.5, 0.5]} />
          <Rose position={[1.85, 1.1, 1.27]} scale={[0.003, 0.003, 0.003]}/>
          <Gramophone scale={[0.01, 0.01, 0.01]} position={[-1.5, 0.35, 4.5]}/>
          <Telephone position={[-1.25, 0.3, 2.8]} scale={[0.1, 0.1, 0.1]}/>
          <Notes position={[-2, 0.28, 2.4]} scale={[0.002, 0.002, 0.002]}/>
          <Notebook position={[2.25, 1.1, 1.85]} scale={[0.02, 0.02, 0.02]}/>
          {/* <Mirror1 keyPressed={useKeyPress('e')} onHover={onHover} position={[0, 1, 1]} scale={[0.6, 0.6, 0.6]}/> */}
          <Door2 scale={[0.007, 0.007, 0.007]} position={[0, 2, 5]}/>
          {/* <Table2 position={[2, 0.2, 1.3]} scale={[0.004, 0.004, 0.004]}/> */}
          <Painting1 scale={[0.001, 0.001, 0.001]} position={[-1.0, 1.4, 0.56]}/> 
          <Painting2 position={[0, 1.8, 0.34]} rotation={[0, Math.PI , 0]}/> 
          <Painting3 scale={[0.008, 0.006, 0.007]} position={[1.0, 1.8, 0.34]} /> 
          <Radio position={[1.8, 0.35, 4.3]} scale={[0.1, 0.1, 0.1]} />
          <Clock scale={[0.07, 0.07, 0.07]} position={[2.35, 1.6, 4.08]} rotation={[0, Math.PI/2, 0]} />
          <Model scale={[0.03, 0.03, 0.03]}/>
          <Model position={[0, 0, 5.4]} scale={[0.03, 0.03, 0.03]}/>
          <Model rotation={[0, Math.PI / 2, 0]} position={[2.7, 0, 2.7]} scale={[0.03, 0.03, 0.03]}/>
          <Model rotation={[0, Math.PI / 2, 0]} position={[-2.7, 0, 2.7]} scale={[0.03, 0.03, 0.03]}/>
          <Floor position={[10, 0, 15]}/>
          <T position={[1.65, 0.3, 1.38]} scale={[0.007, 0.007, 0.007]} rotation={[0, -Math.PI/2, 0]}/>
        </Suspense>
      {/* <FirstPersonControls movementSpeed={0} lookSpeed={0.05}/> */}
      <OrbitControls/>

    </>
  )}


  export default Room1;