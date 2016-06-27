function Largest(numbers) {
var  num = numbers[0];
   
   function digit(numer) {
    var last = numer % 10, numWord = '';
switch (last) {
  case 0:
   numWord = 'Zero';
    break;
  case 1:
   numWord = 'One';
    break;
  case 2:
   numWord = 'Two';
    break;
  case 3:
   numWord = 'Three';
    break;
  case 4:
   numWord = 'Four';
    break;
  case 5:
   numWord = 'Five';
    break;
  case 6:
   numWord = 'Six';
    break;
  case 7:
   numWord = 'Seven';
    break;
  case 8:
   numWord = 'Eight';
    break;
  case 9:
   numWord = 'Nine';
    break;

  default:
  numWord = 'Error';
    break;
}
    return numWord.toLowerCase();
   }
  return digit(num);
  
}