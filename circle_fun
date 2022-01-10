void main () {
    vec2 st = uv(); 
    vec2 stN = uvN();
    //vec3 c = blue * sin(time);
    vec3 c = orange;

    st = rotate(st, vec2(1.), 1.*sin(time/4.));
    // float f = voronoi(st * 3. * bands.y + time) ;
    // c += step(bands.y, f) * teal;
    // when audio is on, uncomment the above two lines and comment out the below two lines
    float f = voronoi(st * 2.*sin(time/10.) * 2.) ;
    c += step(.5, f) * green;



    st = rotate(st, vec2(0.), 0.0);
    // float f2 = voronoi((st) * 3.1 * bands.z + time);
    // c += step(bands.z, f2) * pink;
    // when audio is on, uncomment the above two lines and comment out the below two lines
    float f2 = voronoi(stN *sin(time/8.) * 2.);
    c += step(.5, f2) * purple;
    c += step(.5, 0.1) * red;

    st = rotate(st, vec2(0.), 0.0);
    // float f3 = voronoi(st * 3.2 * bands.w + vec2(0,time *2.));
    // c += step(bands.w, f3) * blue;
    // when audio is on, uncomment the above two lines and comment out the below two lines
    float f3 = voronoi(st * 3.2 + vec2(6,time));
    c -= step(.5, f3) * blue;
    c += step(.5, 0.2) * blue;


    gl_FragColor = vec4(c, 1.0);
}
