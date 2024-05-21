// recursion 
// event
// start function 
let recur = function (x, n) 
    if (n>0) {
      x =x*10; //event
  	n--;
  	return recur(x, n);//recurs
	} else {
       return x;
    } // end if-else
}; // end function 
////////////////TEST////////////////
let x = 10;
n = 2;
let test = recur(x, n);
console.log(test);
