// - Importer useState pour stocker les informations dans un array
// - Importer useRef pour cibler la div qui va s'annimer à l'aide de GSAP ScrollTrigger
// - Importer useEffect pour mettre à jour le composant
import { useState, useEffect, useRef } from "react"

//GSAP et ScrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer ScrollTrigger comme plugin
gsap.registerPlugin(ScrollTrigger);

//Importer les icones de concept de l'Univers
import bigBang from "../../assets/big-bang.svg"
import expension from '../../assets/epension.svg'
import gravity from "../../assets/gravity.svg"
import matterDark from '../../assets/dark-matter.svg'
import darkEnergy from "../../assets/dark-energy.svg"
import physicsLaws from '../../assets/physics-laws.svg'


// Composant qui va afficher les 6 concepts fondamentaux de l'Univers
function Concepts() {

    // Utiliser useState pour stocker les informations conernant les différent concepts de L'univers
    const [concepts, setConcepts] = useState([])
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
            { x: '70%', opacity: 0 },
            {
                x: '0%', duration: 0.7, opacity: 1, ease: "power2.out",
                scrollTrigger: {
                    trigger: astronaute,
                    ...ScrollConfig
                }
            })
    }, [])


    // On initialise l'était Planet une seule fois après le premier rendu d'ou l'utilisation du tableau de dépendance en tant que premier argument dans useEffect
    useEffect(() => {

        setConcepts([
            { nom: "Big Bang", icone: bigBang, text: "C’est le point de départ de l’univers tel qu’on le connaît. Il y a environ 13,8 milliards d’années, toute la matière et l’énergie étaient concentrées en un point minuscule. " },

            { nom: "L’expansion de l’univers", icone: expension, text: "Depuis le Big Bang, l’univers continue de s’étendre. Plus une galaxie est loin, plus elle s’éloigne vite — c’est ce qu’on observe avec le décalage vers le rouge." },

            { nom: "La Gravité", icone: gravity, text: "C’est la force dominante à grande échelle. Elle attire la matière : c’est elle qui forme les étoiles, les planètes, les galaxies." },

            { nom: "La matière noire", icone: matterDark, text: "On ne peut pas la voir directement, mais on sait qu’elle est là. Elle ne brille pas, n’émet pas de lumière, mais sa gravité influence le mouvement des galaxies. " },

            { nom: "L’énergie noire", icone: darkEnergy, text: "Encore plus mystérieuse ! Elle représente environ 68% de l’univers. C’est ce qui accélère l’expansion de l’univers." },

            { nom: "Les lois de la physique", icone: physicsLaws, text: "L’univers est gouverné par des lois constantes comme celles de la relativité, la mécanique quantique, etc." },


        ])


    }, [])





    return <>


        <div ref={displayConcept} className="flex-wrap flex">
            {/* //Boucle Map ici qui va afficher chacun des concepts de l'Univers */}
            {concepts.map((concept, index) => (
                <div key={index} className="sm:w-1/3 flex-col sm:flex sm:items-center sm:justify-center m-auto">

                    {/* //Icone et titre du concept */}
                    <div className="flex sm:w-3/4 gap-5 mt-24">
                        <img src={concept.icone} alt={concept.nom} />
                        <h2 className="poppins-semibold text-white  text-xl mt-1">{concept.nom}</h2>
                    </div>

                    {/* // Description du contexte */}
                    <p className="text-white poppins-light text-sm sm:text-[15px] sm:w-3/4 mt-4">{concept.text}</p>

                </div>
            ))}
        </div>

    </>


}

// Exporter ce composant pour Accueil.jsx
export default Concepts