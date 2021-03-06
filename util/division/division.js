/* Long division */

function divide(N,D,operation){
  if(D.equals([0],true))
    return undefined;
  N = base(10000000,2,N);
  D = base(10000000,2,D);
  var Q = [],
      R = [];
  for(var i = 0; i < N.length; i++){
    R.push(N[i]);
    var R10 = base(2,10000000,R),
        D10 = base(2,10000000,D),
        Rnext = subtraction(R10,D10);
    if(typeof(Rnext)==='undefined'){
      Q.push(0);
    }else{
      R = base(10000000,2,Rnext);
      Q.push(1);
    }
  }
  if(operation){
    return base(2,10000000,Q);
  }else{
    return base(2,10000000,R);
  }
}

function division(N,D){
  return divide(N,D,true);
}

function modulo(N,D){
  return divide(N,D,false);
}
