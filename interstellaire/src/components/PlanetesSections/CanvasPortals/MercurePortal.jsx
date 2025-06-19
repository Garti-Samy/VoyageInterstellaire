
// Canvas pour intégrer et afficher le modèle,scène 3d
import { Canvas } from "@react-three/fiber"

// OrbitControls pour avoir le controle sur l'objet 3d
import { OrbitControls } from "@react-three/drei"

//Importer le composant PortalMercure
import PortalMercure from "../../3d-components/CardPortal3d/PortalMercure"

//Importer l'image pour Mobile de Mercure
import MobileMercure from "../../../assets/mercure-mobile.webp"

// Function qui va contenir le Canvas du modèle 3D de Mercure
function MercurePortal() {
    return <>
        <div className="sm:block hidden  xl:w-1/3 h-[200px] md:h-[440px]">
            <Canvas>
                {/* // On désactive la possibilité de zoomer dans l'objet, sinon on ne peut pas continuer à scroller */}
                <OrbitControls enableZoom={false} />
                <PortalMercure />
            </Canvas>
        </div>

        {/* // Photo de Mercure pour mobile à la place du modèle 3D */}
        <div className="sm:hidden block mt-10 ">
            <img src={MobileMercure} className="rounded-xl h-auto w-full" alt="" />
        </div>

    </>
}

// Exporter pour le composant MercureSection.jsx dans le dossier PlanetesSections
export default MercurePortal