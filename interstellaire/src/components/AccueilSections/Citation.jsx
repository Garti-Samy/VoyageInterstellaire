//Importer les différents Hooks React
// - Importer useRef pour cibler la div qui va s'annimer à l'aide de GSAP ScrollTrigger
// - Importer useEffect pour mettre à jour le composant
import { useRef, useEffect } from 'react';

//GSAP et ScrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer ScrollTrigger comme plugin
gsap.registerPlugin(ScrollTrigger);


// composant qui afficher la citation de Neil Armstrong
// On utilise des props pour afficher les informations de manière dynamique
function Citation({ citation, nom }) {

    //Mettre par defaut la référence à null
    const citationNeil = useRef(null)


    // Utiliser useEffect pour executé l'annimation une seule fois après le rendu initial
    useEffect(() => {

        const astronaute = citationNeil.current


        //Permet d'optimiset le ScrollTrigger
        const ScrollConfig = {
            start: "top 80%",
            end: "bottom 20%",
            preventOverlaps: true,
        };


        // from to => commence de 
        gsap.fromTo(astronaute,
            { y: '100%', opacity: 0 },
            {
                y: '0%', duration: 1.3, opacity: 1, ease: "power2.out",
                scrollTrigger: {
                    trigger: astronaute,
                    ...ScrollConfig
                }
            })
    }, [])




    return <>

        {/* // Venir mettre la référence, la ou le GSAP va agir  */}
        <div ref={citationNeil} className="flex-col items-center justify-center">

            {/* // Citation de Neil Armstrong */}
            <h2 className="poppins-light-italic text-center  gradient-text text-2xl sm:text-3xl mt-1">{citation}</h2>

            {/* // Auteur de la citation */}
            <p className="text-white text-center poppins-semibold text-sm sm:text-2xl  mt-4">{nom}</p>

        </div>
    </>


}

// Exporter pour le composant Accueil.jsx
export default Citation