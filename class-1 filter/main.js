var num = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

function multeply(ele) {
  return ele *2;
}

// function b(x){
//   if (x%2 !=0 && x% 3!=0){}
// };

  // num.map((x) => {
  //   console.log(x);
  //   return x * 2;
  // });
  // function check(x) {
  //   if(x%2 !=0 && x !=2){
  //     for(let i = 2, s = Math.sqrt(x); i <= s; i++){
  //       if(num % i === 0) return false; 
  //       return num > 1;
  //     }
  //   }
  // }

let x = num.filter( function(x) {
  if(x%2 !=0 && x !=2 && x>1){
    for(let i = 2, s = Math.sqrt(x); i = s; i++){
      if(x % i === 0) return false; 
      return x;
    }
  }
});
console.log(x);


//x%(x/2+1) !=0)

// console.log(check(7));















