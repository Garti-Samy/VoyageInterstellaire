import { useState, useEffect, useRef } from "react"

import gradientLine from "../../assets/line-1.svg"

//GSAP et ScrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer ScrollTrigger comme plugin
gsap.registerPlugin(ScrollTrigger);

//Importer les photos qui seront uniquement afficher pour le format mobile
import blackHole from "../../assets/blackHole.svg"
import planetImg from "../../assets/planetGalaxy.svg"
import matter from "../../assets/matter.svg"


// Function qui va afficher la suite des autres éléments qui compose une galaxie
function SecondElement() {


    const [elements, setElements] = useState([])
    const displayElement = useRef(null)

    useEffect(() => {

        setElements([
            { title: "4. Trou noir supermassif", imageSvg: blackHole, text: "Presque toutes les grandes galaxies abritent un trou noir géant en leur centre. Il peut avoir une masse de millions ou milliards de fois celle du Soleil.", role: "Rôle :  Il influence la dynamique des étoiles proches et parfois émet des jets puissants (quasars)." },

            { title: "5. Planètes et objets secondaires", imageSvg: planetImg, text: "Mélange de gaz (principalement hydrogène et hélium) et de poussières microscopiques. Ces matériaux remplissent l’espace entre les étoiles.", role: "Rôle : Bien qu'ils représentent une faible part de la masse galactique, ils sont essentiels pour des systèmes comme le nôtre." },

            { title: "6. Matière noire", imageSvg: matter, text: "Invisible et mystérieuse, elle ne produit pas de lumière mais exerce une force gravitationnelle qui est présente à 80% dans notre univers.", role: "Rôle : Elle représente environ 85 % de la matière d'une galaxie et aide à maintenir sa cohésion." },



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
        {/* // container principale */}
        <div  ref={displayElement} className="sm:flex gap-10">

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

export default SecondElement