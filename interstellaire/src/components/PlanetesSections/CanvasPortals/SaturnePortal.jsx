// Canvas pour intégrer et afficher le modèle,scène 3d
import { Canvas } from "@react-three/fiber"

// OrbitControls pour avoir le controle sur l'objet 3d
import { OrbitControls } from "@react-three/drei"

//Importer le composant PortalSaturne
import PortalSaturne from "../../3d-components/CardPortal3d/PortalSaturne"

//Importer l'image pour Mobile de Saturne
import MobileSaturne from "../../../assets/saturne-mobile.webp"


// Function qui va contenir le Canvas du modèle 3D de Saturne
function SaturnePortal() {
    return <>
        <div className="sm:block hidden xl:w-1/3 h-[200px] md:h-[440px]">
            <Canvas>
                {/* // On désactive la possibilité de zoomer dans l'objet, sinon on ne peut pas continuer à scroller */}
                <OrbitControls enableZoom={false} />
                <PortalSaturne />
            </Canvas>
        </div>

        {/* // Photo de Saturne pour mobile à la place du modèle 3D */}
        <div className="sm:hidden block mt-10 ">
            <img src={MobileSaturne} className="rounded-xl h-auto w-full" alt="" />
        </div>
    </>
}

// Exporter pour le composant SaturneSection.jsx dans le dossier PlanetesSections
export default SaturnePortal