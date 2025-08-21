import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Model() {
  const glft = useGLTF('/planeColors.glb');
  const modelRef = useRef();
  const { camera } = useThree();
  const { actions } = useAnimations(glft.animations, modelRef);

  useEffect(() => {
   const model = modelRef.current;
    if (!model) return;

    const box = new THREE.Box3().setFromObject(modelRef.current);
    const center = box.getCenter(new THREE.Vector3());
    modelRef.current.position.sub(center);

    const size = box.getSize(new THREE.Vector3()).length();
    const scale = 3; // size;
    model.scale.set(scale, scale, scale);

    const distance = (size * 1.8) / scale;
    camera.position.set(0, 0, distance);
    camera.lookAt(0, 0, 0);

    actions['Flying'].play();

  }, [glft, camera, actions]);
  
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
