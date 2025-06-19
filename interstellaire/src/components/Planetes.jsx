// Importer ligne verticale et horizontale
import lineWhite from "../assets/line-white.svg"


// Importer les sections des différentes planètes
// Grand tire de la page Planetes
import BigTitle from "./PlanetesSections/BigTitle";

// Les sections des différentes planètes du système solaire
import MercureSection from "./PlanetesSections/MercureSection";
import VenusSection from "./PlanetesSections/VenusSection";
import TerreSection from "./PlanetesSections/TerreSection";
import MarsSection from "./PlanetesSections/MarsSection";
import JupiterSection from "./PlanetesSections/JupiterSection";
import SaturneSection from "./PlanetesSections/SaturneSection";
import UranusSection from "./PlanetesSections/UranusSection";
import NeptuneSection from "./PlanetesSections/NeptuneSection";

// Section qui invite à consulter les autres pages
import CallSection from "./PlanetesSections/CallSection";

//Footer
import Footer from "./Footer";


// Function qui va afficher toutes les planètes
function Planetes() {



    return <>
        
        {/* Ligne séparatrice */}
        <div className="sm:flex w-11/12 sm:block hidden  pl-9 mt-4 sm:opacity-20 m-auto">
            <img src={lineWhite} alt="" />
        </div>


        {/* // Grand titre */}
        <div className='w-11/12 m-auto mt-20 sm:mt-67 p-6 sm:p-9'>
            <BigTitle mainTitle={"Architecture du système solaire"} />
        </div>

        {/* Ligne séparatrice */}
        <div className="sm:flex w-11/12 p-6 sm:block hidden  sm:pl-9 sm:opacity-20 m-auto">
            <img src={lineWhite} alt="" />
        </div>



        {/* // Section qui contient toute les information de Mercure */}
        <div className="w-11/12 m-auto p-6 sm:p-9 sm:pt-0  md:mt-80">
            <h2 className="poppins-bold text-2xl text-white  sm:text-[40px]">Mercure</h2>
            <MercureSection
                diametre={"Diamètre "}
                kilometre={"6 779 km"}
                masse={"Masse "}
                poid={"6,39 × 10²³ kg"}
                temperature={"Température M"}
                degre={"167 °C"}
                atmosphere={"Atmosphère "}
                matiere={"hélium, oxygène, sodium"}
                rotation={"Période de rotation "}
                angle={"24h 37min"}
                FormationTitle={"Comment Mercure s’est formée "}
                FormationText={"Mercure s’est formée il y a environ 4,6 milliards d’années, à partir de la nébuleuse solaire. Son noyau métallique anormalement grand suggère qu'elle a peut-être été victime d’une collision géante qui a arraché une grande partie de son manteau rocheux."}
                aujourdhui={"Ce qu’on y trouve aujourd’hui "}
                aujourdhuiText={"Mercure possède une surface criblée de cratères, similaire à la Lune. Il n’y a pas d’atmosphère épaisse, seulement une exosphère ténue. On y trouve du régolithe, du soufre et des traces de glace d’eau dans des cratères polaires toujours à l’ombre."} />
        </div>

        {/* Ligne séparatrice */}
        <div className="sm:flex w-11/12 sm:block hidden p-6 sm:pl-9 sm:opacity-20 m-auto">
            <img src={lineWhite} alt="" />
        </div>


        {/* // Section qui va afficher les informations de Vénus */}
        <div className="w-11/12 m-auto p-6 sm:p-9 sm:pt-0 mt-24 md:mt-64">
            <h2 className="poppins-bold text-2xl  text-white  sm:text-[40px]">Vénus</h2>
            <VenusSection
                diametre={"Diamètre "}
                kilometre={"12 104 km"}
                masse={"Masse "}
                poid={"4,87 × 10²⁴ kg"}
                temperature={"Température M "}
                degre={"464 °C"}
                atmosphere={"Atmosphère "}
                matiere={"CO₂, azote "}
                rotation={"Période de rotation "}
                angle={"243 jours "}
                FormationTitle={"Comment Vénus s’est formée "}
                FormationText={"Vénus s’est formée à partir des mêmes matériaux que la Terre : gaz, poussières, et roches présents dans la nébuleuse solaire. Sa proximité au Soleil l’a privée d’eau, empêchant le piégeage du CO₂."}
                aujourdhui={"Ce qu’on y trouve aujourd’hui "}
                aujourdhuiText={"Son atmosphère est extrêmement dense et composée à 96 % de dioxyde de carbone. La pression au sol est 92 fois celle de la Terre. Sa surface est jeune, volcanique, avec peu de cratères."}
            />
        </div>


        {/* Ligne séparatrice */}
        <div className="sm:flex w-11/12 lg:pl-9 sm:block hidden  sm:opacity-20 m-auto">
            <img src={lineWhite} alt="" />
        </div>


        {/* // Section qui va afficher les informations de la Terre */}
        <div className="w-11/12 m-auto p-6 sm:p-9 sm:pt-0 mt-24  md:mt-64">
            <h2 className="poppins-bold text-2xl text-white sm:text-[40px]">Terre</h2>
            <TerreSection
                diametre={"Diamètre "}
                kilometre={"12 742 km"}
                masse={"Masse "}
                poid={"5,97 × 10²⁴ kg"}
                temperature={"Température M "}
                degre={"15 °C"}
                atmosphere={"Atmosphère "}
                matiere={"Azote, oxygène,CO₂"}
                rotation={"Période de rotation "}
                angle={"23h 56min"}
                FormationTitle={"Comment la Terre s’est formée "}
                FormationText={"La Terre s’est formée par accrétion de particules solides dans le disque protoplanétaire, suivie de différenciation entre noyau, manteau et croûte. Une collision avec un corps de la taille de Mars aurait formé la Lune."}
                aujourdhui={"Ce qu’on y trouve aujourd’hui "}
                aujourdhuiText={"La Terre est la seule planète connue à abriter la vie. Elle possède de l’eau liquide, une atmosphère oxygénée, une tectonique active et une biosphère riche. Son magnétisme protège la surface des vents solaires."}
            />
        </div>


        {/* Ligne séparatrice */}
        <div className="sm:flex w-11/12 lg:pl-9 sm:block hidden  sm:opacity-20 m-auto">
            <img src={lineWhite} alt="" />
        </div>


        {/* // Section qui va afficher les informations de Mars */}
        <div className="w-11/12 m-auto p-6 sm:p-9 sm:pt-0 mt-24  md:mt-64">
            <h2 className="poppins-bold text-2xl text-white sm:text-[40px]">Mars</h2>
            <MarsSection
                diametre={"Diamètre "}
                kilometre={"6 779 km"}
                masse={"Masse "}
                poid={"6,39 × 10²³ kg"}
                temperature={"Température M "}
                degre={"-63 °C"}
                atmosphere={"Atmosphère "}
                matiere={"CO₂, azote, argon"}
                rotation={"Période de rotation "}
                angle={"24h 37min"}
                FormationTitle={"Comment Mars s’est formée "}
                FormationText={'Mars s’est formée à partir de matériaux solides au-delà de la « ligne de glace » du système solaire, ce qui lui a permis de conserver de l’eau. Elle est restée plus petite, freinant son activité géologique interne.'}
                aujourdhui={"Ce qu’on y trouve aujourd’hui "}
                aujourdhuiText={"On y observe d’anciens lits de rivières, des calottes polaires de glace d’eau et de CO₂, et des volcans géants comme Olympus Mons. Son atmosphère est mince et incapable de retenir la chaleur."}
            />
        </div>


        {/* Ligne séparatrice */}
        <div className="sm:flex w-11/12 pl-9 sm:block hidden sm:opacity-20 m-auto">
            <img src={lineWhite} alt="" />
        </div>

        {/* // Section qui va afficher les informations de Jupiter */}
        <div className="w-11/12 m-auto p-6 sm:p-9 sm:pt-0 mt-24  md:mt-64">
            <h2 className="poppins-bold text-2xl text-white sm:text-[40px]">Jupiter</h2>
            <JupiterSection
                diametre={"Diamètre "}
                kilometre={"139 820 km"}
                masse={"Masse "}
                poid={"1,90 × 10²⁷ kg"}
                temperature={"Température M "}
                degre={"-110 °C"}
                atmosphere={"Atmosphère "}
                matiere={"Hydrogène, hélium"}
                rotation={"Période de rotation "}
                angle={"9h 56min"}
                FormationTitle={"Comment Jupiter s’est formée "}
                FormationText={'Jupiter s’est formée très tôt, à partir d’un noyau rocheux qui a rapidement accumulé une énorme quantité de gaz de la nébuleuse solaire, devenant la plus massive des planètes.'}
                aujourdhui={"Ce qu’on y trouve aujourd’hui "}
                aujourdhuiText={"Jupiter est composée d’hydrogène métallique et moléculaire. Elle possède une atmosphère turbulente, avec des bandes de nuages et la Grande Tache rouge. Son système de lunes est extrêmement varié et complexe."}
            />
        </div>

        {/* Ligne séparatrice */}
        <div className="sm:flex w-11/12 pl-9 sm:block hidden sm:opacity-20 m-auto">
            <img src={lineWhite} alt="" />
        </div>


        {/* // Section qui va afficher les informations de Saturne */}
        <div className="w-11/12 m-auto p-6 sm:p-9 sm:pt-0 mt-24  md:mt-64">
            <h2 className="poppins-bold text-2xl text-white sm:text-[40px]">Saturne</h2>
            <SaturneSection
                diametre={"Diamètre "}
                kilometre={"116 460 km"}
                masse={"Masse "}
                poid={"5,68 × 10²⁶ kg"}
                temperature={"Température M "}
                degre={"-140 °C"}
                atmosphere={"Atmosphère "}
                matiere={"Hydrogène, hélium"}
                rotation={"Période de rotation "}
                angle={"10h 33min"}
                FormationTitle={"Comment Saturne s’est formée "}
                FormationText={'Similaire à Jupiter, Saturne a commencé par accumuler un noyau solide, puis a capté d’immenses quantités de gaz. Sa formation a influencé l’agencement des planètes plus éloignées.'}
                aujourdhui={"Ce qu’on y trouve aujourd’hui "}
                aujourdhuiText={"Saturne est connue pour ses anneaux spectaculaires composés de glace et de roches. Titan, son plus gros satellite, possède une atmosphère dense et des mers de méthane. Encelade montre des geysers d’eau."}
            />
        </div>

        {/* Ligne séparatrice */}
        <div className="ssm:flex w-11/12 pl-9 sm:block hidden sm:opacity-20 m-auto">
            <img src={lineWhite} alt="" />
        </div>

        {/* // Section qui va afficher les informations d'Uranus */}
        <div className="w-11/12 m-auto p-6 sm:p-9 sm:pt-0 mt-24  md:mt-64">
            <h2 className="poppins-bold text-2xl text-white sm:text-[40px]">Uranus</h2>
            <UranusSection
                diametre={"Diamètre "}
                kilometre={"50 724 km"}
                masse={"Masse "}
                poid={"8,68 × 10²⁵ kg"}
                temperature={"Température M "}
                degre={"-195 °C"}
                atmosphere={"Atmosphère "}
                matiere={"hélium, méthane"}
                rotation={"Période de rotation "}
                angle={"17h 14min"}
                FormationTitle={"Comment Uranus s’est formée "}
                FormationText={'Uranus s’est formée plus loin dans le système solaire, à partir de glaces, roches et gaz. Sa faible densité et son inclinaison extrême pourraient être dues à une collision géante.'}
                aujourdhui={"Ce qu’on y trouve aujourd’hui "}
                aujourdhuiText={"Uranus contient un manteau riche en eau, méthane et ammoniac glacés. Son axe de rotation est incliné à 98°, provoquant des saisons extrêmes. Ses anneaux sont sombres et discrets."}
            />
        </div>

        {/* Ligne séparatrice */}
        <div className="sm:flex w-11/12 pl-9 sm:block hidden sm:opacity-20 m-auto">
            <img src={lineWhite} alt="" />
        </div>

        {/* // Section qui va afficher les informations de Neptune */}
        <div className="w-11/12 m-auto p-6 sm:p-9 sm:pt-0 mt-24  md:mt-64">
            <h2 className="poppins-bold text-2xl text-white sm:text-[40px]">Neptune</h2>
            <NeptuneSection
                diametre={"Diamètre "}
                kilometre={"49 244 km"}
                masse={"Masse "}
                poid={"1,02 × 10²⁶ kg"}
                temperature={"Température M "}
                degre={"-200 °C"}
                atmosphere={"Atmosphère "}
                matiere={"hélium, méthane"}
                rotation={"Période de rotation "}
                angle={"16h 6min"}
                FormationTitle={"Comment Neptune s’est formée "}
                FormationText={'Neptune s’est formée après Uranus, dans une zone froide du disque solaire. Elle a probablement migré vers sa position actuelle, influençant les objets de la ceinture de Kuiper.'}
                aujourdhui={"Ce qu’on y trouve aujourd’hui "}
                aujourdhuiText={"Neptune est une planète venteuse avec des tempêtes actives et des vents dépassant 2 000 km/h. Triton, son plus grand satellite, pourrait être un objet capturé. Sa composition interne est riche en glaces."}
            />
        </div>

        {/* Ligne séparatrice */}
        <div className="sm:flex w-11/12 pl-9 sm:block hidden sm:opacity-20 m-auto">
            <img src={lineWhite} alt="" />
        </div>

        <div className='w-11/12 p-6 sm:p-9 m-auto poppins-semibold text-white mt-20 sm:mt-22'>
            <h2 className="poppins-bold text-3xl   sm:text-5xl">Explorez nos autres pages</h2>
        </div>

        {/* // Call to action vers la page Galaxies et Trous-Noirs */}
        <div className="w-11/12 m-auto p-6 sm:p-9 ">
            <CallSection
                title={"Galaxies"}
                description={"Explorez l’immensité des galaxies, berceaux d’étoiles, de planètes et de mystères. Ces structures majestueuses révèlent l’histoire de notre univers."}
                titleTwo={"Trous-Noirs"}
                descriptionTwo={"Entrez dans l’univers mystérieux des trous noirs et explorez l’inconnu.Ces objets fascinants déforment l’espace-temps et absorbent jusqu’à la lumière."} />
        </div>

        {/* Ligne séparatrice */}
        <div className="sm:flex w-11/12 pl-9 sm:block hidden sm:opacity-20 m-auto mt-30">
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
    </>
}

// Exporter le composant Planètes pour l'utliser dans App.jsx
export default Planetes