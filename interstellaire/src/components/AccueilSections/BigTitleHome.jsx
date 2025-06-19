import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BigTitleHome({ titre, modele, interagir }) {
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
                    start: "top 80%",
                    end: "top 40%",
                    toggleActions: "play none none reverse", // joue l’anim à l’entrée, la reverse à la sortie
                }
            }
        );
    }, []);

    return (
        <div className="flex-col">
            <h1
                ref={titleRef}
                className="poppins-bold text-3xl poppins-semibold gradient-text sm:text-9xl  w-3/4"
                style={{
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "white",
                }}
            >
                {titre}
            </h1>
            <h2 className="hidden poppins-bold text-3xl mt-10 text-white sm:flex sm:text-5xl w-20%]">{modele}</h2>
            <h2 className="hidden poppins-bold text-3xl mt-4 text-white sm:flex sm:text-5xl w-20%]">{interagir}</h2>
        </div>
    );
}

// Exporter pour le composant Accueil.jsx
export default BigTitleHome;
