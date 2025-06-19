// Importer les différentes icones de galaxies
import Hubble from "../../assets/Hubble.svg";
import lineGradient from "../../assets/line-planet.svg"


// Importer les Hooks de React Three Fiber
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Importer le modèle 3d de la galaxie spirale
import Spirale3d from "../3d-components/Galaxie3d/Spirale3d";

// Importer les images pour mobile uniquement
import AndromedeImg from "../../assets/Andromede.png"
import SpiraleImg from "../../assets/spirale-two.png"


// Function va afficher les information d'une galaxie spirale
// Utilisation de props pour venir dynamiser les informations
function SpiraleGalaxie({ title, resume, skills, stars, center, gaz, example, VoieLacte, Tourbillon, Andromede }) {

  // Description de la balise alt des différentes images
  const desImage = "Ligne Verticale en dégradé de couleur Magenta et Bleu"
  const desAndromede = "Galaxie d'Andromède"
  const desSpirale = "Image d'une galaxie lointaine en forme de spirale"


  return <>
    <div className="sm:flex gap-5 relative">

      <div className="mt-4 sm:w-1/3 flex-col">

        <div className="flex gap-3">
          <img src={Hubble} alt="" />
          <h2 className="poppins-bold text-white sm:text-[20px] 2xl:text-[23px]">{title}</h2>
        </div>

        <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{resume}</p>

        <img src={lineGradient} className="mt-10" alt={desImage} />
        <h3 className="poppins-semibold text-white sm:text-[20px] 2xl:text-[19px] mt-10">{skills}</h3>

        <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{stars}</p>

        <p className="text-white poppins-light text-sm xl:text-[15px]  mt-12 xl:w-[90%]">{center}</p>

        <p className="text-white poppins-light text-sm xl:text-[15px]  mt-12 xl:w-[90%]">{gaz} </p>

        <img src={lineGradient} className="mt-10" alt={desImage} />

        <h3 className="poppins-semibold text-white sm:text-[20px] 2xl:text-[19px] mt-10">{example}</h3>

        <p className="text-white poppins-light text-sm sm:text-[16px]  mt-4">{VoieLacte}</p>
        <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{Tourbillon}</p>
        <p className="text-white poppins-light text-sm xl:text-[15px]  mt-4 xl:w-[90%]">{Andromede}</p>


        {/* // Image uniquement affiché en mobile */}
        <img src={AndromedeImg} className="mt-10 block sm:hidden" alt={desAndromede} />
        <img src={SpiraleImg} className="mt-4 block sm:hidden" alt={desSpirale} />

      </div>



      <div className="w-full h-[700px] sm:block hidden z-10 absolute">
        <Canvas
          className="w-full h-full"
          camera={{
            position: [4, 4, 4],
            fov: 85,
            near: 0.1,
            far: 100
          }}
        >
          <OrbitControls enableDamping enableZoom={false} />
          <Spirale3d />
        </Canvas>
      </div>
    </div>
  </>
}

// Exporter pour Galaxie.jsx
export default SpiraleGalaxie