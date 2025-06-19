//Importer le Canvas du Trous Noirs
import CanvasBlackHole from "./CanvasBlackHole/CanvasBlackHole"


// function qui va afficher le Canvas contenant le Trou Noir
function BlackHoleSection() {

    return <>
        <div className="w-full sm:h-[800px]">
            {/* // Canvas contenant le Trou Noir */}
            <CanvasBlackHole />
        </div>
    </>

}

// Exporter pour la page TrousNoirs.jsx
export default BlackHoleSection