function Largest(numbers) {
var  num = numbers[0].split(' ');
   a= +num[0]
   b= +num[1]
   c= +num[2]
  
  return Math.max(a,b,c);
  
}

console.log(Largest(['7 6 19']));