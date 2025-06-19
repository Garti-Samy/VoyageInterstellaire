// Importer ligne verticale et horizontale
import lineWhite from "../assets/line-white.svg"

//Importer les différentes sections de la page Trous Noir
// Titres principaux de la page
import TitleBlackHole from "./TrousNoirsSections/TitleBlackHole"
import TitleFourDimension from "./TrousNoirsSections/TitleFourDimension"

// Section qui explique les concepts fondamentaux des trous noirs
import ConceptsBlackHole from "./TrousNoirsSections/ConceptsBlackHole"
import BlackHoleSection from "./TrousNoirsSections/BlackHoleSection"
import QuatriemeDimension from "./TrousNoirsSections/QuatriemeDimension"

// Section qui affiche la citation de scientifiques, de physiciens , de mathématiciens
import HenriPoinCareSection from "./TrousNoirsSections/HenriPoincareSection"
import PaulDiracSection from "./TrousNoirsSections/PaulDiracSection"
import AlbertEinsteinSection from "./TrousNoirsSections/AlbertEinsteinSection"

//Mention spéciale pour Stephen Hawking qui a étudié les trous noirs, pendant 48 ans.Il a consacré presque l'entiérté de sa vie sur le sujet. Merci pour tout !
import StephenHawkingSection from "./TrousNoirsSections/StephenHawkingSection"


//Footer
import Footer from "./Footer";


