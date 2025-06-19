
// Function qui va afficher les concepts sur les trous noirs
//On vient dynamiser les informations à l'aide de props
function ConceptsBlackHole({ rayon, desRayon, textRayon, evenement, desEvenement, textEvenement, singularite, desSingularite, textSingularite, rayonement, desRayonement, textRayonement }) {


    return <>
        {/* // Container parent qui affiche tous les concepts */}
        <div className="flex-col m-auto">

            {/* // Div du haut  */}
            <div className="sm:flex sm:gap-20">
                {/* //Rayon de Schwarzschild */}
                <div className="sm:w-1/2">

                    {/* // Sous-titre */}
                    <h2 className="poppins-semibold text-white text-2xl sm:text-3xl mt-10">{rayon}</h2>

                    {/* // 1er explication sur le Rayon de Schwarzschild */}
                    <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{desRayon}</p>

                    {/* // 2eme explication sur le Rayon de Schwarzschild */}
                    <p className="text-white poppins-semibold text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{textRayon}</p>

                </div>



                {/* //Horizon des événements */}
                <div className="sm:w-1/2">

                    {/* // Sous-titre */}
                    <h2 className="poppins-semibold text-white text-2xl sm:text-3xl mt-20 sm:mt-10">{evenement}</h2>

                    {/* // 1er explication sur l'Horizon des Evenements */}
                    <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{desEvenement}</p>
                    
                    {/* // 2ème explication sur l'Horizon des Evenements */}
                    <p className="text-white poppins-semibold text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{textEvenement}</p>
                </div>
            </div>


            {/* // Div du bas */}
            <div className="sm:flex sm:gap-20 sm:mt-30">
                {/* // Singularité */}
                <div className="sm:w-1/2">

                    {/* // Sous-titre */}
                    <h2 className="poppins-semibold text-white text-2xl sm:text-3xl mt-20 sm:mt-10">{singularite}</h2>

                    {/* // 1er explication sur le phénomène de singularité */}
                    <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{desSingularite}</p>

                    {/* // 2ème explication sur le phénomène de singularité */}
                    <p className="text-white poppins-semibold text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{textSingularite}</p>
                </div>



                {/* // Rayonnement de Hawking */}
                <div className="sm:w-1/2">

                    {/* // Sous-titre */}
                    <h2 className="poppins-semibold text-white text-2xl sm:text-3xl mt-20 sm:mt-10">{rayonement}</h2>

                    {/* // 1er explication sur le Rayonnement de Hawking */}
                    <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{desRayonement}</p>

                    {/* // 2ème explication sur le phénomène de singularité */}
                    <p className="text-white poppins-semibold text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{textRayonement}</p>
                </div>
            </div>
        </div>
    </>
}


// Exporter pour la page TrousNoirs.jsx
export default ConceptsBlackHole