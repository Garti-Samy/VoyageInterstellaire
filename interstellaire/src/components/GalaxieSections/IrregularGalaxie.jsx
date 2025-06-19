//Importer les hooks de React
import { useRef, useEffect } from "react";

// Importer les différentes icones de galaxies
import Hubble from "../../assets/Hubble.svg";
import lineGradient from "../../assets/line-planet.svg"

// Importer le Canvas  qui permet d'intégrer le modèle 3d
import { Canvas } from "@react-three/fiber";

// Importer OrbitControls pour controler l'objet dans l'espace 3D
import { OrbitControls } from "@react-three/drei";

// Importer le modèle 3d de la galaxie avec sa forme Irrégulière
import Irregular3d from "../3d-components/Galaxie3d/Irregular3d";

// Importer les images pour mobile uniquement
import MagellanImg from '../../assets/Magellan.webp'
import ic10Img from '../../assets/ic10.jpg'

//GSAP et ScrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer ScrollTrigger comme plugin
gsap.registerPlugin(ScrollTrigger);




// Function qui va afficher la description et le modèle de galaxies irrégulière
function IrregularGalaxie({ title, resume, skills, stars, color, gaz, example, VoieLacte, Centarus }) {


    // Variable qui contient la description des balises alt pour les images
    const desImage = "Ligne Verticale en dégradé de couleur Magenta et Bleu"
    const desMegallan = "Grand Nuage de Megallan"
    const desIc10 = "Image de la galaxie IC10"

    // Variables qui vont servir à placer une référence pour le GSAP
    const displayElliptique = useRef(null)
    const displayCanvas = useRef(null)

    // Utiliser useEffect pour executé l'annimation une seule fois après le rendu initial
    useEffect(() => {

        const astronaute = displayElliptique.current


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



    // Utiliser useEffect pour executé l'annimation une seule fois après le rendu initial
    useEffect(() => {

        const astronaute = displayCanvas.current


        //Permet d'optimiset le ScrollTrigger
        const ScrollConfig = {
            start: "top 80%",
            end: "bottom 20%",
            preventOverlaps: true,
        };

        gsap.fromTo(astronaute,
            { x: '80%', opacity: 0 },
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
        <div className="sm:flex gap-5 ">

            <div ref={displayElliptique} className="mt-4 sm:w-1/3 flex-col">

                <div className="flex gap-3">
                    <img src={Hubble} alt="" />
                    <h2 className="poppins-bold text-white sm:text-[20px] 2xl:text-[23px]">{title}</h2>
                </div>

                <p className="text-white poppins-light text-sm xl:text-[14px]  mt-4 xl:w-[90%]">{resume}</p>

                <img src={lineGradient} className="mt-10" alt={desImage} />
                <h3 className="poppins-semibold text-white sm:text-[20px] 2xl:text-[19px] mt-10">{skills}</h3>

                <p className="text-white poppins-light text-sm xl:text-[14px]  mt-4 xl:w-[90%]">{stars}</p>

                <p className="text-white poppins-light text-sm xl:text-[14px]  mt-12 xl:w-[90%]">{color}</p>

                <p className="text-white poppins-light text-sm xl:text-[14px]  mt-12 xl:w-[90%]">{gaz} </p>

                <img src={lineGradient} className="mt-10" alt={desImage} />

                <h3 className="poppins-semibold text-white sm:text-[20px] 2xl:text-[19px] mt-10">{example}</h3>

                <p className="text-white poppins-light text-sm xl:text-[14px]  mt-4 xl:w-[90%]">{VoieLacte}</p>
                <p className="text-white poppins-light text-sm xl:text-[14px]  mt-4 xl:w-[90%]">{Centarus}</p>

                {/* // Image uniquement affiché en mobile */}
                <img src={MagellanImg} className="mt-10 block rounded-xl sm:hidden" alt={desMegallan} />
                <img src={ic10Img} className="mt-4 rounded-xl block sm:hidden" alt={desIc10} />
            </div>



            {/* //Container contenant le Canvas */}
            <div ref={displayCanvas} className="sm:w-2/3 h-[600px] sm:block hidden">
                <Canvas
                    className="w-full h-full"
                    camera={{
                        position: [4, 4, 4],
                        fov: 75,
                        near: 0.1,
                        far: 100
                    }}
                >
                    <OrbitControls enableDamping enableZoom={false} />

                    {/* // Modèle 3D d'une galaxie */}
                    <Irregular3d rotation={[Math.PI / 0, 0, 0]} />
                </Canvas>
            </div>
        </div>
    </>
}


// Exporter pour Galaxie.jsx
export default IrregularGalaxie