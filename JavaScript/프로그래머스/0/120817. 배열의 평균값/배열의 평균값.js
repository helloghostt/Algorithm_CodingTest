function solution(numbers) {      

    return answer = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
}