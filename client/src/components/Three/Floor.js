import React, {Suspense} from 'react';
import {Canvas, useLoader} from '@react-three/fiber';
import {TextureLoader} from 'three/src/loaders/TextureLoader';

const Floor = () => { 
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, ['textures/Dirt_006_Base_Color.jpg', 'textures/Dirt_006_Height.png', 'textures/Dirt_006_Normal.jpg', 'textures/Dirt_006_Roughness.jpg', 'textures/Dirt_006_Ambient_Occlusion.jpg']);
  return(
    <>
      <mesh position={[2.75, 0, 2.7]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach='geometry' args={[11,5,20,20]}/>
        <meshStandardMaterial 
         map={colorMap}
         displacementScale={0.3}
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