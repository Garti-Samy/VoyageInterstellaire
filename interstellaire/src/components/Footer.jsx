//Importer les icones des réseaux sociaux
import metaFb from '../assets/sc1.svg'
import XTwitter from '../assets/sc2.svg'
import instagram from '../assets/sc3.svg'
import linkdin from '../assets/sc4.svg'
import Youtube from '../assets/sc5.svg'

//Importer le sigle du logo
import LogoSigle from '../assets/Logo-blanc.svg'

// Importer ligne verticale et horizontale
import lineWhite from "../assets/line-white.svg"


// Function qui va afficher les informations du footer
// J'utilise des props, pour venir dynamiser les informations
function Footer({ coordonee, social, rue, capitale, pratique, planetes, galaxies, trousNoirs, follow }) {


    //Balise alt pour les images
    const fb = "Facebook"
    const x = "X"
    const insta = "Instagram"
    const link = "Linkedin"
    const ytb = "Youtube"

    return <>
        {/* //Container du footer */}
        <div className="sm:flex gap-5 mt-[-3rem]  justify-between">

            {/* Ligne séparatrice */}
            <div className="sm:hidden p-6 sm:p-9">
                <img src={lineWhite} alt="" />
            </div>

            {/* // Logo "Voyage Interstellaire" affiché dans le footer à gauche  */}
            <div className='flex  sm:w-1/4'>
                <img src={LogoSigle} className='w-[45%]' alt="" />
            </div>

            {/* // Coordonnées */}
            <div className="flex-col sm:w-1/4 ">
                <h3 className="poppins-semibold gradient-text sm:text-[20px] 2xl:text-[19px] mt-10">{coordonee}</h3>

                <div className='sm:flex-col flex gap-5'>
                    <p className="text-white poppins-light text-sm xl:text-[14px]  mt-4 xl:w-[90%]">{social}</p>
                    <p className="text-white poppins-light text-sm xl:text-[14px]  mt-4 xl:w-[90%]">{rue}</p>
                    <p className="text-white poppins-light text-sm xl:text-[14px]  mt-4 xl:w-[90%]">{capitale}</p>
                </div>
            </div>

            {/* // Infos pratique */}
            <div className="flex-col sm:w-1/4">
                <h3 className="poppins-semibold gradient-text sm:text-[20px] 2xl:text-[19px] mt-10">{pratique}</h3>

                <div className='sm:flex-col flex gap-5'>
                    <p className="text-white poppins-light text-sm xl:text-[14px]  mt-4 xl:w-[90%]">{planetes}</p>
                    <p className="text-white poppins-light text-sm xl:text-[14px]  mt-4 xl:w-[90%]">{galaxies}</p>
                    <p className="text-white poppins-light text-sm xl:text-[14px]  mt-4 xl:w-[90%]">{trousNoirs}</p>
                </div>
            </div>


            {/* //Réseaux sociaux */}
            <div className='flex-col  sm:w-1/4'>
                <h3 className='poppins-semibold gradient-text sm:text-[20px] 2xl:text-[19px] mt-10'>{follow}</h3>

                <div className='gap-7 sm:gap-3 flex mt-2  '>

                    {/* // Logo Facebook ( Meta ) */}
                    <img className='w-[20px] h-[20px] sm:mt-[0.18rem] sm:w-[20px] sm:h-[20px]' src={metaFb} alt={fb} />

                    {/* // Logo du réseau social X */}
                    <img className='w-[20px] h-[20px] sm:mt-[0.18rem] sm:w-[20px] sm:h-[20px]' src={XTwitter} alt={x} />

                    {/* // Logo d'Instagram */}
                    <img className='w-[20px] h-[20px] sm:mt-[0.18rem] sm:w-[20px] sm:h-[20px]' src={instagram} alt={insta} />

                    {/* // Logo de Linkdin */}
                    <img className='w-[20px] h-[20px] sm:mt-[0.18rem] sm:w-[20px] sm:h-[20px]' src={linkdin} alt={link} />

                    {/* // Logo de Youtube */}
                    <img className='w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]' src={Youtube} alt={ytb} />
                </div>
            </div>





        </div>
    </>


}

// Exporter le footer pour chacune des pages
export default Footer