/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Jochon (https://sketchfab.com/jochon)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/08b62c750b414ea3b7fb6e2979ebb676
title: Table
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.04, 0.15, -0.34]} rotation={[-Math.PI / 2, 0, 0]} scale={15}>
            <mesh geometry={nodes.Table_Table_Material_0.geometry} material={materials.Table_Material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
