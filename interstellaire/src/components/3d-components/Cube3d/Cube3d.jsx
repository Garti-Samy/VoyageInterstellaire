// Importer les différents composants de React Three Fiber
import { OrbitControls, Environment, Center, MeshTransmissionMaterial, PerspectiveCamera } from "@react-three/drei"

// Importer les différents Hooks de React Three Fiber
import { useFrame } from "@react-three/fiber"


// Importer les différents Hooks de React
import { useRef } from "react"



// Création de la function Cube3d qui va contenir le cube
function Cube3d() {


    // Utiliser useRef pour placer la ref au mesh
    const rotate = useRef()

    // Utiliser le hook useFrame qui va mettre à jour chaque seconde le rendu et permettre au cube de tourner sur l'axe x
    useFrame((state, delta) => {
        rotate.current.rotation.z += delta * 0.2
        rotate.current.rotation.x += delta * 0.2
    })





    return <>
        {/* // Donne un angle precis à la caméra ainsi qu'une position */}
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={50} />

        {/* // Composant Three JS qui permet de diriger la lumière dans une ou plusieurs directions */}
        <directionalLight intensity={1} position={[0, 0, 0]} />

        {/* // Permet d'intéragir avec l'objet 3d  */}
        <OrbitControls makeDefault enableZoom={false} />

        {/* // Ce composant permet de simuler une lumière artificielle ou un environement à l'aide d'une HDRI  */}
        <Environment files={'./environmentMaps/nebula.hdr'} environmentIntensity={15} />

        {/* // Permet de centrer le composant */}
        <Center>

            {/* // Mesh et le composant qui crée la forme 3D à l'aide d'une géométrie et d'un material */}
            <mesh scale={3.6} ref={rotate} position={[0, 0, 0]}>

                {/* // Forme cubique */}
                <boxGeometry />

                {/* // Le type de matériel utiliser pour la géométrie */}
                <MeshTransmissionMaterial />
                

            </mesh>

        </Center>
    </>


}

// Exporter pour le Canvas de la page Accueil
export default Cube3d