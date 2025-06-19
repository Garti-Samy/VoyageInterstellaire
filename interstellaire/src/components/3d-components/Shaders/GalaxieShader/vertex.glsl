 //Mes formations m'ont permis d'avoir une compréhension un peu plus appronfondi du GLSL
// https://threejs-journey.com/#bruno-simon
// https://wawasensei.dev/courses/react-three-fiber

 
 
 
 
varying float vDistance;

// Vertex s'occupe de la position de la galaxie dans l'esapce 3D
 void main()
    {

   // Calcule la distance depuis le centre de la galaxie
    vDistance = length(position);
   
    //Position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // transforme la position depuis le monde → vers la caméra.
    vec4 viewPosition = viewMatrix * modelPosition;

    // Applique une perspective
    vec4 projectedPosition = projectionMatrix * viewPosition;

    // Position finale de l'objet dans la scène 3D
    gl_Position = projectedPosition;

    
    // Taille de chacune des particules ( 7x7 pixel à l'écran )
    gl_PointSize = 4.0;
    }