/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: 8bit (https://sketchfab.com/8_bit)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/rose-df09026cd0f7440b840dc793ecedb14f
title: Rose
*/

import React, { useRef, useLayoutEffect, useEffect, useState } from 'react'
import { meshBounds, useGLTF } from '@react-three/drei'

export default function Rose({...props }) {
  const group = useRef()

  const { nodes, materials } = useGLTF('../../../models/rose/scene.gltf')
  const [hovered, setHover] = useState(false);

  useEffect(() => {
    if(hovered){
      alert('A surprisingly fresh looking Rose, there must be some source of water in this room...');
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
          <group position={[-1.11, 66.12, -0.03]} rotation={[0, 0.7, 0]} scale={[0.76, 0.76, 0.76]}>
            <group position={[-1.14, -23.83, 1.74]}>
              <mesh
                geometry={nodes['Line008_Material_#47_0'].geometry}
                material={nodes['Line008_Material_#47_0'].material}
              />
            </group>
          </group>
          <group position={[0.83, 50.8, -0.83]}>
            <group position={[7.8, 13.25, 1.16]}>
              <mesh
                geometry={nodes['Line005_Material_#47_0'].geometry}
                material={nodes['Line005_Material_#47_0'].material}
              />
            </group>
          </group>
          <group position={[0.07, 58.66, 0.33]}>
            <group position={[-0.15, 3.02, 0]}>
              <mesh
                geometry={nodes['Line001_Material_#47_0'].geometry}
                material={nodes['Line001_Material_#47_0'].material}
              />
            </group>
          </group>
          <group position={[5.87, 50.44, -2.85]} rotation={[-0.52, -0.34, 0.52]}>
            <group position={[23.23, 7.2, 9.98]}>
              <mesh
                geometry={nodes['Plane002_Material_#48_0'].geometry}
                material={nodes['Plane002_Material_#48_0'].material}
              />
            </group>
          </group>
          <group position={[0, 23.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes['Cylinder001_Material_#49_0'].geometry}
              material={nodes['Cylinder001_Material_#49_0'].material}
            />
          </group>
          <group position={[0, 24.11, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes['Object061_Material_#49_0'].geometry}
              material={nodes['Object061_Material_#49_0'].material}
            />
          </group>
          <group position={[-0.1, 120.51, 0.33]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['Sphere002_Material_#50_0'].geometry} material={materials.Material_50} />
          </group>
          <group position={[-1.66, 110.71, 0.34]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-1.24, -0.17, -16.36]} rotation={[-Math.PI, 0, 0]} scale={[0.97, 0.97, 0.34]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object060_Material_#48_0'].geometry}
                  material={nodes['Object060_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.19, 0.01, 11.55]} rotation={[-Math.PI, 0, 0.44]} scale={[0.13, 0.13, 0.42]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object059_Material_#48_0'].geometry}
                  material={nodes['Object059_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.19, 0.01, 11.55]} rotation={[-Math.PI, 0, 0.44]} scale={[0.13, 0.13, 0.42]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object058_Material_#48_0'].geometry}
                  material={nodes['Object058_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.19, 0.01, 11.55]} rotation={[-Math.PI, 0, 0.44]} scale={[0.13, 0.13, 0.42]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object057_Material_#48_0'].geometry}
                  material={nodes['Object057_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.53, 1.57, 1.57]} rotation={[Math.PI, 0, -1.83]} scale={[0.62, 0.62, 1.4]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object048_Material_#48_0'].geometry}
                  material={nodes['Object048_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.53, 1.57, 1.57]} rotation={[Math.PI, 0, -1.83]} scale={[0.62, 0.62, 1.4]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object049_Material_#48_0'].geometry}
                  material={nodes['Object049_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.09, 0.9, 1.56]} rotation={[-Math.PI, 0, -0.87]} scale={[0.45, 0.45, 1.35]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object047_Material_#48_0'].geometry}
                  material={nodes['Object047_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.09, 0.9, 1.56]} rotation={[-Math.PI, 0, -0.87]} scale={[0.45, 0.45, 1.35]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object046_Material_#48_0'].geometry}
                  material={nodes['Object046_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-1.48, 1.8, 1.54]} rotation={[Math.PI, 0, -2.62]} scale={[0.9, 0.9, 1.2]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object039_Material_#48_0'].geometry}
                  material={nodes['Object039_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-1.35, 1.6, 1.54]} rotation={[Math.PI, 0, -2.62]} scale={[0.74, 0.74, 1.2]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object041_Material_#48_0'].geometry}
                  material={nodes['Object041_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-1.48, 1.8, 1.54]} rotation={[Math.PI, 0, -2.62]} scale={[0.9, 0.9, 1.2]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object038_Material_#48_0'].geometry}
                  material={nodes['Object038_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-1.48, 1.8, 1.54]} rotation={[Math.PI, 0, -2.62]} scale={[0.9, 0.9, 1.2]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object040_Material_#48_0'].geometry}
                  material={nodes['Object040_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-1.38, 0.93, -1.36]} rotation={[Math.PI, 0, -1.92]} scale={[1.06, 1.06, 1.14]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object054_Material_#48_0'].geometry}
                  material={nodes['Object054_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.63, 0.01, 1.4]} rotation={[-Math.PI, 0, 0.44]} scale={[0.27, 0.27, 0.9]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object036_Material_#48_0'].geometry}
                  material={nodes['Object036_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0.56, 1.63, -2.52]} rotation={[-Math.PI, 0, -1.13]} scale={[1.06, 1.06, 1.14]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object053_Material_#48_0'].geometry}
                  material={nodes['Object053_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.63, 0.01, 1.4]} rotation={[-Math.PI, 0, 0.44]} scale={[0.27, 0.27, 0.9]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object037_Material_#48_0'].geometry}
                  material={nodes['Object037_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.53, 1.57, 1.57]} rotation={[Math.PI, 0, -1.83]} scale={[0.62, 0.62, 1.4]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object055_Material_#48_0'].geometry}
                  material={nodes['Object055_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0.56, 1.63, -2.52]} rotation={[-Math.PI, 0, -1.13]} scale={[1.06, 1.06, 1.14]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object051_Material_#48_0'].geometry}
                  material={nodes['Object051_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-1.35, 1.6, 1.54]} rotation={[Math.PI, 0, -2.62]} scale={[0.74, 0.74, 1.2]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object050_Material_#48_0'].geometry}
                  material={nodes['Object050_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.52, 2.25, -2.52]} rotation={[Math.PI, 0, -1.92]} scale={[1.06, 1.06, 1.14]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object052_Material_#48_0'].geometry}
                  material={nodes['Object052_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-1.35, 1.6, 1.54]} rotation={[Math.PI, 0, -2.62]} scale={[0.74, 0.74, 1.2]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object056_Material_#48_0'].geometry}
                  material={nodes['Object056_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0, 0.54, 1.44]} rotation={[-Math.PI, 0, -0.7]} scale={[0.58, 0.58, 1.23]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object026_Material_#48_0'].geometry}
                  material={nodes['Object026_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0, 0.54, 1.44]} rotation={[-Math.PI, 0, -0.7]} scale={[0.58, 0.58, 1.23]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object029_Material_#48_0'].geometry}
                  material={nodes['Object029_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.3, 1.26, 1.42]} rotation={[-Math.PI, 0, -1.48]} scale={[0.7, 0.7, 1.05]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object023_Material_#48_0'].geometry}
                  material={nodes['Object023_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0, 0.54, 1.44]} rotation={[-Math.PI, 0, -0.7]} scale={[0.58, 0.58, 1.23]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object027_Material_#48_0'].geometry}
                  material={nodes['Object027_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.3, 1.26, 1.42]} rotation={[-Math.PI, 0, -1.48]} scale={[0.7, 0.7, 1.05]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object024_Material_#48_0'].geometry}
                  material={nodes['Object024_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.3, 1.26, 1.42]} rotation={[-Math.PI, 0, -1.48]} scale={[0.7, 0.7, 1.05]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object025_Material_#48_0'].geometry}
                  material={nodes['Object025_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0, 0.54, 1.44]} rotation={[-Math.PI, 0, -0.7]} scale={[0.58, 0.58, 1.23]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object028_Material_#48_0'].geometry}
                  material={nodes['Object028_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.3, 1.26, 1.42]} rotation={[-Math.PI, 0, -1.48]} scale={[0.7, 0.7, 1.05]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object022_Material_#48_0'].geometry}
                  material={nodes['Object022_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-1.48, 1.8, 1.54]} rotation={[Math.PI, 0, -2.62]} scale={[0.9, 0.9, 1.2]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object042_Material_#48_0'].geometry}
                  material={nodes['Object042_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.3, 0.73, 1.51]} rotation={[-Math.PI, 0, -0.7]} scale={[0.29, 0.29, 1.03]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object043_Material_#48_0'].geometry}
                  material={nodes['Object043_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.09, 0.9, 1.56]} rotation={[-Math.PI, 0, -0.87]} scale={[0.45, 0.45, 1.35]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object044_Material_#48_0'].geometry}
                  material={nodes['Object044_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.53, 1.57, 1.57]} rotation={[Math.PI, 0, -1.83]} scale={[0.62, 0.62, 1.4]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object045_Material_#48_0'].geometry}
                  material={nodes['Object045_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0.49, -0.37, -2.13]} rotation={[-Math.PI, 0, 0]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object006_Material_#48_0'].geometry}
                  material={nodes['Object006_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0.59, 0.81, -2.13]} rotation={[-Math.PI, 0, -Math.PI / 4]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object010_Material_#48_0'].geometry}
                  material={nodes['Object010_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0.59, 0.81, -2.13]} rotation={[-Math.PI, 0, -Math.PI / 4]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object011_Material_#48_0'].geometry}
                  material={nodes['Object011_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.1, 1.57, -2.13]} rotation={[-Math.PI, 0, -1.48]} scale={[0.95, 0.95, 0.95]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object014_Material_#48_0'].geometry}
                  material={nodes['Object014_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.1, 1.57, -2.13]} rotation={[-Math.PI, 0, -1.48]} scale={[0.95, 0.95, 0.95]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object015_Material_#48_0'].geometry}
                  material={nodes['Object015_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.18, 1.44, 1.42]} rotation={[-Math.PI, 0, -1.48]} scale={[0.85, 0.85, 1.05]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object019_Material_#48_0'].geometry}
                  material={nodes['Object019_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.18, 1.44, 1.42]} rotation={[-Math.PI, 0, -1.48]} scale={[0.85, 0.85, 1.05]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object020_Material_#48_0'].geometry}
                  material={nodes['Object020_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.4, -0.1, 1.44]} rotation={[-Math.PI, 0, 0.26]} scale={[0.42, 0.42, 1.18]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object031_Material_#48_0'].geometry}
                  material={nodes['Object031_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.63, 0.01, 1.4]} rotation={[-Math.PI, 0, 0.44]} scale={[0.27, 0.27, 0.9]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object035_Material_#48_0'].geometry}
                  material={nodes['Object035_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.15, -0.37, -2.13]} rotation={[-Math.PI, 0, 0]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object005_Material_#48_0'].geometry}
                  material={nodes['Object005_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0.59, 0.81, -2.13]} rotation={[-Math.PI, 0, -Math.PI / 4]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object013_Material_#48_0'].geometry}
                  material={nodes['Object013_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.18, 1.44, 1.42]} rotation={[-Math.PI, 0, -1.48]} scale={[0.85, 0.85, 1.05]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object021_Material_#48_0'].geometry}
                  material={nodes['Object021_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.4, -0.1, 1.44]} rotation={[-Math.PI, 0, 0.26]} scale={[0.42, 0.42, 1.18]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object030_Material_#48_0'].geometry}
                  material={nodes['Object030_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.1, 1.57, -2.13]} rotation={[-Math.PI, 0, -1.48]} scale={[0.95, 0.95, 0.95]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object016_Material_#48_0'].geometry}
                  material={nodes['Object016_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0.49, -0.37, -2.13]} rotation={[-Math.PI, 0, 0]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object007_Material_#48_0'].geometry}
                  material={nodes['Object007_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.4, -0.1, 1.44]} rotation={[-Math.PI, 0, 0.26]} scale={[0.42, 0.42, 1.18]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object032_Material_#48_0'].geometry}
                  material={nodes['Object032_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.4, -0.1, 1.44]} rotation={[-Math.PI, 0, 0.26]} scale={[0.42, 0.42, 1.18]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object033_Material_#48_0'].geometry}
                  material={nodes['Object033_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.63, 0.01, 1.4]} rotation={[-Math.PI, 0, 0.44]} scale={[0.27, 0.27, 0.9]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object034_Material_#48_0'].geometry}
                  material={nodes['Object034_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.1, 1.57, -2.13]} rotation={[-Math.PI, 0, -1.48]} scale={[0.95, 0.95, 0.95]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object017_Material_#48_0'].geometry}
                  material={nodes['Object017_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0.59, 0.81, -2.13]} rotation={[-Math.PI, 0, -Math.PI / 4]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object012_Material_#48_0'].geometry}
                  material={nodes['Object012_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0.49, -0.37, -2.13]} rotation={[-Math.PI, 0, 0]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object008_Material_#48_0'].geometry}
                  material={nodes['Object008_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[0.49, -0.37, -2.13]} rotation={[-Math.PI, 0, 0]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object009_Material_#48_0'].geometry}
                  material={nodes['Object009_Material_#48_0'].material}
                />
              </group>
            </group>
            <group position={[-0.18, 1.44, 1.42]} rotation={[-Math.PI, 0, -1.48]} scale={[0.85, 0.85, 1.05]}>
              <group position={[0.27, -0.1, -4.97]}>
                <mesh
                  geometry={nodes['Object018_Material_#48_0'].geometry}
                  material={nodes['Object018_Material_#48_0'].material}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../models/rose/scene.gltf')
