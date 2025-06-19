// Canvas pour intégrer et afficher le modèle,scène 3d
import { Canvas } from "@react-three/fiber"

// OrbitControls pour avoir le controle sur l'objet 3d
import { OrbitControls } from "@react-three/drei"

//Importer le composant PortalMars
import PortalMars from "../../3d-components/CardPortal3d/PortalMars"

//Importer l'image pour Mobile de Mars
import MobileMars from "../../../assets/mars-mobile.png"


// Function qui va contenir le Canvas du modèle 3D de Mars
function MarsPortal() {
    return <>
        <div className="sm:block hidden xl:w-1/3 h-[200px] md:h-[440px]">
            <Canvas>
                {/* // On désactive la possibilité de zoomer dans l'objet, sinon on ne peut pas continuer à scroller */}
                <OrbitControls enableZoom={false} />
                <PortalMars />
            </Canvas>
        </div>

        {/* // Photo de Mars pour mobile à la place du modèle 3D */}
        <div className="sm:hidden block mt-10 ">
            <img src={MobileMars} className="rounded-xl h-auto w-full" alt="" />
        </div>
    </>
}

// Exporter pour le composant MarsSection.jsx dans le dossier PlanetesSections
export default MarsPortal