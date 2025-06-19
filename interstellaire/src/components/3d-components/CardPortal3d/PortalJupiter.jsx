//Importer le modèle 3D de Jupiter
import Jupiter from "../Planets3d/Jupiter"


// Function qui va afficher le composant de la planète Jupiter
function PortalJupiter() {
    return <>
        {/* // Modèle 3d de Jupiter qui a été importer  */}
        <Jupiter />
    </>
}


// On exporte ce composant pour JupiterPortal.jsx
export default PortalJupiter