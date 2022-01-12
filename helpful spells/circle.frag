//returns a float that is the coordinates for a circlle
//use: need to make a vec3 using the returned float for each coordinate of the vector
//example: 
//vec3 color = vec3(circle(st,0.9));
//gl_FragColor = vec4( color, 1.0 );

float circle(in vec2 _st, in float _radius){
    vec2 l = _st-vec2(0.5);
    return 1.-smoothstep(_radius-(_radius*0.01),
                         _radius+(_radius*0.01),
                         dot(l,l)*4.0);
}
