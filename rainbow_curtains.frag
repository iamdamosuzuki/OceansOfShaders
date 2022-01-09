void main () {
    vec2 st = 6.0 * uv(); 
    
    for (int n = 1; n < 2; n++){
        float i = float(n);
        st += vec2(0.7 / i * sin(i * st.y + time + 0.3 * i) + 0.8, 0.4 / i * tan(st.x + time + 0.3 * i) + 1.6);
    }
    
     st += vec2(0.01 / sin(st.y + time + 0.3) + 1.8, 0.4 / tan(st.x + time + 0.3) + 1.6);
    
    vec3 color = vec3(1.5 * cos(st.x) + 1.5, 0.5 * sin(st.y) + 0.1, sin(st.y + st.x));

    gl_FragColor = vec4(color, 1.0);
}
