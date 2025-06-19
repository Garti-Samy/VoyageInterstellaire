// Importer le Canvas de React Three Fiber ( il est obligatoire pour qu'un objet 3D s'affiche à l'écran)
import { Canvas } from "@react-three/fiber"


import DisplayCookies from './Cookies/DisplayCookies';

// Importer le composant avec le modèle 3D
import Cube3d from "../components/3d-components/Cube3d/Cube3d"

// Importer les composant qui servent de section pour la page d'Accueil
import Citation from "./AccueilSections/Citation"
import Concepts from "./AccueilSections/Concepts"
import BigTitleHome from "./AccueilSections/BigTitleHome"
import UniversObservable from "./AccueilSections/UniversObservable"

//Importer la section pour la vidéo de présentation
import VideoSection from "./AccueilSections/VideoSection";

// Section qui mène vers les autres pages
import CallSection from "./AccueilSections/CallSection"

//Footer
import Footer from "./Footer"

// Importer ligne verticale et horizontale
import lineWhite from "../assets/line-white.svg"


// Function qui va recevoir tous les composants de la page d'Accueil
function Accueil() {
    return (
        <div className="background-halo">
            {/* Contenu principal */}
            <div className="content">
                {/* Section Cube 3D */}
                <div className="w-11/12 hidden sm:block  sm:h-[500px] m-auto">
                    <Canvas className="w-full h-full">
                        <Cube3d />
                    </Canvas>
                </div>


                {/* // Titre principale de la page d'accueil */}
                <div className="w-11/12 m-auto sm:mt-72  p-6 sm:p-9">
                    <BigTitleHome
                        titre={"Une fenêtre sur le cosmos"}
                        modele={"Modèles 3D interactifs"}
                        interagir={"Intéragissez avec"} />
                </div>





                {/* Ligne séparatrice */}
                <div className="w-11/12 sm:mt-22 opacity-30 p-2 sm:opacity-20 sm:p-9 m-auto">
                    <img src={lineWhite} alt="" />
                </div>

                {/* Section citation */}
                <div className="w-11/12 sm:mt-8  m-auto p-6 sm:p-9">
                    <Citation
                        citation={"“C’est un petit pas pour un homme, un bond de géant pour l’humanité.”"}
                        nom={"Neil Armstrong, 20 juillet 1969"}
                    />
                </div>

                {/* Section : concepts fondamentaux */}
                <div className="w-11/12 m-auto p-6 sm:p-9">
                    <Concepts />
                </div>

                {/* Ligne séparatrice */}
                <div className="w-11/12 p-6 sm:p-9 m-auto opacity-20">
                    <img src={lineWhite} alt="" />
                </div>


                {/* Section : Univers Observable */}
                <div className="w-11/12 m-auto p-6 sm:p-9 sm:mt-52">
                    <UniversObservable
                        subtitle={"À la frontière du visible"}
                        explication={"L’univers observable s’étend sur 93 milliards d’années-lumière. Ce que nous voyons n’est qu’une infime portion de l’univers total — une bulle d’informations limitée par la vitesse de la lumière et le temps."}
                        dimension={"Dimensions et Expansion"}
                        age={"Âge de l’univers"}
                        planck={"13,8 milliards d’années, selon les données du satellite Planck (2018)"}
                        diametre={"Diamètre de l’univers observable"}
                        lumiere={"approximativement 93 milliards d’années-lumière."}
                        explicationTwo={"Bien que l’univers ait 13,8 milliards d’années, son expansion continue signifie que la lumière émise par les objets lointains a parcouru une distance plus grande que 13,8 milliards d’années-lumière pour nous atteindre. En tenant compte de cette expansion, le rayon de l’univers observable est estimé à environ 46,5 milliards d’années-lumière"} />
                </div>


                {/* Ligne séparatrice */}
                <div className="w-11/12 p-6 sm:p-9 m-auto opacity-20">
                    <img src={lineWhite} alt="" />
                </div>

                {/* // Section Vidéo de présentation */}
                <div className="w-11/12 m-auto p-6 sm:p-9 sm:mt-52">
                    <VideoSection
                        title={"De Grandes Ambitions"}
                        description={"« Voyage Interstellaire » est un site qui explique de manière claire et amusante le domaine de l’astronomie. On y trouve des explications sur certaines planètes de notre système solaire, ainsi que sur des galaxies proches ou lointaines. Le site aborde également l’origine de l’Univers et les objets stellaires les plus fascinants, tels que les trous noirs."}
                        fonctionalites={"Fonctionnalités clés"}
                        modeles={"Modèles 3D"}
                        science={"Faits Scientifique"} />
                </div>

                {/* Ligne séparatrice */}
                <div className="w-11/12 p-6 sm:p-9 m-auto opacity-20">
                    <img src={lineWhite} alt="" />
                </div>

                <div className='w-11/12 p-6 sm:p-9 m-auto poppins-semibold text-white mt-20 sm:mt-52'>
                    <h2 className="poppins-bold text-3xl   sm:text-5xl">Nos autres pages</h2>
                </div>

                {/* // Call to action vers la page Galaxies et Trous-Noirs */}
                <div className="w-11/12 m-auto p-6 sm:p-9 ">
                    <CallSection
                        title={"Planètes"}
                        description={"Explorez les planètes de notre système solaire, toutes uniques par leur taille, leur atmosphère et leur mystère."}
                        titleTwo={"Trous-Noirs"}
                        descriptionTwo={"Entrez dans l’univers mystérieux des trous noirs et explorez l’inconnu.Ces objets fascinants déforment l’espace-temps et absorbent jusqu’à la lumière."} />
                </div>

                {/* Ligne séparatrice */}
                <div className="flex w-11/12 pl-9 sm:opacity-20 m-auto mt-30">
                    <img src={lineWhite} alt="" />
                </div>


                {/* //Footer de bas de page */}
                <div className="w-11/12 m-auto p-6 sm:p-9">
                    <Footer
                        coordonee={"Coordonnées"}
                        social={"Siège social"}
                        rue={"Rue du Musée 9"}
                        capitale={"1000 Bruxelles"}
                        pratique={"Pratique"}
                        planetes={"Planètes"}
                        galaxies={"Galaxies"}
                        trousNoirs={"Trous-Noirs"}
                        follow={"Suivez-nous"} />
                </div>




                {/* Afficher le message sur l'utilisation des cookies */}
                <DisplayCookies />
            </div>
        </div>
    );
}

// Exporter le composant Accueil pour App.jsx
export default Accueil;
