/* It is well known that if the square root of a natural number is not an integer,
 * then it is irrational. The decimal expansion of such square roots is infinite
 * without any repeating pattern at all.
 * The square root of two is 1.41421356237309504880..., and the digital sum of the
 * first one hundred decimal digits is 475.
 * For the first one hundred natural numbers, find the total of the digital sums of
 * the first one hundred decimal digits for all the irrational square roots. */

function prb80(){
  // http://www.afjarvis.staff.shef.ac.uk/maths/jarvisspec02.pdf
  var sq = function(n){
    var a = 5*n,
        b = 5,
	limit = 15;
    while(b < 10 * Math.pow(10,limit+1)){
      if(a >=b){
        a -= b;
        b += 10;
      }
      if(a < b){
        a *= 100;
        b = Math.floor(b/10) * 100 + 5;
      }
    }
    return Math.floor(b/100);
  }
  // get the first 15 digits after decimal for sqrt(2);
  // with the integer itself.... so the first digit have to be removed!
  console.log(parseInt(sq(2).toString().substr(1)));
  return true;
}
