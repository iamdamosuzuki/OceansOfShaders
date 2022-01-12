float dfield(vec2 st, vec2 pos, int sides) {    
    
    st = st *2.-2.*pos;
    
    // Angle and radius from the current pixel
    float a = atan(st.x,st.y)+PI;
  	float r = TWO_PI/float(sides);
    
    // Shaping function that modulate the distance
  	float d = cos(floor(.5+a/r)*r-a)*length(st);
    
    return d;
}
