// Importer la bibliothèque THREE JS pour certaines fonctions non disponible avec React Three Fiber
import * as THREE from 'three';


//Importer les shaders
import SaturneVertexShader from "../Shaders/PlanetesShader/SaturneShader/vertex.glsl"
import SaturneFragmentShader from "../Shaders/PlanetesShader/SaturneShader/fragment.glsl"

// Function qui va construire Saturne ( 6e planète de notre système solaire )
function Saturne() {

    // Appeler la propriété THREE JS qui permet d'intégrer une texture
    const textureLoader = new THREE.TextureLoader()

    // Texture jour de Saturne
    const SaturneDay = textureLoader.load('./environmentMaps/saturne-texture.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    SaturneDay.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    SaturneDay.anisotropy = 4


    // Texture nuit de Saturne
    const SaturneNight = textureLoader.load('./environmentMaps/2k_earth_nightmap.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    SaturneNight.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    SaturneNight.anisotropy = 4


    // Texture des nuages
    const SaturneClouds = textureLoader.load('./environmentMaps/2k_earth_clouds.jpg')


    // les deux couleurs qui seront celle de l'atmosphère
    const SaturneParameters = {}
    SaturneParameters.atmosphereDayColor = '#fb8500'
    SaturneParameters.atmosphereTwilightColor = '#ffb627'



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
                vertexShader={SaturneVertexShader}
                fragmentShader={SaturneFragmentShader}

                // Uniforms est un attribut qui permet de styliser notre planète et d'ensuite importer les informations dans nos fichier fragment.glsl et vertex.glsl dans le dossier shaders
                uniforms={{
                    uDayTexture: new THREE.Uniform(SaturneDay),
                    uNightTexture: new THREE.Uniform(SaturneNight),
                    uCloudsTexture: new THREE.Uniform(SaturneClouds),
                    uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 0.8)),
                    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(SaturneParameters.atmosphereDayColor)),
                    uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(SaturneParameters.atmosphereTwilightColor))
                }}
            />
        </mesh>
    </>



}

// Exporter pour le dossier CardPortal dans le fichier PortalSaturne.jsx
export default Saturne