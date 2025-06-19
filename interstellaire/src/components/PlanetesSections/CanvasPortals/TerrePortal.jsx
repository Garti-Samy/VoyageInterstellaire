//Importer les éléments de React Three Fiber

// Canvas pour intégrer et afficher le modèle,scène 3d
import { Canvas } from "@react-three/fiber"

// OrbitControls pour avoir le controle sur l'objet 3d
import { OrbitControls } from "@react-three/drei"

//Importer le composant Portal Terre
import PortalTerre from "../../3d-components/CardPortal3d/PortalTerre"

//Importer l'image pour Mobile de la Terre
import MobileTerre from "../../../assets/terre-mobile.webp"


// Function qui va contenir le Canvas du modèle 3D de la terre
function TerrePortal() {
    return <>
        <div className="sm:block hidden xl:w-1/3 h-[200px] md:h-[440px]">
            <Canvas>
                {/* // On désactive la possibilité de zoomer dans l'objet, sinon on ne peut pas continuer à scroller */}
                <OrbitControls enableZoom={false} />
                <PortalTerre />
            </Canvas>
        </div>

        {/* // Photo de la Terre pour mobile à la place du modèle 3D */}
        <div className="sm:hidden block mt-10 ">
            <img src={MobileTerre} className="rounded-xl h-auto w-full" alt="" />
        </div>
    </>
}

// Exporter pour le composant TerreSection.jsx dans le dossier PlanetesSections
export default TerrePortal