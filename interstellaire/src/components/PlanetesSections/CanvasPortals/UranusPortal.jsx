// Canvas pour intégrer et afficher le modèle,scène 3d
import { Canvas } from "@react-three/fiber"

// OrbitControls pour avoir le controle sur l'objet 3d
import { OrbitControls } from "@react-three/drei"

//Importer le composant PortalUranus
import PortalUranus from "../../3d-components/CardPortal3d/PortalUranus"

//Importer l'image pour Mobile d'Uranus
import MobileUranus from "../../../assets/uranus-mobile.jpg"


// Function qui va contenir le Canvas du modèle 3D d'Uranus
function UranusPortal() {
    return <>
        <div className="sm:block hidden xl:w-1/3 h-[200px] md:h-[440px]">
            <Canvas>
                {/* // On désactive la possibilité de zoomer dans l'objet, sinon on ne peut pas continuer à scroller */}
                <OrbitControls enableZoom={false} />
                <PortalUranus />
            </Canvas>
        </div>

        {/* // Photo d'Uranus pour mobile à la place du modèle 3D */}
        <div className="sm:hidden block mt-10 ">
            <img src={MobileUranus} className="rounded-xl h-auto w-full" alt="" />
        </div>
    </>
}

// Exporter pour le composant UranusSection.jsx dans le dossier PlanetesSections
export default UranusPortal