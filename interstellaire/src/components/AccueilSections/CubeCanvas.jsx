// Importer le Canvas de React Three Fiber ( il est obligatoire pour qu'un objet 3D s'affiche à l'écran)
import { Canvas } from "@react-three/fiber"

// Importer le composant avec le modèle 3D
import Cube3d from "../3d-components/Cube3d"


// Function qui va récupérer le composant Cube3d pour l'afficher dans un Canvas
function CubeCanvas() {
    return <>
        <Canvas>
            <Cube3d />
        </Canvas>
    </>
}

// Exporter ce composant pour Accueil.jsx
export default CubeCanvas