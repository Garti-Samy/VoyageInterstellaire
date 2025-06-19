import { useEffect, useRef } from "react"

//GSAP et ScrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer ScrollTrigger comme plugin
gsap.registerPlugin(ScrollTrigger);



// Importer la Carte 3d de la Terre
import TerrePortal from "./CanvasPortals/TerrePortal"


//Importer les icones des informations de la Terre
import Diameter from '../../assets/blue-one.svg'
import MasseSvg from '../../assets/blue-two.svg'
import TempratureSvg from "../../assets/blue-three.svg"
import AtmosphereSvg from "../../assets/blue-four.svg"
import RotationSvg from "../../assets/blue-five.svg"

//Importer la ligne blanche
import LineWhite from "../../assets/line-white.svg"


// Function qui va afficher les informations de la Terre, on utilise le système de props pour dynamiser le contenu et le rendre plus souple
function TerreSection({ diametre, kilometre, masse, poid, temperature, degre, atmosphere, matiere, rotation, angle, FormationTitle, FormationText, aujourdhui, aujourdhuiText }) {

    const displayElement = useRef(null)

    useEffect(() => {

        const astronaute = displayElement.current


        //Permet d'optimiset le ScrollTrigger
        const ScrollConfig = {
            start: "top 80%",
            end: "bottom 20%",
            preventOverlaps: true,
        };

        gsap.fromTo(astronaute,
            { x: '-70%', opacity: 0 },
            {
                x: '0%', duration: 0.9, opacity: 1, ease: "power2.out",
                scrollTrigger: {
                    trigger: astronaute,
                    ...ScrollConfig
                }
            })
    }, [])


    return <>
        {/* // Nom de la planètes et icone */}
        <div className="xl:flex" ref={displayElement}>
            {/* //Container qui va avoir toutes les infos de la Terre */}
            <div className="xl:w-3/4 flex-col  mt-10">
                {/* // Information détaillé de Mercure */}
                <div className="flex-col ">
                    {/* // Première ligne d'informations sur la Terre  */}
                    <div className=" sm:flex gap-8">
                        {/* // Diamètre  */}
                        <div className="flex p-[2px] gradient-mercure rounded-full sm:bg-gradient-to-r from-green-500 via-blue-400 to-blue-700 ">
                            <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 xl:p-4 xl:pt-3 pt-3 xl:pb-3 pb-3 items-center justify-center gap-6 ">
                                <img src={Diameter} alt="" />
                                <h3 className="poppins-regulat text-white text-[12px] sm:text-sm">{diametre}</h3>
                                <p className="text-white poppins-bold text-[12px]  sm:text-[14px]">{kilometre}</p>
                            </div>
                        </div>


                        {/* // Masse */}
                        <div className="flex p-[2px] mt-10 sm:mt-0 gradient-mercure rounded-full  sm:bg-gradient-to-r from-green-500 via-blue-400 to-blue-700  ">
                            <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 pt-3 pb-3 items-center justify-center gap-6 ">
                                <img src={MasseSvg} alt="" />
                                <h3 className="poppins-regular text-white text-[12px] sm:text-sm">{masse}</h3>
                                <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{poid}</p>
                            </div>
                        </div>

                        {/* // Température */}
                        <div className="flex p-[2px] mt-10 sm:mt-0 gradient-mercure rounded-full  sm:bg-gradient-to-r from-green-500 via-blue-400 to-blue-700 gap-5">
                            <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 pt-3 pb-3 items-center justify-center gap-6">
                                <img src={TempratureSvg} alt="" />
                                <h3 className="poppins-regular text-white text-[12px] sm:text-sm">{temperature}</h3>
                                <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{degre}</p>
                            </div>
                        </div>
                    </div>


                    {/* //Deuxième ligne d'information sur la Terre */}
                    <div className="sm:flex gap-8 mt-8">
                        {/* // Atmosphère */}
                        <div className="flex p-[2px]  gradient-mercure rounded-full  sm:bg-gradient-to-r from-green-500 via-blue-400 to-blue-700 ">
                            <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 pt-3 pb-3 items-center justify-center gap-6">
                                <img src={AtmosphereSvg} alt="" />
                                <h3 className="poppins-regular text-white text-[12px] sm:text-sm">{atmosphere}</h3>
                                <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{matiere}</p>
                            </div>
                        </div>


                        {/* // Période de rotation */}
                        <div className="flex p-[2px] mt-10 sm:mt-0  gradient-mercure rounded-full  sm:bg-gradient-to-r from-green-500 via-blue-400 to-blue-700 ">
                            <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 pt-3 pb-3 items-center justify-center gap-3 sm:gap-6">
                                <img src={RotationSvg} alt="" />
                                <h3 className="poppins-regular text-white text-[12px] sm:text-sm">{rotation}</h3>
                                <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{angle}</p>
                            </div>
                        </div>
                    </div>

                    <img src={LineWhite} className="mt-10 w-11/12" alt="" />


                    {/* // Informations textuelles */}
                    <div className="mt-10 xl:flex gap-5">
                        <div className="xl:w-1/2 flex-col">
                            <h2 className="poppins-bold text-white sm:text-[20px] 2xl:text-[23px]">{FormationTitle}</h2>
                            <p className="text-white poppins-light text-sm xl:text-[14px] mt-4 xl:w-[90%]">{FormationText}</p>
                        </div>


                        <div className="flex-col mt-10 sm:mt-10 xl:w-1/2 xl:mt-0 xl:gap-5">
                            <h2 className="poppins-bold text-white sm:text-[20px] 2xl:text-[23px]">{aujourdhui}</h2>
                            <p className="text-white poppins-light text-sm xl:text-[14px]  mt-4 xl:w-[90%]">{aujourdhuiText}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* // Modèle 3d de la Terre */}
            <TerrePortal />
        </div>
    </>
}


// Exporter pour le composant principal Planetes.jsx
export default TerreSection