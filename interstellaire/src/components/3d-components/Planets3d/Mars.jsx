// Importer la bibliothèque THREE JS pour certaines fonctions non disponible avec React Three Fiber
import * as THREE from 'three';


//Importer les shaders
import MarsVertexShader from "../Shaders/PlanetesShader/MarsShader/vertex.glsl"
import MarsFragmentShader from "../Shaders/PlanetesShader/MarsShader/fragment.glsl"

// Function qui va construire Mars ( 4e planète du système solaire )
function Mars() {

    // Appeler la propriété THREE JS qui permet d'intégrer une texture
    const textureLoader = new THREE.TextureLoader()

    // Texture jour de Mars
    const MarsDay = textureLoader.load('./environmentMaps/2k_mars.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    MarsDay.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    MarsDay.anisotropy = 4


    // Texture nuit de Mars
    const MarsNight = textureLoader.load('./environmentMaps/2k_earth_nightmap.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    MarsNight.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    MarsNight.anisotropy = 4


    // Texture des nuages
    const MarsClouds = textureLoader.load('./environmentMaps/2k_earth_clouds.jpg')


    // les deux couleurs qui seront celle de l'atmosphère
    const MarsParameters = {}
    MarsParameters.atmosphereDayColor = '#fb8500'
    MarsParameters.atmosphereTwilightColor = '#f77f00'



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
                vertexShader={MarsVertexShader}
                fragmentShader={MarsFragmentShader}

                // Uniforms est un attribut qui permet de styliser notre planète et d'ensuite importer les informations dans nos fichier fragment.glsl et vertex.glsl dans le dossier shaders
                uniforms={{
                    uDayTexture: new THREE.Uniform(MarsDay),
                    uNightTexture: new THREE.Uniform(MarsNight),
                    uCloudsTexture: new THREE.Uniform(MarsClouds),
                    uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 0.8)),
                    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(MarsParameters.atmosphereDayColor)),
                    uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(MarsParameters.atmosphereTwilightColor))
                }}
            />
        </mesh>
    </>



}

// Exporter pour le dossier CardPortal dans le fichier PortalMars.jsx
export default Mars