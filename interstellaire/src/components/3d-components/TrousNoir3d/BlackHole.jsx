// Importer les différents composants de React Three Fiber
import { OrbitControls, Environment, Center, MeshTransmissionMaterial, PerspectiveCamera } from "@react-three/drei"



// Function qui sert à crée le Trou-Noir
function BlackHole() {


    return <>
        {/* // Donne un angle precis à la caméra ainsi qu'une position */}
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={50} />

        {/* // Composant Three JS qui permet de diriger la lumière dans une ou plusieurs directions */}
        <directionalLight intensity={0} position={[0, 0, 0]} />

        {/* // Permet d'intéragir avec l'objet 3d  */}
        <OrbitControls makeDefault enableZoom={false} />

        {/* // Ce composant permet de simuler une lumière artificielle ou un environement à l'aide d'une HDRI  */}
        <Environment files={'./environmentMaps/black.hdr'} environmentIntensity={4} />

        {/* // Permet de centrer le composant */}
        <Center>

            {/* // Mesh et le composant qui crée la forme 3D à l'aide d'une géométrie et d'un material */}
            <mesh scale={2.8} position={[0, -0.2, 0]}>

                {/* // Forme Sphérique */}
                <sphereGeometry args={[1, 64, 64]} />

                {/* // Le type de matériel utiliser pour la géométrie */}
                <MeshTransmissionMaterial />

            </mesh>
        </Center>
    </>
}

// Exporter ce composant dans le dossier TrousNoirsSection
export default BlackHole