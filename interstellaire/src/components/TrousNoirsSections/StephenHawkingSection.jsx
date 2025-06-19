// Function qui va afficher en grand la citation de Stephen Hawking au sujet des Trous Noirs
function StephenHawkingSection({citationHawking,StephenHawking}) {


    return <>
        {/* // Container parent */}
        <div className="flex-col items-center justify-center">

            {/* // Citation de Stephen Hawking, au sujet des Trous Noirs */}
            <h2 className="poppins-regular-italic  text-white text-xl sm:text-3xl mt-10 text-center">{citationHawking}</h2>

            {/* // Nom de l'auteur  */}
            <h3 className="text-white poppins-light text-sm sm:text-[25px] mt-4 sm:mt-10 text-center">{StephenHawking}</h3>

        </div>
    </>


}


// Exporter pour la poge TrousNoirs.jsx
export default StephenHawkingSection