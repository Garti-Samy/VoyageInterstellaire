//Importer le modèle 3D de Saturne
import Saturne from "../Planets3d/Saturne"


// Function qui va afficher le composant de la planète Saturne
function PortalSaturne() {
    return <>
        {/* // Modèle 3d de Saturne qui a été importer  */}
        <Saturne />
    </>
}


// On exporte ce composant pour SaturnePortal.jsx
export default PortalSaturne