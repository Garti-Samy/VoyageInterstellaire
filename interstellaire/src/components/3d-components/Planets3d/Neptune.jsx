// Importer la bibliothèque THREE JS pour certaines fonctions non disponible avec React Three Fiber
import * as THREE from 'three';


//Importer les shaders
import NeptuneVertexShader from "../Shaders/PlanetesShader/NeptuneShader/vertex.glsl"
import NeptuneFragmentShader from "../Shaders/PlanetesShader/NeptuneShader/fragment.glsl"

// Function qui va construire Neptune ( 8e planète et dernière de notre système solaire )
function Neptune() {

    // Appeler la propriété THREE JS qui permet d'intégrer une texture
    const textureLoader = new THREE.TextureLoader()

    // Texture jour de Neptune
    const NeptuneDay = textureLoader.load('./environmentMaps/neptune-texture.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    NeptuneDay.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    NeptuneDay.anisotropy = 4


    // Texture nuit de Neptune
    const NeptuneNight = textureLoader.load('./environmentMaps/2k_earth_nightmap.jpg')
    // Permet d'afficher le rendu exacte des couleurs
    NeptuneNight.colorSpace = THREE.SRGBColorSpace
    // Améliore la qualité des bords de la sphère
    NeptuneNight.anisotropy = 4


    // Texture des nuages
    const NeptuneClouds = textureLoader.load('./environmentMaps/2k_earth_clouds.jpg')


    // les deux couleurs qui seront celle de l'atmosphère
    const NeptuneParameters = {}
    NeptuneParameters.atmosphereDayColor = '#52b788'
    NeptuneParameters.atmosphereTwilightColor = '#0022FF'



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
                vertexShader={NeptuneVertexShader}
                fragmentShader={NeptuneFragmentShader}

                // Uniforms est un attribut qui permet de styliser notre planète et d'ensuite importer les informations dans nos fichier fragment.glsl et vertex.glsl dans le dossier shaders
                uniforms={{
                    uDayTexture: new THREE.Uniform(NeptuneDay),
                    uNightTexture: new THREE.Uniform(NeptuneNight),
                    uCloudsTexture: new THREE.Uniform(NeptuneClouds),
                    uSunDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 0.8)),
                    uAtmosphereDayColor: new THREE.Uniform(new THREE.Color(NeptuneParameters.atmosphereDayColor)),
                    uAtmosphereTwilightColor: new THREE.Uniform(new THREE.Color(NeptuneParameters.atmosphereTwilightColor))
                }}
            />
        </mesh>
    </>



}

// Exporter pour le dossier CardPortal dans le fichier PortalNeptune.jsx
export default Neptune