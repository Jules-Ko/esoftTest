/* 
1) объект matchingBrackets создаем для проверки скобок на соответствие 
2) проходимся по каждой скобке в строке
3) если скобка соответсвует ключу в matchingBrackets, мы добавляем ее в stack
4) если скобка закрывающая, но до нее нет открывающей, то последовательность неправильная, возвращаем false 
5) если скобка не соответствует открывающей (проверяем это при помощи метода pop(), вытаскивая последнюю скобку из stack), то последовательность снова неверная, возвращаем false 
6) если stack в конце пустой, значит, последовательность верная 
*/

function isCorrect(string) {

  const stack = [];

  const matchingBrackets = {
      '(': ')',
      '{': '}',
      '[': ']'
  };
  
  for (let i = 0; i < string.length; i++) {
      const char = string[i];

      if (matchingBrackets[char]) {
        stack.push(char);
      } else {
          if (stack.length === 0 || matchingBrackets[stack.pop() !== char) {
            return false;
          }
      } 
  } return stack.length === 0;
} 


