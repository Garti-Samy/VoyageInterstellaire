// Importer la bibliothèque THREE JS pour certaines fonctions non disponible avec React Three Fiber
import * as THREE from 'three';


//Importer les shaders
import MercureVertexShader from "../Shaders/PlanetesShader/MercureShader/vertex.glsl"
import MercureFragmentShader from "../Shaders/PlanetesShader/MercureShader/fragment.glsl"

// Function qui va construire Mercure ( 1er planète du système solaire )
function Mercure() {

    // Appeler la propriété THREE JS qui permet d'intégrer une texture
    const textureLoader = new THREE.TextureLoader()

    // Texture jour de Mercure
    const MercureDay = textureLoader.load('./environmentMaps/mercure-texture.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    MercureDay.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    MercureDay.anisotropy = 4


    // Texture nuit de Mercure
    const MercureNight = textureLoader.load('./environmentMaps/2k_earth_nightmap.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    MercureNight.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    MercureNight.anisotropy = 4


    // Texture des nuages
    const MercureClouds = textureLoader.load('./environmentMaps/2k_earth_clouds.jpg')


    // les deux couleurs qui seront celle de l'atmosphère
    const MercureParameters = {}
    MercureParameters.atmosphereDayColor = '#ffb703'
    MercureParameters.atmosphereTwilightColor = '#f77f00'



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
                vertexShader={MercureVertexShader}
                fragmentShader={MercureFragmentShader}

                // Uniforms est un attribut qui permet de styliser notre planète et d'ensuite importer les informations dans nos fichier fragment.glsl et vertex.glsl dans le dossier shaders
                uniforms={{
                    uDayTexture: new THREE.Uniform(MercureDay),
                    uNightTexture: new THREE.Uniform(MercureNight),
                    uCloudsTexture: new THREE.Uniform(MercureClouds),
                    uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 0.8)),
                    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(MercureParameters.atmosphereDayColor)),
                    uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(MercureParameters.atmosphereTwilightColor))
                }}
            />
        </mesh>
    </>



}

// Exporter pour le dossier CardPortal dans le fichier PortalMercure.jsx
export default Mercure