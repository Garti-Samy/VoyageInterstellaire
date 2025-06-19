// Importer le Canvas de React Three Fiber ( il est obligatoire pour qu'un objet 3D s'affiche à l'écran)
import { Canvas } from "@react-three/fiber"

//Importer le modèle 3d de l'Uinivers Observable
import Univers3d from "../../3d-components/UniversObservable3d/Univers"

// Function qui va afficher la sphère qui représente l'Univers observable, dans le composant Canvas
function CanvasUnivers() {


    return <>
        <Canvas className="w-full h-full sm:block hidden">
            {/* // Sphère 3D qui représente l'Univers Observable */}
            <Univers3d />
        </Canvas>
    </>


}
// Exporter pour le composant UniversObservable.jsx dans le dossier AccueilSections
export default CanvasUnivers