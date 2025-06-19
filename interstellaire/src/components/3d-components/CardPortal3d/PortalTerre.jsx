//Importer le modèle 3D de la Terre
import Terre from "../Planets3d/Terre"

// Function qui va afficher le composant de la planète Terre
function PortalTerre() {
    return <>

        {/* // Modèle 3d de la Terre qui a été importer  */}
        <Terre />
    </>
}

//Exporter pour le composant TerrePortal.jsx
export default PortalTerre