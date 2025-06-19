// Importer la bibliothèque THREE JS pour certaines fonctions non disponible avec React Three Fiber
import * as THREE from 'three';

//Importer les shaders
import VenusVertexShader from "../Shaders/PlanetesShader/VenusShader/vertex.glsl"
import VenusFragmentShader from "../Shaders/PlanetesShader/VenusShader/fragment.glsl"

// Function qui va construire Vénus ( 2e planète de notre système solaire )
function Venus() {


    // Appeler la propriété THREE JS qui permet d'intégrer une texture
    const textureLoader = new THREE.TextureLoader()

    // Texture jour de Vénus
    const VenusDay = textureLoader.load('./environmentMaps/venus-texture.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    VenusDay.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    VenusDay.anisotropy = 4


    // Texture nuit de Vénus
    const VenusNight = textureLoader.load('./environmentMaps/2k_earth_nightmap.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    VenusNight.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    VenusNight.anisotropy = 4


    // Texture des nuages
    const VenusClouds = textureLoader.load('./environmentMaps/2k_earth_clouds.jpg')


    // les deux couleurs qui seront celle de l'atmosphère
    const VenusParameters = {}
    VenusParameters.atmosphereDayColor = '#fdc500'
    VenusParameters.atmosphereTwilightColor = '#f35b04'



    //Sun
    // Coordinates
    const sunSpherical = new THREE.Spherical(1, Math.PI * 0.5, 0.5)
    const sunDirection = new THREE.Vector3()

    const updateSun = () => {
        // Sun direction
        sunDirection.setFromSpherical(sunSpherical)

        // Debug
        debugSun.position
            .copy(sunDirection)
            .multiplyScalar(5)
    }

    return <>

        {/* // Mesh permet d'afficher l'objet 3d à l'aide d'une géométrie et d'un material */}
        <mesh scale={2.7}>

            {/* // forme de la géométrie */}
            <sphereGeometry args={[1, 64, 64]} />

            {/* // Material de la géométrie */}
            <shaderMaterial

                // Attribut de la géométrie, dans ce cas-ci nos shaders
                vertexShader={VenusVertexShader}
                fragmentShader={VenusFragmentShader}

                // Uniforms est un attribut qui permet de styliser notre planète et d'ensuite importer les informations dans nos fichier fragment.glsl et vertex.glsl dans le dossier shaders
                uniforms={{
                    uDayTexture: new THREE.Uniform(VenusDay),
                    uNightTexture: new THREE.Uniform(VenusNight),
                    uCloudsTexture: new THREE.Uniform(VenusClouds),
                    uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 0.8)),
                    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(VenusParameters.atmosphereDayColor)),
                    uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(VenusParameters.atmosphereTwilightColor))
                }}
            />
        </mesh>
    </>


}

// Exporter pour le dossier CardPortal dans le fichier PortalVenus.jsx
export default Venus