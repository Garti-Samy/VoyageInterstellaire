// Importer ligne verticale et horizontale
import lineWhite from "../../assets/line-white.svg"


//Importer la photo de profil de Poincaré
import PicturePoincare from "../../assets/henri-poincare.jpg"


// Function qui va afficher la citation et la mini biographie du mathématicien et scientifique : Henri Poincaré
function HenriPoinCareSection({ nom, citation, desOne, desTwo }) {

    // Balise alt de la photo d'Henri Poincaré
    const altBalise = 'Photo de profil Henri Poincaré'


    return <>
        {/* //Container parent */}
        <div className="sm:flex sm:gap-10">
            {/* // Biographie et citation, d'Henri Poincaré */}
            <div className="sm:w-1/2">

                {/* // Sous-titre */}
                <h2 className="poppins-semibold mt-0 text-white text-2xl sm:text-3xl sm:mt-10">{nom}</h2>

                {/* // Citation */}
                <h3 className="poppins-regular-italic  text-white text-xl sm:text-xl mt-10">{citation}</h3>

                {/* // Ligne qui sépare sous titre, citation du texte */}
                <img src={lineWhite} className="mt-10 w-[90%]" alt="" />

                {/* // 1er description */}
                <p className="text-white poppins-light text-sm sm:text-[15px] sm:w-[90%] mt-4 sm:mt-10">{desOne}</p>

                {/* // 2e description */}
                <p className="text-white poppins-light  text-sm mt-10 sm:text-[15px] sm:w-[90%]">{desTwo}</p>
            </div>


            {/* // Photo d'Henri Poincaré */}
            <div className="sm:w-1/2 sm:flex justify-end">
                <img src={PicturePoincare} className="rounded-xl sm:w-[70%] mt-10 sm:mt-0" alt={altBalise} />
            </div>
        </div>
    </>

}


// Exporter pour la page TrousNoirs.jsx
export default HenriPoinCareSection