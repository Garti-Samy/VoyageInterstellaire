uniform vec3 uInsideColor;
uniform vec3 uOutsideColor;
varying float vDistance;

void main() {
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = clamp(strength, 0.0, 1.0);

    // Normalize la distance pour que le mix soit bien contrôlé
    float normalizedDistance = clamp(vDistance / 10.0, 0.0, 1.0);
    vec3 color = mix(uInsideColor, uOutsideColor, normalizedDistance);

    gl_FragColor = vec4(color * strength, strength);
    #include <colorspace_fragment>
}
