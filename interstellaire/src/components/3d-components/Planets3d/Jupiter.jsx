// Importer la bibliothèque THREE JS pour certaines fonctions non disponible avec React Three Fiber
import * as THREE from 'three';


//Importer les shaders
import JupiterVertexShader from "../Shaders/PlanetesShader/JupiterShader/vertex.glsl"
import JupiterFragmentShader from "../Shaders/PlanetesShader/JupiterShader/fragment.glsl"

// Function qui va construire Jupiter ( 5e planète du système solaire )
function Jupiter() {

    // Appeler la propriété THREE JS qui permet d'intégrer une texture
    const textureLoader = new THREE.TextureLoader()

    // Texture jour de Jupiter
    const JupiterDay = textureLoader.load('./environmentMaps/jupiter-texture.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    JupiterDay.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    JupiterDay.anisotropy = 4


    // Texture nuit de Jupiter
    const JupiterNight = textureLoader.load('./environmentMaps/2k_earth_nightmap.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    JupiterNight.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    JupiterNight.anisotropy = 4


    // Texture des nuages
    const JupiterClouds = textureLoader.load('./environmentMaps/2k_earth_clouds.jpg')


    // les deux couleurs qui seront celle de l'atmosphère
    const JupiterParameters = {}
    JupiterParameters.atmosphereDayColor = '#ff6d00'
    JupiterParameters.atmosphereTwilightColor = '#ffb627'



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
                vertexShader={JupiterVertexShader}
                fragmentShader={JupiterFragmentShader}

                // Uniforms est un attribut qui permet de styliser notre planète et d'ensuite importer les informations dans nos fichier fragment.glsl et vertex.glsl dans le dossier shaders
                uniforms={{
                    uDayTexture: new THREE.Uniform(JupiterDay),
                    uNightTexture: new THREE.Uniform(JupiterNight),
                    uCloudsTexture: new THREE.Uniform(JupiterClouds),
                    uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 0.8)),
                    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(JupiterParameters.atmosphereDayColor)),
                    uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(JupiterParameters.atmosphereTwilightColor))
                }}
            />
        </mesh>
    </>



}

// Exporter pour le dossier CardPortal dans le fichier PortalJupiter.jsx
export default Jupiter