//Returns a distance field for a polar shape. User can define the center position and the number of sides.
float dfield(vec2 st, vec2 pos, int sides) {    
    
    st = st *2.-2.*pos;
    
    // Angle and radius from the current pixel
    float a = atan(st.x,st.y)+PI;
  	float r = TWO_PI/float(sides);
    
    // Shaping function that modulate the distance
  	float d = cos(floor(.5+a/r)*r-a)*length(st);
    
    //Returns a distance field
    return d;
}
