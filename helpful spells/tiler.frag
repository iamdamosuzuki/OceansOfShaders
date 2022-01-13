//give this the coordiantes vector, and new height and width repetitions

vec2 tiled(in vec2 _st, float height, float width){
    _st.x *= height;
    _st.y *= width;
    _st = mod(_st,1.0);
    return _st;
}
