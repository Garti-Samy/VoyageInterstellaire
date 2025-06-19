// Importer le Canvas de React Three Fiber ( il est obligatoire pour qu'un objet 3D s'affiche à l'écran)
import { Canvas } from "@react-three/fiber"


//Importer le modèle 3d du Trous Noir
import BlackHole from '../../3d-components/TrousNoir3d/BlackHole'


// Function qui va afficher le Trou Noir dans le composant Canvas
function CanvasBlackHole() {


    return <>
        <Canvas className="w-full h-full sm:block hidden">
            {/* // Modèle 3D du Trou Noir */}
            <BlackHole />
        </Canvas>
    </>


}

// Exporter pour le composant BlackHoleSection.jsx dans le dossier TrousNoirsSection
export default CanvasBlackHole