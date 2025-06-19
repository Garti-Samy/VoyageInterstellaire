//Importer la ligne blanche
import LineWhite from "../../assets/line-white.svg"


//Importer le Canvas contenant le cube en 4D
import CanvasFourDimension from "./CanvasBlackHole/CanvasFourDimension"

// Function qui va afficher les information et le modèle 3d de la quatrième dimension
// On vient dynamiser les informations à l'aide de props
function QuatriemeDimension({ dimension, desDimension, textDimension, noir, desNoir, textNoir }) {


    return <>
        {/* // Container principale */}
        <div className="sm:flex gap-10">

            {/* //informations textes */}
            <div className="sm:w-1/2 flex-col">

                {/* // Sous-titre */}
                <h2 className="poppins-semibold mt-0 text-white text-2xl sm:text-3xl sm:mt-10">{dimension}</h2>

                {/* // définition de la quatrième dimension */}
                <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{desDimension}</p>

                {/* // Description de la quatrième dimension */}
                <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{textDimension}</p>

                {/* // Ligne séparatrice */}
                <img src={LineWhite} className="mt-10 w-11/12" alt="" />


                {/* // Sous titre numéro 2 de la section */}
                <h2 className="poppins-semibold text-white text-2xl sm:text-3xl mt-20 sm:mt-20">{noir}</h2>


                {/* // Explication de la qutrième dimension avec les Trous Noirs */}
                <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{desNoir}</p>

                {/* // Seconde explication  */}
                <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{textNoir}</p>
            </div>


            {/* //Canvas du cube 4D */}
            <div className="sm:w-1/2">
                <CanvasFourDimension />
            </div>

        </div>
    </>

}

//Exporter pour la page TrousNoirs.jsx
export default QuatriemeDimension