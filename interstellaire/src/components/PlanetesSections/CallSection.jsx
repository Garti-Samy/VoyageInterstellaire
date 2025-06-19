//Importer le link pour le call to action vers la page Galaxie et Trous-Noir
import { Link } from 'react-router-dom';


//Importer le background des call to action
import ImgGalaxie from '../../assets/callGalaxie.png'
import ImgBlackHole from '../../assets/blackHole-call.png'


// Function qui contient les différents call to action vers la page Galaxies et Trous-Noirs
function CallSection({ title, description, titleTwo, descriptionTwo }) {


    return <>
        {/* // Container parent qui va contenir les 2 call to action */}
        <div className="sm:flex items-center justify-center gap-8 ">

            {/* //Call to action : Galaxies */}
            <div className="sm:w-1/2 flex flex-col p-8 sm:p-14 bg-green-300 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${ImgGalaxie})`, zIndex: 1 }}>

                {/* // Sous-titre du call to action */}
                <h2 className="poppins-bold text-white sm:text-[30px] ">{title}</h2>

                {/* // Description du call to action */}
                <p className="text-white sm:poppins-regular text-sm sm:text-[16px]  mt-4 xl:w-[80%]">{description}</p>

                {/* // Lien vers la page Galaxies */}
                <Link
                    to="/galaxies"
                    className="rounded-full mt-6 px-6 py-2 text-white font-semibold bg-gradient-to-r from-[#E6007E] sm:w-[20%] to-[#006AFF] hover:opacity-90 transition duration-300 text-center"
                >
                    Visitez
                </Link>
            </div>



            {/* //Call to action : Trous-Noirs */}
            <div className="sm:w-1/2 flex flex-col p-8 sm:p-14 mt-10 sm:mt-0  rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${ImgBlackHole})`, zIndex: 1 }}>

                {/* // Sous-titre du call to action */}
                <h2 className="poppins-bold text-white sm:text-[30px] ">{titleTwo}</h2>

                {/* // Description du call to action */}
                <p className="text-white sm:poppins-regular text-sm sm:text-[16px]  mt-4 xl:w-[75%]">{descriptionTwo}</p>

                {/* // Lien vers la page Trous Noirs */}
                <Link
                    to="/trous"
                    className="rounded-full mt-6 px-6 py-2 text-white font-semibold bg-gradient-to-r from-[#E6007E] sm:w-[40%] to-[#006AFF] hover:opacity-90 transition duration-300 text-center"
                >
                    Commencez l'experience
                </Link>
            </div>
        </div>
    </>
}

// Exporter ce composant pour la page Planetes.jsx
export default CallSection