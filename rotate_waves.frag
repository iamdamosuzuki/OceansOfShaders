void main () {
    vec2 st = (3.5*sin(time*0.3) + 10.0) * uv(); 
    
    for (int n = 1; n < 3; n++){    // reduce n for simpler waves
        float i = float(n);
        st -= vec2(.7 / i * sin(i * st.y + time + .3 * i) + 1.8,1.4 / i * cos(st.x + time + 0.3 * i) + 2.6);
        st = rotate(st, vec2(0.3), 0.7*sin(time/6.));
        //st = rotate(st, vec2(0.3), 0.7*sin(st.x/6.));  //uncomment to jumble it all up
    }
    
     //st /= vec2(0.01 / sin(st.y + time + 0.3) + 1.8, 0.2 / sin(st.x + time + 0.3) + 1.6);
    
    vec3 color = vec3(abs(tan(time*0.3)) * cos(st.x) + 1.5, 0.5 * sin(st.y) + 1.1, abs(tan(st.y + st.x)));  // Cotton Candy Colors
    //vec3 color = vec3(1.6 * cos(st.x) + 1.5, 0.7 * sin(st.y) + 0.6, tan(st.y + st.x));  // Rainbow Colors
    //vec3 color = vec3(1.1 * cos(st.x) + 0.4, 0.7 * cos(st.y) +2.6, tan(st.y + st.x));  // Slime colors

    gl_FragColor = vec4(color, 1.0);
}
