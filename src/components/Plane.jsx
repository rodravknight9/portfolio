import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function Model() {
  const glft = useGLTF('/planeColors.glb');
  const modelRef = useRef();
  const { camera } = useThree();
  const { actions } = useAnimations(glft.animations, modelRef);
  const [scale, setScale] = useState(3);

  useEffect(() => {

    const handleResize = () => {

      if(window.innerWidth < 520){
        setScale(2.1)
      }
      else if (window.innerWidth < 768) {
        setScale(2.3)
      } else if (window.innerWidth < 1024) {
        setScale(2.5)
      } else if (window.innerWidth < 1280) {
        setScale(2.7)
      } else if (window.innerWidth < 1536) {
        setScale(2.8)
      } else {
        setScale(2.7);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

   const model = modelRef.current;
    if (!model) return;

    const box = new THREE.Box3().setFromObject(modelRef.current);
    const center = box.getCenter(new THREE.Vector3());
    modelRef.current.position.sub(center);

    const size = box.getSize(new THREE.Vector3()).length();
    model.scale.set(scale, scale, scale);

    // update if in a future the airplane is gonna move along with scroll
    const distance = (size * 1.8) / scale;
    camera.position.set(0.1, 0, distance);
    camera.lookAt(0, 0, 0);

    actions['Flying'].play();

   return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [glft, camera, actions, scale]);
  
  return (
    <mesh ref={modelRef} rotation={[0, -0.8, 0]}>
        <primitive object={glft.scene} />
    </mesh>
  );
}


export const Plane = () => {
    return (
        <div className='w-full h-screen z-10 bg-transparent'>
            <Canvas>
                <directionalLight position={[10, 4, 5]} intensity={8} />
                <ambientLight intensity={6} />
                <pointLight position={[10, 5, 10]} intensity={2} />
                <spotLight position={[20, 50, 10]} angle={0.15} penumbra={1} intensity={1} />
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                <Model  />
            </Canvas>
        </div>
    )
}
