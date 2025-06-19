// Importer le Canvas de React Three Fiber ( il est obligatoire pour qu'un objet 3D s'affiche à l'écran)
import { Canvas } from "@react-three/fiber"


//Importer le modèle 3d du Cube 4D
import Cube4d from '../../3d-components/Cube4d/Cube4d'


// Function qui va afficher le Cube 4D dans le composant Canvas
function CanvasFourDimension() {


    return <>
        <Canvas className="w-full h-full sm:block hidden">
            <Cube4d/>
        </Canvas>
    </>


}

// Exporter pour le composant QuatrièmeDimension.jsx
export default CanvasFourDimension