// Function qui va contenir les différentes sections de la page TrousNoirs.jsx
function TrousNoirs() {




  return (
    <>
      <div className="bg-black">
        {/* // Grand titre */}
        <div className='w-11/12 m-auto mt-20 sm:pt-67 p-6 sm:p-9'>
          <TitleBlackHole mainTitle={"Aussi fascinant qu'effrayant"} />
        </div>


        {/* Ligne séparatrice */}
        <div className="w-11/12 p-6 sm:block hidden  sm:pl-9 sm:opacity-20 m-auto">
          <img src={lineWhite} alt="" />
        </div>

        {/* //Section sur les concepts clé des Trous Noirs */}
        <div className="w-11/12 m-auto p-6 sm:p-9 sm:mt-20">
          <ConceptsBlackHole
            rayon={"Rayon de Schwarzschild"}
            desRayon={"Le rayon de Schwarzschild est la distance à partir du centre d’un objet à partir de laquelle, si toute sa masse était concentrée à l’intérieur, la vitesse de libération dépasserait celle de la lumière. Autrement dit, c’est le rayon critique au-delà duquel même la lumière ne peut s’échapper — ce qui définit un trou noir."}
            textRayon={"Si une étoile est compressée à l’intérieur de ce rayon, elle devient un trou noir."}
            evenement={"Horizon des événements"}
            desEvenement={"L’horizon des événements est la surface invisible qui entoure un trou noir. C’est la frontière de non-retour : tout ce qui la franchit est irrémédiablement attiré vers la singularité centrale. Pour un observateur extérieur, rien de ce qui passe cette limite ne peut revenir ni envoyer d’information."}
            textEvenement={"C’est l’endroit où la vitesse de libération atteint exactement la vitesse de la lumière."}
            singularite={"Singularité"}
            desSingularite={"La singularité gravitationnelle est le point central du trou noir, là où la masse est concentrée en un espace infinitésimalement petit. Cela engendre une densité infinie et une courbure de l’espace-temps infinie. La relativité générale prédit son existence, mais ne peut pas la décrire correctement à cause des valeurs infinies.Si l’une est absorbée par le trou noir et l’autre s’échappe, on observe un rayonnement."}
            textSingularite={"Pour la comprendre, il faudrait une théorie quantique de la gravité, que nous n’avons pas encore."}
            rayonement={"Rayonnement de Hawking"}
            desRayonement={"Le rayonnement de Hawking est une prédiction théorique de Stephen Hawking (1974), qui montre que les trous noirs n’absorbent pas seulement : ils peuvent aussi émettre un rayonnement.Des paires de particules virtuelles se forment spontanément dans le vide. Si l’une est absorbée par le trou noir et l’autre s’échappe, on observe un rayonnement."}
            textRayonement={"Cela signifie que les trous noirs peuvent s’évaporer lentement au fil du temps, jusqu’à disparaître complètement"} />
        </div>


        {/* Ligne séparatrice */}
        <div className="w-11/12 p-6 sm:block hidden  sm:pl-9 sm:opacity-20 m-auto">
          <img src={lineWhite} alt="" />
        </div>


        {/* //Canvas du Trou Noir */}
        <div className="w-11/12 m-auto sm:mt-30 p-6 sm:p-9">
          <BlackHoleSection />
        </div>

        {/* Ligne séparatrice */}
        <div className="w-11/12 p-6 sm:block hidden  sm:pl-9 sm:opacity-20 m-auto">
          <img src={lineWhite} alt="" />
        </div>

        {/* // Titre de la quatrième dimension */}
        <div className='w-11/12 m-auto sm:mt-52  p-6 sm:p-9'>
          <TitleFourDimension mainTitle={"Une quatrième dimension ?"} />
        </div>

        {/* Ligne séparatrice */}
        <div className="w-11/12 p-6 sm:block hidden  sm:pl-9 sm:opacity-20 m-auto">
          <img src={lineWhite} alt="" />
        </div>


        {/* // Section sur la quatrième dimension */}
        <div className="w-11/12 m-auto sm:mt-30 p-6 sm:p-9 ">
          <QuatriemeDimension
            dimension={"Qu'est-ce que la quatrième dimension ?"}
            desDimension={"Définition physique : En physique, la quatrième dimension n’est pas une dimension spatiale comme les trois premières (longueur, largeur, hauteur), mais le temps."}
            textDimension={"Espace-temps : Einstein a introduit l’idée d’un espace-temps à 4 dimensions (3 d’espace + 1 de temps) dans sa théorie de la relativité restreinte (1905), étendue à la relativité générale (1915)."}
            noir={"La quatrième dimension dans les trous noirs"}
            desNoir={"Courbure extrême du temps : Les trous noirs modifient fortement la géométrie de l’espace-temps. Plus on s’approche de l’horizon des événements, plus le temps ralentit pour un observateur extérieur (dilatation gravitationnelle du temps)."}
            textNoir={"Le temps devient espace : À l’intérieur d’un trou noir (selon la relativité générale), le temps et l’espace échangent leurs rôles : avancer dans le temps revient à aller vers le centre du trou noir."} />
        </div>


        {/* Ligne séparatrice */}
        <div className="w-11/12 p-6 sm:block hidden  sm:pl-9 sm:opacity-20 m-auto">
          <img src={lineWhite} alt="" />
        </div>


        {/* //Citation de scientifiques, de physiciens , de mathématicien */}


        {/* // Section Henri Poincaré */}
        <div className="w-11/12 m-auto p-6 sm:p-9 mt-30 sm:mt-40">
          <HenriPoinCareSection
            nom={"Henri Poincaré"}
            citation={"“Douter de tout ou tout croire sont deux solutions également commodes, qui l’une et l’autre nous dispensent de réfléchir.”"}
            desOne={"Henri Poincaré (1854–1912) est l’un des esprits les plus brillants de la science moderne. Mathématicien, physicien, ingénieur et philosophe, il est souvent considéré comme le dernier savant universel : un penseur capable de maîtriser et de faire avancer presque toutes les disciplines scientifiques de son temps."}
            desTwo={"Il est notamment le fondateur de la topologie moderne, et l’un des pionniers de la théorie du chaos. Ses travaux ont jeté les bases de la relativité restreinte, influençant directement Einstein. Mais Poincaré, c’était aussi une plume, un homme capable de traduire les abstractions les plus complexes en réflexions profondes sur la nature de la science, du temps et de la vérité."} />
        </div>


        {/* Ligne séparatrice */}
        <div className="w-11/12 p-6 sm:block hidden  sm:pl-9 sm:opacity-20 m-auto">
          <img src={lineWhite} alt="" />
        </div>


        {/* // Section Paul Dirac */}
        <div className="w-11/12 m-auto p-6 sm:p-9 mt-30 sm:mt-40">
          <PaulDiracSection
            nom={"Paul Dirac"}
            citation={"“Choisissez une fleur sur Terre et vous déplacez l'étoile la plus éloignée.”"}
            desOne={"Paul Dirac (1902–1984) est l’un des grands physiciens théoriciens du XXᵉ siècle, reconnu pour ses contributions fondamentales à la mécanique quantique et à la physique des particules. Il est célèbre pour avoir formulé l’équation de Dirac, qui décrit le comportement des électrons en intégrant la relativité restreinte. Cette équation a prédit l’existence de l’antimatière, une découverte révolutionnaire qui a profondément transformé notre compréhension de l’univers."}
            desTwo={"Dirac était aussi connu pour sa rigueur extrême et son approche mathématique très élégante des problèmes physiques. Il croyait fermement que la beauté mathématique d’une théorie était un signe de sa vérité. Sa quête de la simplicité et de l’harmonie dans les équations physiques l’a placé parmi les plus grands pionniers de la physique moderne."} />
        </div>


        {/* Ligne séparatrice */}
        <div className="w-11/12 p-6 sm:block hidden  sm:pl-9 sm:opacity-20 m-auto">
          <img src={lineWhite} alt="" />
        </div>


        {/* // Section Albert Einstein */}
        <div className="w-11/12 m-auto p-6 sm:p-9 mt-30 sm:mt-40">
          <AlbertEinsteinSection
            nom={"Albert Einstein"}
            citation={"“Je ne m'inquiète jamais de l'avenir. Il arrive bien assez tôt.”"}
            desOne={"Albert Einstein (1879–1955) est l’un des physiciens les plus célèbres et influents de l’histoire. Il a révolutionné notre compréhension de l’univers grâce à ses théories de la relativité restreinte (1905) et générale (1915), qui ont profondément changé la façon dont nous concevons le temps, l’espace et la gravitation."}
            desTwo={"Au-delà de ses découvertes scientifiques majeures, Einstein était un penseur humaniste, engagé pour la paix, la justice et la liberté intellectuelle. Son génie résidait non seulement dans ses calculs, mais aussi dans son incroyable capacité à imaginer des réalités invisibles et à remettre en question les idées reçues."} />
        </div>


        {/* Ligne séparatrice */}
        <div className="w-11/12 p-6 sm:block hidden  sm:pl-9 sm:opacity-20 m-auto">
          <img src={lineWhite} alt="" />
        </div>


        {/* // Mention spéciale pour Stephen Hawking */}
        <div className="w-11/12 m-auto p-6 sm:p-9  sm:mt-40">
          <StephenHawkingSection
          citationHawking={"« Les trous noirs ne sont pas aussi noirs qu’on le pense. Ils ne sont pas les prisons éternelles qu’on imaginait autrefois. Des choses peuvent s’échapper d’un trou noir, à l’extérieur et peut-être même vers un autre univers. Donc si vous avez l’impression d’être dans un trou noir, ne renoncez pas — il y a une issue. »"}
          StephenHawking={"Stephen Hawking, 2016"} />
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


      </div>
    </>
  )
}

// Exporter pour le composant App.jsx
export default TrousNoirs
