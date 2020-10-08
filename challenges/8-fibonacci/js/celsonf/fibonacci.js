function fibonacci(enternumber)
{
   let firstNum = 0 , secondNum = 1, nextNum, arr = [];

   for (let index = 1; index <= enternumber; index++){
       arr[index] = firstNum;
       nextNum = firstNum + secondNum;
       firstNum = secondNum;
       secondNum = nextNum;
   }
   
   return arr.join(" ");
}

console.log(` ${fibonacci(5)} `);

console.log(` ${fibonacci(10)} `);
