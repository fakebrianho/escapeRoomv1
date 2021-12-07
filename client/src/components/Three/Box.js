/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Václav Pleticha (https://sketchfab.com/klidas8)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/steampunk-chest-8971ef185bae4ead9fb26ee3546d3ac4
title: Steampunk chest
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Box({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../../../models/box/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            geometry={nodes.Object_6.geometry}
            material={materials.MAT_chest_01}
            skeleton={nodes.Object_6.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_7.geometry}
            material={materials.MAT_chest_02}
            skeleton={nodes.Object_7.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_8.geometry}
            material={materials.MAT_chest_03}
            skeleton={nodes.Object_8.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../models/box/scene.gltf')