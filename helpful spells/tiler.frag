//give this the coordiantes vector, and new height and width repetitions

vec2 tiled(in vec2 _st, float height, float width){
    _st.x *= height;
    _st.y *= width;
    return _st;
}
