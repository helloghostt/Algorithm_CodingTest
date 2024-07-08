function solution (array, n) {

  let answer = array.filter(num=>num===n).length;
  return answer;
}