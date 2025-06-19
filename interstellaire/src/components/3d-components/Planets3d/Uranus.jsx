// Importer la bibliothèque THREE JS pour certaines fonctions non disponible avec React Three Fiber
import * as THREE from 'three';


//Importer les shaders
import UranusVertexShader from "../Shaders/PlanetesShader/UranusShader/vertex.glsl"
import UranusFragmentShader from "../Shaders/PlanetesShader/UranusShader/fragment.glsl"

// Function qui va construire Uranus ( 7e planète de notre système solaire )
function Uranus() {

    // Appeler la propriété THREE JS qui permet d'intégrer une texture
    const textureLoader = new THREE.TextureLoader()

    // Texture jour d'Uranus
    const UranusDay = textureLoader.load('./environmentMaps/uranus-texture.png')
    // Permet d'afficher le rendu exacte des couleurs
    UranusDay.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    UranusDay.anisotropy = 4


    // Texture nuit d'Uranus
    const UranusNight = textureLoader.load('./environmentMaps/2k_earth_nightmap.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    UranusNight.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    UranusNight.anisotropy = 4


    // Texture des nuages
    const UranusClouds = textureLoader.load('./environmentMaps/2k_earth_clouds.jpg')


    // les deux couleurs qui seront celle de l'atmosphère
    const UranusParameters = {}
    UranusParameters.atmosphereDayColor = '#4e148c'
    UranusParameters.atmosphereTwilightColor = '#00FFF6'



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
                vertexShader={UranusVertexShader}
                fragmentShader={UranusFragmentShader}

                // Uniforms est un attribut qui permet de styliser notre planète et d'ensuite importer les informations dans nos fichier fragment.glsl et vertex.glsl dans le dossier shaders
                uniforms={{
                    uDayTexture: new THREE.Uniform(UranusDay),
                    uNightTexture: new THREE.Uniform(UranusNight),
                    uCloudsTexture: new THREE.Uniform(UranusClouds),
                    uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 0.8)),
                    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(UranusParameters.atmosphereDayColor)),
                    uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(UranusParameters.atmosphereTwilightColor))
                }}
            />
        </mesh>
    </>



}

// Exporter pour le dossier CardPortal dans le fichier PortalUranus.jsx
export default Uranus