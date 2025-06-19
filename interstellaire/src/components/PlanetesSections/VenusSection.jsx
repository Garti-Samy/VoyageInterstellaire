import { useState, useEffect, useRef } from "react"

// Importer la Carte 3d de Vénus
import VenusPortal from "./CanvasPortals/VenusPortal"

//GSAP et ScrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer ScrollTrigger comme plugin
gsap.registerPlugin(ScrollTrigger);

//Importer les icones des informations de Vénus
import Diameter from '../../assets/yellow-one.svg'
import MasseSvg from '../../assets/yellow-three.svg'
import TempratureSvg from "../../assets/yellow-five.svg"
import AtmosphereSvg from "../../assets/yellow-two.svg"
import RotationSvg from "../../assets/yellow-four.svg"

//Importer la ligne blanche
import LineWhite from "../../assets/line-white.svg"

function VenusSection({
  diametre, kilometre,
  masse, poid,
  temperature, degre,
  atmosphere, matiere,
  rotation, angle,
  FormationTitle, FormationText,
  aujourdhui, aujourdhuiText
}) {

  const displayElement = useRef(null)

  useEffect(() => {
    const astronaute = displayElement.current

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

  return (
    <>
      <div className="xl:flex" ref={displayElement}>
        <div className="xl:w-3/4 flex-col mt-10">
          <div className="flex-col">
            <div className="sm:flex gap-8">
              {/* Diamètre */}
              <div className="flex p-[2px] gradient-mercure rounded-full sm:bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 ">
                <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 xl:p-4 xl:pt-3 pt-3 xl:pb-3 pb-3 items-center justify-center gap-6 ">
                  <img src={Diameter} alt="" />
                  <h3 className="poppins-regular text-white text-[12px]  sm:text-sm">{diametre}</h3>
                  <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{kilometre}</p>
                </div>
              </div>

              {/* Masse */}
              <div className="flex p-[2px] mt-10 sm:mt-0 gradient-mercure rounded-full sm:bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500">
                <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 pt-3 pb-3 items-center justify-center gap-6">
                  <img src={MasseSvg} alt="" />
                  <h3 className="poppins-regular text-white text-[12px] sm:text-sm">{masse}</h3>
                  <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{poid}</p>
                </div>
              </div>

              {/* Température */}
              <div className="flex p-[2px] mt-10 sm:mt-0 gradient-mercure rounded-full sm:bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 gap-5">
                <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 pt-3 pb-3 items-center justify-center gap-6">
                  <img src={TempratureSvg} alt="" />
                  <h3 className="poppins-regular text-white text-[12px]  sm:text-sm">{temperature}</h3>
                  <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{degre}</p>
                </div>
              </div>
            </div>

            {/* Deuxième ligne */}
            <div className="sm:flex gap-8 mt-8">
              {/* Atmosphère */}
              <div className="flex p-[2px] gradient-mercure rounded-full sm:bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500">
                <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 pt-3 pb-3 items-center justify-center gap-6">
                  <img src={AtmosphereSvg} alt="" />
                  <h3 className="poppins-regular text-white text-[12px] sm:text-sm">{atmosphere}</h3>
                  <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{matiere}</p>
                </div>
              </div>

              {/* Rotation */}
              <div className="flex p-[2px] mt-10 sm:mt-0 gradient-mercure rounded-full sm:bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500">
                <div className="rounded-full sm:h-full sm:w-full bg-button flex p-4 pt-3 pb-3 items-center justify-center gap-6">
                  <img src={RotationSvg} alt="" />
                  <h3 className="poppins-regular text-white text-[12px] sm:text-sm">{rotation}</h3>
                  <p className="text-white poppins-bold text-[12px] sm:text-[14px]">{angle}</p>
                </div>
              </div>
            </div>

            <img src={LineWhite} className="mt-10 w-11/12" alt="" />

            {/* Textes explicatifs */}
            <div className="mt-10 xl:flex gap-5">
              <div className="xl:w-1/2 flex-col">
                <h2 className="poppins-bold text-white sm:text-[20px] 2xl:text-[23px]">{FormationTitle}</h2>
                <p className="text-white poppins-light  sm:text-[14px]  mt-4 xl:w-[90%]">{FormationText}</p>
              </div>

              <div className="flex-col mt-10 sm:mt-10 xl:w-1/2 xl:mt-0 xl:gap-5">
                <h2 className="poppins-bold text-white sm:text-[20px] 2x:text-[23px]">{aujourdhui}</h2>
                <p className="text-white poppins-light sm:text-[14px] mt-4 xl:w-[90%]">{aujourdhuiText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Canvas 3D Venus */}
        <VenusPortal />
      </div>
    </>
  )
}

export default VenusSection
