/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SebastianSosnowski (https://sketchfab.com/SebastianSosnowski)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/painting-by-zdzislaw-beksinski-4-b41db1a76558483da7386c752aaf237f
title: Painting by Zdzislaw Beksinski (4)
*/

import React, { useRef, useLayoutEffect, useEffect, useState } from 'react'
import { useGLTF, meshBounds } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../models/painting3/scene.gltf')
  const [hovered, setHover] = useState(false);

  useEffect(() => {
    if(hovered){
      alert('Painting 3');
    }else{
      console.log('as');
    }
    // document.body.style.cursor = hovered ? "grab" : "auto";
  }, [hovered]);
  useLayoutEffect(
    () =>{
      for(let i = 0; i < nodes.length; i++){
        if(nodes[i].isMesh){
          nodes[i].raycast = meshBounds;
        }
      }
    },
    []
  );
  return (
    <group raycast={meshBounds} onPointerDown={(event) => setHover(true)} onPointerOut={(event) => setHover(false)} ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={100}>
            <mesh geometry={nodes.Obraz_1_0.geometry} material={materials.material} />
          </group>
          <group position={[0, 0, 0.5]} scale={100}>
            <mesh geometry={nodes.Szyba_2_0.geometry} material={materials.material_1} />
          </group>
          <group rotation={[Math.PI, 0, -Math.PI]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Tyl_3_0.geometry} material={materials.material_2} />
          </group>
          <group position={[0, 0, 0.5]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.RamaSplajn_4_0.geometry} material={materials.material_3} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../models/painting3/scene.gltf')
