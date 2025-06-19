

// Importer ligne verticale et horizontale
import lineWhite from "../../assets/line-white.svg"
import ImgObservable from "../../assets/observable.jpg"


//Importer le modèle 3d de l'Univers Observable
import CanvasUnivers from "./CanvasUnivers/CanvasUnivers"


// Function qui va afficher toutes informations, concernant l'univers observable
function UniversObservable({subtitle,explication,dimension,age,planck,diametre,lumiere,explicationTwo}) {

    


    return <>
        {/* //Container parent */}
        <div  className="flex sm:gap-10">

            {/* // Contenu informatif */}
            <div className="sm:w-1/2 flex-col">
                <div className="flex-col">

                    {/* // Sous-titre */}
                    <h2 className="poppins-bold text-3xl  sm:text-white gradient-text sm:text-5xl">{subtitle}</h2>

                    {/* // Explication de ce qu'est l'Univers observable */}
                    <p className="text-white poppins-light text-sm sm:text-[15px] mt-4 sm:w-[90%]">{explication}</p>

                    {/* // Image uniquement en mobile de la représentation de l'Univers Observable */}
                    <img src={ImgObservable} className="mt-10 rounded-xl sm:hidden block" alt="" />

                </div>
                
                {/* // Ligne qui sépare le contenu explicatif de la fiche plus technique */}
                <img src={lineWhite} className=" mt-10 opacity-35 w-[90%]" alt="" />


                {/* // Sous-titre  */}
                <h3 className="poppins-semibold text-white text-[23px] sm:mt-10">{dimension}</h3>

                <div className="flex-col ">
                    <div className="sm:flex sm:gap-5 mt-10">

                        {/* // Age de l'Univers */}
                        <h3 className="poppins-regular text-white sm:text-[17px] ">{age}</h3>

                        {/* // Explication sur l'age de l'Univers */}
                        <p className="mt-4 sm:mt-0  text-white poppins-semibold text-sm sm:text-[15px]">{planck}</p>

                    </div>

                    <div className="sm:flex sm:gap-5 mt-10">

                        {/* // Sous-titre */}
                        <h3 className="poppins-regular text-white sm:text-[17px] ">{diametre}</h3>

                        {/* // Explication sur le concept d'années lumières */}
                        <p className="mt-4 sm:mt-0 text-white poppins-semibold text-sm sm:text-[15px]">{lumiere}</p>
                    </div>


                    {/* // Seconde ligne séparatrice */}
                    <img src={lineWhite} className=" mt-10 opacity-35 w-[90%]" alt="" />
                    
                    {/* // Second texte d'explication */}
                    <p className="text-white poppins-light text-sm sm:text-[15px] sm:mt-10 sm:w-[90%]">{explicationTwo}</p>
                </div>
            </div>



            {/* // Modèle 3D de l'Univers Observable */}
            <div className="sm:w-1/2">
                <CanvasUnivers />
            </div>
        </div>
    </>
}


//Exporter pour la page Accueil.jsx
export default UniversObservable