// Importer les différents Hooks de React
import { useState, useEffect, useRef } from "react"

//GSAP et ScrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer ScrollTrigger comme plugin
gsap.registerPlugin(ScrollTrigger);


// Importer les différentes icones qui représente chaque éléments d'une galaxie
import gradientLine from "../../assets/line-1.svg"
import galaxyStars from "../../assets/stars-galaxy.svg"
import galaxyDust from "../../assets/dustGalaxie.svg"
import galaxyNebula from "../../assets/nebulaGalaxy.svg"


// Function qui va afficher tous les éléments qui compose une galaxie
function ElementsGalaxie() {


    const [elements, setElements] = useState([])
    const displayElement = useRef(null)

    useEffect(() => {

        setElements([
            { title: "1. Etoiles", imageSvg: galaxyStars, text: "Les étoiles sont les principaux composants visibles d'une galaxie. Elles varient en taille, âge et température. Certaines étoiles sont jeunes et chaudes, d'autres vieilles et froides.", role: "Rôle : Elles produisent de la lumière et influencent la structure galactique avec leur gravité." },

            { title: "2. Gaz et Poussières", imageSvg: galaxyDust, text: "Mélange de gaz (principalement hydrogène et hélium) et de poussières microscopiques. Ces matériaux remplissent l’espace entre les étoiles.", role: "Rôle :  C’est le berceau des nouvelles étoiles. Les nébuleuses, par exemple, sont des nuages de gaz où naissent des étoiles." },

            { title: "3. Nébuleuses", imageSvg: galaxyNebula, text: "Régions denses de gaz et de poussière. Elles peuvent être de plusieurs types : nébuleuses planétaires, nébuleuses par émission, nébuleuses sombres, etc.", role: "Rôle : Certaines nébuleuses sont des pouponnières stellaires, d’autres sont les restes d’étoiles en fin de vie." },



        ])

    }, [])

    // Utiliser useEffect pour executé l'annimation une seule fois après le rendu initial
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
                x: '0%', duration: 0.7, opacity: 1, ease: "power2.out",
                scrollTrigger: {
                    trigger: astronaute,
                    ...ScrollConfig
                }
            })
    }, [])

    return <>
        {/* // container principale */}
        <div ref={displayElement} className="sm:flex gap-10">

            {/* // Container element */}
            {elements.map((element, index) => (
                <div key={index} className="sm:w-1/3 mt-10 sm:mt-0 flex-col p-6 rounded-xl bg-white/4 backdrop-blur-md border border-white/20 shadow-lg">
                    <div className="flex gap-7">
                        <h2 className="poppins-semibold text-white text-xl  sm:text-xl mt-1">{element.title}</h2>
                        <img className="" src={element.imageSvg} alt={element.title} />
                    </div>
                    <p className="text-white poppins-light text-[15px]  mt-4">{element.text}</p>
                    <img className="w-[100%] mt-8" src={gradientLine} alt="" />

                    <p className="text-white poppins-light text-[15px]  mt-8">{element.role}</p>
                </div>
            ))}
        </div>
    </>
}


// Exporter pour le composant Galaxie.jsx
export default ElementsGalaxie