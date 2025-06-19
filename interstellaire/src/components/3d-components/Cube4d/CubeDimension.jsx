// Importer les différents composants de React Three Fiber
import { OrbitControls, Environment, Center, MeshTransmissionMaterial, PerspectiveCamera } from "@react-three/drei"


// Création de la function Cube3d qui va contenir le cube
function CubeDimension() {

    return <>
        {/* // Donne un angle precis à la caméra ainsi qu'une position */}
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={50} />

        {/* // Composant Three JS qui permet de diriger la lumière dans une ou plusieurs directions */}
        <directionalLight intensity={1} position={[0, 0, 0]} />

        {/* // Permet d'intéragir avec l'objet 3d  */}
        <OrbitControls makeDefault enableZoom={false} />

        {/* // Ce composant permet de simuler une lumière artificielle ou un environement à l'aide d'une HDRI  */}
        <Environment files={'./environmentMaps/cube4d.hdr'} environmentIntensity={15} />
        {/* // Permet de centrer le composant */}
        <Center>
            {/* // Mesh et le composant qui crée la forme 3D à l'aide d'une géométrie et d'un material */}
            <mesh scale={1.7} position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>

                {/* // Forme cubique */}
                <boxGeometry />

                {/* // Le type de matériel utiliser pour la géométrie */}
                <MeshTransmissionMaterial wireframe />

            </mesh>

        </Center>
    </>


}

// Exporter pour le Canvas de la page Accueil
export default CubeDimension