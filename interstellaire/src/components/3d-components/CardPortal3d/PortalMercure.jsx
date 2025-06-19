//Importer le modèle 3D de Mercure
import Mercure from "../Planets3d/Mercure"


// Function qui va afficher le portal de Mercure avec son modèle 3d et son titre
function PortalMercure() {
    return <>
        {/* // Modèle 3d de Mercure qui a été importer  */}
        <Mercure />
    </>
}

// On exporte ce composant pour MercurePortal.jsx
export default PortalMercure