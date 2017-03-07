/* A number chain is created by continuously adding the square of the digits in a
 * number to form a new number until it has been seen before.
 *
 * For example,
 *
 * 44 → 32 → 13 → 10 → 1 → 1
 * 85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89
 *
 * Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop.
 * What is most amazing is that EVERY starting number will eventually arrive at 1 or
 * 89.
 *
 * How many starting numbers below ten million will arrive at 89? */

function squarechain(x) {
  if (x == 1 || x == 89)
    return x;

  else {
    var digits = ('' + x).split(''),
    length = digits.length,
    sum = 0;
    for (var i = 0; i < length; i++) {
      sum += Math.pow(digits[i], 2);
    }

    return squarechain(sum);
  }
}

function prb92(){
  var sum = 0;

  for(var i = 1; i < 10000000; i++){
    var temp = squarechain(i);
    if(temp==89)
      sum++;
  }

  return sum;
}

