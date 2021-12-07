/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: morff (https://sketchfab.com/morff)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/broken-mirror-5542db6ae060468f8f8525842546aec7
title: broken mirror
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Mirror1({ keyPressed ,onHover, ...props }) {
  console.log(keyPressed);
  const group = useRef()
  const ref = useRef();
  const { nodes, materials } = useGLTF('../../../models/mirror1/scene.gltf')
  return (
    <group ref={group} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.material_1} />
          <mesh ref={ref} onPointerOver={(e) => {e.stopPropagation(); onHover(ref)}} onPointerOut={(e)=> onHover(null)} geometry={nodes.defaultMaterial_1.geometry} material={materials.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../models/mirror1/scene.gltf')
