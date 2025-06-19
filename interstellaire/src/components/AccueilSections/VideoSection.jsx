// - Importer useRef pour cibler la div qui va s'annimer à l'aide de GSAP ScrollTrigger
// - Importer useEffect pour mettre à jour le composant
import { useEffect, useRef } from "react"



// Importer ligne verticale et horizontale
import lineWhite from "../../assets/line-white.svg"

//GSAP et ScrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer ScrollTrigger comme plugin
gsap.registerPlugin(ScrollTrigger);

// Importer les icones pour les différentes fonctionalités
import physicsLaws from '../../assets/physics-laws.svg'
import matter from "../../assets/matter.svg"

// Function qui va afficher la vidéo de présentation, et présenter le concept derrière "Voyage Interstellaire"
function VideoSection({ title, description, fonctionalites, modeles, science }) {

    const displayConcept = useRef(null)

    // Utiliser useEffect pour executé l'annimation une seule fois après le rendu initial
    useEffect(() => {

        const astronaute = displayConcept.current


        //Permet d'optimiset le ScrollTrigger
        const ScrollConfig = {
            start: "top 80%",
            end: "bottom 20%",
            preventOverlaps: true,
        };

        gsap.fromTo(astronaute,
            { x: '-70%', opacity: 0 },
            {
                x: '0%', duration: 0.7, opacity: 1, ease: "power2.out",
                scrollTrigger: {
                    trigger: astronaute,
                    ...ScrollConfig
                }
            })
    }, [])


    return <>
        {/* // Container parent */}
        <div ref={displayConcept} className="sm:flex sm:gap-10">


            {/* // Description du projet "Voyage Interstellaire" */}
            <div className="sm:w-1/2 flex-col">

                {/* // Sous-titre */}
                <h2 className="poppins-bold text-3xl  sm:text-white gradient-text sm:text-5xl">{title}</h2>

                {/* // Description du projet */}
                <p className="text-white poppins-light text-sm sm:text-[15px] mt-10 sm:w-[90%]">{description}</p>

                {/* // Ligne qui sépare le contenu explicatif de la fiche plus technique */}
                <img src={lineWhite} className=" mt-10 opacity-35 w-[90%]" alt="" />

                {/* // Sous-titre  */}
                <h3 className="poppins-semibold text-white text-[23px] sm:mt-10">{fonctionalites}</h3>

                <div className="sm:flex sm:gap-5">

                    {/* // Fonctionnalités 3D */}
                    <div className="mt-10 flex p-[2px] sm:w-[35%] gradient-mercure rounded-xl sm:bg-gradient-to-r from-[#E6007E] via-[#8000FF] to-[#006AFF] ">
                        <div className="rounded-xl w-full  bg-button flex p-4 pt-3 pb-3 items-center justify-center gap-6 ">
                            <img src={physicsLaws} alt="" />
                            <h3 className="poppins-bold text-white text-[12px] sm:text-[15px]">{modeles}</h3>
                        </div>
                    </div>


                    {/* // Faits Scientifique */}
                    <div className="mt-10 flex p-[2px] sm:w-[35%] gradient-mercure rounded-xl sm:bg-gradient-to-r from-[#E6007E] via-[#8000FF] to-[#006AFF] ">
                        <div className="rounded-xl w-full  bg-button flex p-4 pt-3 pb-3 items-center justify-center gap-6 ">
                            <img src={matter} alt="" />
                            <h3 className="poppins-bold text-white text-[12px] sm:text-[15px]">{science}</h3>
                        </div>
                    </div>
                </div>


            </div>



            {/* // Vidéo de présentation */}
            <div className="sm:w-1/2 aspect-video sm:mt-0 mt-10">
                <iframe
                    className="w-full h-full rounded-xl shadow-lg"
                    src="https://www.youtube.com/embed/Y_lH4SCqbfc?si=MvO3sP7c3sb635A4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </>


}

// Exporter pour la page Accueil.jsx
export default VideoSection