// Importer les différentes sections de la page
// Grand titre de la page Galaxie
import BigTitleGalaxie from './GalaxieSections/BigTitleGalaxie';

// Section avec les différents types de galaxies
import SpiraleGalaxie from './GalaxieSections/SpiraleGalaxie';
import EllipGalaxie from './GalaxieSections/EllipGalaxie';
import IrregularGalaxie from './GalaxieSections/IrregularGalaxie';

// Les éléments qui compose une galaxie
import ElementsGalaxie from './GalaxieSections/ElementsGalaxie';
import SecondElement from './GalaxieSections/SecondElement';

// Section qui invite à consulter les autres pages
import CallSection from './GalaxieSections/CallSection';

// Footer
import Footer from './Footer';


// Importer ligne verticale et horizontale
import lineWhite from "../assets/line-white.svg"



// Function qui va afficher tout les types de galaxies. Et les éléments qui compose une galaxie.
function Galaxies() {

  return <>
    {/* Ligne séparatrice */}
    <div className="flex w-11/12  pl-9 mt-4 sm:opacity-20 m-auto">
      <img src={lineWhite} alt="" />
    </div>


    {/* // Grand titre */}
    <div className='w-11/12 m-auto mt-20 sm:mt-67 p-6 sm:p-9'>
      <BigTitleGalaxie mainTitle={"Là où naissent les étoiles"} />
    </div>


    {/* Ligne séparatrice */}
    <div className="flex w-11/12 p-6 sm:block  sm:pl-9 sm:opacity-20 m-auto">
      <img src={lineWhite} alt="" />
    </div>





    {/* // Exemple d'une galaxie spirale avec sa fiche de description */}
    <div className='w-11/12 p-6 sm:p-9 m-auto  md:mt-80'>
      <SpiraleGalaxie
        title={"Galaxies Spirales"}
        resume={"Elles ont une forme de disque aplati avec des bras en spirale qui tournent autour d’un noyau central lumineux. C’est un peu comme une toupie galactique."}
        skills={"Caractéristiques :"}
        stars={"Contiennent beaucoup d’étoiles jeunes, bleues dans leurs bras."}
        center={"Le centre est souvent plus rouge et plus vieux. Abritent souvent un trou noir supermassif au centre."}
        gaz={"Riches en gaz et poussières, ce qui permet la formation de nouvelles étoiles."}
        example={"Exemples célèbres :"}
        VoieLacte={"La Voie lactée"}
        Tourbillon={"La galaxie du Tourbillon (M51)"}
        Andromede={"La galaxie d’Andromède (M31)"} />
    </div>


    {/* Ligne séparatrice */}
    <div className="w-11/12 opacity-30 p-6 sm:opacity-20 sm:p-9 m-auto">
      <img src={lineWhite} alt="" />
    </div>


    {/* // Exemple d'une galaxie elliptique avec sa fiche de description */}
    <div className='w-11/12 p-6 sm:p-9 m-auto mt-14 sm:mt-52'>
      <EllipGalaxie
        title={"Galaxies Elliptiques"}
        resume={"Elles ressemblent à de gros ovales ou sphères floues. Elles n’ont pas de bras ni de structure visible."}
        skills={"Caractéristiques :"}
        stars={"Formées d’étoiles très anciennes (pas de formation d’étoiles active)."}
        color={"Leur couleur tend vers le jaune/orangé, signe de vieillesse stellaire."}
        gaz={"Peuvent être petites (naines) ou immenses (des centaines de fois plus grandes que la Voie lactée)."}
        example={"Exemples célèbres :"}
        VoieLacte={"M87, dans l’amas de la Vierge"}
        Centarus={"Centaurus A"}
      />

    </div>


    {/* Ligne séparatrice */}
    <div className="w-11/12 opacity-30 p-6 sm:opacity-20 sm:p-9 m-auto">
      <img src={lineWhite} alt="" />
    </div>


    <div className='w-11/12 p-6 sm:p-9 m-auto  mt-14 sm:mt-52'>
      <IrregularGalaxie
        title={"Galaxies Irrégulières"}
        resume={"Comme leur nom l’indique : elles n’ont pas de forme définie. Elles sont souvent déformées, parfois à cause d’une collision ou d’une attraction gravitationnelle avec une autre galaxie."}
        skills={"Caractéristiques :"}
        stars={"Très riches en gaz, donc souvent pleines de jeunes étoiles en formation."}
        color={"Souvent plus petites que les spirales ou les elliptiques."}
        gaz={"Taille et masse très variables."}
        example={"Exemples célèbres :"}
        VoieLacte={"Le Grand Nuage de Magellan"}
        Centarus={"La galaxie IC 10"} />
    </div>


    {/* Ligne séparatrice */}
    <div className="w-11/12 opacity-30 p-6 sm:opacity-20 sm:p-9 m-auto">
      <img src={lineWhite} alt="" />
    </div>


    <div className='w-11/12 p-6 sm:p-9 m-auto poppins-semibold text-white text-2xl mt-20 sm:mt-4'>
      <h2 className="poppins-bold text-3xl sm:text-5xl">Composition d'une Galaxie</h2>
    </div>


    {/* // Composition d'une Galaxie */}
    <div className='w-11/12  sm:p-9 p-6 m-auto mt-4'>
      <ElementsGalaxie />
    </div>


    <div className='w-11/12  sm:p-9 p-6 m-auto'>
      <SecondElement />
    </div>


    {/* Ligne séparatrice */}
    <div className="w-11/12 opacity-30 p-2 sm:opacity-20 sm:p-9 m-auto">
      <img src={lineWhite} alt="" />
    </div>


    <div className='w-11/12 p-6 sm:p-9 m-auto poppins-semibold text-white mt-20 sm:mt-22'>
      <h2 className="poppins-bold text-3xl   sm:text-5xl">Prêt pour l'experience ?</h2>
    </div>

    {/* // Call to action vers la page Galaxies et Trous-Noirs */}
    <div className="w-11/12 m-auto p-6 sm:p-9 ">
      <CallSection
        title={"Trous-Noirs"}
        description={"Entrez dans l’univers mystérieux des trous noirs et explorez l’inconnu.Ces objets fascinants déforment l’espace-temps et absorbent jusqu’à la lumière."}
        titleTwo={"Planètes"}
        descriptionTwo={"Explorez l’immensité des galaxies, berceaux d’étoiles, de planètes et de mystères.Ces structures majestueuses révèlent l’histoire de notre univers."} />
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



  </>


}
// Exporter le composant Galaxies pour l'utliser dans App.jsx
export default Galaxies