(function() {

   var vector = function(x,y,z) {
   //
   //  Constructor for vector without
   //  explicit fourth argument.
   //
       this.x = x;
       this.y = y;
       this.z = z;
       this.w = 1;
   }

   var matrix = function (m_0_0, m_1_0, m_2_0, m_3_0,
                          m_0_1, m_1_1, m_2_1, m_3_1,
                          m_0_2, m_1_2, m_2_2, m_3_2,
                          m_0_3, m_1_3, m_2_3, m_3_3) {


     this.m_0_0 = m_0_0; this.m_1_0 = m_1_0; this.m_2_0 = m_2_0; this.m_3_0 = m_3_0;
     this.m_0_1 = m_0_1; this.m_1_1 = m_1_1; this.m_2_1 = m_2_1; this.m_3_1 = m_3_1;
     this.m_0_2 = m_0_2; this.m_1_2 = m_1_2; this.m_2_2 = m_2_2; this.m_3_2 = m_3_2;
     this.m_0_3 = m_0_3; this.m_1_3 = m_1_3; this.m_2_3 = m_2_3; this.m_3_3 = m_3_3;

   }

   matrix.prototype.mult = function(that) { // Multiply with another (that is: that) matrix

      var t_0_0, t_1_0, t_2_0, t_3_0,
          t_0_1, t_1_1, t_2_1, t_3_1,
          t_0_2, t_1_2, t_2_2, t_3_2,
          t_0_3, t_1_3, t_2_3, t_3_3;

      t_0_0 = this.m_0_0 * that.m_0_0 + 
              this.m_1_0 * that.m_0_1 + 
              this.m_2_0 * that.m_0_2 +
              this.m_3_0 * that.m_0_3;
      
      t_1_0 = this.m_0_0 * that.m_1_0 + 
              this.m_1_0 * that.m_1_1 + 
              this.m_2_0 * that.m_1_2 +
              this.m_3_0 * that.m_1_3;

      t_2_0 = this.m_0_0 * that.m_2_0 + 
              this.m_1_0 * that.m_2_1 + 
              this.m_2_0 * that.m_2_2 +
              this.m_3_0 * that.m_2_3;

      t_3_0 = this.m_0_0 * that.m_3_0 + 
              this.m_1_0 * that.m_3_1 + 
              this.m_2_0 * that.m_3_2 +
              this.m_3_0 * that.m_3_3;

              //--

      t_0_1 = this.m_0_1 * that.m_0_0 + 
              this.m_1_1 * that.m_0_1 + 
              this.m_2_1 * that.m_0_2 +
              this.m_3_1 * that.m_0_3;
      
      t_1_1 = this.m_0_1 * that.m_1_0 + 
              this.m_1_1 * that.m_1_1 + 
              this.m_2_1 * that.m_1_2 +
              this.m_3_1 * that.m_1_3;

      t_2_1 = this.m_0_1 * that.m_2_0 + 
              this.m_1_1 * that.m_2_1 + 
              this.m_2_1 * that.m_2_2 +
              this.m_3_1 * that.m_2_3;

      t_3_1 = this.m_0_1 * that.m_3_0 + 
              this.m_1_1 * that.m_3_1 + 
              this.m_2_1 * that.m_3_2 +
              this.m_3_1 * that.m_3_3;

              //--
 
      t_0_2 = this.m_0_2 * that.m_0_0 + 
              this.m_1_2 * that.m_0_1 + 
              this.m_2_2 * that.m_0_2 +
              this.m_3_2 * that.m_0_3;
      
      t_1_2 = this.m_0_2 * that.m_1_0 + 
              this.m_1_2 * that.m_1_1 + 
              this.m_2_2 * that.m_1_2 +
              this.m_3_2 * that.m_1_3;

      t_2_2 = this.m_0_2 * that.m_2_0 + 
              this.m_1_2 * that.m_2_1 + 
              this.m_2_2 * that.m_2_2 +
              this.m_3_2 * that.m_2_3;

      t_3_2 = this.m_0_2 * that.m_3_0 + 
              this.m_1_2 * that.m_3_1 + 
              this.m_2_2 * that.m_3_2 +
              this.m_3_2 * that.m_3_3;

              //--

      t_0_3 = this.m_0_3 * that.m_0_0 + 
              this.m_1_3 * that.m_0_1 + 
              this.m_2_3 * that.m_0_2 +
              this.m_3_3 * that.m_0_3;
      
      t_1_3 = this.m_0_3 * that.m_1_0 + 
              this.m_1_3 * that.m_1_1 + 
              this.m_2_3 * that.m_1_2 +
              this.m_3_3 * that.m_1_3;

      t_2_3 = this.m_0_3 * that.m_2_0 + 
              this.m_1_3 * that.m_2_1 + 
              this.m_2_3 * that.m_2_2 +
              this.m_3_3 * that.m_2_3;

      t_3_3 = this.m_0_3 * that.m_3_0 + 
              this.m_1_3 * that.m_3_1 + 
              this.m_2_3 * that.m_3_2 +
              this.m_3_3 * that.m_3_3;

              //--

      return new tq84.matrix( t_0_0, t_1_0, t_2_0, t_3_0,
                              t_0_1, t_1_1, t_2_1, t_3_1,
                              t_0_2, t_1_2, t_2_2, t_3_2,
                              t_0_3, t_1_3, t_2_3, t_3_3 );


//    this.m_0_0 = t_0_0; this.m_1_0 = t_1_0; this.m_2_0 = t_2_0; this.m_3_0 = t_3_0;
//    this.m_0_1 = t_0_1; this.m_1_1 = t_1_1; this.m_2_1 = t_2_1; this.m_3_1 = t_3_1;
//    this.m_0_2 = t_0_2; this.m_1_2 = t_1_2; this.m_2_2 = t_2_2; this.m_3_2 = t_3_2;
//    this.m_0_3 = t_0_3; this.m_1_3 = t_1_3; this.m_2_3 = t_2_3; this.m_3_3 = t_3_3;

   }

   vector.prototype.mult = function(that) { // Apply Matrix on Vector

      var tx, ty, tz, tw;

      tx = this.x * that.m_0_0 +
           this.y * that.m_1_0 +
           this.z * that.m_2_0 +
           this.w * that.m_3_0;

      ty = this.x * that.m_0_1 +
           this.y * that.m_1_1 +
           this.z * that.m_2_1 +
           this.w * that.m_3_1;

      tz = this.x * that.m_0_2 +
           this.y * that.m_1_2 +
           this.z * that.m_2_2 +
           this.w * that.m_3_2;

      tw = this.x * that.m_0_3 +
           this.y * that.m_1_3 +
           this.z * that.m_2_3 +
           this.w * that.m_3_3;

      var ret = new tq84.vector(tx, ty, tz);
      ret.w = tw;

      return ret;

   }

   vector.prototype.screen = function(screen_distance) {

     var ret = {};

     ret.x = this.x / (this.z+screen_distance) * screen_distance;
     ret.y = this.y / (this.z+screen_distance) * screen_distance;

     return ret;

   }

   function translation (x,y,z) {
     return new tq84.matrix (
        1, 0, 0, x,
        0, 1, 0, y,
        0, 0, 1, z,
        0, 0, 0, 1
     );
   }

   function rotation_x(angle) {

     var ca = Math.cos(angle);
     var sa = Math.sin(angle);

     return new tq84.matrix (
       1,   0,   0,  0,
       0,  ca, -sa,  0,
       0,  sa,  ca,  0,
       0,   0,   0,  1
     );

   }

   function rotation_y(angle) {

     var ca = Math.cos(angle);
     var sa = Math.sin(angle);

     return new tq84.matrix (
       ca,  0,   sa,  0,
        0,  1,    0,  0,
      -sa,  0,   ca,  0,
        0,  0,    0,  1
     );

   }

   function rotation_z(angle) {

     var ca = Math.cos(angle);
     var sa = Math.sin(angle);

     return new tq84.matrix (
        ca, -sa,  0,  0,
        sa,  ca,  0,  0,
         0,   0,  1,  0,
         0,   0,  0,  1
     );

   }

   function rotation(x,y,z,angle) {
     
     var c = Math.cos(angle);
     var s = Math.sin(angle);
     var t = 1.0 - c;

     var n = Math.sqrt(x*x + y*y + z*z);

     x = x/n;
     y = y/n;
     z = z/n;

     return new tq84.matrix(

        t*x*x +   c , t*x*y - s*z , t*x*z + s*y , 0, 
        t*x*y + s*z , t*y*y + c   , t*y*z - s*x , 0,
        t*x*z - s*y , t*y*z + s*x , t*z*z +   c , 0,
                  0 ,           0 ,           0 , 1
     );

   }

   function scale (s) {

     return new tq84.matrix (
        s, 0, 0, 0,
        0, s, 0, 0,
        0, 0, s, 0,
        0, 0, 0, 1
     );

   }


// point.prototype.a = function() {alert(this.x + " " + this.y + " " + this.z);};
   
   if (typeof(tq84) == 'undefined') {
      tq84={};
   }

   tq84.vector   = vector;
// tq84.vector_4 = vector_4;
   tq84.matrix   = matrix;

   tq84.translation = translation;
   tq84.rotation_x  = rotation_x;
   tq84.rotation_y  = rotation_y;
   tq84.rotation_z  = rotation_z;
   tq84.rotation    = rotation;
   tq84.scale       = scale;

})();
