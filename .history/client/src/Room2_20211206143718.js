import React, { Suspense, useRef, useState } from 'react';
import { OrbitControls, FirstPersonControls } from '@react-three/drei';
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
import Map from './components/Map.js';
import T from './components/T';
// import Table from './components/Three/Table2';

const Room2 = () => {


  return(
    <>
        <ambientLight intensity={0.4}/>
        <Suspense fallback={null}>
          <Painting1 scale={[0.001, 0.001, 0.001]} position={[0, 1.4, 0.56]}/> 
          <Painting2 position={[2, 1.8, 0.34]} /> 
          <Painting3 scale={[0.008, 0.006, 0.007]} position={[1.2, 1.8, 0.34]} /> 
          <Frame position={[-0.7, 1.17, 0.65]} scale={[0.25, 0.25, 0.25]} />
          <Newspaper position={[-1.3,1.1,1.3]} /> 
          <TV position={[2, 0.75, 2.5]} scale={[0.5, 0.5, 0.5]} />
          <Door position={[-2.7, 1.2, 2.7]} scale={[0.39, 0.39, 0.39]}/> 
          <Radio position={[1.8, 0.35, 4.3]} scale={[0.1, 0.1, 0.1]} />
          <Key scale={[0.0005, 0.0005, 0.0005]} position={[2, 3, 5]} />
          <Clock scale={[0.07, 0.07, 0.07]} position={[0, 1.6, 5.08]} />
          <Boots position={[0, 0.2, 4.5]} scale={[3, 3, 3]}/>
          {/* <Table position={[-1, 0.2, 1 ]} scale={[0.009, 0.009, 0.009]} /> */}
          <Map position={[0, 0, 8]}/>
          <Model scale={[0.03, 0.03, 0.03]}/>
          <Model position={[0, 0, 5.4]} scale={[0.03, 0.03, 0.03]}/>
          <Model rotation={[0, Math.PI / 2, 0]} position={[2.7, 0, 2.7]} scale={[0.03, 0.03, 0.03]}/>
          <Model rotation={[0, Math.PI / 2, 0]} position={[-2.7, 0, 2.7]} scale={[0.03, 0.03, 0.03]}/>
          <T scale={[0.01, 0.01, 0.01]}/>
          <Floor position={[10, 0, 15]}/>
        </Suspense>
        <FirstPersonControls movementSpeed={0} lookSpeed={0.05}/>
    </>
  )}


  export default Room2;