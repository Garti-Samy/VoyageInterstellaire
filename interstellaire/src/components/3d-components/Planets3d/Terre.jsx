// Importer la bibliothèque THREE JS pour certaines fonctions non disponible avec React Three Fiber
import * as THREE from 'three';

//Importer les shaders de la Terre
import TerreVertexShader from "../Shaders/PlanetesShader/TerreShader/vertex.glsl"
import TerreFragmentShader from "../Shaders/PlanetesShader/TerreShader/fragment.glsl"


// Function qui va construire la Terre ( 3e planète de notre systèmes solaire )
function Terre() {

    // Appeler la propriété THREE JS qui permet d'intégrer une texture
    const textureLoader = new THREE.TextureLoader()

    // Texture jour de la Terre
    const TerreDay = textureLoader.load('./environmentMaps/2k_earth_daymap.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    TerreDay.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    TerreDay.anisotropy = 4


    // Texture nuit de la Terre
    const TerreNight = textureLoader.load('./environmentMaps/2k_earth_nightmap.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    TerreNight.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    TerreNight.anisotropy = 4


    // Texture des nuages
    const TerreClouds = textureLoader.load('./environmentMaps/2k_earth_clouds.jpg')


    // les deux couleurs qui seront celle de l'atmosphère
    const earthParameters = {}
    earthParameters.atmosphereDayColor = '#00aaff'
    earthParameters.atmosphereTwilightColor = '#70e000'



    // Coordonnée de la position du Soleil pour illuminer la Terre
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
                vertexShader={TerreVertexShader}
                fragmentShader={TerreFragmentShader}


                // Uniforms est un attribut qui permet de styliser notre planète et d'ensuite importer les informations dans nos fichier fragment.glsl et vertex.glsl dans le dossier shaders
                uniforms={{
                    uDayTexture: new THREE.Uniform(TerreDay),
                    uNightTexture: new THREE.Uniform(TerreNight),
                    uCloudsTexture: new THREE.Uniform(TerreClouds),
                    uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 0.8)),
                    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(earthParameters.atmosphereDayColor)),
                    uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(earthParameters.atmosphereTwilightColor))
                }}
            />
        </mesh>
    </>



}

// Exporter pour le composant PortalTerre.jsx
export default Terre