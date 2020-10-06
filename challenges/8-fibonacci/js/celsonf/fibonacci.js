function fibonacci(enternumber)
{
   let firstNum = 0 , secondNum = 1, nextNum;

   for (let index = 1; index <= enternumber; index++){
       console.log(firstNum);
       nextNum = firstNum + secondNum;
       firstNum = secondNum;
       secondNum = nextNum;
   }

}

console.log(fibonacci(5));

console.log(fibonacci(10));