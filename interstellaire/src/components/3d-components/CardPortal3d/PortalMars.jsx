//Importer le modèle 3D de Mars
import Mars from "../Planets3d/Mars"


// Function qui va afficher le composant de la planète Mars
function PortalMars() {
    return <>
        {/* // Modèle 3d de Mars qui a été importer  */}
        <Mars />
    </>
}


// On exporte ce composant pour MarsPortal.jsx
export default PortalMars