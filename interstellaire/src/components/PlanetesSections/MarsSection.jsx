// Importer les différents hook de React
import { useEffect, useRef } from "react"

// Importer la Carte 3d de Mars
import MarsPortal from "./CanvasPortals/MarsPortal"

//GSAP et ScrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer ScrollTrigger comme plugin
gsap.registerPlugin(ScrollTrigger);


//Importer les icones des informations de Mars
import Diameter from '../../assets/red-one.svg'
import MasseSvg from '../../assets/red-two.svg'
import TempratureSvg from "../../assets/red-three.svg"
import AtmosphereSvg from "../../assets/red-four.svg"
import RotationSvg from "../../assets/red-five.svg"


//Importer la ligne blanche
import LineWhite from "../../assets/line-white.svg"

// Function qui va afficher les informations de Mars, on utilise le système de props pour dynamiser le contenu et le rendre plus souple
function MarsSection({ diametre, kilometre, masse, poid, temperature, degre, atmosphere, matiere, rotation, angle, FormationTitle, FormationText, aujourdhui, aujourdhuiText }) {

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
            { x: '70%', opacity: 0 },
            {
                x: '0%', duration: 0.9, opacity: 1, ease: "power2.out",
                scrollTrigger: {
                    trigger: astronaute,
                    ...ScrollConfig
                }
            })
    }, [])


    return <>
        {/* //Container qui va avoir toutes les infos de Mars */}
        <div className="xl:flex" ref={displayElement}>
            <div className="xl:w-3/4 flex-col  mt-10 ">
                {/* // Information détaillé de Mars */}
                <div className="flex-col">
                    {/* // Première ligne d'informations sur Mars  */}
                    <div className="sm:flex gap-8">
                        {/* // Diamètre  */}
                        <div className="flex p-[2px] gradient-mercure rounded-full sm:bg-gradient-to-r from-red-600 via-red-700 to-red-500 ">
                            <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 pt-3 pb-3 items-center justify-center gap-6 ">
                                <img src={Diameter} alt="" />
                                <h3 className="poppins-regular text-white text-[12px] sm:text-sm">{diametre}</h3>
                                <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{kilometre}</p>
                            </div>
                        </div>


                        {/* // Masse */}
                        <div className="flex p-[2px] mt-10 sm:mt-0 gradient-mercure rounded-full sm:bg-gradient-to-r from-red-600 via-red-700 to-red-500 ">
                            <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 pt-3 pb-3 items-center justify-center  gap-6 ">
                                <img src={MasseSvg} alt="" />
                                <h3 className="poppins-regular text-white text-[12px] sm:text-sm">{masse}</h3>
                                <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{poid}</p>
                            </div>
                        </div>

                        {/* // Température */}
                        <div className="flex p-[2px] mt-10 sm:mt-0 gradient-mercure rounded-full sm:bg-gradient-to-r from-red-600 via-red-700 to-red-500  gap-5">
                            <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 pt-3 pb-3 items-center justify-center  gap-6 ">
                                <img src={TempratureSvg} alt="" />
                                <h3 className="poppins-regular text-white text-[12px] sm:text-sm">{temperature}</h3>
                                <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{degre}</p>
                            </div>
                        </div>
                    </div>


                    {/* //Deuxième ligne d'information sur Mars */}
                    <div className="sm:flex gap-8 mt-8">
                        {/* // Atmosphère */}
                        <div className="flex p-[2px]  gradient-mercure rounded-full sm:bg-gradient-to-r from-red-600 via-red-700 to-red-500  ">
                            <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 pt-3 pb-3 items-center justify-center gap-6 ">
                                <img src={AtmosphereSvg} alt="" />
                                <h3 className="poppins-regular text-white text-[12px] sm:text-sm">{atmosphere}</h3>
                                <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{matiere}</p>
                            </div>
                        </div>


                        {/* // Période de rotation */}
                        <div className="flex p-[2px] mt-10 sm:mt-0  gradient-mercure rounded-full sm:bg-gradient-to-r from-red-600 via-red-700 to-red-500 ">
                            <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 pt-3 pb-3 items-center justify-center gap-6 ">
                                <img src={RotationSvg} alt="" />
                                <h3 className="poppins-regular text-white text-[12px]  sm:text-sm">{rotation}</h3>
                                <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{angle}</p>
                            </div>
                        </div>
                    </div>

                    <img src={LineWhite} className="mt-10 w-11/12" alt="" />


                    {/* // Informations textuelles */}
                    <div className="mt-10 xl:flex gap-5">
                        <div className="xl:w-1/2 flex-col">
                            <h2 className="poppins-bold text-white sm:text-[20px] 2xl:text-[23px]">{FormationTitle}</h2>
                            <p className="text-white poppins-light  sm:text-[14px]  mt-4 xl:w-[90%]">{FormationText}</p>
                        </div>


                        <div className="flex-col mt-10 sm:mt-10 xl:w-1/2 xl:mt-0 xl:gap-5">
                            <h2 className="poppins-bold text-white sm:text-[20px] 2xl:text-[23px]">{aujourdhui}</h2>
                            <p className="text-white poppins-light sm:text-[14px] mt-4 xl:w-[90%]">{aujourdhuiText}</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modèle 3d de Mars */}
            <MarsPortal />
        </div>
    </>


}

// Exporter pour le composant principal Planetes.jsx
export default MarsSection