// CE CODE VIENT DE CHAT GPT
// Ce script force le scroll en haut de la page après un changement de page via un call to action,
// pour éviter de conserver la position de défilement précédente.


// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
