/* The square root of 2 can be written as an infinite continued fraction.
 *
 * sqrt(2) = 1 + 1/(2+1/(2+1/(2+...)))
 *
 * The infinite continued fraction can be written, V2 = [1;(2)], (2) indicates that
 * 2 repeats ad infinitum. In a similar way, V23 = [4;(1,3,1,8)].
 * It turns out that the sequence of partial values of continued fractions for
 * square roots provide the best rational approximations. Let us consider the
 * convergents for V2.
 *
 * 1 + 1/2 = 3/2
 * 1 + 1/(2 + 1/2) = 7/5
 * 1 + 1/(2 + 1/(2 + 1/2)) = 17/12
 * 1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29
 *
 * Hence the sequence of the first ten convergents for V2 are:
 * 1, 3/2, 7/5, 17/12, 41/29, 99/70, 239/169, 577/408, 1393/985, 3363/2378, ...
 *
 * What is most surprising is that the important mathematical constant,
 * e = [2; 1,2,1, 1,4,1, 1,6,1 , ... , 1,2k,1, ...].
 *
 * The first ten terms in the sequence of convergents for e are:
 * 2, 3, 8/3, 11/4, 19/7, 87/32, 106/39, 193/71, 1264/465, 1457/536, ...
 *
 * The sum of digits in the numerator of the 10th convergent is 1+4+5+7=17.
 * Find the sum of digits in the numerator of the 100th convergent of the continued
 * fraction for e. */

function prb65(){
  var sequence = [0],
      limit = 100,
      start = 2,
      numerator = new LargeNumber([0]),
      denominator = new LargeNumber([1]);
  for(var i = 1; i < limit; i++){
    if(i%3==2){
      sequence.push(start);
      start += 2;
    } else {
      sequence.push(1);
    }
  }
  for(var i = limit-1; i > 0; i--){
    var num = numerator.getArray(),
        den = denominator.getArray(),
        seq = new LargeNumber([sequence[i]]).getArray();
    denominator.setArray(addition(num, multiplication(seq,den)));
    numerator.setArray(den);
  }
  numerator.setArray(addition(numerator.getArray(), multiplication([2],denominator.getArray())));
  return numerator.getDigitsSum();
}
