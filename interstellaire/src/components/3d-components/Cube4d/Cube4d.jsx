// Pourquoi un cube 4d ? il represente un espace en quatre dimension ( la hauteur , la largeur , la longueur et le temps ). Un cube en trois dimension est encapsulé dans un autre cube qui forme une quatrième dimension. 

// C'est une théorie probable à l'approche d'un Trou Noir

// Importer les différents composants de React Three Fiber
import { OrbitControls, Environment, Center, MeshTransmissionMaterial, PerspectiveCamera} from "@react-three/drei"




import CubeDimension from "./CubeDimension"



// Création de la function Cube4d qui va contenir le cube
function Cube4d() {


    return <>
        {/* // Donne un angle precis à la caméra ainsi qu'une position */}
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={50} />

        {/* // Composant Three JS qui permet de diriger la lumière dans une ou plusieurs directions */}
        <directionalLight intensity={3} position={[1, 1, 0]} />

        {/* // Permet d'intéragir avec l'objet 3d  */}
        <OrbitControls makeDefault enableZoom={false} />

        {/* // Ce composant permet de simuler une lumière artificielle ou un environement à l'aide d'une HDRI  */}
        <Environment files={'./environmentMaps/cube4d.hdr'} environmentIntensity={15} />
        {/* // Permet de centrer le composant */}
        <CubeDimension/>
        <Center>
            {/* // Mesh et le composant qui crée la forme 3D à l'aide d'une géométrie et d'un material */}
            <mesh scale={3}  position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>

                {/* // Forme cubique */}
                <boxGeometry />

                {/* // Le type de matériel utiliser pour la géométrie */}
                <MeshTransmissionMaterial wireframe />

            </mesh>

        </Center>
    </>


}

// Exporter pour le Canvas de la page Accueil
export default Cube4d