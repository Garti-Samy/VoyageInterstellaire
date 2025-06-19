// Mes formations THREE JS et React THREE FIBER qui m'a permis d'apprendre le GLSL
// https://threejs-journey.com/
//https://wawasensei.dev/courses/react-three-fiber



//uniform permet de récupérer les informations du composant
// Texture 2D qu'on vient récupérer depuis le composant Terre.jsx
uniform sampler2D uDayTexture;
uniform sampler2D uNightTexture;
uniform sampler2D uCloudsTexture;


// On vient récupérer les couleurs de l'atmosphère de la Terre
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereTwilightColor;


// Simulation du soleil avec une sphère et mise en place de sa position dans l'espace 3D
uniform vec3 uSunDirection;


// varying permet de transférer les informations de vertex.glsl vers fragment.glsl
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    //Initialisation à du noir. On utilise un vecteur 3 pour les couleurs RGB
    vec3 color = vec3(0.0);

    //Position du Soleil
    // Direction que va prendre le soleil et la normal qui va se réfléter dessus
    //Si dot ≈ 1 → la normale est parfaitement alignée avec le soleil → plein jour.
    //Si dot ≈ 0 → angle à 90° → crépuscule.
    //Si dot < 0 → la surface tourne le dos au soleil → nuit.
    float sunOrientation = dot(uSunDirection,normal);
    

    // Texture 
    // smoothstep donne toujours une valeur entre 0 et 1 
    float dayMix = smoothstep(- 0.25, 0.5, sunOrientation);


    // On applique la texture de jour d'un coté de la planète
    vec3 dayColor = texture(uDayTexture, vUv).rgb;

    // On applique la texture de nuit de l'autre coté
    vec3 nightColor = texture(uNightTexture, vUv).rgb;

    // Mix permet de crée une transition douce entre les deux texture, ca évite d'avoir une coupure brutale 
    // Mix retourne toujours une valeur entre 0 et 1 
    // NightColor = 1 , dayColor = 1 et dayMix = 0.5 ( pour fair le pont entre les deux couleur )
    color = mix(nightColor, dayColor, dayMix);


    //Clouds Texture
    vec2 specularClouds = texture(uCloudsTexture,vUv).rg;

    //Clouds part 2 
    float cloudsMix = smoothstep(0.5, 1.0, specularClouds.g);
    cloudsMix *= dayMix;
    color = mix(color, vec3(1.0), cloudsMix);

     // Fresnel
    float fresnel = dot(viewDirection, normal) + 1.0;
    fresnel = pow(fresnel, 2.0);

    // Atmosphere
    float atmosphereDayMix = smoothstep(- 0.5, 1.0, sunOrientation);
    vec3 atmosphereColor = mix(uAtmosphereTwilightColor, uAtmosphereDayColor, atmosphereDayMix);
    color = mix(color, atmosphereColor, fresnel * atmosphereDayMix);
    

    // Specular
    vec3 reflection = reflect(- uSunDirection, normal);
    float specular = dot(reflection, viewDirection);
    specular = max(specular, 0.0);
    specular = pow(specular, 20.0);
    color += specular;

    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    // #include <colorspace_fragment>
}