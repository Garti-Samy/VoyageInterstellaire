// Importer ligne verticale et horizontale
import lineWhite from "../../assets/line-white.svg"


//Importer la photo de profil de Poincaré
import PicturePoincare from "../../assets/paul-dirac.jpg"


// Function qui va afficher la citation et la mini biographie du mathématicien et scientifique : Paul Dirac
function PaulDiracSection({ nom, citation, desOne, desTwo }) {

    // Balise alt de la photo de Paul Dirac
    const altBalise = 'Photo de profil Paul Dirac'


    return <>
        {/* //Container parent */}
        <div className="sm:flex sm:gap-10">
            {/* // Biographie et citation, de Paul Dirac */}
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


            {/* // Photo de Paul Dirac */}
            <div className="sm:w-1/2 sm:flex justify-end">
                <img src={PicturePoincare} className="rounded-xl sm:w-[70%] mt-10 sm:mt-0" alt={altBalise} />
            </div>
        </div>
    </>

}


// Exporter pour la page TrousNoirs.jsx
export default PaulDiracSection