// http://www.pouet.net/prod.php?which=57245
// Based on shader by 'Danilo Guanabara'

#define t time
#define r resolution.xy
#define PI=3.14

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main () {
	vec3 c;
	float l,z=time;
	for(int i=0;i<3;i++) {
		vec2 st,p=uvN();
		st=p;
		p-=.5;
	    p.x*=r.x/r.y;
		z+=.5;
		//l=distance(p,vec2(sin(iTime*.2)*.5));
        l=length(p*sin(time*.2)*.5);
        //l=length(p);
		st+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
		c[i]=.01/length(mod(st,1.)-.5);
                
	}
	gl_FragColor=vec4(c/l,time);
}
