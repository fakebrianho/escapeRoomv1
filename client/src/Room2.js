import React, { Suspense, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import Model from './components/Three/Wall';
import Lights from './components/Three/lights'
import Painting1 from './components/Three/Painting1';
import Floor from './components/Three/Floor';
import Painting2 from './components/Three/Painting2'

const Room = () => {
  const beenClicked = () => {
    alert('painting clicked');
  }
  const wallClicked = () => {
    alert('wall clicked');
  }
  // const ref = useRef();
  // useFrame(({clock})=>(ref.current.uTime = clock.getElapsedTime()));
  return(
    <>
        <Lights />
        <Suspense fallback={null}>
          <Painting1 onClick={(e)=>{ e.stopPropagation(); alert('wwoo')}} scale={[0.001, 0.001, 0.001]} position={[0, 1.4, 0.56]}/>
          {/* <Painting2 onClick={(e)=>{ e.stopPropagation(); alert('wwoasdfo')}} scale={[0.15, 0.15, 0.15]} position={[2, 1.8, 0.34]} /> */}
          <Painting2 position={[2, 1.8, 0.34]} />
          <Model scale={[0.03, 0.03, 0.03]}/>
          <Model position={[5.4, 0, 0]} scale={[0.03, 0.03, 0.03]}/>
          <Model position={[0, 0, 5.4]} scale={[0.03, 0.03, 0.03]}/>
          <Model position={[5.4, 0, 5.4]} scale={[0.03, 0.03, 0.03]}/>
          <Model rotation={[0, Math.PI / 2, 0]} position={[8.1, 0, 2.7]} scale={[0.03, 0.03, 0.03]}/>
          <Model rotation={[0, Math.PI / 2, 0]} position={[-2.7, 0, 2.7]} scale={[0.03, 0.03, 0.03]}/>
          <Floor position={[10, 0, 15]}/>
        </Suspense>
    </>
  )}


  export default Room;