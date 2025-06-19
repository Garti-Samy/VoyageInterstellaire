import { useState, useEffect } from 'react';

//Installer en npm le js-cookies ensuite l'importer sur React pour l'utiliser
import Cookies from 'js-cookie';


//Function qui va afficher un message sur l'utilisation des cookies
function DisplayCookies() {

  //Quelques sources qui m'ont aider :
  // https://www.npmjs.com/package/js-cookie
  // https://www.youtube.com/watch?v=vbS2OI0Gb7g

  //Message dans la bannière de cookie
  const msgCookie = "Vous ètes conscient d'utiliser nos cookies sur ce site ?"


  //Par défaut on met l'état à false pour éviter que la bannière s'affiche à chaque fois au moment du rechargement de la page Home
  const [DisplayCookie, setDisplayCookie] = useState(false);


  //On utilise le useEffect pour vérifier que le DisplayCookie se met à jour une seule fois seulement après le montage du composant
  useEffect(() => {

    // ici le get permet de récupérer la valeur du cookie  
    const hasConsent = Cookies.get('cookieConsent');


    //Si l'utilisateur n'a pas encore donner son conscentement alors la on affiche la bannière
    if (!hasConsent) {
      setDisplayCookie(true);
    }
  }, []);



  //Function qui va ètre appeler au moment du click sur le bouton pour accepter le cookie et faire disparaitre la bannière. 
  function CookieAccept() {

    // Stocke le consentement dans un cookie pour une durée d'un an
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setDisplayCookie(false);
  };


  if (!DisplayCookie) {
    return null;
  }



  return (
    <div className="sm:fixed bottom-0 left-0 sm:w-full  bg-blue-900 text-white p-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm poppins-semibold ">
          {msgCookie}
        </p>
        <button
          className="text-white poppins-semibold  py-2 px-4 rounded-full  bg-gradient-to-r from-[#E6007E]  to-[#006AFF] hover:opacity-90 transition duration-300 text-center"
          onClick={CookieAccept}
        >
          D'accord
        </button>
      </div>
    </div>
  );

}


//Exporter pour la page Accueil.jsx
export default DisplayCookies