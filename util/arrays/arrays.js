/* Swap two elements of an array.
 * this[x] = this[y] && this[y] = this[x] */

Array.prototype.swap = function(x, y){
  var temp = this[x];
  this[x] = this[y];
  this[y] = temp;
  return this;
}

/* Sum all elements of an array.
 * Use of reduce with ES6 syntax */

Array.prototype.sum = function(){
  return this.reduce((acc,x) => acc + x);
}

/* Generate all permutations.
 * Use it with n = Array.length */

Array.prototype.permutations = function(n){
  var perms = [],
      array = this;
  var compute_perms = function(n){
    if(n==1)
      perms.push(array.join(''));
    else{
      for(var i=0; i!=n; i++){
        compute_perms(n-1);
        array.swap(n%2?0:i, n-1);
      }
    }
  }
  compute_perms(n);
  return perms;
}

/* Remove one specific item in an array.
 * It deletes only one occurence of the item. */

Array.prototype.remove = function(n){
  for(var i in this){
    if(this[i]==n){
      this.splice(i,1);
      break;
    }
  }
  return this;
}

/* Keep only one occurrence of an element in the array.
 * Produce an ascending ordered array. */

Array.prototype.unique = function(){
  this.sort((x,y) => x-y);
  for(var i=0; i<this.length-1; ){
    if(this[i]==this[i+1])
      this.splice(i,1);
    else i++;
  }
  return this;
}
