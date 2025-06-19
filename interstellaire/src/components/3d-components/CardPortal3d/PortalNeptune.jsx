//Importer le modèle 3D de Neptune
import Neptune from "../Planets3d/Neptune"


// Function qui va afficher le composant de la planète Neptune
function PortalNeptune() {
    return <>
        {/* // Modèle 3d de Neptune qui a été importer  */}
        <Neptune />
    </>
}


// On exporte ce composant pour NeptunePortal.jsx
export default PortalNeptune