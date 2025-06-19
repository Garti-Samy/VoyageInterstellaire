//Importer le modèle 3D d'Uranus
import Uranus from "../Planets3d/Uranus"


// Function qui va afficher le composant de la planète Uranus
function PortalUranus() {
    return <>
        {/* // Modèle 3d d'Uranus qui a été importer  */}
        <Uranus />
    </>
}


// On exporte ce composant pour UranusPortal.jsx
export default PortalUranus