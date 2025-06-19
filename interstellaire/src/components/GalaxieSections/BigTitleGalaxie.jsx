import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



// Function qui affiche le titre principale de la page Planetes.jsx
//On vient ajouter les informations dynamiquement à l'aide de props
function BigTitleGalaxie({ mainTitle, subtitle }) {

    const titleRef = useRef(null);

    useEffect(() => {
        const el = titleRef.current;

        gsap.fromTo(
            el,
            { WebkitTextFillColor: "white" },
            {
                WebkitTextFillColor: "transparent",
                duration: 1.4, // animation dure 2s
                ease: "power2.out", // animation fluide
                scrollTrigger: {
                    trigger: el,
                    start: "top 40%",
                    end: "top 40%",
                    toggleActions: "play none none reverse", // joue l’anim à l’entrée, la reverse à la sortie
                }
            }
        );
    }, []);

    return <>

        <div>
            <h1 ref={titleRef}
                className="poppins-bold text-3xl poppins-semibold gradient-text sm:text-9xl  sm:w-3/4"
                style={{
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "white",
                }}>{mainTitle}</h1>
        </div>


    </>

}
// Exporter ce composant vers Galaxies.jsx
export default BigTitleGalaxie