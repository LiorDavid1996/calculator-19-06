














function myFunc(num) {
   calc.value+= num.value;
}
    
function even(){
    let numbers = []
    let operators = []
    let num1 = ""
    let result=0;
   
        for (let i = 0; i < calc.value.length; i++) {
            
            switch (calc.value[i]) {
                case "+":
                case "-":
                case "*":
                case "/":
                    numbers.push(+num1)
                    num1 = ""
                    operators.push(calc.value[i])
                    break;
                default:
                    num1 += calc.value[i];
                    break;
                
            }

            if (i == calc.value.length - 1) {
                numbers.push(+num1)
            }
        }
        console.log( numbers,operators);

             result = numbers[0]
             for(let i=0;i<operators.length;i++){
            switch (operators[i]) {
                case "+":
                    result += numbers[i + 1]
                    break;
                case "*":
                    result *= numbers[i + 1]
                    break;
                case "-":
                    result-=numbers[i+1]
                    break;
                case "/":
                        result /=numbers[i+1]
                        break;
                    }
                    
                }
                console.log(result);
}





// // // calc.value.forEach(item => {
// // //   console.log(item.calc);
// // // });