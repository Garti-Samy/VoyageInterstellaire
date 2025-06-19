//Importer les hooks de React
import { useRef, useEffect } from "react";

// Importer les différentes icones de galaxies
import Hubble from "../../assets/Hubble.svg";
import lineGradient from "../../assets/line-planet.svg"

// Importer les images pour mobile uniquement
import m87 from '../../assets/M87.webp'
import CentarusImg from '../../assets/Centarus.jpg'

// Importer le Canvas  qui permet d'intégrer le modèle 3d
import { Canvas } from "@react-three/fiber";

// Importer OrbitControls pour controler l'objet dans l'espace 3D
import { OrbitControls } from "@react-three/drei";

// Importer le modèle 3d de la galaxie avec sa forme elliptique
import Elliptique3d from "../3d-components/Galaxie3d/Elliptique3d";


//GSAP et ScrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer ScrollTrigger comme plugin
gsap.registerPlugin(ScrollTrigger);



// Function qui va afficher toutes les informations, concernant la galaxie Elliptique
// On utilise des props pour afficher les informations de manières dynamique
function EllipGalaxie({ title, resume, skills, stars, color, gaz, example, VoieLacte, Centarus }) {

  // Variable qui contient la description des balises alt pour les images
  const desImage = "Ligne Verticale en dégradé de couleur Magenta et Bleu"
  const desM87 = "Trous Noir supermassif au centre d'une galaxie"
  const centarusImg = 'Centarus'

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
      { x: '70%', opacity: 0 },
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
      { x: '-80%', opacity: 0 },
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
    <div className="sm:flex gap-5">
      <div ref={displayElliptique} className="mt-4 sm:w-1/3 flex-col">

        <div className="flex gap-3">
          <img src={Hubble} alt="" />
          <h2 className="poppins-bold text-white sm:text-[20px] 2xl:text-[23px]">{title}</h2>
        </div>

        <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{resume}</p>

        <img src={lineGradient} className="mt-10" alt={desImage} />
        <h3 className="poppins-semibold text-white sm:text-[20px] 2xl:text-[19px] mt-10">{skills}</h3>

        <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{stars}</p>

        <p className="text-white poppins-light text-sm xl:text-[15px]  mt-12 xl:w-[90%]">{color}</p>

        <p className="text-white poppins-light text-sm xl:text-[15px]  mt-12 xl:w-[90%]">{gaz} </p>

        <img src={lineGradient} className="mt-10" alt={desImage} />

        <h3 className="poppins-semibold text-white sm:text-[20px] 2xl:text-[19px] mt-10">{example}</h3>

        <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{VoieLacte}</p>
        <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{Centarus}</p>


        {/* // Image uniquement affiché en mobile */}
        <img src={m87} className="mt-10 block rounded-xl sm:hidden" alt={desM87} />
        <img src={CentarusImg} className="mt-4 rounded-xl block sm:hidden" alt={centarusImg} />

      </div>

      {/* //Container contenant le Canvas */}
      <div ref={displayCanvas} className="sm:w-2/3 h-[600px] sm:block hidden">
        <Canvas
          className="w-full h-full"
          camera={{
            position: [4, 4, 4],
            fov: 70,
            near: 0.1,
            far: 100
          }}
        >
          <OrbitControls enableDamping enableZoom={false} />
          <Elliptique3d rotation={[Math.PI / 0, 0, 0]} />
        </Canvas>
      </div>
    </div>
  </>


}

export default EllipGalaxie