import React, {Suspense} from 'react';
import {Canvas, useLoader} from '@react-three/fiber';
import {TextureLoader} from 'three/src/loaders/TextureLoader';

const Floor = () => { 
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, ['textures/Rock_Moss_001_basecolor.jpg', 'textures/Rock_Moss_001_height.png', 'textures/Rock_Moss_001_normal.jpg', 'textures/Rock_Moss_001_roughness.jpg', 'textures/Rock_Moss_001_ambientOcclusion.jpg']);
  // const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, ['textures/Ground_Wet_Rocks_001_basecolor.jpg', 'textures/Ground_Wet_Rocks_001_height.png', 'textures/Ground_Wet_Rocks_001_normal.jpg', 'textures/Ground_Wet_Rocks_001_roughness.jpg', 'textures/Ground_Wet_Rocks_001_ambientOcclusion.jpg']);
  return(
    <>
      <mesh position={[0, 0, 2.7]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach='geometry' args={[5,5,20,20]}/>
        <meshStandardMaterial 
         map={colorMap}
         displacementScale={0.5}
         displacementMap={displacementMap}
         normalMap={normalMap}
         roughnessMap={roughnessMap}
         aoMap={aoMap}
         />
      </mesh>
    </>
  )
}

export default Floor;