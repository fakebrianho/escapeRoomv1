import React, {Suspense} from 'react';
import {Canvas, useLoader} from '@react-three/fiber';
import {TextureLoader} from 'three/src/loaders/TextureLoader';

const Map = () => { 
  // const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, ['textures/Rock_Moss_001_basecolor.jpg', 'textures/Rock_Moss_001_height.png', 'textures/Rock_Moss_001_normal.jpg', 'textures/Rock_Moss_001_roughness.jpg', 'textures/Rock_Moss_001_ambientOcclusion.jpg']);
  // const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, ['textures/Ground_Wet_Rocks_001_basecolor.jpg', 'textures/Ground_Wet_Rocks_001_height.png', 'textures/Ground_Wet_Rocks_001_normal.jpg', 'textures/Ground_Wet_Rocks_001_roughness.jpg', 'textures/Ground_Wet_Rocks_001_ambientOcclusion.jpg']);
  const [colorMap] = useLoader(TextureLoader, ['textures/wm.png']);
  const clicked = () => {
    alert('maps');
  }
  return(
    <>
      <mesh onClick={clicked} position={[0, 1.5, 5]} rotation={[0, Math.PI, 0]}>
        <planeBufferGeometry attach='geometry' args={[2,1.125,20,20]}/>
        <meshStandardMaterial map={colorMap}/>
      </mesh>
    </>
  )
}

export default Map;