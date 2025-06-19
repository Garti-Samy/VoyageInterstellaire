// Pour la Galaxie je me suis inspiré de ce code-ci :
// https://codesandbox.io/p/sandbox/react-three-fiber-galaxy-generator-threejs-journey-forked-76k5q

// également de mes formations acheté
// https://threejs-journey.com/#bruno-simon
// https://wawasensei.dev/courses/react-three-fiber





//Importer les différent Hooks de React
import { useRef, useMemo } from 'react';



//Importer la bibliothèque THREE JS
import * as THREE from 'three';






//Importer les shaders qui vont permettre a chacune des particule d'ètre arrondie 
import GalaxieVertexShader from "../Shaders/GalaxieShader/vertex.glsl"
import GalaxieFragmentShader from "../Shaders/GalaxieShader/fragment.glsl"

const Elliptique3d = () => {

  // Les points qui vont ètre affiché à l'écran
  const points = useRef(null);

  // Nombre de particule afficher à l'écran
  const particlesCount = 5000;

  // Nombre de branche que va avoir la galaxie
  const branches = 5;
  const radius = 10;
  const spin = 2;
  const randomness = 0.5;
  const randomnessPower = 4;

  //Couleurs de la galaxie ( mélange de deux couleursn )
  const insideColor = '#E6007E';
  const outsideColor = '#006AFF';


  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const colorInside = new THREE.Color(insideColor);
    const colorOutside = new THREE.Color(outsideColor);



    //Boucle qui va afficher le nombre de particules souhaité ( 10 000 )
    // Si I est inférieur au nombre de particule ( particlesCount = 10 000) alors on continu d'incrémenter
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;

      // Position
      const radius_i = Math.random() * radius;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = radius_i * spin;

      const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius_i;
      const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius_i;
      const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius_i;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius_i + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius_i + randomZ;

      // Color
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius_i / radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    return { positions, colors };
  }, []);



  return (
    <points ref={points} position={[0, 2, 0]} rotation={[0, 0, 0]} scale={0.4}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={positions.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={GalaxieVertexShader}
        fragmentShader={GalaxieFragmentShader}

        //Rajoute un effet de glow doux
        blending={THREE.AdditiveBlending}
        // évite des effets d’écrasement
        depthWrite={false}
        transparent={true}
        uniforms={{
          uInsideColor: { value: new THREE.Color('#ff7b00') },
          uOutsideColor: { value: new THREE.Color('#6e44ff') }
        }}
      />
    </points>
  );
};


// Exporter la Galaxy3d pour le composant EllipGalaxie.jsx
export default Elliptique3d;